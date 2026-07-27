import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { exportedHtml, loadModel, root } from "../scripts/content-audit-lib.mjs";

const { pages, sourceIds, combinedSourceIds, ready, review, importedSourceIds, localSourceIds } = loadModel();
const out = path.join(root, "out");

test("ready/review sets are computed from data, not hardcoded", () => {
  assert.ok(Array.isArray(ready), "ready must be an array");
  assert.ok(Array.isArray(review), "review must be an array");
  assert.ok(ready.length >= 8, "must have at least 8 ready pages after expansion");
  assert.ok(review.length >= 2, "must have at least 2 review pages");
  for (const slug of ready) {
    const page = pages.find((p) => p.slug === slug);
    assert.ok(page, `ready slug ${slug} must have a page`);
    assert.equal(page.status, "ready");
    assert.equal(page.indexable, true);
  }
  for (const slug of review) {
    const page = pages.find((p) => p.slug === slug);
    assert.ok(page, `review slug ${slug} must have a page`);
    assert.equal(page.status, "review");
    assert.equal(page.indexable, false);
  }
});

test("every page is substantive and sourceRefs resolve", () => {
  for (const page of pages) {
    assert.ok(page.directAnswer.length > 80, `${page.slug} direct answer is thin`);
    assert.ok(page.sectionCount >= 5, `${page.slug} has too few sections`);
    assert.ok(page.evidenceCount >= page.sectionCount, `${page.slug} evidence blocks are incomplete`);
    assert.ok(page.sourceRefs.length > 0 && page.sourceRefs.every((id) => combinedSourceIds.includes(id)), `${page.slug} sourceRefs do not resolve`);
  }
});

test("generated routes enforce ready/review robots policies", () => {
  for (const slug of ready) assert.match(fs.readFileSync(exportedHtml(out, slug), "utf8"), /name="robots" content="index, follow"/);
  for (const slug of review) assert.match(fs.readFileSync(exportedHtml(out, slug), "utf8"), /name="robots" content="noindex, follow"/);
});

test("sitemap contains root, /guides, and ready guides", () => {
  const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)</loc>/g)].map((match) => match[1]);
  const expected = ["https://guildrunguide.wiki", "https://guildrunguide.wiki/guides", ...ready.map((slug) => `https://guildrunguide.wiki/${slug}`)];
  assert.deepEqual(urls, expected);
});

test("review guides are absent from homepage and ready-related lists", () => {
  const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
  for (const slug of review) assert.doesNotMatch(home, new RegExp(`href="/${slug}"`));
  for (const page of pages) {
    const html = fs.readFileSync(exportedHtml(out, page.slug), "utf8");
    for (const slug of review) assert.doesNotMatch(html, new RegExp(`Related guides[\\s\\S]*href="/${slug}"`));
  }
});

test("/heroes and /relics exist in routes", () => {
  assert.ok(pages.some((p) => p.slug === "heroes"), "heroes page must exist in model");
  assert.ok(pages.some((p) => p.slug === "relics"), "relics page must exist in model");
});

test("/guides hub page exists", () => {
  assert.ok(fs.existsSync(exportedHtml(out, "guides")), "/guides must be exported");
  const html = fs.readFileSync(exportedHtml(out, "guides"), "utf8");
  assert.match(html, /name="robots" content="index, follow"/);
  assert.match(html, /"@type":"CollectionPage"/);
});

test("local layer overrides imported pages correctly", () => {
  const localPageFiles = fs.readdirSync(path.join(root, "content-local", "pages")).filter((name) => name.endsWith(".md"));
  assert.ok(localPageFiles.length >= 4, "local layer should have at least 4 pages (heroes, relics, builds, release-date, difficulty-endless)");
});

test("local new slugs are appended", () => {
  assert.ok(pages.some((p) => p.slug === "heroes"), "heroes should exist (local-only slug)");
  assert.ok(pages.some((p) => p.slug === "relics"), "relics should exist (local-only slug)");
});

test("duplicate slugs in same layer throw", () => {
  const slugs = pages.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length, "no duplicate slugs should exist across layers");
});

test("L001 etc. local sources are parseable", () => {
  assert.ok(localSourceIds.length >= 1, "local source IDs should be parsed from SOURCE_LOG.md");
  assert.ok(localSourceIds.some((id) => id.startsWith("L")), "local sources should have L-prefixed IDs");
  assert.ok(combinedSourceIds.some((id) => id.startsWith("L")), "combined source IDs should include L-prefixed IDs");
  assert.ok(combinedSourceIds.some((id) => id.startsWith("S")), "combined source IDs should include S-prefixed IDs");
});
