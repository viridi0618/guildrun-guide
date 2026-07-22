import fs from "node:fs";
import path from "node:path";

export const root = process.cwd();
export const inputRoot = path.join(root, "content-input");
export const pageRoot = path.join(inputRoot, "pages");
export const expectedReady = ["beginner-guide", "difficulty-endless", "release-date", "reserve-heroes", "rush-mechanic", "shop-guide"];
export const expectedReview = ["beginner-mistakes", "builds", "tier-list"];

const metadata = (text, key) => text.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1].trim() ?? "";
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
export function loadModel() {
  const pages = fs.readdirSync(pageRoot).filter((name) => name.endsWith(".md")).sort().map((name) => parsePage(path.join(pageRoot, name)));
  const sourceText = fs.readFileSync(path.join(inputRoot, "SOURCE_LOG_V2.md"), "utf8");
  const sourceIds = [...sourceText.matchAll(/^###\s+(S\d{2}b?)\s+—/gm)].map((match) => match[1]);
  return { pages, sourceText, sourceIds };
}

export function exportedHtml(out, slug) {
  const candidates = [path.join(out, `${slug}.html`), path.join(out, slug, "index.html")];
  return candidates.find((file) => fs.existsSync(file));
}
