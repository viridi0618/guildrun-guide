import type { Metadata } from "next";
import Link from "next/link";
import { readyGuides } from "@/data/content";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { GuideRecord } from "@/lib/types";
import JsonLd from "@/components/JsonLd";

const groups: Record<string, string[]> = {
  "Start Here": ["beginner-guide", "release-date"],
  "Core Mechanics": ["rush-mechanic", "reserve-heroes", "shop-guide", "difficulty-endless"],
  Strategy: ["heroes", "relics", "builds"],
};

const title = "Guildrun Guides — Beginner, Heroes, Builds & Mechanics";
const description = "Browse source-reviewed Guildrun guides for beginners, heroes, relics, builds, Rush, reserve units, difficulty progression, Endless mode, shops, and release information.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/guides" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_US", siteName: siteConfig.siteName, title, description, url: "/guides", images: [{ url: absoluteUrl("/og.png"), width: 1733, height: 917, alt: "Guildrun Guides" }] },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og.png")] },
};

export default function GuidesPage() {
  const latestReview = readyGuides.reduce((latest, g) => g.lastReviewed > latest ? g.lastReviewed : latest, "2026-07-22");
  const itemList = readyGuides.map((guide, index) => ({ "@type": "ListItem" as const, position: index + 1, item: { "@type": "Article" as const, name: guide.h1, description: guide.description, url: absoluteUrl(`/${guide.slug}`) } }));

  const schemas: Record<string, unknown>[] = [
    { "@context": "https://schema.org", "@type": "CollectionPage", name: "Guildrun Guides", description, url: absoluteUrl("/guides"), dateModified: latestReview, isPartOf: { "@type": "WebSite", name: siteConfig.siteName, url: absoluteUrl("/") }, mainEntity: { "@type": "ItemList", itemListElement: itemList } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") }] },
  ];

  const resolveGroup = (slugs: string[]) => slugs.map((slug) => readyGuides.find((g) => g.slug === slug)).filter((guide): guide is GuideRecord => Boolean(guide));

  return <><JsonLd data={schemas} /><div className="shell article"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Guides</span></nav>
    <h1>Guildrun Guides</h1>
    <p className="article-lede">{description}</p>
    {Object.entries(groups).map(([groupName, slugs]) => {
      const groupGuides = resolveGroup(slugs);
      if (groupGuides.length === 0) return null;
      return <section key={groupName} className="section-block"><h2>{groupName}</h2><div className="guide-grid">{groupGuides.map((guide) => <article key={guide.slug} className="guide-card"><h3><Link href={`/${guide.slug}`}>{guide.h1}</Link></h3><p>{guide.description}</p><div className="guide-meta"><span>Reviewed: {guide.lastReviewed}</span><span>{guide.versionContext}</span></div></article>)}</div></section>;
    })}
  </div></>;
}
