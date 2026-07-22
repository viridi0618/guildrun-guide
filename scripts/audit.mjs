import fs from "node:fs";
import path from "node:path";

const mode = process.argv[2];
const root = process.cwd();
const out = path.join(root, "out");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const fail = (message) => { throw new Error(`[${mode}] ${message}`); };
const assert = (condition, message) => { if (!condition) fail(message); };

const forbiddenRoutes = ["heroes", "items", "relics", "specializations", "japanese", "beginner-guide", "reserve-heroes", "shop-guide", "release-date", "difficulty-endless", "rush-mechanic", "tier-list", "builds", "beginner-mistakes"];
const candidateFiles = ["README.md", "src", "content", "scripts", ".github"].flatMap((entry) => {
  const target = path.join(root, entry); if (!fs.existsSync(target)) return [];
  const walk = (current) => fs.statSync(current).isDirectory() ? fs.readdirSync(current).flatMap((name) => walk(path.join(current, name))) : [current];
  return walk(target).filter((file) => /\.(?:md|mjs|ts|tsx|css|yml)$/.test(file));
});

if (mode === "routes") {
  assert(fs.existsSync(path.join(out, "index.html")), "home static HTML is missing");
  for (const route of forbiddenRoutes) assert(!fs.existsSync(path.join(out, route, "index.html")) && !fs.existsSync(path.join(out, `${route}.html`)), `forbidden or draft route was exported: /${route}`);
  assert(fs.existsSync(path.join(out, "sitemap.xml")), "sitemap.xml is missing");
  console.log("Route audit passed: only approved public routes were exported.");
} else if (mode === "seo") {
  const html = fs.readFileSync(path.join(out, "index.html"), "utf8");
  const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
  const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
  assert((html.match(/<title>/g) || []).length === 1, "home must have exactly one title");
  assert(html.includes('rel="canonical" href="https://guildrunguide.wiki"'), "home canonical is not the production root");
  assert(html.includes('property="og:type" content="website"'), "home og:type must be website");
  assert(html.includes('name="robots" content="index, follow"'), "home robots metadata must be index, follow");
  assert(sitemap.includes("<loc>https://guildrunguide.wiki</loc>"), "sitemap root URL is incorrect");
  assert(!sitemap.match(/https:\/\/guildrunguide\.wiki\/$/m), "sitemap contains a trailing slash root");
  assert(robots.includes("Sitemap: https://guildrunguide.wiki/sitemap.xml"), "robots sitemap URL is incorrect");
  console.log("SEO audit passed.");
} else if (mode === "links") {
  const html = fs.readFileSync(path.join(out, "index.html"), "utf8");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]).filter((href) => href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("/_next/"));
  for (const href of hrefs) { const clean = href.split("#")[0]; assert(clean === "/" || fs.existsSync(path.join(out, clean.replace(/^\//, ""), "index.html")) || fs.existsSync(path.join(out, `${clean.replace(/^\//, "")}.html`)), `broken internal link: ${href}`); }
  console.log("Internal link audit passed.");
} else if (mode === "content") {
  const combined = candidateFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
  for (const marker of ["YOUR_DOMAIN" + "_HERE", "needs to be " + "extracted", "requires " + "testing", "specific hero names " + "TBD", "guildrun" + "-db/"]) assert(!combined.includes(marker), `forbidden marker found: ${marker}`);
  for (const legacy of ["moonlight" + "peaks.com", "Moonlight Peaks " + "Guide", "moonlight-peaks-guide" + "-hero.png", "google70d2f5" + "ada7903a5f"]) assert(!combined.includes(legacy), `Moonlight Peaks content or asset reference found: ${legacy}`);
  assert(!fs.existsSync(path.join(root, "public", "robots.txt")), "public/robots.txt must not coexist with app robots metadata");
  const data = read("src/data/content.ts");
  assert(data.includes('contentStatus: "draft"'), "draft content state is missing");
  assert(data.includes("sourceRefs: []"), "draft source gaps must be explicit");
  console.log("Content audit passed: unpublished candidates remain typed drafts.");
} else fail("unknown audit mode");
