import type { Metadata } from "next";
import GuideGrid from "@/components/GuideGrid";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import QuickFacts from "@/components/QuickFacts";
import { readyGuides } from "@/data/content";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const title = "Guildrun Wiki & Guides — Practical, Source-Aware Answers";
const description = "Practical Guildrun guides for the Steam demo, with confirmed facts separated from community reports, editorial advice, and uncertain details.";

export const metadata: Metadata = {
  title: { absolute: title }, description, alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_US", siteName: siteConfig.siteName, title, description, url: "/", images: [{ url: absoluteUrl("/og.png"), width: 1733, height: 917, alt: "Guildrun Guide — Practical. Source-aware. Unofficial." }] },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og.png")] },
};

export default function Home() {
  const schema = [
    { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.siteName, url: absoluteUrl("/"), description },
    { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.siteName, url: absoluteUrl("/"), description: "An independent fan-made Guildrun guide publishing project." },
  ];
  return <><JsonLd data={schema} /><Hero /><div className="shell home-content"><QuickFacts />
    <section className="section-block" id="method"><p className="eyebrow">Editorial standard</p><h2>Clear labels, exact sources, no invented certainty.</h2><p className="section-intro">Every public guide must answer a real player question, cite the exact pages it relies on, show when it was reviewed, and state which demo or version context applies.</p>
      <div className="principle-grid"><article><span>01</span><h3>Facts are traceable</h3><p>Release timing, mechanics, numeric claims, and language support require a specific source URL.</p></article><article><span>02</span><h3>Advice is labeled</h3><p>Editorial recommendations remain visibly distinct from developer statements and community observations.</p></article><article><span>03</span><h3>Drafts stay private</h3><p>Thin or conflicted pages are not routed, indexed, placed in navigation, or presented as finished guides.</p></article></div>
    </section>
    <section className="section-block"><p className="eyebrow">Published guides</p><h2>{readyGuides.length ? "Start with a verified guide" : "Guides enter the library after source review"}</h2>{readyGuides.length ? <GuideGrid guides={readyGuides} /> : <div className="empty-state"><p>The engineering foundation is ready. Candidate articles remain outside the public route set until their approved copy and exact source records are supplied.</p><a href={siteConfig.officialGameUrl} rel="noreferrer">Visit the official Guildrun game page</a></div>}</section>
  </div></>;
}
