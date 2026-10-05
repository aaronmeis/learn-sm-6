# Learn SM-6

Study console for a one-day mastery pack on the Raytheon Standard Missile-6 (SM-6). It is the third site built on the learn-[content] pattern (see vault `NEXUS/67 - Learn Study Console Pattern.md`) and the first built from a one-day mastery pack rather than a tech deep dive.

Open sources only. Range, engagement envelope, seeker performance, and probability of kill are classified and are not estimated anywhere on the site. Countermeasures stay at the level of broad classes.

## What is on it

- **Today**: daily three-round challenge (question card from the cut, spot the fix, and a layer / evidence-rung / kill-chain drill), streak, goals.
- **Learn**: 7-block curriculum, five architecture tabs (missile, sensors, command, launch and joint, missions and layers), 6 NotebookLM shorts, the 13-slide deck with flags on 7 slide errors, the narrated 11:54 deep-dive cut, the 16-minute audio overview, and a 49-page library (spine page, pack notes, all 7 NotebookLM reports, the claims table, the source bundle).
- **Practice**: 46 flashcards, 37 quiz questions (including the ten-claim grading drill), 14 analysis traps, 5 study prompts.
- **Reference**: decision rules, progress ladder, glossary, TOGAF/DoDAF lens (study framing), 31-row source ledger.

## Sources of truth

| Content | Where it lives |
|---|---|
| Spine page | `Learning/Weapons/SM-6/SM-6 - Capabilities, Architecture, and Countermeasure Assessment.md` |
| Pack (blocks, glossary, ledger, prompts, cut script) | `Learning/one-day-mastery/sm-6/` |
| NotebookLM media | `C:\output\obsidian\notebooklm\odm-sm-6\` |
| Curated study data | `js/data.js` (hand-written from the pack; every claim cites `[S#]`) |

## Rebuild

```powershell
$env:PYTHONUTF8="1"
python scripts\stage_assets.py      # media, slides, emblems, shorts catalog, js/cut.js
python scripts\build_library.py     # library/*.html + manifest
python scripts\coverage_audit.py    # every pack and NotebookLM file mapped, or exit 1
python -m http.server 8766          # then open http://127.0.0.1:8766/
```

Progress is stored in the browser under the `ls6:` prefix.
