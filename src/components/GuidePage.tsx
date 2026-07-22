import type { GuideRecord, Source } from "@/lib/types";
import ArticleLayout from "./ArticleLayout";
import EvidenceNote from "./EvidenceNote";
import MarkdownBody from "./MarkdownBody";
import RelatedGuides from "./RelatedGuides";
import SourceList from "./SourceList";

export default function GuidePage({ guide, sources, related }: { guide: GuideRecord; sources: Source[]; related: GuideRecord[] }) {
  return <ArticleLayout title={guide.h1} description={guide.description} reviewed={guide.lastReviewed} versionContext={guide.versionContext} status={guide.contentStatus}>
    <section className="direct-answer" aria-labelledby="direct-answer"><p className="eyebrow">Direct answer</p><h2 id="direct-answer">The short version</h2><MarkdownBody body={guide.directAnswer} /></section>
    {guide.sections.map((section) => <section className="article-section" key={section.name}><h2>{section.name}</h2>{section.blocks.map((block, index) => <EvidenceNote key={`${block.heading}-${index}`} block={block} />)}</section>)}
    {guide.quickFacts.length > 0 && <section className="article-section"><h2>Quick facts</h2><div className="table-scroll"><table><thead><tr><th>Fact</th><th>Detail</th></tr></thead><tbody>{guide.quickFacts.map((fact) => <tr key={fact.fact}><th>{fact.fact}</th><td>{fact.detail}</td></tr>)}</tbody></table></div></section>}
    {guide.uncertainties.length > 0 && <section className="article-section uncertainty-list"><h2>Known uncertainties</h2><ul>{guide.uncertainties.map((item) => <li key={item}>{item}</li>)}</ul></section>}
    <RelatedGuides guides={related} />
    <SourceList sources={sources} />
  </ArticleLayout>;
}
