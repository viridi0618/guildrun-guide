# Guildrun Guide

Independent, source-aware Guildrun guide site based on the Moonlight Peaks V2 design and engineering baseline at commit `ded3c123606f75076c3d9a553e088821492a1c2c`.

The V1.1 content package is locked to `viridi0618/guildrun-content-site` package head `eaad2c1c4abdc3580d072befe8ea1408bade5c9f` after auditing content commit `4e5daabd9d41cd1d40eac5ae5bd4e9fcf41860bc`. Imported source material is preserved byte-for-byte under `content-input/`; provenance and audit evidence live in the repository root.

This repository intentionally contains no game database, extracted game files, bulk entity pages, or copied Moonlight Peaks content/assets.

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

The public surface contains the homepage and six ready guides. Three review-stage guides are routed for editorial preview with `noindex, follow`, but are excluded from the homepage, navigation, footer, sitemap, and related-guide lists.
