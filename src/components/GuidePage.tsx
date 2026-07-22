import type { ReactNode } from "react";
import type { GuideRecord, Source } from "@/lib/types";
import ArticleLayout from "./ArticleLayout";
import SourceList from "./SourceList";
export default function GuidePage({ guide, sources, children }: { guide: GuideRecord; sources: Source[]; children: ReactNode }) { return <ArticleLayout title={guide.h1} description={guide.description} reviewed={guide.lastReviewed} versionContext={guide.versionContext}>{children}<SourceList sources={sources} /></ArticleLayout>; }
