import type { MetadataRoute } from "next";
import { readyGuides } from "@/data/content";
import { absoluteUrl } from "@/lib/site-config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const latestReview = readyGuides.reduce((latest, g) => g.lastReviewed > latest ? g.lastReviewed : latest, "2026-07-22");
  const lastMod = new Date(latestReview);
  const sitemapGuides = [...readyGuides].sort((a, b) => a.slug.localeCompare(b.slug));
  return [
    { url: absoluteUrl("/"), lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/guides"), lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    ...sitemapGuides.map((guide) => ({ url: absoluteUrl(`/${guide.slug}`), lastModified: new Date(guide.lastReviewed), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
