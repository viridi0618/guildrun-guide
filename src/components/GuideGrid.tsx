import type { GuideRecord } from "@/lib/types";
import GuideCard from "./GuideCard";

export default function GuideGrid({ guides }: { guides: GuideRecord[] }) {
  return <div className="guide-grid">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>;
}
