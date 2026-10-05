"""Copy and downsize SM-6 media from C:\\output into the site folder.

Re-run after regenerating the NotebookLM suite. Skips files that already exist unless --force.
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image

SITE = Path(__file__).resolve().parent.parent
OUT = Path(r"C:\output\obsidian\notebooklm\odm-sm-6")
NBLM = OUT / "NEXUS _ odm-sm-6 _ 2026-10-05 _ one-day-mastery"
PACK = Path(r"C:\obsidian\personal_research_2026\Learning\one-day-mastery\sm-6")
FORCE = "--force" in sys.argv

# (site id, NotebookLM file title, site title, tag, pillar, keywords). The first five pillars are fixed in js/enhance.js.
SHORTS = [
    ("01-over-the-horizon", "How the SM-6 Sees Over the Horizon", "How SM-6 sees over the horizon", "Block 1 · core concepts", "Kill chain",
     ["over-the-horizon", "horizon", "nifc-ca", "e-2d", "cec", "active seeker", "endpoint", "kill web"]),
    ("02-layered-defense", "How Layered Missile Defense Catches Ballistic Threats", "How layered defense catches ballistic threats", "Block 2 · mental models", "Missions and layers",
     ["sm-3", "layer", "terminal", "midcourse", "exo-atmospheric", "endo-atmospheric", "hit-to-kill", "blast-fragmentation"]),
    ("03-nifc-ca", "How NIFC-CA Kills Over-The-Horizon Threats", "How NIFC-CA engages over the horizon", "Block 1 · core concepts", "Kill chain",
     ["nifc-ca", "cec", "e-2d", "engage-on-remote", "aegis", "track", "seeker"]),
    ("04-evidence-ladder", "How the Evidence Ladder Decodes Missile Tests", "How the evidence ladder grades missile tests", "Block 5 · edge cases", "Evidence",
     ["ftm-32", "ftx-40", "dot&e", "evidence", "operational", "hypersonic", "simulated", "rung"]),
    ("05-one-round-one-cell", "One Round, One Cell", "One round, one cell", "Block 7 · application", "Economics",
     ["cell", "vls", "mk 41", "magazine", "cost", "essm", "cost-exchange", "unit cost"]),
    ("06-kill-web", "How the SM-6 Kill Web Works", "How the SM-6 kill web works", "Block 2 · mental models", "Kill chain",
     ["kill web", "sense", "share", "decide", "typhon", "aim-174b", "block ib"]),
]

# YouTube IDs (unlisted uploads). Empty: the site plays the local MP4.
YOUTUBE = json.loads((SITE / "youtube-ids.json").read_text(encoding="utf-8")) if (SITE / "youtube-ids.json").exists() else {}

SLIDES = 13


def duration(path: Path) -> float:
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
                         capture_output=True, text=True, check=True).stdout
    return float(out.strip())


def copy(src: Path, dst: Path):
    if dst.exists() and not FORCE:
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    print("copied", dst.relative_to(SITE))


def resize(src: Path, dst: Path, width: int, quality=82):
    if dst.exists() and not FORCE:
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(dst, "JPEG", quality=quality, optimize=True)
    print("resized", dst.relative_to(SITE))


def crop_square(src: Path, dst: Path, cx: int, cy: int, size: int, out=320):
    if dst.exists() and not FORCE:
        return
    im = Image.open(src).convert("RGB")
    h = size // 2
    im.crop((cx - h, cy - h, cx + h, cy + h)).resize((out, out), Image.LANCZOS).save(dst, "JPEG", quality=85)
    print("emblem", dst.relative_to(SITE))


def main():
    items = []
    for name, src_title, title, tag, pillar, keywords in SHORTS:
        mp4 = SITE / "media" / "shorts" / f"{name}.mp4"
        copy(NBLM / f"{src_title}.mp4", mp4)
        poster = SITE / "media" / "posters" / f"{name}.webp"
        if FORCE or not poster.exists():
            poster.parent.mkdir(parents=True, exist_ok=True)
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", "4", "-i", str(mp4), "-frames:v", "1",
                            "-vf", "scale=360:-2", "-q:v", "70", str(poster)], check=True)
            print("poster", poster.relative_to(SITE))
        items.append({"id": name, "name": name, "title": title, "tag": tag, "pillar": pillar, "keywords": keywords,
                      "duration": round(duration(mp4)), "poster": f"media/posters/{name}.webp",
                      "file": "" if YOUTUBE.get(name) else f"media/shorts/{name}.mp4",
                      "youtube": YOUTUBE.get(name, ""), "status": "ready"})
    catalog = {
        "notebook_alias": "odm-sm-6",
        "title": "Learn SM-6 - NotebookLM shorts",
        "deep_dive": {"file": "media/deep-dive-cut.mp4", "youtube": YOUTUBE.get("deep-dive-cut", "")},
        "total": len(items), "ready": len(items), "items": items}
    (SITE / "shorts-catalog.json").write_text(json.dumps(catalog, indent=2), encoding="utf-8")
    (SITE / "shorts-catalog.js").write_text("window.SHORTS = " + json.dumps(catalog) + ";\n", encoding="utf-8")

    # Deep-dive cut script (vault is the source of truth) -> DATA.cut for the deck page and the daily challenge
    cut = json.loads((PACK / "video" / "cut-script.json").read_text(encoding="utf-8"))
    keep = {k: cut[k] for k in ("labels", "slides", "cards", "open", "recap", "close")}
    (SITE / "js" / "cut.js").write_text(
        "/* Generated by scripts/stage_assets.py from the pack's video/cut-script.json. Do not edit. */\n"
        "DATA.cut = " + json.dumps(keep, indent=1, ensure_ascii=False) + ";\n", encoding="utf-8")

    copy(OUT / "odm-sm-6-deep-dive-cut.mp4", SITE / "media" / "deep-dive-cut.mp4")
    copy(NBLM / "Upgrades for SM-6 Missile Analyst Training.m4a", SITE / "media" / "audio-overview.m4a")

    deck = OUT / "odm-sm-6-presentation"
    for i in range(1, SLIDES + 1):
        resize(deck / f"Slide{i}.JPG", SITE / "assets" / "slides" / f"slide-{i:02d}.jpg", 1600)
    copy(NBLM / "Raytheon SM-6 Capability Assessment.pdf", SITE / "assets" / "downloads" / "sm-6-capability-assessment.pdf")
    copy(OUT / "odm-sm-6-presentation.pptx", SITE / "assets" / "downloads" / "sm-6-deck.pptx")

    # Emblems cropped from the deck (coordinates in the 3911 x 2200 originals)
    crop_square(deck / "Slide3.JPG", SITE / "assets" / "hero.jpg", 2930, 775, 640)
    crop_square(deck / "Slide4.JPG", SITE / "assets" / "killchain.jpg", 2450, 900, 900)
    crop_square(deck / "Slide6.JPG", SITE / "assets" / "layers.jpg", 2190, 500, 320)
    crop_square(deck / "Slide9.JPG", SITE / "assets" / "evidence.jpg", 520, 1150, 1000)
    crop_square(deck / "Slide8.JPG", SITE / "assets" / "roadmap.jpg", 1900, 1250, 1100)
    crop_square(deck / "Slide13.JPG", SITE / "assets" / "economics.jpg", 900, 900, 800)
    for size in (192, 512):
        icon = SITE / "assets" / "icons" / f"icon-{size}.png"
        if FORCE or not icon.exists():
            icon.parent.mkdir(parents=True, exist_ok=True)
            Image.open(SITE / "assets" / "hero.jpg").resize((size, size), Image.LANCZOS).save(icon, "PNG", optimize=True)
            print("icon", icon.relative_to(SITE))


if __name__ == "__main__":
    main()
