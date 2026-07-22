import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { expectedReady, expectedReview, exportedHtml, loadModel, root } from "../scripts/content-audit-lib.mjs";

const { pages, sourceIds } = loadModel();
const out = path.join(root, "out");

test("content package has the locked 6 ready / 3 review split", () => {
  assert.deepEqual(pages.filter((page) => page.status === "ready" && page.indexable).map((page) => page.slug).sort(), expectedReady);
  assert.deepEqual(pages.filter((page) => page.status === "review" && !page.indexable).map((page) => page.slug).sort(), expectedReview);
});

test("every page is substantive and sourceRefs resolve", () => {
  for (const page of pages) {
    assert.ok(page.directAnswer.length > 80, `${page.slug} direct answer is thin`);
    assert.ok(page.sectionCount >= 5, `${page.slug} has too few sections`);
    assert.ok(page.evidenceCount >= page.sectionCount, `${page.slug} evidence blocks are incomplete`);
    assert.ok(page.sourceRefs.length > 0 && page.sourceRefs.every((id) => sourceIds.includes(id)), `${page.slug} sourceRefs do not resolve`);
  }
});

test("generated routes enforce ready/review robots policies", () => {
  for (const slug of expectedReady) assert.match(fs.readFileSync(exportedHtml(out, slug), "utf8"), /name="robots" content="index, follow"/);
  for (const slug of expectedReview) assert.match(fs.readFileSync(exportedHtml(out, slug), "utf8"), /name="robots" content="noindex, follow"/);
});

test("sitemap contains only root and ready guides", () => {
  const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, ["https://guildrunguide.wiki", ...expectedReady.map((slug) => `https://guildrunguide.wiki/${slug}`)]);
});

test("review guides are absent from homepage and ready-related lists", () => {
  const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
  for (const slug of expectedReview) assert.doesNotMatch(home, new RegExp(`href="/${slug}"`));
  for (const page of pages) {
    const html = fs.readFileSync(exportedHtml(out, page.slug), "utf8");
    for (const slug of expectedReview) assert.doesNotMatch(html, new RegExp(`Related guides[\\s\\S]*href="/${slug}"`));
  }
});
