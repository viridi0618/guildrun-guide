import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
export const inputRoot = path.join(root, "content-input");
export const pageRoot = path.join(inputRoot, "pages");
export const localPageRoot = path.join(root, "content-local", "pages");
export { root };

const metadata = (text, key) => text.match(new RegExp(`^${key}:\s*(.+)$`, "m"))?.[1].trim() ?? "";
const between = (text, start, end) => {
  const first = text.indexOf(start); if (first < 0) return "";
  const from = first + start.length; const last = end ? text.indexOf(end, from) : -1;
  return text.slice(from, last < 0 ? undefined : last).trim();
};

export function parsePage(file) {
  const text = fs.readFileSync(file, "utf8");
  const sectionsText = between(text, "## sections", "## quickFacts");
  const sourceRefs = [...new Set([...sectionsText.matchAll(/^sourceRefs:\s*\[([^\]]*)\]/gm)].flatMap((match) => match[1].split(",").map((value) => value.trim()).filter(Boolean)))].sort();
  const sectionCount = (sectionsText.match(/^###\s+/gm) ?? []).length;
  const evidenceCount = (sectionsText.match(/^evidenceType:\s+/gm) ?? []).length;
  const blockerText = between(text, "## blockers");
  const blockers = [...blockerText.matchAll(/^\s*-\s+(.+)$/gm)].map((match) => match[1].trim()).filter((value) => !/^none\b/i.test(value));
  return {
    file, text, slug: metadata(text, "slug"), title: metadata(text, "title"), h1: metadata(text, "h1"),
    description: metadata(text, "description"), status: metadata(text, "recommendedStatus"), indexable: metadata(text, "recommendedIndexable") === "true",
    directAnswer: between(text, "## directAnswer", "## sections"), sectionsText, sectionCount, evidenceCount, sourceRefs, blockers,
  };
}

function mergePages(imported, local) {
  const importedSlugs = new Set(imported.map(p => p.slug));
  if (importedSlugs.size !== imported.length) throw new Error("Duplicate slug in imported layer");

  const localSlugSet = new Set();
  const result = [...imported];
  for (const localPage of local) {
    if (localSlugSet.has(localPage.slug)) throw new Error(`Duplicate slug in local layer: ${localPage.slug}`);
    localSlugSet.add(localPage.slug);
    const idx = result.findIndex(p => p.slug === localPage.slug);
    if (idx >= 0) {
      console.log(`[audit-lib] Local override: ${localPage.slug}`);
      result[idx] = localPage;
    } else {
      result.push(localPage);
    }
  }
  return result;
}

export function loadModel() {
  const importedPages = fs.readdirSync(pageRoot).filter((name) => name.endsWith(".md")).sort().map((name) => parsePage(path.join(pageRoot, name)));
  const localPages = fs.existsSync(localPageRoot)
    ? fs.readdirSync(localPageRoot).filter((name) => name.endsWith(".md")).sort().map((name) => parsePage(path.join(localPageRoot, name)))
    : [];
  const pages = mergePages(importedPages, localPages);

  // Parse source IDs from both source logs
  const importedSourceText = fs.readFileSync(path.join(inputRoot, "SOURCE_LOG_V2.md"), "utf8");
  const localSourcePath = path.join(root, "content-local", "SOURCE_LOG.md");
  const localSourceText = fs.existsSync(localSourcePath) ? fs.readFileSync(localSourcePath, "utf8") : "";

  const sourceIdRegex = /^###\s+((?:S|L)\d{2,3}[a-z]?)\s+—/gm;
  const importedSourceIds = [...importedSourceText.matchAll(sourceIdRegex)].map((match) => match[1]);
  const localSourceIds = localSourceText ? [...localSourceText.matchAll(sourceIdRegex)].map((match) => match[1]) : [];

  const sourceIds = [...importedSourceIds, ...localSourceIds];
  const combinedSourceIds = sourceIds;
  const sourceText = importedSourceText + (localSourceText ? "\n" + localSourceText : "");

  const ready = pages.filter((page) => page.status === "ready" && page.indexable).map((page) => page.slug).sort();
  const review = pages.filter((page) => page.status === "review" && !page.indexable).map((page) => page.slug).sort();

  return { pages, sourceText, sourceIds, combinedSourceIds, ready, review, importedSourceIds, localSourceIds };
}

export function exportedHtml(out, slug) {
  const candidates = [path.join(out, `${slug}.html`), path.join(out, slug, "index.html")];
  return candidates.find((file) => fs.existsSync(file));
}
