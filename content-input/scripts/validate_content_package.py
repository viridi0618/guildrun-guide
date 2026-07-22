#!/usr/bin/env python3
"""Guildrun Content Package Validator — machine-audit for Codex gate checks."""

import re, sys, os, hashlib, json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES_DIR = ROOT / "pages"
SOURCE_LOG = ROOT / "SOURCE_LOG_V2.md"
SUMMARY = ROOT / "CONTENT_REVIEW_SUMMARY.md"

REQUIRED_FILES = [
    "SOURCE_LOG_V2.md",
    "CONTENT_REVIEW_SUMMARY.md",
    "pages/release-date.md",
    "pages/rush-mechanic.md",
    "pages/difficulty-endless.md",
    "pages/reserve-heroes.md",
    "pages/shop-guide.md",
    "pages/beginner-guide.md",
    "pages/beginner-mistakes.md",
    "pages/builds.md",
    "pages/tier-list.md",
]

FORBIDDEN_PLACEHOLDERS = [
    r"\bTBD\b",
    r"\bTODO\b",
    r"to be filled",
    r"Requires source",
    r"<placeholder>",
    r"pending source",
    r"exact source needed",
    r"to be filled after commit",
]

# ── helpers ──

def parse_md_sections(text):
    """Split a page body into sections by ### SectionName header."""
    sections = []
    current_title = None
    current_lines = []
    for line in text.split("\n"):
        if line.startswith("### "):
            if current_title is not None and current_lines:
                sections.append((current_title, "\n".join(current_lines)))
            current_title = line[4:].strip()
            current_lines = []
        else:
            if current_title is not None:
                current_lines.append(line)
    if current_title is not None and current_lines:
        sections.append((current_title, "\n".join(current_lines)))
    return sections


def extract_source_ids_inline(text):
    """Extract source IDs like S01, S03b from text."""
    return set(re.findall(r"\b(S\d{2,3}[a-z]?)\b", text))


def extract_source_refs_field(text):
    """Extract all sourceRefs: [...] declarations."""
    matches = re.findall(r"sourceRefs:\s*\[([^\]]*)\]", text)
    ids = set()
    for m in matches:
        for part in m.split(","):
            sid = part.strip()
            if re.match(r"S\d{2,3}[a-z]?", sid):
                ids.add(sid)
    return ids


def extract_source_registry(text):
    """Extract all source IDs from SOURCE_LOG_V2.md."""
    return set(re.findall(r"^###\s+(S\d{2,3}[a-z]?)\s", text, re.MULTILINE))


def extract_evidence_blocks(section_text):
    """Extract (evidenceType, sourceRefs, body_lines) blocks from a section."""
    blocks = []
    lines = section_text.split("\n")
    i = 0
    body_start = 0
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith("evidenceType:"):
            evtype = re.sub(r"^evidenceType:\s*", "", line).strip()
            sr = set()
            if i + 1 < len(lines) and "sourceRefs:" in lines[i + 1]:
                sr = extract_source_refs_field(lines[i + 1])
                i += 1
            body = "\n".join(lines[body_start:i - max(1, min(2, i - body_start))])
            # capture body from last block transition
            for j in range(body_start, i):
                if lines[j].strip() == "":
                    body_start = j + 1
                    break
            blocks.append({"evidenceType": evtype, "sourceRefs": sr, "body": body})
            body_start = i + 1
        i += 1
    return blocks


def validate_page(filepath):
    """Validate one page, returning (slug, errors, warnings, info)."""
    rel = filepath.relative_to(ROOT)
    text = filepath.read_text(encoding="utf-8")
    slug_match = re.search(r"^slug:\s*(\S+)", text, re.MULTILINE)
    slug = slug_match.group(1) if slug_match else str(rel)
    errors = []
    warnings = []
    info = {}

    # Check for forbidden placeholders
    for pattern in FORBIDDEN_PLACEHOLDERS:
        found = re.findall(pattern, text, re.IGNORECASE)
        if found:
            errors.append(f"Forbidden placeholder found: '{found[0]}' (pattern: {pattern})")

    # Parse structure
    status_match = re.search(r"(?:recommendedStatus|contentStatus):\s*(\S+)", text)
    status = status_match.group(1) if status_match else "unknown"

    # Extract inline source IDs
    inline_ids = extract_source_ids_inline(text)

    # Extract all sourceRefs field values (section-level)
    source_refs_field = extract_source_refs_field(text)

    # Sections
    sections = parse_md_sections(text)
    section_source_unions = set()
    section_evidence_types = []

    for sec_title, sec_body in sections:
        sec_source_ids = extract_source_ids_inline(sec_body)
        sec_source_refs = extract_source_refs_field(sec_body)
        section_source_unions |= sec_source_ids | sec_source_refs

        blocks = extract_evidence_blocks(sec_body)
        for block in blocks:
            et = block["evidenceType"]
            sr = block["sourceRefs"]
            section_evidence_types.append((sec_title[:40], et, sr))

    # Checks
    # 1. sourceRefs declared in sections must exist in source log
    all_declared = source_refs_field | section_source_unions
    info["section_source_union"] = sorted(section_source_unions)
    info["source_refs_field"] = sorted(source_refs_field)
    info["inline_ids"] = sorted(inline_ids)
    info["sections_count"] = len(sections)
    info["evidence_blocks"] = section_evidence_types

    # 2. Check ready requirements
    if status == "ready":
        if not re.search(r"## directAnswer", text):
            errors.append("ready page has no ## directAnswer")
        if not sections:
            errors.append("ready page has no sections")
        if not source_refs_field and not section_source_unions:
            errors.append("ready page has no sourceRefs")

    # 3. Check for empty headings / orphan headings
    for sec_title, sec_body in sections:
        body_stripped = sec_body.strip()
        if not body_stripped:
            warnings.append(f"empty section body: '{sec_title}'")
        if not re.search(r"evidenceType:", sec_body):
            warnings.append(f"section '{sec_title}' has no evidenceType")

    return slug, errors, warnings, info


def main():
    all_errors = []
    all_warnings = []
    page_infos = {}

    # 1. Check required files exist
    for fname in REQUIRED_FILES:
        fp = ROOT / fname
        if not fp.exists():
            all_errors.append(f"MISSING: {fname}")

    # 2. Check S13/S14 absent
    for fname in REQUIRED_FILES:
        fp = ROOT / fname
        if fp.exists():
            text = fp.read_text(encoding="utf-8")
            # Skip self-audit and summary files which may document removal
            if fname in ("CONTENT_REVIEW_SUMMARY.md", "CONTENT_PACKAGE_SELF_AUDIT.md"):
                continue
            if re.search(r"\bS13\b", text):
                all_errors.append(f"S13 found in {fname}")
            if re.search(r"\bS14\b", text):
                all_errors.append(f"S14 found in {fname}")

    # 3. Validate source log registry
    if SOURCE_LOG.exists():
        log_text = SOURCE_LOG.read_text(encoding="utf-8")
        registry = extract_source_registry(log_text)
        if "S13" in registry:
            all_errors.append("S13 still in SOURCE_LOG_V2.md registry")
        if "S14" in registry:
            all_errors.append("S14 still in SOURCE_LOG_V2.md registry")

        # Check Steam URL patterns
        steam_urls = re.findall(r"https://steamcommunity\.com/app/\d+/discussions/[^\s)]+", log_text)
        for url in steam_urls:
            if url.endswith("/discussions/") or url.endswith("/discussions"):
                all_errors.append(f"Steam landing page URL in source log: {url}")

    # 4. Validate each page
    for fname in REQUIRED_FILES:
        if not fname.startswith("pages/"):
            continue
        fp = ROOT / fname
        if not fp.exists():
            continue
        slug, errs, warns, info = validate_page(fp)
        page_infos[slug] = info
        for e in errs:
            all_errors.append(f"[{slug}] {e}")
        for w in warns:
            all_warnings.append(f"[{slug}] {w}")

    # 5. Evidence type rules
    for slug, info in page_infos.items():
        for sec_title, et, sr in info.get("evidence_blocks", []):
            # community-report cannot use game-store sources alone
            if et == "confirmed-fact":
                for sid in sr:
                    if sid in ("S05", "S06", "S07", "S08", "S09", "S10", "S11", "S12"):
                        all_errors.append(
                            f"[{slug}] confirmed-fact references community-discussion source {sid} "
                            f"in section '{sec_title}'"
                        )

    # 6. sourceRefs cross-check
    for slug, info in page_infos.items():
        section_union = set(info.get("section_source_union", []))
        declared = set(info.get("source_refs_field", []))
        inline = set(info.get("inline_ids", []))
        # Remove keywords that appear in text but aren't source IDs
        relevant = {x for x in (section_union | inline) if re.match(r"S\d{2,3}", x)}
        declared_relevant = {x for x in declared if re.match(r"S\d{2,3}", x)}

        # Each declared source must appear in section union or inline
        for sid in declared_relevant:
            if sid not in relevant:
                all_errors.append(f"[{slug}] declared sourceRef {sid} not used in any section body or inline")

        # Each inline/body source must be declared somewhere
        for sid in relevant:
            if sid not in declared_relevant:
                all_warnings.append(f"[{slug}] body uses {sid} but no section declares it in sourceRefs")

    # 7. beginner-mistakes heading check
    if PAGES_DIR.joinpath("beginner-mistakes.md").exists():
        bm = PAGES_DIR.joinpath("beginner-mistakes.md").read_text(encoding="utf-8")
        mistake_headings = re.findall(r"^### (Mistake \d+:.*)$", bm, re.MULTILINE)
        expected = [f"Mistake {i}" for i in range(1, 8)]
        actual = [h.split(":")[0] for h in mistake_headings]
        if len(actual) != 7:
            all_errors.append(f"beginner-mistakes has {len(actual)} Mistake headings (need 7)")
        for i in range(1, 8):
            exp = f"Mistake {i}"
            if exp not in [h.split(":")[0] for h in mistake_headings]:
                all_errors.append(f"beginner-mistakes missing heading: ### {exp}")
        # check no empty "**The fix**:"
        if re.search(r"\*\*The fix\*\*:\s*$", bm, re.MULTILINE):
            all_errors.append("beginner-mistakes has empty 'The fix:' block")

    # ── Report ──
    print("=" * 60)
    print("GUILDRUN CONTENT PACKAGE VALIDATION")
    print("=" * 60)
    print(f"Pages validated: {len(page_infos)}")
    print(f"Errors: {len(all_errors)}")
    print(f"Warnings: {len(all_warnings)}")
    print()

    if all_warnings:
        print("--- WARNINGS ---")
        for w in all_warnings:
            print(f"  W: {w}")
        print()

    if all_errors:
        print("--- ERRORS ---")
        for e in all_errors:
            print(f"  E: {e}")
        print()
        print("VALIDATION FAILED")
        sys.exit(1)

    print("CONTENT PACKAGE VALIDATION PASSED")
    print()

    # Output JSON summary for self-audit
    summary = {
        "pages": {},
        "errors": all_errors,
        "warnings": all_warnings,
        "source_registry_count": len(extract_source_registry(SOURCE_LOG.read_text(encoding="utf-8"))) if SOURCE_LOG.exists() else 0,
    }
    for slug, info in page_infos.items():
        summary["pages"][slug] = {
            "section_source_union": info.get("section_source_union", []),
            "source_refs_field": info.get("source_refs_field", []),
            "sections_count": info.get("sections_count", 0),
            "evidence_blocks_count": len(info.get("evidence_blocks", [])),
        }
    print(json.dumps(summary, indent=2))
    sys.exit(0)


if __name__ == "__main__":
    main()
