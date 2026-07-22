export type ContentStatus = "draft" | "review" | "ready";
export type EvidenceType = "confirmed-fact" | "community-report" | "editorial-recommendation" | "uncertainty";
export type SourceLevel = "official" | "developer-statement" | "game-store" | "community-reference" | "community-discussion" | "editorial";

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
export interface EvidenceBlock {
  heading: string;
  body: string;
  evidenceType: EvidenceType;
  sourceRefs: string[];
}

export interface GuideSection {
  name: string;
  blocks: EvidenceBlock[];
}

export interface QuickFact {
  fact: string;
  detail: string;
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
  directAnswer: string;
  sourceRefs: string[];
  uncertainties: string[];
  sections: GuideSection[];
  quickFacts: QuickFact[];
  relatedGuides: string[];
  blocker?: string;
}
