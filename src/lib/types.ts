export type ContentStatus = "draft" | "review" | "ready";
export type SourceLevel =
  | "official"
  | "developer-statement"
  | "game-store"
  | "community-reference"
  | "community-discussion"
  | "editorial";

export interface Source {
  id: string;
  level: SourceLevel;
  title: string;
  url: string;
  publisherOrAuthor: string;
  publishedAt: string | null;
  capturedAt: string;
  usedFor: string[];
}

export interface GuideRecord {
  slug: string;
  title: string;
  h1: string;
  description: string;
  contentStatus: ContentStatus;
  indexable: boolean;
  lastReviewed: string;
  versionContext: string;
  sourceRefs: string[];
  uncertainties: string[];
  sections: string[];
  relatedGuides: string[];
  blocker?: string;
}
