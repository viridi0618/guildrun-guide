import Link from "next/link";
import type { GuideRecord } from "@/lib/types";

export default function GuideCard({ guide }: { guide: GuideRecord }) {
  if (guide.contentStatus !== "ready" || !guide.indexable) return null;
  return <article className="guide-card"><p className="eyebrow">Guide</p><h3><Link href={`/${guide.slug}`}>{guide.h1}</Link></h3><p>{guide.description}</p></article>;
}
