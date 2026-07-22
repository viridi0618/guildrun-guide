# Guildrun Content Integration Diff

## Content treatment

- Imported the locked Package Head D byte-for-byte under `content-input/`.
- Kept Markdown pages plus `SOURCE_LOG_V2.md` as the runtime single source of truth.
- Added build-time parsing only; no game fact, number, mechanism conclusion, evidence label, or article wording was rewritten.

## Runtime integration

- Added a universal `src/app/[slug]/page.tsx` route generated for ready and review pages only.
- Ready pages use `index, follow`; review pages use `noindex, follow` and show a review warning.
- Added article, breadcrumb, and visible-FAQ structured data.
- Added evidence-type presentation, source registry output, quick facts, uncertainties, and ready-only related guides.
- Homepage, header, footer, related-guide surfaces, and sitemap consume ready pages only.
- Removed the unsupported homepage Organization schema.
- Sitemap is limited to the root URL plus six ready guides.

## Validation changes

- Replaced draft-era string checks with parsers for real package status, sections, evidence blocks, and sourceRefs.
- Added generated-route, robots, canonical, Open Graph, schema, link, sitemap, and promotion-surface checks.
- Added tests for status counts, substantive content, source resolution, indexability, sitemap membership, and review-page isolation.
