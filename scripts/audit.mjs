import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { exportedHtml, inputRoot, loadModel, root } from "./content-audit-lib.mjs";

const mode = process.argv[2];
const out = path.join(root, "out");
const fail = (message) => { throw new Error(`[${mode}] ${message}`); };
const assert = (condition, message) => { if (!condition) fail(message); };
const { pages, combinedSourceIds, ready, review } = loadModel();

if (mode === "routes") {
  assert(fs.existsSync(path.join(out, "index.html")), "home static HTML is missing");
  for (const slug of [...ready, ...review]) assert(exportedHtml(out, slug), `expected route was not exported: /${slug}`);
  assert(exportedHtml(out, "guides"), "/guides route was not exported");
  for (const slug of ["items", "specializations"]) assert(!exportedHtml(out, slug), `out-of-scope route was exported: /${slug}`);
  console.log(`Route audit passed: ${ready.length} ready and ${review.length} review routes exported, plus /guides hub.`);
} else if (mode === "seo") {
  const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
  const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
  const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
  assert((home.match(/<title>/g) || []).length === 1, "home must have exactly one title");
  assert(!home.includes('"@type":"Organization"'), "homepage must not publish fake Organization schema");
  assert(home.includes('name="robots" content="index, follow"'), "home robots must be index, follow");

  const guidesHtml = fs.readFileSync(exportedHtml(out, "guides"), "utf8");
  assert((guidesHtml.match(/<title>/g) || []).length === 1, "/guides must have one title");
  assert(guidesHtml.includes('rel="canonical" href="https://guildrunguide.wiki/guides"'), "/guides canonical is wrong");
  assert(guidesHtml.includes('name="robots" content="index, follow"'), "/guides robots must be index, follow");
  assert(guidesHtml.includes('"@type":"CollectionPage"'), "/guides must have CollectionPage schema");
  assert(guidesHtml.includes('"@type":"BreadcrumbList"'), "/guides breadcrumb schema missing");

  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedUrls = ["https://guildrunguide.wiki", "https://guildrunguide.wiki/guides", ...ready.map((slug) => `https://guildrunguide.wiki/${slug}`)];
  const normalizedActual = [...sitemapUrls].sort();
  const normalizedExpected = [...expectedUrls].sort();
  assert(JSON.stringify(normalizedActual) === JSON.stringify(normalizedExpected), `sitemap differs: actual=[${sitemapUrls.join(",")}] expected=[${expectedUrls.join(",")}]`);

  for (const page of pages) {
    const html = fs.readFileSync(exportedHtml(out, page.slug), "utf8");
    assert((html.match(/<title>/g) || []).length === 1, `/${page.slug} must have one title`);
    assert(html.includes(`rel="canonical" href="https://guildrunguide.wiki/${page.slug}`), `/${page.slug} canonical is wrong`);
    assert(html.includes('property="og:type" content="article"'), `/${page.slug} og:type must be article`);
    assert(html.includes('"@type":"Article"') && html.includes('"@type":"BreadcrumbList"'), `/${page.slug} article/breadcrumb schema missing`);
    const robotsValue = page.indexable ? "index, follow" : "noindex, follow";
    assert(html.includes(`name="robots" content="${robotsValue}"`), `/${page.slug} robots must be ${robotsValue}`);
  }
  const release = fs.readFileSync(exportedHtml(out, "release-date"), "utf8");
  assert(release.includes('"@type":"FAQPage"') && release.includes("Frequently Asked Questions"), "FAQ schema must correspond to visible FAQ content");
  assert(robots.includes("Sitemap: https://guildrunguide.wiki/sitemap.xml"), "robots sitemap URL is incorrect");
  console.log("SEO audit passed: metadata, schemas, robots, and sitemap are correct.");
} else if (mode === "links") {
  const htmlFiles = [path.join(out, "index.html"), exportedHtml(out, "guides"), ...pages.map((page) => exportedHtml(out, page.slug))];
  for (const file of htmlFiles) {
    if (!file) continue;
    const html = fs.readFileSync(file, "utf8");
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]).filter((href) => href.startsWith("/") && !href.startsWith("/_next/") && !href.startsWith("/#"));
    for (const href of hrefs) {
      const clean = href.split(/[?#]/)[0].replace(/^\//, "");
      assert(!clean || exportedHtml(out, clean) || fs.existsSync(path.join(out, clean)), `broken internal link in ${path.basename(file)}: ${href}`);
    }
  }
  const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
  for (const slug of ready) assert(home.includes(`href="/${slug}"`), `home is missing ready guide /${slug}`);
  for (const slug of review) assert(!home.includes(`href="/${slug}"`), `home exposes review guide /${slug}`);
  console.log("Link audit passed: generated internal links resolve and promotion surfaces contain ready guides only.");
} else if (mode === "content") {
  const validation = execFileSync("python", [path.join(inputRoot, "scripts", "validate_content_package.py")], { cwd: inputRoot, encoding: "utf8" });
  assert(validation.includes("CONTENT PACKAGE VALIDATION PASSED") && validation.includes("Errors: 0") && validation.includes("Warnings: 0"), "upstream content validator failed");
  assert(pages.length >= 9, `insufficient pages: ${pages.length}`);
  for (const page of pages) {
    assert(page.directAnswer && page.sectionCount > 0 && page.evidenceCount > 0, `${page.slug} is structurally incomplete`);
    assert(page.sourceRefs.every((id) => combinedSourceIds.includes(id)), `${page.slug} has dangling sourceRefs`);
    if (page.status === "ready") assert(page.blockers.length === 0 && !/\b(?:TODO|TBD)\b|to be filled|Requires source/i.test(page.text), `${page.slug} fails ready gate`);
  }
  const provenance = fs.readFileSync(path.join(root, "CONTENT_PACKAGE_PROVENANCE.md"), "utf8");
  assert(provenance.includes("4e5daabd9d41cd1d40eac5ae5bd4e9fcf41860bc") && provenance.includes("eaad2c1c4abdc3580d072befe8ea1408bade5c9f"), "locked provenance commits are missing");
  const combined = pages.map((page) => page.text).join("\n");
  for (const legacy of ["moonlight-peaks.com", "Moonlight Peaks Guide", "moonlight-peaks-guide-hero.png", "google70d2f5ada7903a5f"]) assert(!combined.includes(legacy), `legacy marker found: ${legacy}`);
  console.log("Content audit passed: locked package validates and runtime states/sourceRefs satisfy every gate.");
} else fail("unknown audit mode");
