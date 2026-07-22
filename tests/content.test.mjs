import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const content = fs.readFileSync(new URL("../src/data/content.ts", import.meta.url), "utf8");
const home = fs.readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("all V1 candidates exist as non-indexable drafts", () => {
  for (const slug of ["beginner-guide", "reserve-heroes", "shop-guide", "release-date", "difficulty-endless", "rush-mechanic", "tier-list", "builds", "beginner-mistakes"]) assert.match(content, new RegExp(`\\["${slug}"`));
  assert.match(content, /contentStatus: "draft"/);
  assert.match(content, /indexable: false/);
});

test("homepage only consumes ready guides", () => {
  assert.match(home, /readyGuides/);
  assert.doesNotMatch(home, /reviewGuides|guides\.map/);
});
