"""Check that every file in the SM-6 pack, its spine page, and its NotebookLM output folder is reachable on the site.

Usage: python scripts/coverage_audit.py [--all]
Prints one line per file: where it lives on the site, EXCLUDED with a reason, or MISSING. Exits 1 if anything is MISSING.
"""
import hashlib
import importlib.util
import json
import re
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("bl", SITE / "scripts" / "build_library.py")
bl = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bl)
spec2 = importlib.util.spec_from_file_location("sa", SITE / "scripts" / "stage_assets.py")
sa = importlib.util.module_from_spec(spec2)
spec2.loader.exec_module(sa)

PACK, OUT = bl.PACK, bl.OUT
SKIP_DIRS = {"_deep_dive_cut"}  # video build intermediates: segments, card renders, narration clips

# Not postable per NEXUS 67 (progress logs, scratch notes, operator commands, runner stubs).
EXCLUDED = {
    "progress log.md": "progress log (NEXUS 67: not postable)",
    "notes.md": "scratch note (NEXUS 67: not postable)",
    "operator-commands.md": "operator commands (NEXUS 67: not postable)",
    "notebooklm_w8_odm-sm-6.ps1": "runner stub with local paths (NEXUS 67: not postable)",
}

md5 = lambda p: hashlib.md5(p.read_bytes()).hexdigest()
pages = {str(Path(path).resolve()).lower(): slug for slug, path, *_ in bl.PAGES}
lib_hashes = {md5(Path(k)): s for k, s in pages.items() if Path(k).is_file()}
site_files = {p.name.lower(): p for p in SITE.rglob("*") if p.is_file() and ".git" not in p.parts}
local_shorts = {src.lower(): sid for sid, src, *_ in sa.SHORTS}
special = {
    "upgrades for sm-6 missile analyst training.m4a": "media/audio-overview.m4a (Deck page)",
    "raytheon sm-6 capability assessment.pdf": "assets/downloads/sm-6-capability-assessment.pdf (Deck page)",
    "odm-sm-6-presentation.pptx": "assets/downloads/sm-6-deck.pptx (Deck page)",
    "odm-sm-6-deep-dive-cut.mp4": "media/deep-dive-cut.mp4 (Deck page)",
    "mindmap.md": "library/spine.html (Mode A intake: same text as the spine page)",
    "01-mindmap.md": "library/spine.html (as uploaded: same text as the spine page)",
}


def where(p: Path):
    key = str(p.resolve()).lower()
    if key in pages:
        return f"library/{pages[key]}.html"
    n = p.name.lower()
    if n in EXCLUDED:
        return "EXCLUDED: " + EXCLUDED[n]
    if n in special:
        return special[n]
    m = re.fullmatch(r"slide(\d+)\.jpg", n)
    if m:
        return f"assets/slides/slide-{int(m.group(1)):02d}.jpg (Deck page)"
    if p.suffix.lower() == ".mp4" and p.stem.lower() in local_shorts:
        sid = local_shorts[p.stem.lower()]
        return f"media/shorts/{sid}.mp4 (Shorts: {sid})"
    if p.suffix.lower() in (".md", ".csv", ".json") and md5(p) in lib_hashes:
        return f"library/{lib_hashes[md5(p)]}.html (identical copy)"
    if n in ("shorts-topics.json", "shorts-manifest.json"):
        return "library/media-shorts-plan.html (plan and manifest)"
    if n in site_files:
        return f"site file {site_files[n].relative_to(SITE)}"
    return None


missing = 0
roots = [(PACK, PACK.rglob("*")), (OUT, OUT.rglob("*")), (bl.WEAPONS, bl.WEAPONS.rglob("*"))]
for root, files in roots:
    print(f"\n== {root}")
    for p in sorted(files):
        if not p.is_file() or SKIP_DIRS & set(p.parts):
            continue
        w = where(p)
        if w is None:
            missing += 1
            print(f"MISSING  {p.relative_to(root)}")
        elif "--all" in sys.argv or w.startswith("EXCLUDED"):
            print(f"ok       {p.relative_to(root)}  ->  {w}")
skipped = sum(1 for _ in (OUT / "_deep_dive_cut").rglob("*")) if (OUT / "_deep_dive_cut").exists() else 0
print(f"\nskipped build intermediates: {skipped} files in _deep_dive_cut")
print(f"{missing} missing")
sys.exit(1 if missing else 0)
