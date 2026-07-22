import type { MetadataRoute } from "next";
import { readyGuides } from "@/data/content";
import { absoluteUrl } from "@/lib/site-config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: absoluteUrl("/"), lastModified: new Date("2026-07-22"), changeFrequency: "weekly", priority: 1 }, ...readyGuides.map((guide) => ({ url: absoluteUrl(`/${guide.slug}`), lastModified: new Date(guide.lastReviewed), changeFrequency: "monthly" as const, priority: 0.8 }))]; }
