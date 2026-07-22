import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import UpdatedBadge from "./UpdatedBadge";
export default function ArticleLayout({ title, description, reviewed, versionContext, children }: { title: string; description: string; reviewed: string; versionContext: string; children: ReactNode }) { return <article className="shell article"><Breadcrumbs current={title} /><UpdatedBadge date={reviewed} /><h1>{title}</h1><p className="article-lede">{description}</p><p className="version-context">Demo/version context: {versionContext}</p>{children}<p className="article-disclaimer">Unofficial fan-made guide. Not affiliated with Leyline or Guildrun.</p></article>; }
