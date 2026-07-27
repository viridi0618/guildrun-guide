# Guildrun Guide

Independent, source-aware Guildrun guide site. This repository contains editorial strategy guides and frameworks for the Guildrun Steam demo, based on confirmed official facts from the Steam store page and developer FAQ.

The V1.1 content package is locked to `viridi0618/guildrun-content-site` package head `eaad2c1c4abdc3580d072befe8ea1408bade5c9f` after auditing content commit `4e5daabd9d41cd1d40eac5ae5bd4e9fcf41860bc`. Imported source material is preserved byte-for-byte under `content-input/`; provenance and audit evidence live in the repository root.

This repository intentionally contains no game database, extracted game files, bulk entity pages, or copied content.

## Content architecture

- **`content-input/`** — Read-only imported content package. Do not edit files here. Byte-for-byte provenance is recorded in `CONTENT_PACKAGE_PROVENANCE.md`.
- **`content-local/`** — Locally maintained extension layer. Pages here can add new guides or override imported guides by slug. This layer is audited by the same CI checks but does not participate in the imported package hash validation.
- Runtime content is merged: imported pages are loaded first, then local pages override by matching slug, and new local slugs are appended.

## Current public surface

The site includes a `/guides` index hub and ready + indexable guide pages. Review-stage guides are routed for editorial preview with `noindex, follow`, but are excluded from the homepage, navigation, footer, sitemap, and related-guide lists.

Page status is determined entirely by the content model (`recommendedStatus` and `recommendedIndexable` fields). The ready/review split changes as pages are added, updated, or re-audited.

### Ready (indexable)

The following pages are confirmed ready and indexable:

- /beginner-guide
- /heroes
- /release-date
- /relics
- /reserve-heroes
- /rush-mechanic
- /shop-guide

### Review (noindex)

The following pages are in review and are not indexed or promoted:

- /beginner-mistakes
- /builds — Currently review. No verifiable community build examples with specific source URLs exist. The Steam demo (released July 16, 2026) is approximately 11 days old, and systematic build documentation from the community has not yet emerged.
- /difficulty-endless — Currently review. Specific difficulty names, mechanics, scoring formulas, and enemy scaling data have not been published by the developer. Editorial frameworks are provided, but precise difficulty-specific data is unavailable.
- /tier-list

Builds and difficulty-endless do not appear in the Header, Footer, `/guides` hub, sitemap, or ready-page Related Guides sections.

### Index hub

- /guides — CollectionPage with grouped guide cards for all ready + indexable pages.

## Content rules

Every public guide:
- Answers a real player question
- Cites exact source URLs with Source IDs (S01-S12 for imported layer, L001+ for local layer)
- Separates confirmed-fact, community-report, editorial-recommendation, and uncertainty
- Shows last-reviewed date and version context
- Does not claim to have performed systematic game testing unless such records exist in the repository
- Does not present editorial frameworks as confirmed game mechanics

### Evidence types

- **confirmed-fact** — Steam store, developer FAQ, official announcements, patch notes, developer confirmations
- **community-report** — Concrete Steam/Reddit/YouTube posts. Must include specific post URL, author, and date. Labeled as not independently reproduced.
- **editorial-recommendation** — General advice based on confirmed mechanics, clearly distinguished from confirmed facts
- **uncertainty** — Conflicting sources, unverifiable numbers, version changes, community disagreement

### Source ID namespaces

- **S01-S12** — Imported content package sources
- **L001-L002** — Local extension layer sources (Steam store page, developer FAQ)

## Local validation

Set `NEXT_PUBLIC_SITE_URL=https://guildrunguide.wiki`, then run:

```sh
npm ci
npm run lint
npm run typecheck
npm run build
npm run check:routes
npm run check:seo
npm run check:links
npm run check:content
npm test
```
