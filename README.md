# Guildrun Guide

Independent, source-aware Guildrun guide site based on the Moonlight Peaks V2 design and engineering baseline at commit `ded3c123606f75076c3d9a553e088821492a1c2c`.

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

The current public surface is deliberately limited to `/`. Candidate guides remain non-routed drafts until the approved content bundle and exact sources are supplied.
