import type { EvidenceBlock, EvidenceType } from "@/lib/types";
import MarkdownBody from "./MarkdownBody";

const labels: Record<EvidenceType, string> = {
  "confirmed-fact": "Confirmed source-backed fact",
  "community-report": "Community report",
  "editorial-recommendation": "Editorial recommendation",
  uncertainty: "Uncertainty",
};

export default function EvidenceNote({ block }: { block: EvidenceBlock }) {
  return <div className={`evidence-block evidence-${block.evidenceType}`}><p className="evidence-label">{labels[block.evidenceType]}</p><h3>{block.heading}</h3><MarkdownBody body={block.body} /><p className="source-refs">Sources: {block.sourceRefs.join(", ") || "Editorial"}</p></div>;
}
