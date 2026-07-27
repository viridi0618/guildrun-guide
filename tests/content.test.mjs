import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { exportedHtml, loadModel, root } from "../scripts/content-audit-lib.mjs";

const { pages, combinedSourceIds, ready, review, localSourceIds } = loadModel();
const out = path.join(root, "out");

test("ready/review sets are computed from data, not hardcoded", () => {
  assert.ok(Array.isArray(ready), "ready must be an array");
  assert.ok(Array.isArray(review), "review must be an array");
  // Verify page status consistency
  for (const slug of ready) {
    const page = pages.find((p) => p.slug === slug);
    assert.ok(page, `ready slug ${slug} must have a page`);
    assert.equal(page.status, "ready");
    assert.equal(page.indexable, true);
    // Verify substantive content
    assert.ok(page.directAnswer.length > 80, `${page.slug} direct answer is thin`);
    assert.ok(page.sectionCount >= 5, `${page.slug} has too few sections`);
    // Verify no blockers on ready pages
    assert.ok(page.blockers.length === 0, `${page.slug} is ready but has blockers: ${page.blockers.join(", ")}`);
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
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expected = ["https://guildrunguide.wiki", "https://guildrunguide.wiki/guides", ...ready.map((slug) => `https://guildrunguide.wiki/${slug}`)];
  assert.deepEqual(urls.sort(), expected.sort());
});

test("/guides hub page exists", () => {
  assert.ok(fs.existsSync(exportedHtml(out, "guides")), "/guides must be exported");
  const html = fs.readFileSync(exportedHtml(out, "guides"), "utf8");
  assert.match(html, /name="robots" content="index, follow"/);
  assert.match(html, /"@type":"CollectionPage"/);
});

test("review guides are absent from /guides hub and ready guides do not link review pages", () => {
  const guidesHtml = fs.readFileSync(exportedHtml(out, "guides"), "utf8");
  for (const slug of review) assert.doesNotMatch(guidesHtml, new RegExp(`href="/${slug}"`), `/guides exposes review guide /${slug}`);
});

test("local layer overrides imported pages correctly", () => {
  const localPageFiles = fs.readdirSync(path.join(root, "content-local", "pages")).filter((name) => name.endsWith(".md"));
  assert.ok(localPageFiles.length >= 4, "local layer should have multiple pages");
});

test("L001 etc. local sources are parseable", () => {
  assert.ok(localSourceIds.length >= 1, "local source IDs should be parsed from SOURCE_LOG.md");
  assert.ok(localSourceIds.some((id) => id.startsWith("L")), "local sources should have L-prefixed IDs");
  assert.ok(combinedSourceIds.some((id) => id.startsWith("L")), "combined source IDs should include L-prefixed IDs");
  assert.ok(combinedSourceIds.some((id) => id.startsWith("S")), "combined source IDs should include S-prefixed IDs");
});

test("release-date FAQPage schema and visible heading match", () => {
  const releaseHtml = fs.readFileSync(exportedHtml(out, "release-date"), "utf8");
  assert.match(releaseHtml, /"@type":"FAQPage"/);
  assert.match(releaseHtml, /Frequently Asked Questions/);
});

test("L003 is completely removed", () => {
  assert.ok(!combinedSourceIds.includes("L003"), "L003 must not appear in combined source IDs");
  const sourceLog = fs.readFileSync(path.join(root, "content-local", "SOURCE_LOG.md"), "utf8");
  assert.ok(!sourceLog.includes("L003"), "L003 must not appear in SOURCE_LOG.md");
});
