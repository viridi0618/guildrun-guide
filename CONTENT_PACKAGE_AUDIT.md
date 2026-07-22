# Guildrun Content Package Final Locked Audit

Audit timestamp: `2026-07-22T18:58:51+08:00`

Repository: `viridi0618/guildrun-content-site`

Baseline: `dd997e68cdc70cf9248dd63eb00cadc4961bbaaf`

Audited Content Commit C: `4e5daabd9d41cd1d40eac5ae5bd4e9fcf41860bc`

Package Head Commit D: `eaad2c1c4abdc3580d072befe8ea1408bade5c9f`

## Result

**PASSED — Commit D is locked as the imported package source.**

- D has exactly one parent, Commit C.
- C to D modifies only `CONTENT_PACKAGE_SELF_AUDIT.md`.
- Baseline to D is exactly 7 modified + 1 added = 8 files.
- Current remote `main` contains D; it later advanced by one self-audit label-only commit. The import remains locked to D.
- Commit C validator: `CONTENT PACKAGE VALIDATION PASSED`, exit 0, errors 0, warnings 0.
- Commit D validator: `CONTENT PACKAGE VALIDATION PASSED`, exit 0, errors 0, warnings 0.
- All five validator file reads explicitly use `encoding="utf-8"`; the direct Windows invocation passes.

## Locked change inventory

Modified: `CONTENT_PACKAGE_SELF_AUDIT.md`, `CONTENT_REVIEW_SUMMARY.md`, `pages/beginner-guide.md`, `pages/beginner-mistakes.md`, `pages/release-date.md`, `pages/shop-guide.md`, `pages/tier-list.md`.

Added: `scripts/validate_content_package.py`.

## Independent gate matrix

| Gate | Result |
| --- | --- |
| Release Date has no TODO/TBD/to-be-filled/Requires-source marker | Pass |
| Beginner Mistakes contains exactly Mistake 1 through 7 | Pass |
| Empty `The fix` blocks are absent | Pass |
| Tier List sourceRefs union equals S01,S02,S03,S04,S06,S09 | Pass |
| All nine page unions match Review Summary and Self Audit | Pass |
| All 12 self-audit manifest hashes match imported canonical files | Pass |
| S13/S14 absent from source registry and page bodies | Pass |
| Community discussion never solely supports confirmed-fact | Pass |
| Six ready pages are complete, indexable, sourced, blocker-free | Pass |
| Three review pages remain non-indexable and are not upgraded | Pass |

## Final status matrix

| Status | Pages |
| --- | --- |
| ready (6) | `beginner-guide`, `difficulty-endless`, `release-date`, `reserve-heroes`, `rush-mechanic`, `shop-guide` |
| review (3) | `beginner-mistakes`, `builds`, `tier-list` |
| draft (0) | None |
