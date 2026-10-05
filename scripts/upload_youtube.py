"""Upload the six shorts and the deep-dive cut to YouTube as unlisted and record each video ID.

Pattern from learn-ai-law (scripts/upload_shorts_youtube.py). Reuses the youtube.upload token
already on this machine; nothing secret is written to the repo.

    python scripts/upload_youtube.py --auth      # sign in only
    python scripts/upload_youtube.py --limit 1   # one upload
    python scripts/upload_youtube.py             # everything not yet uploaded

IDs go to youtube-ids.json (repo root). Re-run scripts/stage_assets.py afterwards so the site plays from YouTube.
Skips any video that already has an ID, so a run that stops on the daily upload cap can resume.
"""
import argparse
import importlib.util
import json
import os
import sys
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

SITE = Path(__file__).resolve().parent.parent
KEYS = Path(os.environ["LOCALAPPDATA"]) / "google-calendar-mcp" / "gcp-oauth.keys.json"
TOKEN = Path(os.environ["LOCALAPPDATA"]) / "learn-ai-law-youtube" / "token.json"  # same channel, same scope
SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]
IDS = SITE / "youtube-ids.json"

DISCLOSURE = (
    "Study video for the Learn SM-6 console: a one-day study of the Raytheon Standard Missile-6 built from open sources "
    "(U.S. Navy, MDA, DOT&E, CRS, CSIS). Visuals generated with NotebookLM. Classified performance is not estimated. "
    "Unlisted: not searchable, reachable only by link."
)

spec = importlib.util.spec_from_file_location("sa", SITE / "scripts" / "stage_assets.py")
sa = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sa)

VIDEOS = [(sid, f"SM-6: {title[0].upper() + title[1:]}", SITE / "media" / "shorts" / f"{sid}.mp4")
          for sid, _src, title, *_ in sa.SHORTS]
VIDEOS.append(("deep-dive-cut", "Raytheon SM-6: deep-dive study cut", SITE / "media" / "deep-dive-cut.mp4"))
CUT_NOTE = "Narration voice is synthetic (ElevenLabs). The narration corrects seven errors on the NotebookLM slides."


def load_creds():
    creds = Credentials.from_authorized_user_file(str(TOKEN), SCOPES) if TOKEN.exists() else None
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    elif not creds or not creds.valid:
        if not KEYS.exists():
            sys.exit(f"OAuth client file not found: {KEYS}")
        creds = InstalledAppFlow.from_client_secrets_file(str(KEYS), SCOPES).run_local_server(port=0, open_browser=True)
    TOKEN.parent.mkdir(parents=True, exist_ok=True)
    TOKEN.write_text(creds.to_json(), encoding="utf-8")
    return creds


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--auth", action="store_true", help="Sign in only. Do not upload.")
    ap.add_argument("--limit", type=int, default=0, help="Upload at most this many missing videos.")
    args = ap.parse_args()

    creds = load_creds()
    if args.auth:
        print(f"Signed in. Token at {TOKEN}")
        return
    youtube = build("youtube", "v3", credentials=creds)
    ids = json.loads(IDS.read_text(encoding="utf-8")) if IDS.exists() else {}
    uploaded = 0
    for sid, title, path in VIDEOS:
        if args.limit and uploaded >= args.limit:
            break
        if ids.get(sid):
            print(f"skip  {sid}  already {ids[sid]}")
            continue
        if not path.exists():
            print(f"missing file  {path}")
            continue
        desc = f"{title}\n\n{DISCLOSURE}" + (f"\n\n{CUT_NOTE}" if sid == "deep-dive-cut" else "")
        body = {"snippet": {"title": title[:100], "description": desc, "categoryId": "27"},
                "status": {"privacyStatus": "unlisted", "selfDeclaredMadeForKids": False, "embeddable": True}}
        media = MediaFileUpload(str(path), mimetype="video/mp4", resumable=True, chunksize=8 * 1024 * 1024)
        request = youtube.videos().insert(part="snippet,status", body=body, media_body=media)
        response = None
        try:
            while response is None:
                status, response = request.next_chunk()
                if status:
                    print(f"  {sid}  {int(status.progress() * 100)}%")
        except HttpError as exc:
            print(f"FAIL  {sid}  {exc}")
            sys.exit(1)
        ids[sid] = response["id"]
        IDS.write_text(json.dumps(ids, indent=2) + "\n", encoding="utf-8")
        uploaded += 1
        print(f"OK    {sid}  {response['id']}  unlisted  ({title})")
    print(f"Uploaded {uploaded}. IDs in {IDS.name}.")


if __name__ == "__main__":
    main()
