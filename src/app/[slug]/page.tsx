import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "@/components/GuidePage";
import JsonLd from "@/components/JsonLd";
import { getGuide, getGuideSources, guides, readyGuides, routedGuides } from "@/data/content";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const dynamicParams = false;
export function generateStaticParams() { return routedGuides.map(({ slug }) => ({ slug })); }

type SlugPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const canonical = `/${guide.slug}`;
  return {
    title: guide.title, description: guide.description, alternates: { canonical }, robots: { index: guide.indexable, follow: true },
    openGraph: { type: "article", locale: "en_US", siteName: siteConfig.siteName, title: guide.title, description: guide.description, url: canonical, modifiedTime: guide.lastReviewed, images: [{ url: absoluteUrl("/og.png"), width: 1733, height: 917, alt: `${guide.h1} — Guildrun Guide` }] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [absoluteUrl("/og.png")] },
  };
}

function faqItems(body: string) {
  return [...body.matchAll(/\*\*Q:\s*([^*]+)\*\*\s*\r?\nA:\s*([^\r\n]+)/g)].map((match) => ({ question: match[1].trim(), answer: match[2].trim() }));
}

export default async function Page({ params }: SlugPageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const related = guide.relatedGuides.map((relatedSlug) => guides.find((item) => item.slug === relatedSlug)).filter((item): item is NonNullable<typeof item> => Boolean(item)).filter((item) => readyGuides.some((ready) => ready.slug === item.slug));
  const faqs = guide.sections.filter((section) => /faq/i.test(section.name)).flatMap((section) => section.blocks.flatMap((block) => faqItems(block.body)));
  const schemas: Record<string, unknown>[] = [
    { "@context": "https://schema.org", "@type": "Article", headline: guide.h1, description: guide.description, dateModified: guide.lastReviewed, mainEntityOfPage: absoluteUrl(`/${guide.slug}`), isPartOf: { "@type": "WebSite", name: siteConfig.siteName, url: absoluteUrl("/") } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: guide.h1, item: absoluteUrl(`/${guide.slug}`) }] },
  ];
  if (faqs.length) schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) });
  return <><JsonLd data={schemas} /><GuidePage guide={guide} sources={getGuideSources(guide)} related={related} /></>;
}
