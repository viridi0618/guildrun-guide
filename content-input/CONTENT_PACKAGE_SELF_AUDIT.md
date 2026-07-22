# CONTENT_PACKAGE_SELF_AUDIT — Guildrun Content Site V2
## Audit Date: 2026-07-22
## Audited Content Commit: 4e5daabd9d41cd1d40eac5ae5bd4e9fcf41860bc
## Audit Publication Commit: supplied externally; this file does not self-reference its own commit SHA.

---

## Repository

- **Repository**: viridi0618/guildrun-content-site
- **Starting SHA**: dd997e68cdc70cf9248dd63eb00cadc4961bbaaf
- **Audited Content Commit (Commit A)**: 4e5daabd9d41cd1d40eac5ae5bd4e9fcf41860bc

## Git Changes (dd997e6 → 4e5daab)

```
M  CONTENT_PACKAGE_SELF_AUDIT.md
M  CONTENT_REVIEW_SUMMARY.md
M  pages/beginner-guide.md
M  pages/beginner-mistakes.md
M  pages/release-date.md
M  pages/shop-guide.md
M  pages/tier-list.md
A  scripts/validate_content_package.py
```

**7 modified, 1 added, 8 total changed files.**

---

## Mandatory File Manifest

| # | File | SHA-256 |
|---|------|---------|
| 1 | SOURCE_LOG_V2.md | 9a2ebed9c0747d79f3932fd810a03eeec5c011d273a40968ec970033f1659503 |
| 2 | CONTENT_REVIEW_SUMMARY.md | cde60888357dd3bcfffa8456631d83e52a03472c4eef83a0434e4538b602462f |
| 3 | pages/release-date.md | 4183efea9bfd8891bffb19a6d18e5e3558f8c424ebcb53940a1c8b0d7fd9903d |
| 4 | pages/rush-mechanic.md | a92470e54a57722db9995b2063ad77cc731d0771194ff4387b22232d9149d36c |
| 5 | pages/difficulty-endless.md | a26690d00aec2034729c97c78ecf197148bd0bb4efaaf200ceaeed9e7a7ae89b |
| 6 | pages/reserve-heroes.md | bfe7a8eee4e3cff446a18b2f9ed50ea102bc196cca9c7aa106a55accca5995c5 |
| 7 | pages/shop-guide.md | ef75a880c83f72d3f2f9abf46fc21947f8027a57836959311f9d44b3dbe08000 |
| 8 | pages/beginner-guide.md | 9a2b0e5fce67038739985d7b32d8d394638590b85d5012ec453e009bf414b002 |
| 9 | pages/beginner-mistakes.md | 1391ad8d8662c20b3a1356716068c7ac5560391b91ce4cc95e18b5113e48c19f |
| 10 | pages/builds.md | 97dc1b57d59e0d933055086b28b1db2553c9327039e4921e7cfe6cdeb6fd64b2 |
| 11 | pages/tier-list.md | a079678360e8a7bb152ef0ad4d90df3bb21907b1c145c79258784a58f11feb27 |
| 12 | scripts/validate_content_package.py | 10920f77ee8087dfe10677f12c8a503eba16cb8769c30fb51b08690c28517177 |

---

## Page Status & SourceRefs (Machine-Generated)

| Page | Status | sourceRefs | Sections | Evidence Blocks |
|------|--------|------------|----------|-----------------|
| release-date | ready | S01, S11, S12 | 5 | 7 |
| rush-mechanic | ready | S02, S04 | 6 | 6 |
| difficulty-endless | ready | S01, S03, S03b, S05, S10 | 6 | 6 |
| reserve-heroes | ready | S02, S04, S07 | 6 | 6 |
| shop-guide | ready | S03, S04, S07 | 7 | 11 |
| beginner-guide | ready | S01, S02, S03, S04, S05 | 8 | 10 |
| beginner-mistakes | review | S02, S03, S04, S05, S09 | 7 | 13 |
| builds | review | S02, S03, S04, S06 | 6 | 6 |
| tier-list | review | S01, S02, S03, S04, S06, S09 | 6 | 6 |

sourceRefs are section union — all source IDs declared in any evidence block sourceRefs field across all sections of that page.

---

## sourceRefs Consistency

All 9 pages: section_union == source_refs_field. No dangling declared sources. No undeclared body sources.

---

## tier-list sourceRefs

6 source IDs (machine-audited): S01, S02, S03, S04, S06, S09
S08 removed (was dangling — declared but no body content supported by it)
S14 removed (no precise post URL)

---

## Evidence Type Audit

Key changes from previous version:

| Page | Section | Old | New |
|------|---------|-----|-----|
| release-date | Full Release: No Confirmed Date | confirmed-fact (S01+S11+S12 mixed) | confirmed-fact (S01 only) + community-report (S11) + community-report (S12) |
| shop-guide | Reroll Costs | confirmed-fact + editorial mixed | confirmed-fact (cost facts) + editorial-recommendation (spending advice) |
| shop-guide | Freeze Strategy | confirmed-fact (S04+S07 mixed) | confirmed-fact (S04 freeze mechanic) + community-report (S07 bug) |
| shop-guide | Auction House | confirmed-fact + editorial mixed | confirmed-fact (mechanics) + editorial-recommendation (decision guide) |
| beginner-guide | Items and Relics | confirmed-fact + editorial mixed | confirmed-fact (mechanics) + editorial-recommendation (synergy advice) |
| beginner-guide | Status Effects | confirmed-fact + editorial mixed | confirmed-fact (definitions) + editorial-recommendation (usage tips) |
| beginner-guide | The Storm | confirmed-fact (fact + editorial lesson mixed) | confirmed-fact (storm/riftbreaker facts only) |
| beginner-mistakes | Mistake 1 | confirmed-fact + editorial mixed | confirmed-fact (cost) + editorial-recommendation (fix) |
| beginner-mistakes | Mistake 2 | confirmed-fact + editorial mixed | confirmed-fact (definition) + editorial-recommendation (fix) |
| beginner-mistakes | Mistake 5 | editorial-recommendation + community mixed | community-report (SS wall) + editorial-recommendation (progression advice) |
| tier-list | Known Bugs | community-report (S09+S14) | community-report (S09 only — S14 removed) |

---

## S13 / S14

- S13: absent from source registry, pages, summary
- S14: absent from source registry, pages, summary
- Confirmed by validator and grep scan

---

## beginner-mistakes Heading Check

7 heading blocks, all present:
1. ### Mistake 1: Over-Rerolling the Shop
2. ### Mistake 2: Ignoring Rush
3. ### Mistake 3: Bad Freeze Timing
4. ### Mistake 4: Item-Class Mismatch
5. ### Mistake 5: Starting on Too High Difficulty
6. ### Mistake 6: Ignoring Your Reserve
7. ### Mistake 7: The Duelist Animation Trap

No empty "The fix:" blocks. No "Requires source" text.

---

## Placeholder Scan

Zero hits for: TBD, TODO, to be filled, Requires source, <placeholder>, pending source, exact source needed

---

## Difficulty Resolution

- 8 selectable picks total
- 7 standard ladder entries Base–SSS
- Red Rift: 8th pick, separate contract, own leaderboard, no Endless
- Internal indices 0–6: 7 ladder entries only (community-reference from guildrun.wiki)

---

## Validator

```
Command: python3 scripts/validate_content_package.py
Result: CONTENT PACKAGE VALIDATION PASSED
Exit code: 0
Errors: 0
Warnings: 0
```

---

## Final States

- **Ready (6)**: release-date, rush-mechanic, difficulty-endless, reserve-heroes, shop-guide, beginner-guide
- **Review (3)**: beginner-mistakes, builds, tier-list
- **Draft (0)**

## Remaining Blockers

| Page | Blocker |
|------|---------|
| beginner-mistakes | Content overlaps with beginner-guide |
| builds | Directional frameworks only, no hero-specific combos |
| tier-list | Demo 6 days old, no systematic hero rankings |

## Active Sources: 14
S01, S02, S03, S03b, S04, S05, S06, S07, S08, S09, S10, S11, S12, S15
