import fs from "node:fs";
import path from "node:path";
import type { ContentStatus, EvidenceBlock, EvidenceType, GuideRecord, QuickFact, Source, SourceLevel } from "@/lib/types";

const contentRoot = path.join(process.cwd(), "content-input");
const pageRoot = path.join(contentRoot, "pages");

const localRoot = path.join(process.cwd(), "content-local");
const localPageRoot = path.join(localRoot, "pages");

function between(text: string, start: string, end?: string) {
  const startIndex = text.indexOf(start);
  if (startIndex < 0) return "";
  const contentStart = startIndex + start.length;
  const endIndex = end ? text.indexOf(end, contentStart) : -1;
  return text.slice(contentStart, endIndex < 0 ? undefined : endIndex).trim();
}

function metadata(text: string, key: string) {
  return text.match(new RegExp(`^${key}:\s*(.+)$`, "m"))?.[1].trim() ?? "";
}

function listSection(text: string, heading: string, nextHeading?: string) {
  const raw = between(text, `## ${heading}`, nextHeading ? `## ${nextHeading}` : undefined);
  return [...raw.matchAll(/^\s*-\s+(.+)$/gm)].map((match) => match[1].trim());
}

function unindentBody(body: string) {
  return body.replace(/^ {2}/gm, "").trim();
}

function parseBlocks(sectionText: string): EvidenceBlock[] {
  const pattern = /^heading:\s*(.+)\r?\nbody:\s*\|\r?\n([\s\S]*?)\r?\nevidenceType:\s*(confirmed-fact|community-report|editorial-recommendation|uncertainty)\r?\nsourceRefs:\s*\[([^\]]*)\]/gm;
  return [...sectionText.matchAll(pattern)].map((match) => ({
    heading: match[1].trim(),
    body: unindentBody(match[2]),
    evidenceType: match[3] as EvidenceType,
    sourceRefs: match[4].split(",").map((value) => value.trim()).filter(Boolean),
  }));
}

function parseQuickFacts(text: string): QuickFact[] {
  const table = between(text, "## quickFacts", "## relatedGuides");
  return table.split(/\r?\n/).filter((line) => /^\|.+\|$/.test(line.trim())).slice(2).map((line) => {
    const [fact = "", detail = ""] = line.trim().slice(1, -1).split("|").map((cell) => cell.trim());
    return { fact, detail };
  }).filter(({ fact, detail }) => fact && detail);
}

function parseGuide(file: string): GuideRecord {
  const text = fs.readFileSync(file, "utf8");
  const sectionsText = between(text, "## sections", "## quickFacts");
  const sections = sectionsText.split(/^###\s+/m).slice(1).map((chunk) => {
    const [name = "", ...rest] = chunk.split(/\r?\n/);
    return { name: name.trim(), blocks: parseBlocks(rest.join("\n")) };
  });
  const sourceRefs = [...new Set(sections.flatMap((section) => section.blocks.flatMap((block) => block.sourceRefs)))].sort();
  const blockerLines = listSection(text, "blockers");
  const blocker = blockerLines.filter((line) => !/^none\b/i.test(line)).join(" ") || undefined;
  return {
    slug: metadata(text, "slug"),
    title: metadata(text, "title"),
    h1: metadata(text, "h1"),
    description: metadata(text, "description"),
    contentStatus: metadata(text, "recommendedStatus") as ContentStatus,
    indexable: metadata(text, "recommendedIndexable") === "true",
    lastReviewed: metadata(text, "lastReviewed"),
    versionContext: metadata(text, "versionContext"),
    directAnswer: between(text, "## directAnswer", "## sections"),
    sourceRefs,
    uncertainties: listSection(text, "uncertainties", "blockers"),
    sections,
    quickFacts: parseQuickFacts(text),
    relatedGuides: listSection(text, "relatedGuides", "uncertainties").map((value) => value.replace(/^\//, "")),
    blocker,
  };
}

function sourceField(block: string, key: string) {
  return block.match(new RegExp(`^- ${key}:\s*(.+)$`, "m"))?.[1].trim() ?? "";
}

function parseSourcesFromPath(sourceRoot: string, sourceFileName: string): Source[] {
  const text = fs.readFileSync(path.join(sourceRoot, sourceFileName), "utf8");
  return [...text.matchAll(/^###\s+([SL]\d{2,3}[a-z]?)\s+—\s+(.+)\r?\n([\s\S]*?)(?=^###\s+[SL]|^##\s+|(?!\s\S]))/gm)].map((match) => {
    const rawPublished = sourceField(match[3], "publishedAt");
    const usedFor = sourceField(match[3], "usedFor").replace(/^\[|\]$/g, "").split(",").map((value) => value.trim()).filter(Boolean);
    return {
      id: match[1],
      level: sourceField(match[3], "level") as SourceLevel,
      title: sourceField(match[3], "title") || match[2].trim(),
      url: sourceField(match[3], "url"),
      publisherOrAuthor: sourceField(match[3], "publisherOrAuthor"),
      publishedAt: rawPublished === "null" ? null : rawPublished,
      capturedAt: sourceField(match[3], "capturedAt"),
      usedFor,
    };
  });
}

function mergeGuides(imported: GuideRecord[], local: GuideRecord[]): GuideRecord[] {
  // Check for duplicate slugs within each layer
  const importedSlugSet = new Set(imported.map(g => g.slug));
  if (importedSlugSet.size !== imported.length) {
    throw new Error("Duplicate slug in imported layer");
  }

  const localSlugsSet = new Set<string>();
  const result = [...imported];
  for (const localGuide of local) {
    if (localSlugsSet.has(localGuide.slug)) {
      throw new Error(`Duplicate slug in local layer: ${localGuide.slug}`);
    }
    localSlugsSet.add(localGuide.slug);

    const existingIdx = result.findIndex(g => g.slug === localGuide.slug);
    if (existingIdx >= 0) {
      console.log(`[content] Local override: ${localGuide.slug}`);
      result[existingIdx] = localGuide;
    } else {
      result.push(localGuide);
    }
  }
  return result;
}

// Parse guides from both layers
export const importedGuides: GuideRecord[] = fs.readdirSync(pageRoot).filter((name) => name.endsWith(".md")).sort().map((name) => parseGuide(path.join(pageRoot, name)));
export const localGuides: GuideRecord[] = fs.readdirSync(localPageRoot).filter((name) => name.endsWith(".md")).sort().map((name) => parseGuide(path.join(localPageRoot, name)));
export const guides = mergeGuides(importedGuides, localGuides);

// Parse sources from both layers
export const importedSources = parseSourcesFromPath(contentRoot, "SOURCE_LOG_V2.md");
export const localSources = parseSourcesFromPath(localRoot, "SOURCE_LOG.md");
export const sources = [...importedSources, ...localSources];

export const routedGuides = guides.filter((guide) => guide.contentStatus === "ready" || guide.contentStatus === "review");
export const readyGuides = guides.filter((guide) => guide.contentStatus === "ready" && guide.indexable);
export const reviewGuides = guides.filter((guide) => guide.contentStatus === "review" && !guide.indexable);

export function getGuide(slug: string) { return routedGuides.find((guide) => guide.slug === slug); }
export function getGuideSources(guide: GuideRecord) { return sources.filter((source) => guide.sourceRefs.includes(source.id)); }
