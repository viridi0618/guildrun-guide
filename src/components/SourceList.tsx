import type { Source } from "@/lib/types";
export default function SourceList({ sources }: { sources: Source[] }) { return <section><h2>Sources</h2><ol className="source-list">{sources.map((source) => <li key={source.id}><a href={source.url} rel="noreferrer">{source.title}</a><span>{source.publisherOrAuthor} · {source.level}</span></li>)}</ol></section>; }
