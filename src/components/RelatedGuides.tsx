import Link from "next/link";
import type { GuideRecord } from "@/lib/types";
export default function RelatedGuides({ guides }: { guides: GuideRecord[] }) { const ready = guides.filter((guide) => guide.contentStatus === "ready" && guide.indexable); return ready.length ? <aside><h2>Related guides</h2><ul>{ready.map((guide) => <li key={guide.slug}><Link href={`/${guide.slug}`}>{guide.h1}</Link></li>)}</ul></aside> : null; }
