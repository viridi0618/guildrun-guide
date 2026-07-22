import type { ReactNode } from "react";
import type { ContentStatus } from "@/lib/types";
import Breadcrumbs from "./Breadcrumbs";
import UpdatedBadge from "./UpdatedBadge";

export default function ArticleLayout({ title, description, reviewed, versionContext, status, children }: { title: string; description: string; reviewed: string; versionContext: string; status: ContentStatus; children: ReactNode }) {
  return <article className="shell article"><Breadcrumbs current={title} /><UpdatedBadge date={reviewed} />
    {status === "review" && <aside className="review-warning"><strong>Review page</strong><p>This guide is available for preview and editorial review, but it is not indexed or promoted as a finished guide.</p></aside>}
    <h1>{title}</h1><p className="article-lede">{description}</p><p className="version-context">Demo/version context: {versionContext}</p>{children}<p className="article-disclaimer">Unofficial fan-made guide. Not affiliated with Leyline or Guildrun.</p></article>;
}
