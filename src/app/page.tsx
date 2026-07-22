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
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.siteName, url: absoluteUrl("/"), description };
  return <><JsonLd data={schema} /><Hero /><div className="shell home-content"><QuickFacts />
    <section className="section-block" id="method"><p className="eyebrow">Editorial standard</p><h2>Clear labels, exact sources, no invented certainty.</h2><p className="section-intro">Every public guide answers a real player question, cites the exact pages it relies on, shows when it was reviewed, and states which demo or version context applies.</p>
      <div className="principle-grid"><article><span>01</span><h3>Facts are traceable</h3><p>Release timing, mechanics, numeric claims, and language support point to specific source URLs.</p></article><article><span>02</span><h3>Advice is labeled</h3><p>Editorial recommendations remain visibly distinct from developer statements and community observations.</p></article><article><span>03</span><h3>Review stays separate</h3><p>Review-stage pages remain noindex and never appear in the homepage, navigation, footer, sitemap, or related-guide lists.</p></article></div>
    </section>
    <section className="section-block" id="guides"><p className="eyebrow">Published guides</p><h2>Start with a source-reviewed guide</h2><GuideGrid guides={readyGuides} /></section>
  </div></>;
}
