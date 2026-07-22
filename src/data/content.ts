import type { GuideRecord, Source } from "@/lib/types";

export const sources: Source[] = [];

export const guides: GuideRecord[] = [
  ["beginner-guide", "Guildrun Beginner Guide", "A practical starting guide", "Approved gameplay copy and exact source references have not been supplied."],
  ["reserve-heroes", "Guildrun Reserve Heroes", "How reserve heroes work", "The mechanic needs approved definitions and exact sources."],
  ["shop-guide", "Guildrun Shop Guide", "How the shop works", "Approved shop facts and exact sources have not been supplied."],
  ["release-date", "Guildrun Release Date: What Is Confirmed", "What is confirmed about release timing", "The required official or developer source URL has not been supplied."],
  ["difficulty-endless", "Guildrun Difficulty and Endless Mode", "Difficulty and Endless mode", "Conflicting index and formula claims remain unresolved in the input task."],
  ["rush-mechanic", "What Is Known About Rush in Guildrun", "How to understand Rush", "A source-backed basic definition has not been supplied."],
  ["tier-list", "Guildrun Tier List: Early Community Opinions", "Early community opinions", "Named heroes, attributed opinions, and exact source URLs have not been supplied."],
  ["builds", "Early Build Concepts", "Early build concepts", "Specific heroes, choices, decision logic, limits, and attribution are missing."],
  ["beginner-mistakes", "Guildrun Beginner Mistakes", "Avoidable early decisions", "No source-backed or clearly editorial mistake set has been supplied."],
].map(([slug, title, h1, blocker]) => ({
  slug,
  title,
  h1,
  description: blocker,
  contentStatus: "draft" as const,
  indexable: false,
  lastReviewed: "2026-07-22",
  versionContext: "Steam demo; verification pending approved content inputs",
  sourceRefs: [],
  uncertainties: [blocker],
  sections: [],
  relatedGuides: [],
  blocker,
}));

export const readyGuides = guides.filter((guide) => guide.contentStatus === "ready" && guide.indexable);
export const reviewGuides = guides.filter((guide) => guide.contentStatus === "review");
