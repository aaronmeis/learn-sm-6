/* ============================================================
   SOURCE LEDGER (Learning/one-day-mastery/sm-6/reference/source-ledger.md, open sources only)
   ============================================================ */
const SOURCES = [
  {n:1,g:"Program and official",t:"U.S. Navy Fact File: Standard Missile",u:"https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169011/standard-missile/",type:"official docs",trust:"high",b:"1"},
  {n:2,g:"Oversight and independent test",t:"CRS RL33745: Navy Aegis Ballistic Missile Defense Program",u:"https://www.congress.gov/crs-product/RL33745",type:"CRS report",trust:"high",b:"1,2,5"},
  {n:3,g:"Oversight and independent test",t:"DOT&E FY2024 Annual Report: SM-6",u:"https://www.dote.osd.mil/Portals/97/pub/reports/FY2024/navy/2024sm-6.pdf",type:"independent test",trust:"high",b:"2,5"},
  {n:4,g:"Oversight and independent test",t:"DOT&E FY2022 Annual Report: SM-6 Family of Missiles",u:"https://www.dote.osd.mil/Portals/97/pub/reports/FY2022/navy/2022sm-6.pdf",type:"independent test",trust:"high",b:"5"},
  {n:5,g:"Test events",t:"MDA: FTM-32 intercept with SM-6 Dual II",u:"https://www.mda.mil/news/24news0004.html",type:"official",trust:"high",b:"3,5"},
  {n:6,g:"Test events",t:"MDA: FTX-40 hypersonic tracking event",u:"https://www.mda.mil/news/25news0002.html",type:"official",trust:"high",b:"5"},
  {n:7,g:"Test events",t:"NAVSEA: longest-range AAW intercept from USS Princeton (NIFC-CA)",u:"https://www.navsea.navy.mil/Media/News/Article-View/Article/959422/navy-conducts-longest-range-aaw-intercept-from-uss-princeton/",type:"official",trust:"high",b:"1,2"},
  {n:8,g:"Program and official",t:"NAVSEA: Cooperative Engagement Capability",u:"https://www.navsea.navy.mil/Media/News/Article-View/Article/4281878/cooperative-engagement-capability-enhancing-battlefield-awareness/",type:"official",trust:"high",b:"1,2"},
  {n:9,g:"Analysis",t:"CSIS Missile Threat: Standard Missile-6",u:"https://missilethreat.csis.org/defsys/sm-6/",type:"think tank",trust:"high",b:"1,3"},
  {n:10,g:"Analysis",t:"CSIS: Cost and Value in Air and Missile Defense Intercepts",u:"https://www.csis.org/analysis/cost-and-value-air-and-missile-defense-intercepts",type:"think tank",trust:"high",b:"2,7"},
  {n:11,g:"Analysis",t:"CSIS: Rebuilding U.S. Missile Inventory (May 2026)",u:"https://www.csis.org/analysis/rebuilding-us-missile-inventory-multiyear-project",type:"think tank",trust:"high",b:"5,7"},
  {n:12,g:"Program and official",t:"U.S. Navy Fact File: AIM-174B Gunslinger",u:"https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/4580875/aim-174b-gunslinger-sm-6-air-launched-configuration/",type:"official",trust:"high",b:"1"},
  {n:13,g:"Program and official",t:"USARPAC: Mid-Range Capability first deployment to the Philippines",u:"https://www.usarpac.army.mil/Our-Story/Our-News/Article-Display/Article/3740807/us-armys-mid-range-capability-makes-its-first-deployment-in-the-philippines-for/",type:"official",trust:"high",b:"1,7"},
  {n:14,g:"Vendor (used with caution)",t:"RTX: SM-6 integration with LTAMDS and IBCS",u:"https://www.rtx.com/news/news-center/2024/07/18/rtxs-raytheon-demonstrates-sm-6-integration-with-ltamds-and-ibcs",type:"vendor",trust:"medium",b:"2"},
  {n:15,g:"Analysis",t:"Naval News: Block IB 'strategic pause'",u:"https://www.navalnews.com/naval-news/2025/07/another-u-s-navy-hypersonic-program-halted-in-strategic-pause/",type:"trade press",trust:"medium",b:"5"},
  {n:16,g:"Program and official",t:"SM-6 Modernized Selected Acquisition Report (Dec 2023)",u:"https://www.esd.whs.mil/Portals/54/Documents/FOID/Reading%20Room/Selected_Acquisition_Reports/FY_2023_SARS/SM-6_MSAR_Dec_2023.pdf",type:"official acquisition",trust:"high",b:"5,7"},
  {n:17,g:"Named talks and videos",t:"MDA video: Flight Test Aegis Weapon System-32 (FTM-32)",u:"https://www.youtube.com/watch?v=9v2Gw0Vorcg",type:"video",trust:"high",b:"3,5"},
  {n:18,g:"Named talks and videos",t:"CSIS Maritime Security Dialogue: The Aegis Approach (RADM Tom Druggan)",u:"https://www.youtube.com/watch?v=p8lOTEaSRgY",type:"video (talk)",trust:"high",b:"1,2"},
  {n:19,g:"Named talks and videos",t:"CSIS: MDA and the 2025 Budget (LTG Heath Collins)",u:"https://www.youtube.com/watch?v=GDe55DKViwc",type:"video (talk)",trust:"high",b:"5,7"},
  {n:20,g:"Named talks and videos",t:"MDA video: Glide Phase Interceptor scenario animation",u:"https://www.youtube.com/watch?v=-q-ieXZgrhY",type:"video (concept)",trust:"high",b:"2"},
  {n:21,g:"Named talks and videos",t:"MDA video: Multi-Mission Warfare events with SM-6 Dual I and SM-2",u:"https://www.youtube.com/watch?v=YLZEzQnBhCo",type:"video",trust:"high",b:"3"},
  {n:22,g:"Named talks and videos",t:"RTX video: Valiant Shield 24 integrated mission scenario",u:"https://www.youtube.com/watch?v=nuOtj3OZQTk",type:"video (vendor)",trust:"medium",b:"2"},
  {n:23,g:"Vendor (used with caution)",t:"RTX: SM-6 missile product page",u:"https://www.rtx.com/raytheon/what-we-do/sea/sm-6-missile",type:"vendor",trust:"medium",b:"1"},
  {n:24,g:"Vendor (used with caution)",t:"RTX: Fast track, critical munitions agreements (Feb 2026)",u:"https://www.rtx.com/news/2026/02/04/munitions-agreements",type:"vendor",trust:"medium",b:"5,7"},
  {n:25,g:"Program and official",t:"DoD FY2025 Program Acquisition Costs by Weapon System",u:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2025/FY2025_Weapons.pdf",type:"official budget",trust:"high",b:"5,7"},
  {n:26,g:"Program and official",t:"MDA: Aegis Ballistic Missile Defense",u:"https://www.mda.mil/system/aegis_bmd.html",type:"official",trust:"high",b:"2"},
  {n:27,g:"Program and official",t:"DSCA: Japan SM-6 Block I possible sale (Jan 2025)",u:"https://www.dsca.mil/Press-Media/Major-Arms-Sales/Tag/297112/standard-missile-6-sm-6-block-i-missiles",type:"official",trust:"high",b:"7"},
  {n:28,g:"Vendor (used with caution)",t:"RTX: SPY-6 family of radars",u:"https://www.rtx.com/raytheon/what-we-do/sea/spy6-radars",type:"vendor",trust:"medium",b:"1"},
  {n:29,g:"Analysis",t:"TWZ: Replenishing missiles used against Houthi threats",u:"https://www.twz.com/news-features/replenishing-missiles-used-to-down-houthi-threats-will-require-extra-funding",type:"trade press",trust:"medium",b:"5,7"},
  {n:30,g:"Test events",t:"MDA: Aegis BMD news gallery (FTM-31 E1a)",u:"https://www.mda.mil/news/gallery_aegis.html",type:"official",trust:"high",b:"3,5"},
  {n:31,g:"Oversight and independent test",t:"CRS IF11353: Defense Primer, U.S. Precision-Guided Munitions",u:"https://www.congress.gov/crs-product/IF11353",type:"CRS report",trust:"high",b:"1"}
];

/* ============================================================
   CURRICULUM, LADDER, PROMPTS, TRAPS, RULES, QUIZ, VIEWS, EA
   ============================================================ */
const DATA = {
  weeks:[
    {n:1,title:"Core concepts",time:"60 min",rungs:"100",lib:"block-01-core-concepts",
     opener:"SM-6 does three jobs on one airframe, but its reach comes from the network around it. Fix the vocabulary before you judge any claim [S1], [S9].",
     obj:"Identity (RIM-174 ERAM), lineage, the three core missions and two extensions, and the parts of the kill chain: sensors, CEC, Aegis, the Mk 41 launcher, the seeker, and the warhead.",
     deliv:"Concept list of at least 15 terms written; three weak terms marked.",
     mods:[
       {t:"Identity: RIM-174 Extended Range Active Missile, initial operational capability November 2013 [S31]",rl:"identity · 100",
        action:"Write one line each for RIM-174 ERAM, active homing, semi-active homing, blast-fragmentation, hit-to-kill, endo-atmospheric, exo-atmospheric, and terminal phase.",
        lookLike:"<b>Concept lines (example)</b><pre>Active homing   the missile's own radar finds the target at the end\nSemi-active     the missile homes on energy the ship's illuminator\n                bounces off the target\nBlast-frag      proximity warhead; SM-6, inside the atmosphere\nHit-to-kill     direct collision; SM-3, outside the atmosphere</pre>",
        whyMatters:"Every later argument uses these words. A brief that mixes up blast-fragmentation and hit-to-kill has already confused SM-6 with SM-3."},
       {t:"Lineage: SM-2 Block IV airframe, SM-3-family booster and motor, AMRAAM-derived seeker [S9]",rl:"identity · 100",
        action:"Sketch the missile from tail to nose and label where each part came from.",
        whyMatters:"Reusing proven parts is how the Navy fielded the missile in 2013. It also explains why a new motor (Block IB) is the hard upgrade."},
       {t:"Three core missions and two extensions [S1], [S2]",rl:"missions · 100",
        action:"List extended-range air warfare, terminal ballistic-missile defense (Sea-Based Terminal), and anti-surface warfare; then counter-hypersonic (development) and AIM-174B (air launch).",
        lookLike:"<b>Mission card</b><pre>AAW           aircraft, UAVs, cruise missiles, incl. over the horizon\nTerminal BMD  short/medium-range ballistic missiles, last phase\nASuW          ships and surface targets\n+ hypersonic  simulated engagement only (FTX-40, 2025)\n+ AIM-174B    air-launched from the F/A-18E/F</pre>",
        whyMatters:"The missions are proven to different degrees. Keep them separate so a claim about one does not borrow evidence from another."},
       {t:"Kill-chain parts: SPY radar, E-2D, CEC, Aegis Baseline 9, NIFC-CA, Mk 41 [S7], [S8]",rl:"kill chain · 100",
        action:"Write one line each and mark which parts the firing ship owns and which it borrows.",
        whyMatters:"The borrowed parts (an E-2D, other ships, space sensors) are where the over-the-horizon reach comes from, and where it can be lost."},
       {t:"Joint and land: Typhon, IBCS, LTAMDS, AIM-174B [S13], [S14], [S12]",rl:"joint · 200",
        action:"Mark which are fielded (Typhon, AIM-174B) and which was a simulation (the IBCS and LTAMDS link at Valiant Shield 2024).",
        whyMatters:"The Army story is easy to overstate. Typhon fires SM-6. An Army SM-6 air-defense battery tied to IBCS is not fielded."}
     ],
     vids:[{s:1},{s:9},{s:18}]},
    {n:2,title:"Mental models",time:"45 min",rungs:"100-200",lib:"block-02-mental-models",
     opener:"Experts hold five models at once: the kill web, the layers, the evidence ladder, the two upgrade axes, and magazine economics. Each answers a different question.",
     obj:"When to use each model, how to apply it, and the failure mode it prevents.",
     deliv:"Five models captured with when, how, and failure; one diagram connecting them.",
     mods:[
       {t:"M1 Kill web, not missile: capability is the weakest link of Sense, Share, Decide, Act, Assess [S7], [S8]",rl:"kill chain · 200",
        action:"Map each link to a system and to one way it can fail.",
        lookLike:"<b>Six layers (spine page, enterprise-architecture view)</b><pre>Sense    SPY-1/SPY-6, E-2D, space sensors, LTAMDS\nShare    CEC, IBCS\nDecide   Aegis weapon control, battery operations center\nAct      Mk 41, Typhon, F/A-18E/F, SM-6\nAssess   ship, airborne, and joint sensors\nSustain  magazines, depots, production</pre>",
        whyMatters:"If the track is wrong or late, the missile's range does not matter. The odds multiply down the chain."},
       {t:"M2 Layers by phase and altitude [S2], [S26]",rl:"layers · 100",
        action:"Place SM-3 (outside the atmosphere, midcourse, hit-to-kill), GPI (glide phase, future), SM-6 (inside the atmosphere, terminal, blast-fragmentation), and ESSM and SM-2 (inner layers).",
        whyMatters:"SM-6 is not a substitute for SM-3's broad-area midcourse defense. Terminal geometry and reaction time are demanding."},
       {t:"M3 The evidence ladder [S3], [S5], [S6]",rl:"evidence · 200",
        action:"Order the rungs: vendor claim, concept animation, simulated engagement, developmental live intercept, exercise against a real target, DOT&E operational test, combat record.",
        whyMatters:"The most common analysis error is reading a developmental live intercept as an operational-test result."},
       {t:"M4 Two upgrade axes [S4], [S15]",rl:"roadmap · 200",
        action:"Sort Block IA, Dual I, Dual II and SWUP, and Block IAU (electronics and software) from Block IB (a new motor).",
        whyMatters:"Software changes ride the existing airframe. A motor change brings qualification, thermal, structural, and test risk, and Block IB was paused."},
       {t:"M5 Magazine economics [S10]",rl:"economics · 200",
        action:"Write the rule: one round, one cell; save SM-6 for targets that need it.",
        whyMatters:"Cost-exchange ratios ignore the value of what is protected. At sea the binding limit is cells and reloads."}
     ],
     vids:[{s:20},{s:10},{s:3}]},
    {n:3,title:"Active practice",time:"90 min",rungs:"200-300",lib:"block-03-active-practice",
     opener:"Four drills, closed-book first, then checked against the spine page. Score yourself.",
     obj:"Rebuild the kill chain from memory, grade ten public claims, draw the variant tree, and assign layers to threat classes.",
     deliv:"Drill A scored (target 18 of 21); ten claims graded with an event named for each; variant tree drawn; layer table filled with silences marked.",
     mods:[
       {t:"Drill A: the seven-step engagement sequence from memory",rl:"kill chain · 200",
        action:"Write each step, the system that does it in NIFC-CA, and one dependency that can fail. One point each: 21 points.",
        lookLike:"<b>Answer key</b><pre>1 detect, classify   SPY, E-2D, space   track quality\n2 share track        CEC                latency\n3 evaluate, assign   Aegis Baseline 9   identity\n4 launch             Mk 41              cell available\n5 update in flight   datalink           link continuity\n6 terminal homing    SM-6 seeker        acquisition\n7 kill assessment    sensors            re-engage?</pre>",
        whyMatters:"This is the functional abstraction on the spine page, not classified engagement logic. You do not need that logic to reason about where a shot can fail."},
       {t:"Drill B: grade ten public claims [S3], [S5], [S6]",rl:"evidence · 300",
        action:"For each claim give a status (demonstrated, demonstrated with limits, not public, false as stated), the event behind it, and what it did not establish. Check yourself in the Quiz, section 'Evidence and claims'.",
        whyMatters:"This is the skill the day exists to build."},
       {t:"Drill C: the variant family tree",rl:"roadmap · 200",
        action:"Draw two axes: electronics and software versus kinematics, and missions added. Place Block I, IA, Dual I, Dual II and SWUP, IAU, IB, and AIM-174B.",
        whyMatters:"Variant names overlap. A tree stops you mixing an air-warfare block with a ballistic-missile configuration."},
       {t:"Drill D: layer assignment for six threat classes [S10]",rl:"layers · 200",
        action:"For each threat class name the layer or effector family the sources point to, and mark where they are silent.",
        whyMatters:"The sources give principles, not firing doctrine. Say so when they are silent."}
     ],
     vids:[{s:17},{s:21},{s:9}]},
    {n:4,title:"Teach it",time:"30 min",rungs:"200",lib:"block-04-teach-it",
     opener:"Teach SM-6 as an endpoint in a network, not as a specification sheet.",
     obj:"A five-minute teach-back and a two-minute executive version.",
     deliv:"Both versions delivered aloud; stalls listed and fixed.",
     mods:[
       {t:"Five-minute version: hook, what it is, how it reaches, proven versus not, limits",rl:"synthesis · 200",
        action:"Teach it aloud without notes. Record it if you can.",
        lookLike:"<b>Running order</b><pre>0:00 hook      'three missiles in one' is really one kill-web endpoint\n0:30 what      lineage, seeker, warhead, Mk 41, Typhon, AIM-174B\n1:30 reach     NIFC-CA: earlier, bigger area, more engagements\n3:00 evidence  FTM-32 live; FTX-40 simulated; the DOT&E caveat\n4:30 limits    one cell, cost, offboard tracks, Block IB pause</pre>",
        whyMatters:"If you cannot say it, you cannot defend it in a review."},
       {t:"Two-minute executive version",rl:"synthesis · 200",
        action:"Cut the system names. Keep the claims and the evidence behind them.",
        whyMatters:"A decision-maker needs the claim, how strong the evidence is, and the cost of being wrong."},
       {t:"Fix the stalls",rl:"synthesis · 100",
        action:"List where you stalled and fix each one with a short source check, not a full re-read.",
        whyMatters:"Typical stalls: engage-on-remote without jargon, and why the active seeker frees the ship's illuminators."}
     ],
     vids:[{s:18}]},
    {n:5,title:"Edge cases",time:"45 min",rungs:"300",lib:"block-05-edge-cases",
     opener:"Most SM-6 mistakes are about evidence and numbers, not engineering.",
     obj:"Fourteen analysis traps, each with its tell, root cause, and fix (see Analysis traps).",
     deliv:"Traps worked closed-book; top three on the cheatsheet.",
     mods:[
       {t:"Read the two DOT&E reports [S3], [S4]",rl:"evidence · 300",
        action:"Note exactly what DOT&E says FTM-32 was not designed to determine, and the finding on contested electromagnetic and cyber survivability.",
        whyMatters:"DOT&E is the only public source on operational effectiveness. What it does not say is information too."},
       {t:"Work the trap table",rl:"evidence · 300",
        action:"On the Analysis traps page, cover the mitigation and say the cause and fix aloud for each trap.",
        whyMatters:"These are the errors real briefs make."},
       {t:"Numbers with their bases [S16], [S25], [S29], [S24], [S11]",rl:"economics · 300",
        action:"Reconcile $2.97M (constant FY2004 APUC), about $4.3M (then-year), $24.4B (framework ceiling), and 540 (FY2027 request).",
        lookLike:"<b>Reconciliation</b><pre>$2.97M   APUC, constant FY2004 dollars, 2,478 rounds   [S16]\n~$4.3M   then-year cost per round (budget analysis)     [S29]\n125      Block IA rounds funded in FY2025               [S25]\n$24.4B   framework potential value, 5 + 2 years         [S24]\n>500/yr  production objective, not a funded quantity    [S24]\n540      requested in FY2027; 36-39 month lead time     [S11]</pre>",
        whyMatters:"A number without a basis and a year misleads, however precise it looks."}
     ],
     vids:[{s:3},{s:4},{s:6},{s:15}]},
    {n:6,title:"Spaced review",time:"20 min",rungs:"100-200",lib:"block-06-spaced-review",
     opener:"Retrieval without re-reading.",
     obj:"Closed-book quiz, restudy only the misses, and schedule the 24-hour and 7-day reviews.",
     deliv:"Quiz attempted closed-book; misses restudied; reviews scheduled.",
     mods:[
       {t:"Closed-book quiz",rl:"review · 200",
        action:"Answer the Quiz sections without notes, then grade yourself.",
        whyMatters:"Retrieval is what moves facts into long-term memory."},
       {t:"Flashcards: the essentials deck",rl:"review · 100",
        action:"Run the essentials deck until every card reaches box 3.",
        whyMatters:"The boxes schedule each card's next review for you."},
       {t:"Schedule the 24-hour and 7-day reviews",rl:"review · 100",
        action:"Use the Today challenge as the daily habit.",
        whyMatters:"One day of study fades without spaced review."}
     ],
     vids:[]},
    {n:7,title:"Application",time:"60 min",rungs:"300",lib:"block-07-application",
     opener:"Produce one durable artifact that a decision-maker or an architect could use.",
     obj:"Option A: an evidence-graded one-page brief. Option B: an enterprise-architecture view of SM-6 as an effector service.",
     deliv:"Artifact saved in learning-records; learning record written.",
     mods:[
       {t:"Option A: evidence-graded brief",rl:"synthesis · 300",
        action:"Bottom line in three sentences; a six-row table of claim, status, event, and source; three investments that may matter more than range; open questions with known-by signals.",
        lookLike:"<b>Claims table (example)</b><pre>Claim                          Status            Event        Source\nTerminal MRBM intercept        demonstrated      FTM-32       [S5]\nOperationally effective (BMD)  not established   DOT&E FY24   [S3]\nHypersonic intercept           simulated only    FTX-40       [S6]\nOver-the-horizon air defense   demonstrated      NIFC-CA 2016 [S7]\nShip strike                    with limits       TS 2025      [S23]\nRange                          classified        none         [S1]</pre>",
        whyMatters:"A brief that names events instead of adjectives survives review."},
       {t:"Option B: enterprise-architecture view",rl:"EA · 300",
        action:"Fill Sense, Share, Decide, Act, Assess, and Sustain for the naval and the joint implementations, with one assurance concern and one interface risk each. Say which row binds today.",
        whyMatters:"It shows why SM-6 has leverage beyond its specifications, and where it breaks."},
       {t:"Signals to watch [S11], [S15], [S6]",rl:"roadmap · 200",
        action:"Write a known-by line for FTM-43, a Block IB decision, the next DOT&E report, and FY2027 funding for 540 rounds.",
        whyMatters:"Each signal moves a claim up or down the evidence ladder."}
     ],
     vids:[{s:19},{s:11},{s:10}]}
  ],

  ladder:[
    {key:"killchain",img:"killchain",name:"Kill chain and architecture",
     r:[
      {n:100,t:"Name the parts: SPY radar, E-2D, CEC, Aegis Baseline 9, Mk 41, the active and semi-active seeker, and the blast-fragmentation warhead."},
      {n:200,t:"Trace NIFC-CA: remote track, CEC share, Aegis launch, in-flight updates, terminal homing. Say what each link depends on."},
      {n:300,t:"Argue that capability is bounded by the weakest link, and name the assurance concern for each layer from Sense to Sustain."}
     ]},
    {key:"layers",img:"layers",name:"Missions and layers",
     r:[
      {n:100,t:"Three core missions, plus counter-hypersonic (development) and AIM-174B (air launch)."},
      {n:200,t:"Place SM-6 under SM-3 and above ESSM; explain endo- versus exo-atmospheric and blast-fragmentation versus hit-to-kill."},
      {n:300,t:"Defend when SM-6 is the wrong round: close-in threats, cheap drones, and ballistic missiles in midcourse."}
     ]},
    {key:"evidence",img:"evidence",name:"Evidence and test record",
     r:[
      {n:100,t:"Name the events: 2016 NIFC-CA, FTM-31 E1a, FTM-32, FTX-40, Valiant Shield 2024, Talisman Sabre 2025."},
      {n:200,t:"Place each event on the evidence ladder and say what it did not establish."},
      {n:300,t:"Grade any new claim against DOT&E and the classified-parameter boundary without overstating or understating it."}
     ]},
    {key:"roadmap",img:"roadmap",name:"Variants and roadmap",
     r:[
      {n:100,t:"Block I, IA, Dual I, Dual II and SWUP, IAU, IB, and AIM-174B."},
      {n:200,t:"Sort the variants into software and electronics upgrades versus kinematic upgrades."},
      {n:300,t:"Explain Block IB's pause and what would change the outlook."}
     ]},
    {key:"economics",img:"economics",name:"Economics and industrial base",
     r:[
      {n:100,t:"One round, one cell; a unit cost depends on its basis."},
      {n:200,t:"Reconcile the APUC, the then-year cost, the framework ceiling, and the FY2027 request."},
      {n:300,t:"Argue cost-exchange versus value protected, and the limits set by magazines and production."}
     ]}
  ],

  miniModules:[
    {name:"SM-3",t:"Exo-atmospheric midcourse ballistic-missile defense with a hit-to-kill vehicle. The layer above SM-6 [S2], [S26]."},
    {name:"SM-2",t:"Medium- to long-range fleet air defense, depending on variant. A cheaper or different-envelope layer that preserves SM-6 inventory."},
    {name:"ESSM Block II",t:"Local and area defense against air-breathing threats. Several rounds fit in a Mk 41 cell in compatible configurations, so magazine density is higher."},
    {name:"Patriot PAC-3",t:"Land-based hit-to-kill lower-tier defense on Patriot and IBCS. SM-6 offers longer-range joint options where launchers and command links exist [S14]."},
    {name:"Tomahawk",t:"Long-range land attack and maritime strike. The Army's Typhon pairs it with SM-6 [S13]."},
    {name:"Glide Phase Interceptor",t:"A separate program to engage hypersonic weapons earlier in flight than SM-6's terminal layer [S2], [S20]."}
  ],

  prompts:[
    {cat:"Briefing at a layer",model:"any LLM",desc:"Get oriented on one part of the SM-6 system at a chosen layer and rung.",
     items:["Sensor layer","Share and decide","Launch options","Sustain and production"],
     flagship:"You are briefing an analyst on the Raytheon SM-6.\nTopic: <e.g. NIFC-CA over-the-horizon engagement>\nLayer: <sense | share | decide | act | assess | sustain>\nRung: <100 | 200 | 300>\n\nRules:\n- Use only open sources: U.S. Navy fact files, MDA releases, DOT&E annual reports, CRS reports, the CSIS Missile Defense Project. Cite each claim.\n- Do not estimate classified parameters (range, envelope, seeker performance, probability of kill). Write CLASSIFIED instead.\n- Keep countermeasures at the level of broad classes. Do not describe techniques.\n- End with what the sources do not say, and the test event behind the strongest claim."},
    {cat:"Claim grader",model:"any LLM",desc:"Paste any SM-6 claim from a brief, article, or video and get it graded.",
     items:["Hypersonic claims","Range claims","Cost and contract claims","Army and joint claims"],
     flagship:"Grade this claim about the Raytheon SM-6:\n<paste claim>\n\nReturn:\n1. Status: demonstrated / demonstrated with limits / not public / false as stated.\n2. The named event or document behind it.\n3. The evidence rung: vendor claim, concept animation, simulated engagement, developmental live intercept, exercise against a real target, DOT&E operational test, or combat record.\n4. What the event did not establish.\nCite DOT&E, MDA, CRS, or the Navy. If no open source supports the claim, say so."},
    {cat:"Socratic examiner",model:"any LLM",desc:"Be questioned like a design review by a skeptical analyst.",
     items:["Kill-chain challenge","Evidence challenge","Roadmap challenge"],
     flagship:"Act as a skeptical defense analyst reviewing my SM-6 brief.\nAsk me ONE question at a time. After each answer:\n1. Grade it (solid / shaky / wrong) with a one-line reason.\n2. Name the open source that settles it.\n3. Ask a harder follow-up.\nProbe the kill-chain links behind over-the-horizon reach, SM-6 versus SM-3, what FTM-32 and FTX-40 did and did not show, Block IB's status, and the cost basis of any number I use.\nStop after 8 questions and name the claim most likely to fail in review."},
    {cat:"Brief redline",model:"any LLM",desc:"Redline a paragraph about SM-6 sentence by sentence.",
     items:["Press release","Vendor slide","Think-tank summary"],
     flagship:"Redline this SM-6 paragraph as a reviewer would:\n<paste paragraph>\n\nFor each sentence: KEEP, FIX, or CUT. For FIX, give the corrected sentence and the open source.\nFlag in particular: precise ranges (classified), 'proven' used for test events, FTX-40 described as an intercept, contract ceilings described as funded buys, and unit costs given without a basis and year."},
    {cat:"Translation for a sponsor",model:"any LLM",desc:"Turn a technical finding into a one-paragraph decision.",
     items:["Test caveat to decision","Magazine limit to budget line","Roadmap pause to risk"],
     flagship:"Translate this SM-6 finding for a non-technical decision-maker:\n<paste finding, e.g. 'DOT&E says FTM-32 did not establish operational effectiveness'>\n\nWrite: (1) what it means in one sentence, (2) the decision it affects, with two options and the trade-off, (3) what it costs to be wrong. No jargon. Keep the source link."}
  ],

  checklist:[
    {title:"Quoting a precise range",view:"Numbers",src:"S1",
     good:"Say 'classified; open-source estimates vary' and cite no number as fact.",
     bad:"Tell: a brief or video states 460 km, or 300 nm for AIM-174B. Root cause: explainer channels repeat unofficial estimates; the Navy fact file gives no range."},
    {title:"Calling SM-6 proven against hypersonics",view:"Evidence",src:"S6",
     good:"Place the claim on the evidence ladder: a limited terminal layer, with a live intercept still pending.",
     bad:"Tell: FTX-40 described as an intercept. Root cause: FTX-40 tracked a maneuvering target and ran a simulated engagement; no missile was fired, and FTM-43 is not public."},
    {title:"Reading 'combat-proven' as operationally effective",view:"Evidence",src:"S3",
     good:"Cite DOT&E FY2024: FTM-32 was not designed to determine effectiveness, lethality, suitability, or survivability.",
     bad:"Tell: 'proven' used for every mission. Root cause: combat use and operational test answer different questions."},
    {title:"Treating Block IB as arriving in FY2027",view:"Roadmap",src:"S15",
     good:"Treat Block IB as developmental and watch for a restart decision.",
     bad:"Tell: the FY2027 date from DOT&E's FY2022 report quoted as current [S4]. Root cause: the FY2026 budget cut funding and paused the program."},
    {title:"Giving a unit cost with no basis",view:"Numbers",src:"S16",
     good:"State the basis and year: about $2.97M APUC in constant FY2004 dollars, versus about $4.3M then-year [S29].",
     bad:"Tell: $2.97M, $4.3M, and higher figures used interchangeably. Root cause: different accounting bases."},
    {title:"Reading a framework ceiling as funded buys",view:"Numbers",src:"S24",
     good:"Pair the $24.4B ceiling and the 500-a-year objective with the FY2027 request for 540 rounds and the 36 to 39 month lead time [S11].",
     bad:"Tell: '$24.4B for 500 a year' presented as missiles on contract. Root cause: ceilings and objectives are not appropriations."},
    {title:"Reading an exercise sinking as 'kills warships'",view:"Evidence",src:"S23",
     good:"Say 'demonstrated strike; effect against defended ships is not public'.",
     bad:"Tell: Talisman Sabre 2025 cited as proof against peer warships. Root cause: an exercise target is not a defended, maneuvering combatant."},
    {title:"'One missile replaces SM-2, SM-3, and ESSM'",view:"Architecture",src:"S2",
     good:"Use the layer model: SM-3 owns midcourse, ESSM gives magazine density, and SM-6 is saved for the hard targets.",
     bad:"Tell: 'three missiles in one' read as 'every layer'. Root cause: multi-mission does not mean optimal everywhere, and one round uses one cell."},
    {title:"Assuming an intact missile means an intact engagement",view:"Architecture",src:"S7",
     good:"Ask which link of Sense, Share, Decide, and Act the shot assumes.",
     bad:"Tell: reach quoted without naming the sensor that holds the track. Root cause: over-the-horizon shots depend on the remote track, the network, identity, and authorization."},
    {title:"Asserting spectrum or cyber resilience either way",view:"Evidence",src:"S4",
     good:"Say 'uncertain on the public record', not 'fails' or 'immune'.",
     bad:"Tell: a claim of immunity to jamming, or of certain defeat. Root cause: DOT&E found insufficient public data; classified data may exist."},
    {title:"Mixing up variant names",view:"Roadmap",src:"S4",
     good:"Read the roadmap as a family tree with two upgrade axes.",
     bad:"Tell: Dual II treated as an air-warfare block, or IAU as a new airframe. Root cause: air-warfare blocks, BMD configurations, and software upgrades overlap."},
    {title:"Quoting an SM-6-only combat count",view:"Numbers",src:"S29",
     good:"Name the source and say 'combined' or 'estimated'.",
     bad:"Tell: a precise SM-6 count for the Red Sea or Operation Epic Fury. Root cause: public figures combine SM-2 and SM-6 or are estimates [S11]."},
    {title:"Reading the Army IBCS link as fielded",view:"Architecture",src:"S14",
     good:"Say 'simulated feasibility at Valiant Shield 2024'. Typhon fields SM-6 for strike [S13].",
     bad:"Tell: an 'Army SM-6 air-defense battery' cited. Root cause: the LTAMDS and IBCS link used simulator tracks."},
    {title:"Firing SM-6 at a close-in or cheap threat",view:"Architecture",src:"S10",
     good:"Use cheaper layers (ESSM, guns, electronic warfare, aircraft) where they give acceptable defense.",
     bad:"Tell: an SM-6 cell spent on a low-end drone. Root cause: magazine depth, not price alone, is the limit at sea."}
  ],

  cheat:[
    {h:"Reach and the kill chain",r:[
      "When a claim is about <b>reach</b>, ask which <b>sensor and network carried the track</b>. Over-the-horizon reach belongs to the kill chain [S7], [S8].",
      "How does a ship hit what its radar can't see? <b>NIFC-CA</b>: an E-2D track, shared by CEC, an Aegis launch, and the active seeker for the last stretch [S7].",
      "The <b>active seeker</b> frees the ship's illuminators. That is a capacity gain, not a range number [S9]."]},
    {h:"Layers and missions",r:[
      "A ballistic missile in <b>midcourse</b>, outside the atmosphere, is <b>SM-3</b>'s job (hit-to-kill). SM-6 is the <b>terminal</b> layer inside it [S2], [S26].",
      "A <b>close-in or cheap</b> threat: reach for <b>ESSM, guns, electronic warfare, or aircraft</b> before an SM-6 [S10].",
      "Ship strike with SM-6 is <b>demonstrated</b>, but a blast-fragmentation warhead damages ships differently from a heavy anti-ship missile [S23]."]},
    {h:"Evidence",r:[
      "<b>Hypersonic</b> claims: 'a limited terminal layer; live intercept not public as of October 2026' [S6].",
      "'<b>Proven</b>' or '<b>combat-proven</b>': ask which event, and whether DOT&E assessed it [S3].",
      "A <b>range</b> number: drop it. Official range is classified [S1].",
      "<b>Contested spectrum or cyber</b>: 'uncertain on the public record' [S4]."]},
    {h:"Numbers and roadmap",r:[
      "<b>Unit cost</b>: state the basis and year. About $2.97M APUC in constant FY2004 dollars, versus about $4.3M then-year [S16], [S29].",
      "<b>Contract ceiling</b>: pair it with the appropriation. FY2027 requests 540 rounds [S24], [S11].",
      "A roadmap item that changes the <b>motor</b>: expect a slower schedule and more test risk than a software change. Block IB is paused [S15]."]}
  ],
  falsifier:"'Three missiles in one' is marketing shorthand. The defensible claim is narrower: one missile family that has performed several missions in tests, whose reach depends on the network around it, and whose operational effectiveness for recent ballistic-missile capability DOT&E has not yet established [S3], [S23].",

  quizSections:{1:"Identity and architecture",2:"Missions and layers",3:"Evidence and claims",4:"Variants and roadmap",5:"Economics and synthesis"},
  quiz:[
    {week:1,rung:100,pillar:"Architecture",type:"mc",question:"Which two older missiles supplied SM-6's airframe lineage and its seeker?",options:["SM-3 airframe, Patriot seeker","SM-2 Block IV airframe, AMRAAM-derived seeker","Tomahawk airframe, SM-2 seeker","ESSM airframe, AMRAAM seeker"],answer:"SM-2 Block IV airframe, AMRAAM-derived seeker",explanation:"[S9], [S31]."},
    {week:1,rung:100,pillar:"Architecture",type:"open",question:"When did SM-6 reach initial operational capability?",answer:"November 2013.",explanation:"[S31]; CSIS notes first deployment aboard USS Kidd [S9]."},
    {week:1,rung:200,pillar:"Architecture",type:"mc",question:"Why does the active seeker raise the number of engagements a ship can support?",options:["It doubles the missile's speed","It removes the need for continuous ship illumination at the end, so illuminators are not the bottleneck","It lets one cell hold two missiles","It replaces the SPY radar"],answer:"It removes the need for continuous ship illumination at the end, so illuminators are not the bottleneck",explanation:"Spine page, missile layer [S9]."},
    {week:1,rung:100,pillar:"Kill chain",type:"mc",question:"Which system fuses sensor data from many ships and aircraft into one fire-control-quality track?",options:["IBCS","CEC","LTAMDS","Mk 41"],answer:"CEC",explanation:"Cooperative Engagement Capability [S8]."},
    {week:1,rung:200,pillar:"Kill chain",type:"open",question:"What does NIFC-CA let a ship do that its own radar cannot?",answer:"Engage a target beyond its radar horizon using a remote sensor's track (for example an E-2D), with the missile's active seeker finishing the engagement.",explanation:"2016 longest-range air-defense intercept [S7]."},
    {week:1,rung:200,pillar:"Kill chain",type:"open",question:"Name the seven steps of the engagement sequence.",answer:"Detect and classify, share the track, evaluate and assign, launch, update in flight, terminal homing, kill assessment.",explanation:"Spine page, command layer. A functional abstraction, not classified engagement logic."},
    {week:1,rung:300,pillar:"Kill chain",type:"mc",question:"Contesting which layer couples sensor and shooter back together and removes the over-the-horizon advantage?",options:["Sense","Share","Act","Sustain"],answer:"Share",explanation:"Network contestation breaks sensor-shooter separation (spine page, 'Countering the SM-6 system')."},

    {week:2,rung:100,pillar:"Layers",type:"mc",question:"SM-6 versus SM-3: which pairing is right?",options:["SM-6 outside the atmosphere with hit-to-kill; SM-3 inside with blast-fragmentation","SM-6 inside the atmosphere with blast-fragmentation; SM-3 outside with hit-to-kill","Both use hit-to-kill","Both use blast-fragmentation"],answer:"SM-6 inside the atmosphere with blast-fragmentation; SM-3 outside with hit-to-kill",explanation:"[S2], [S26]."},
    {week:2,rung:100,pillar:"Missions",type:"open",question:"Name the three core missions and the two newer extensions.",answer:"Extended-range air warfare, terminal ballistic-missile defense, and anti-surface warfare. Extensions: counter-hypersonic (development) and AIM-174B air launch.",explanation:"[S1], [S2], [S12]."},
    {week:2,rung:200,pillar:"Layers",type:"mc",question:"What is SM-6's counter-hypersonic role on the public record?",options:["A glide-phase interceptor","A limited terminal layer in development; a live intercept is not public","A proven universal hypersonic defense","None; SM-6 has no hypersonic role"],answer:"A limited terminal layer in development; a live intercept is not public",explanation:"[S2], [S6]."},
    {week:2,rung:200,pillar:"Layers",type:"mc",question:"Which weapon gives more magazine density against shorter-range air-breathing threats?",options:["SM-6","SM-3","ESSM Block II","Tomahawk"],answer:"ESSM Block II",explanation:"Several ESSM fit in a Mk 41 cell in compatible configurations (spine page, comparative position)."},
    {week:2,rung:300,pillar:"Layers",type:"open",question:"When is SM-6 the wrong round?",answer:"Against close-in or low-cost threats a cheaper layer can handle, and against ballistic missiles in midcourse outside the atmosphere, which is SM-3's job. Each SM-6 spent there is a cell unavailable for terminal BMD or long-range air defense.",explanation:"[S10], [S2]."},
    {week:2,rung:200,pillar:"Missions",type:"open",question:"What did Talisman Sabre 2025 demonstrate, and what did it not?",answer:"A ground-launched SM-6 from the Army's Typhon struck and sank a maritime target. It did not show effectiveness against a defended, maneuvering peer warship.",explanation:"[S23], [S13]."},

    {week:3,rung:200,pillar:"Claims",type:"mc",question:"Grade: 'SM-6 has intercepted a ballistic missile in its terminal phase.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Demonstrated",explanation:"FTM-31 E1a (2023) and FTM-32 (2024) [S30], [S5]. DOT&E says FTM-32 did not establish operational effectiveness [S3]."},
    {week:3,rung:200,pillar:"Claims",type:"mc",question:"Grade: 'SM-6 is proven against hypersonic glide vehicles.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Not public",explanation:"FTX-40 was a simulated engagement; no missile was fired [S6]."},
    {week:3,rung:200,pillar:"Claims",type:"mc",question:"Grade: 'SM-6 can hit a target the firing ship's radar cannot see.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Demonstrated",explanation:"The 2016 NIFC-CA intercept [S7]. Not shown under every contested condition."},
    {week:3,rung:100,pillar:"Claims",type:"mc",question:"Grade: 'SM-6's range is 460 km.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Not public",explanation:"Range is classified; the Navy fact file gives none [S1]."},
    {week:3,rung:200,pillar:"Claims",type:"mc",question:"Grade: 'SM-6 can sink a ship.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Demonstrated with limits",explanation:"Talisman Sabre 2025 sank an exercise target [S23]; effect against defended ships is not public."},
    {week:3,rung:300,pillar:"Claims",type:"mc",question:"Grade: 'The Army fields an SM-6 air-defense battery tied into IBCS.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"False as stated",explanation:"Valiant Shield 2024 was a simulated feasibility demonstration [S14], [S22]."},
    {week:3,rung:200,pillar:"Claims",type:"mc",question:"Grade: 'Block IB reaches the fleet in FY2027.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"False as stated",explanation:"That date is from DOT&E's FY2022 report [S4]; the FY2026 budget paused the program [S15]."},
    {week:3,rung:300,pillar:"Claims",type:"mc",question:"Grade: 'SM-6 has passed operational testing in its ballistic-missile defense role.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"False as stated",explanation:"DOT&E FY2024: FTM-32 was not designed to determine operational effectiveness, and no SM-6 operational testing was conducted in FY2024 [S3]."},
    {week:3,rung:200,pillar:"Claims",type:"mc",question:"Grade: 'Raytheon will build more than 500 SM-6 a year under a $24.4 billion deal.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Demonstrated with limits",explanation:"A framework ceiling and production objective, not funded quantities [S24]. FY2027 requests 540 [S11]."},
    {week:3,rung:100,pillar:"Claims",type:"mc",question:"Grade: 'The AIM-174B is deployed.'",options:["Demonstrated","Demonstrated with limits","Not public","False as stated"],answer:"Demonstrated",explanation:"The Navy acknowledges operational deployment; range is classified [S12]."},
    {week:3,rung:300,pillar:"Evidence",type:"open",question:"What did DOT&E say FTM-32 was not designed to determine?",answer:"Operational effectiveness, lethality, suitability, or survivability.",explanation:"[S3]."},
    {week:3,rung:200,pillar:"Evidence",type:"mc",question:"What did FTX-40 (March 2025) demonstrate?",options:["A live intercept of a hypersonic glide vehicle","Detection, tracking, space-sensor data in fire control, and a simulated SM-6 engagement","A ship strike against a maneuvering target","An Army IBCS launch"],answer:"Detection, tracking, space-sensor data in fire control, and a simulated SM-6 engagement",explanation:"[S6]."},
    {week:3,rung:300,pillar:"Evidence",type:"open",question:"What did DOT&E find about contested electromagnetic and cyber survivability?",answer:"Insufficient data to determine the survivability of expanded Block I and IA capabilities in a contested, congested electromagnetic environment, or to assess cyber survivability.",explanation:"[S4]."},

    {week:4,rung:200,pillar:"Roadmap",type:"mc",question:"Which upgrade changes the missile's kinematics rather than its electronics and software?",options:["Dual II and SWUP","Block IAU","Block IB","Dual I"],answer:"Block IB",explanation:"A new second-stage motor [S4], [S15]."},
    {week:4,rung:200,pillar:"Roadmap",type:"open",question:"What happened to Block IB in the FY2026 budget?",answer:"Funding was cut and the program put on a strategic pause; motor work continued. No public restart as of October 2026.",explanation:"[S15]."},
    {week:4,rung:100,pillar:"Roadmap",type:"mc",question:"What does AIM-174B leave off compared with the ship-launched SM-6?",options:["The active seeker","The surface-launch booster","The warhead","The datalink"],answer:"The surface-launch booster",explanation:"[S12]."},
    {week:4,rung:300,pillar:"Roadmap",type:"open",question:"What did Block IAU address?",answer:"An electronics-unit update for component obsolescence, with associated software evolution.",explanation:"Spine page, variant roadmap."},
    {week:4,rung:200,pillar:"Roadmap",type:"mc",question:"Which configuration made the 2024 FTM-32 intercept?",options:["Block I","Dual I","Dual II with a software upgrade (SWUP)","Block IB"],answer:"Dual II with a software upgrade (SWUP)",explanation:"[S5]."},

    {week:5,rung:200,pillar:"Economics",type:"open",question:"Why are $2.97M and $4.3M both cited as SM-6 unit cost?",answer:"Different bases: average program unit cost in constant FY2004 dollars across 2,478 rounds, versus a then-year cost per round.",explanation:"[S16], [S29]."},
    {week:5,rung:100,pillar:"Economics",type:"mc",question:"Apart from money, what scarce resource limits SM-6 use at sea?",options:["Fuel","Mk 41 cells, with constrained reloading at sea","Crew","Radar power"],answer:"Mk 41 cells, with constrained reloading at sea",explanation:"[S10]; spine page, saturation and economics."},
    {week:5,rung:200,pillar:"Economics",type:"open",question:"What did the FY2027 budget request for SM-6, and how soon could deliveries start?",answer:"540 SM-6. Deliveries begin 36 to 39 months after Congress appropriates.",explanation:"[S11]."},
    {week:5,rung:300,pillar:"Economics",type:"open",question:"Why is a cost-exchange ratio not enough to judge SM-6 use?",answer:"It compares interceptor and threat prices but ignores the value of the ship, crew, mission, and cargo protected. The binding limit is cells and production.",explanation:"[S10]."},
    {week:5,rung:300,pillar:"Synthesis",type:"open",question:"Name three investments that may matter as much as more missile range.",answer:"Sensors and track custody; CEC and joint-network resilience; lower-cost complementary effectors; reload concepts and production capacity; rigorous operational testing.",explanation:"Spine page, bottom line."},
    {week:5,rung:200,pillar:"Synthesis",type:"open",question:"What did the State Department approve for Japan in January 2025?",answer:"A possible $900 million Foreign Military Sale of SM-6 Block I missiles and related equipment.",explanation:"[S27]."}
  ],

  views:{
    missile:{lib:"spine",img:["slides/slide-03.jpg"],
      rule:"The missile layer: airframe, propulsion, seeker, and warhead. Public specifications only; the envelope and seeker performance are classified [S1].",
      tables:[
        {h:"Missile layer",cols:["Part","Public description","Lineage","Source"],rows:[
          ["Airframe","Two-stage, vertically launched. About 21 ft 6 in long, 3 ft 6 in wingspan, about 3,300 lb (Block I, surface-launched)","SM-2 Block IV","[S1], [S9]"],
          ["Booster","Solid-rocket booster ejects the missile from the Mk 41 and accelerates it","SM-3 family","[S1], [S9]"],
          ["Sustainer","Dual-thrust solid-rocket motor for the main flight energy","SM-3 / SM-2 family","[S1]"],
          ["Guidance","Onboard navigation plus weapon-control updates","","[S1]"],
          ["Seeker","Dual-mode active and semi-active radar; the mode logic is not public","AIM-120 AMRAAM-derived","[S1], [S9]"],
          ["Warhead","Blast-fragmentation, not hit-to-kill","","[S2]"],
          ["Range, envelope, probability of kill","WARN:Classified; in no official public source","","[S1]"]]},
        {h:"Why the seeker matters",cols:["Mode","How it homes","Effect on the ship"],rows:[
          ["Semi-active","On energy the ship's illuminator reflects off the target","Ties up a limited illuminator until intercept"],
          ["Active","The missile's own radar acquires the target at the end","Frees the illuminator, and allows engagements past the ship's radar horizon with remote support"]]}]},
    sensor:{lib:"spine",img:["slides/slide-04.jpg"],
      rule:"The sensor layer decides who holds the track. Reach depends on remote sensors as much as on the ship's own radar [S7], [S8].",
      tables:[
        {h:"Sensors",cols:["Sensor","Role","Source"],rows:[
          ["SPY-1 / SPY-6","Organic search, track, and discrimination. SPY-6 sensitivity claims are the vendor's","[S28]"],
          ["E-2D Advanced Hawkeye","Airborne sensing beyond the ship's radar horizon in NIFC-CA","[S7]"],
          ["CEC participants","Other ships and aircraft contributing to one composite track","[S8]"],
          ["Space sensors (HBTSS demonstration)","Track data processed into fire control during FTX-40","[S6]"],
          ["LTAMDS (Army)","Simulator tracks in the 2024 IBCS demonstration","[S14]"]]},
        {h:"Benefits and what bounds them",cols:["Benefit","Dependency that bounds it"],rows:[
          ["Earlier engagement","Remote-track precision and time synchronization"],
          ["A larger defended footprint","Network availability and deconfliction"],
          ["More engagements at once","Identity confidence and seeker acquisition"]]}]},
    command:{lib:"spine",img:["slides/slide-05.jpg"],
      rule:"The command layer: Aegis plus CEC turns separate sensors into an engage-on-remote kill chain. The sequence below is a functional abstraction, not classified engagement logic.",
      tables:[
        {h:"Engagement sequence",cols:["#","Step","System in NIFC-CA","Dependency"],rows:[
          ["1","Detect and classify","SPY radar, E-2D, space sensors","Track quality"],
          ["2","Share the track","CEC","Latency, data quality"],
          ["3","Evaluate and assign","Aegis Baseline 9","Identity, authorization"],
          ["4","Launch","Mk 41","Cell available"],
          ["5","Update in flight","Datalink","Link continuity"],
          ["6","Terminal homing","SM-6 active or semi-active seeker","Acquisition"],
          ["7","Kill assessment","Ship, airborne, and joint sensors","Re-engagement decision"]]},
        {h:"Enterprise-architecture layers",cols:["Layer","Naval","Joint and land","Assurance concern"],rows:[
          ["Sense","SPY-1/SPY-6, E-2D, other CEC participants, space sensors","LTAMDS and joint sensors","Detection, discrimination, track continuity"],
          ["Share","CEC and approved tactical networks","IBCS and federated joint C2","Latency, data quality, trust, cyber and electromagnetic resilience"],
          ["Decide","Aegis weapon control and command doctrine","Battery operations center, IBCS, joint fires C2","Identity, authorization, deconfliction, weapon-target pairing"],
          ["Act","Mk 41 plus SM-6","Typhon launcher; AIM-174B from the F/A-18E/F","Launcher availability, inventory, configuration control"],
          ["Assess","Ship, airborne, and joint sensors","Joint battle-damage and kill assessment","Timeliness, confidence, re-engagement"],
          ["Sustain","Magazines, depots, canisters, production","Cross-service missile and launcher support","Production rate, motors and electronics, reload, software baselines"]]}]},
    launch:{lib:"spine",img:["slides/slide-12.jpg"],
      rule:"The launch layer: where SM-6 can be fired from. More launchers mean more ways to employ the missile, not more missiles [S13], [S12].",
      tables:[
        {h:"Launchers",cols:["Launcher","Platform","Status","Source"],rows:[
          ["Mk 41 VLS","Aegis cruisers and destroyers","Fielded; one SM-6 per cell","[S1]"],
          ["Typhon (Mid-Range Capability)","Army; a modified vertical launcher in a 40-foot container on a trailer; a battery has four launchers; fires SM-6 and Tomahawk","Deployed to the Philippines in April 2024; sank a maritime target in Talisman Sabre 2025","[S13], [S23]"],
          ["F/A-18E/F (AIM-174B)","Carrier aviation; no surface-launch booster","Operationally deployed; range classified","[S12]"],
          ["IBCS with LTAMDS","Army integrated air and missile defense","WARN:Simulated feasibility only (Valiant Shield 2024)","[S14], [S22]"]]},
        {h:"Allied demand",cols:["Country","Item","Source"],rows:[
          ["Japan","Possible $900M Foreign Military Sale of SM-6 Block I (January 2025)","[S27]"]]}]},
    layers:{lib:"spine",img:["slides/slide-07.jpg"],
      rule:"Layers by phase and altitude, and the weapons that complement SM-6 [S2], [S26].",
      tables:[
        {h:"Mission portfolio",cols:["Mission","Publicly demonstrated","Boundary"],rows:[
          ["Extended-range air warfare","Aircraft, UAVs, and cruise missiles, including over the horizon [S7]","Performance against advanced threats under electronic attack is not public"],
          ["Terminal ballistic-missile defense","Short- and medium-range ballistic missiles in terminal flight [S5], [S30]","Not a substitute for midcourse defense; DOT&E has not established operational effectiveness [S3]"],
          ["Anti-surface warfare","Ship strikes; the 2025 Army sinking exercise [S23]","Not shown against defended peer warships"],
          ["Counter-hypersonic","WARN:Tracking and a simulated engagement (FTX-40) [S6]","Live intercept not public"],
          ["Air-launched air-to-air","AIM-174B deployed on the F/A-18E/F [S12]","Range and employment classified"]]},
        {h:"Comparative position",cols:["Weapon","Primary role","Kill approach","Where it complements SM-6"],rows:[
          ["SM-2","Medium- to long-range fleet air defense","Mainly ship-supported radar guidance","A cheaper or different-envelope layer; preserves SM-6 inventory"],
          ["ESSM Block II","Local and area defense against air-breathing threats","Active and semi-active radar","Higher magazine density at shorter ranges"],
          ["SM-3","Exo-atmospheric ballistic-missile defense","Hit-to-kill","The midcourse layer above SM-6 [S2], [S26]"],
          ["Patriot PAC-3","Land-based lower-tier defense","Hit-to-kill","Land-based terminal layer; SM-6 adds longer-range joint options"],
          ["Tomahawk","Long-range land attack and maritime strike","Cruise missile","Typhon pairs it with SM-6 [S13]"],
          ["AIM-174B","Long-range carrier-based air-to-air","SM-6-derived active seeker, air launch","Extends the family into aviation [S12]"]]}]}
  },

  eaFrameworks:{
    togaf:[
      {phase:"Phase A: Architecture Vision",t:"Mission portfolio",items:["Three core missions plus counter-hypersonic and air launch [S1], [S2].","Principle: capability is bounded by the kill web, not by missile kinematics alone.","Stakeholders: the Navy, MDA, the Army, the joint force, allies [S27]."]},
      {phase:"Phase B: Business Architecture",t:"Operational activities",items:["The seven-step engagement sequence: detect, share, decide, launch, update, home, assess.","Ownership: the Navy buys the round; MDA brings ballistic-missile capability into it [S19]."]},
      {phase:"Phase C: Information Systems",t:"Data and applications",items:["Composite track data shared through CEC [S8].","Aegis weapon control and engagement planning; IBCS on the Army side [S14].","Interface concerns: latency, data quality, trust."]},
      {phase:"Phase D: Technology Architecture",t:"Sensors, launchers, missile",items:["SPY-1/SPY-6, E-2D, space sensors [S28], [S7], [S6].","Mk 41, Typhon, F/A-18E/F [S1], [S13], [S12].","Missile lineage and variants [S9]."]},
      {phase:"Phase E: Opportunities and Solutions",t:"Roadmap",items:["Software path: Block IA, Dual I and II, SWUP, IAU.","Kinematic path: Block IB, paused [S15].","Live hypersonic intercept pending [S6]."]},
      {phase:"Phase G: Implementation Governance",t:"Assurance",items:["DOT&E operational and live-fire testing [S3], [S4].","Configuration control across inventories.","Production rate and lead time [S11], [S24]."]}
    ],
    dodaf:[
      {view:"OV-1",t:"Operational concept",items:["The NIFC-CA picture: E-2D, CEC, an Aegis ship, SM-6, and a target beyond the horizon [S7]."]},
      {view:"CV-2 / CV-6",t:"Capability taxonomy and mapping",items:["Air warfare, terminal BMD, anti-surface warfare, counter-hypersonic (development), air-to-air.","Map each capability to the activities and systems that deliver it."]},
      {view:"OV-2 / OV-5b",t:"Resource flows and activities",items:["Track flows from sensor to CEC to Aegis; the launch command; in-flight updates.","The seven-step activity sequence."]},
      {view:"SV-1 / SV-6",t:"Systems interfaces and data exchange",items:["Aegis, CEC, Mk 41, and the SM-6 datalink; IBCS and LTAMDS on the Army side [S14].","Data-exchange concerns: latency, integrity, trust."]},
      {view:"SV-8 / StdV-2",t:"Evolution and standards forecast",items:["The variant roadmap and the Block IB pause [S15].","Software baseline alignment across ship, land, and air."]}
    ],
    altitudes:[
      {name:"Sense",q:"SPY-1/SPY-6, E-2D, CEC participants, space sensors",allowed:"LTAMDS and joint sensors",forbidden:"Detection, discrimination, track continuity",lib:"spine"},
      {name:"Share",q:"CEC and approved tactical networks",allowed:"IBCS and federated joint C2",forbidden:"Latency, data quality, trust, cyber and electromagnetic resilience",lib:"spine"},
      {name:"Decide",q:"Aegis weapon control and command doctrine",allowed:"Battery operations center, IBCS, joint fires C2",forbidden:"Identity, authorization, deconfliction",lib:"spine"},
      {name:"Act",q:"Mk 41 plus SM-6",allowed:"Typhon; AIM-174B from the F/A-18E/F",forbidden:"Launcher availability, inventory, configuration control",lib:"spine"},
      {name:"Assess",q:"Ship, airborne, and joint sensors",allowed:"Joint battle-damage and kill assessment",forbidden:"Timeliness, confidence, re-engagement",lib:"spine"},
      {name:"Sustain",q:"Magazines, depots, canisters, production",allowed:"Cross-service missile and launcher support",forbidden:"Production rate, reload, software baseline alignment",lib:"spine"}
    ],
    table:[
      ["SPY radar, E-2D, space sensors","Phase D","SV-1, OV-2","All missions"],
      ["CEC / IBCS","Phase C (data), Phase D","SV-1, SV-6, OV-2","Air warfare, terminal BMD"],
      ["Aegis weapon control / battery operations center","Phase C (application)","OV-5b, SV-4","All missions"],
      ["Mk 41 / Typhon / F/A-18E/F","Phase D","SV-1","All missions"],
      ["SM-6 round and variants","Phase D, Phase E","SV-1, SV-8","All missions"],
      ["DOT&E testing, production, magazines","Phase G, governance","CV-3, SV-8","All missions"]
    ]
  },

  deckFlags:{
    1:"Correction: Mk 72 is the booster; the slide reuses it for the dual-thrust motor. The range rings are decoration, not range data [S1].",
    3:"Duplicate label: 'Propulsion' appears twice. It is one booster and one dual-thrust motor.",
    5:"Not in the ledger: Link 16 under Share. CEC and IBCS are sourced [S8], [S14].",
    6:"Overstated: read 'Proven' as 'demonstrated in test'. DOT&E has not established operational effectiveness for recent BMD capability [S3].",
    7:"Inaccurate: SM-2 is a medium-to-long-range area-defense missile, not a close-in weapon, and RAM is not in the ledger.",
    11:"Overstated: reloading at sea is constrained, not absent.",
    13:"Illustrative: the $2K drone and $2B destroyer prices are not sourced. The cost bases are [S16] and [S29]."
  }
};

DATA.glossary = [
  {category:"Missile",term:"RIM-174 ERAM",rung:100,essential:true,definition:"SM-6's formal designation: Extended Range Active Missile [S31].",see_also:"SM-6"},
  {category:"Missile",term:"Active radar homing",rung:100,essential:true,definition:"The missile's own radar finds and tracks the target in the terminal phase, so the ship's illuminator is not needed at the end [S9].",see_also:"Semi-active radar homing"},
  {category:"Missile",term:"Semi-active radar homing",rung:100,essential:true,definition:"The missile homes on energy that the ship's illuminator reflects off the target.",see_also:"Active radar homing"},
  {category:"Missile",term:"Dual-mode seeker",rung:200,definition:"SM-6's seeker supports both active and semi-active modes. How it selects or blends them is not public [S1].",see_also:"Active radar homing"},
  {category:"Missile",term:"Blast-fragmentation",rung:100,essential:true,definition:"A proximity warhead that damages the target with fragments. SM-6 uses it inside the atmosphere [S2].",see_also:"Hit-to-kill"},
  {category:"Missile",term:"Hit-to-kill",rung:100,essential:true,definition:"Destroying a target by direct collision. SM-3 and PAC-3 use it [S2].",see_also:"Blast-fragmentation"},
  {category:"Missile",term:"Booster and dual-thrust motor",rung:200,definition:"SM-6's two propulsion stages: a solid-rocket booster that ejects the missile from the launcher, and a dual-thrust solid-rocket motor for the main flight [S1].",see_also:"Block IB"},
  {category:"Missile",term:"AMRAAM (AIM-120)",rung:100,definition:"The air-to-air missile whose active radar seeker was adapted for SM-6 [S9].",see_also:"Active radar homing"},
  {category:"Kill chain",term:"Aegis Baseline 9",rung:100,essential:true,definition:"The Aegis combat-system baseline that runs NIFC-CA engagements and integrated air and missile defense [S7].",see_also:"NIFC-CA"},
  {category:"Kill chain",term:"SPY-6",rung:200,definition:"The newer Navy radar family, marketed as more sensitive than SPY-1 and built to support Standard Missile variants (vendor claim) [S28].",see_also:"Aegis Baseline 9"},
  {category:"Kill chain",term:"E-2D Advanced Hawkeye",rung:100,definition:"A carrier-based airborne early-warning aircraft that supplies tracks beyond a ship's radar horizon in NIFC-CA [S7].",see_also:"NIFC-CA"},
  {category:"Kill chain",term:"Cooperative Engagement Capability (CEC)",rung:100,essential:true,definition:"Shares sensor data across ships and aircraft so units hold one composite, fire-control-quality track [S8].",see_also:"NIFC-CA"},
  {category:"Kill chain",term:"NIFC-CA",rung:200,essential:true,definition:"Naval Integrated Fire Control–Counter Air: the engage-on-remote kill chain built from an E-2D, CEC, Aegis, and SM-6 [S7].",see_also:"Engage-on-remote"},
  {category:"Kill chain",term:"Launch-on-remote",rung:200,definition:"Firing on another sensor's track, then guiding with your own sensor.",see_also:"Engage-on-remote"},
  {category:"Kill chain",term:"Engage-on-remote",rung:200,essential:true,definition:"Another sensor supports the engagement through to intercept. It is what lets a ship engage past its radar horizon [S7].",see_also:"NIFC-CA"},
  {category:"Kill chain",term:"Mk 41 VLS",rung:100,essential:true,definition:"The Navy's vertical launching system. One SM-6 occupies one cell [S1].",see_also:"Magazine depth"},
  {category:"Kill chain",term:"HBTSS",rung:300,definition:"Hypersonic and Ballistic Tracking Space Sensor, a demonstration satellite whose data fed fire control in FTX-40 [S6].",see_also:"FTX-40"},
  {category:"Kill chain",term:"IBCS and LTAMDS",rung:200,definition:"The Army's integrated battle command system and its lower-tier radar. Linked to SM-6 only in a 2024 simulation [S14].",see_also:"Valiant Shield 2024"},
  {category:"Kill chain",term:"Kill web",rung:200,essential:true,definition:"The network of sensors, links, command systems, and launchers around a weapon. SM-6's reach and its weak points both sit there.",see_also:"NIFC-CA"},
  {category:"Missions and layers",term:"Terminal phase",rung:100,definition:"The last part of a ballistic missile's flight, as it descends toward its target.",see_also:"Sea-Based Terminal"},
  {category:"Missions and layers",term:"Endo-atmospheric",rung:100,essential:true,definition:"Inside the atmosphere. SM-6's terminal ballistic-missile defense happens here [S2].",see_also:"Exo-atmospheric"},
  {category:"Missions and layers",term:"Exo-atmospheric",rung:100,definition:"Outside the atmosphere. SM-3's midcourse intercepts happen here [S26].",see_also:"Endo-atmospheric"},
  {category:"Missions and layers",term:"Sea-Based Terminal",rung:200,definition:"The program that gave SM-6 its terminal ballistic-missile defense role (Dual I, Dual II) [S2].",see_also:"Dual I and Dual II"},
  {category:"Missions and layers",term:"Anti-surface warfare (ASuW)",rung:100,definition:"Attacking ships and surface targets. SM-6 has done it in tests and a 2025 Army exercise [S23].",see_also:"Talisman Sabre 2025"},
  {category:"Missions and layers",term:"Typhon (Mid-Range Capability)",rung:200,essential:true,definition:"The Army's containerized, road-mobile launcher that fires SM-6 and Tomahawk. Deployed to the Philippines in April 2024 [S13].",see_also:"Talisman Sabre 2025"},
  {category:"Missions and layers",term:"AIM-174B Gunslinger",rung:200,essential:true,definition:"The air-launched SM-6 configuration for the F/A-18E/F, without the surface booster. Deployed; range classified [S12].",see_also:"AMRAAM (AIM-120)"},
  {category:"Missions and layers",term:"Glide Phase Interceptor (GPI)",rung:200,definition:"A separate program to engage hypersonic weapons earlier in flight than SM-6's terminal layer [S2].",see_also:"FTX-40"},
  {category:"Missions and layers",term:"SM-3",rung:100,essential:true,definition:"The exo-atmospheric, hit-to-kill interceptor for midcourse ballistic-missile defense. The layer above SM-6 [S26].",see_also:"Exo-atmospheric"},
  {category:"Missions and layers",term:"ESSM",rung:200,definition:"Evolved SeaSparrow Missile: shorter-range defense against air-breathing threats with more rounds per cell.",see_also:"Magazine depth"},
  {category:"Evidence",term:"DOT&E",rung:100,essential:true,definition:"The Director, Operational Test and Evaluation: the independent judge of operational effectiveness, suitability, and survivability [S3].",see_also:"Evidence ladder"},
  {category:"Evidence",term:"FTM-32",rung:200,essential:true,definition:"The March 2024 live intercept of an advanced MRBM target in its terminal phase by SM-6 Dual II with a software upgrade [S5].",see_also:"DOT&E"},
  {category:"Evidence",term:"FTX-40",rung:200,essential:true,definition:"The March 2025 tracking and simulated SM-6 engagement of a maneuvering hypersonic-representative target. No missile was fired [S6].",see_also:"HBTSS"},
  {category:"Evidence",term:"FTM-31 E1a",rung:300,definition:"A 2023 terminal intercept of an MRBM target using a two-interceptor salvo of SM-6 Dual II with a software upgrade [S30].",see_also:"FTM-32"},
  {category:"Evidence",term:"Valiant Shield 2024",rung:300,definition:"An experiment that linked LTAMDS simulator tracks, IBCS, and SM-6 engagement software. Feasibility, not a fielded system [S14].",see_also:"IBCS and LTAMDS"},
  {category:"Evidence",term:"Talisman Sabre 2025",rung:300,definition:"An exercise in which an Army Typhon fired an SM-6 that sank a maritime target [S23].",see_also:"Typhon (Mid-Range Capability)"},
  {category:"Evidence",term:"Evidence ladder",rung:200,essential:true,definition:"Ranking evidence from vendor claim through concept animation, simulated engagement, live developmental intercept, exercise, and DOT&E operational test to combat record.",see_also:"DOT&E"},
  {category:"Roadmap and economics",term:"Block IA",rung:200,definition:"The principal production evolution of SM-6, with hardware and software improvements and later anti-surface capability [S4].",see_also:"Block IAU"},
  {category:"Roadmap and economics",term:"Dual I and Dual II",rung:200,definition:"Ballistic-missile-defense configurations for the terminal role. Dual II targets short- and medium-range ballistic missiles [S5].",see_also:"SWUP"},
  {category:"Roadmap and economics",term:"SWUP",rung:200,definition:"Software upgrade, paired with Dual II for the FTM-32 intercept [S5].",see_also:"Dual I and Dual II"},
  {category:"Roadmap and economics",term:"Block IAU",rung:300,definition:"An electronics-unit update for component obsolescence, with associated software changes.",see_also:"Block IA"},
  {category:"Roadmap and economics",term:"Block IB",rung:200,essential:true,definition:"The planned larger-motor SM-6 for more range and speed. Put on strategic pause in the FY2026 budget [S15].",see_also:"Booster and dual-thrust motor"},
  {category:"Roadmap and economics",term:"APUC",rung:300,definition:"Average procurement unit cost: total procurement cost divided by planned quantity. About $2.97M for SM-6 in constant FY2004 dollars across 2,478 rounds [S16].",see_also:"Then-year dollars"},
  {category:"Roadmap and economics",term:"Then-year dollars",rung:300,definition:"Costs in the dollars of the year they are spent, unlike constant (base-year) dollars. About $4.3M per SM-6 round then-year [S29].",see_also:"APUC"},
  {category:"Roadmap and economics",term:"Framework ceiling",rung:300,definition:"The maximum value of a multi-year agreement. The 2026 SM-6 framework's potential value is $24.4B; that is not funded procurement [S24].",see_also:"Then-year dollars"},
  {category:"Roadmap and economics",term:"Cost-exchange ratio",rung:200,essential:true,definition:"Interceptor cost divided by threat cost. It ignores the value of what is defended [S10].",see_also:"Magazine depth"},
  {category:"Roadmap and economics",term:"Magazine depth",rung:200,definition:"How many rounds a ship can fire before it must reload. One SM-6 per Mk 41 cell, and reloading at sea is constrained.",see_also:"Mk 41 VLS"}
];

/* Daily challenge round 3 drill pools. Each item: prompt, answer (index into options), why, src. */
DATA.drills = {
  layer:{title:"Which layer?",ask:"Which layer or effector family do the open sources point to?",
    options:["SM-3 (exo-atmospheric, midcourse)","SM-6 (endo-atmospheric, terminal or long-range)","ESSM, SM-2, guns, electronic warfare (cheaper inner layers)","Glide Phase Interceptor (future)"],
    items:[
      {p:"A medium-range ballistic missile in midcourse, outside the atmosphere",a:0,why:"SM-3 is the exo-atmospheric midcourse layer with a hit-to-kill vehicle.",src:"S26"},
      {p:"A short-range ballistic missile in its terminal phase near a defended ship",a:1,why:"Sea-Based Terminal is SM-6's ballistic role.",src:"S2"},
      {p:"A low-flying cruise missile beyond the firing ship's radar horizon, tracked by an E-2D",a:1,why:"This is the NIFC-CA case: engage-on-remote with SM-6.",src:"S7"},
      {p:"A subsonic cruise missile close to the ship",a:2,why:"Cheaper inner layers preserve SM-6 cells.",src:"S10"},
      {p:"A low-cost one-way attack drone",a:2,why:"Magazine economics: one round, one cell.",src:"S10"},
      {p:"A hypersonic glide vehicle early in its glide phase",a:3,why:"GPI is meant to engage earlier than SM-6's terminal layer.",src:"S2"},
      {p:"A maneuvering hypersonic-representative target in its final phase",a:1,why:"SM-6 is the interceptor for a limited terminal defense today; a live intercept is not public.",src:"S2"}
    ]},
  rung:{title:"Which rung?",ask:"Where does this evidence sit on the evidence ladder?",
    options:["Simulated engagement","Developmental live intercept","Exercise against a real target","Operational use (combat)"],
    items:[
      {p:"FTX-40 (2025): space-sensor tracking and a simulated SM-6 engagement",a:0,why:"No missile was fired.",src:"S6"},
      {p:"Valiant Shield 2024: LTAMDS simulator tracks, IBCS, and SM-6 engagement software",a:0,why:"A feasibility demonstration, not a fielded system.",src:"S14"},
      {p:"FTM-32 (2024): live intercept of an advanced MRBM target",a:1,why:"A scripted test; DOT&E says it did not establish operational effectiveness.",src:"S5"},
      {p:"FTM-31 E1a (2023): a two-interceptor salvo against an MRBM target",a:1,why:"A live developmental intercept; no public single-shot probability of kill.",src:"S30"},
      {p:"2016 NIFC-CA: an over-the-horizon intercept on an airborne sensor's track",a:1,why:"A live test that validated the engage-on-remote concept.",src:"S7"},
      {p:"Talisman Sabre 2025: an Army Typhon SM-6 sinks a maritime target",a:2,why:"A real target in an exercise, not a defended warship.",src:"S23"},
      {p:"Red Sea air-defense firings, 2023 onward",a:3,why:"Real combat use, but public counts combine SM-2 and SM-6 and come without controlled data.",src:"S29"}
    ]},
  chain:{title:"Which link?",ask:"Which kill-chain link does this belong to?",
    options:["Sense","Share","Decide","Act"],
    items:[
      {p:"An E-2D tracks a low flyer past the ship's radar horizon",a:0,why:"Airborne sensing is the Sense layer of NIFC-CA.",src:"S7"},
      {p:"CEC fuses tracks from several ships into one composite track",a:1,why:"CEC is the sharing network.",src:"S8"},
      {p:"Aegis Baseline 9 evaluates the threat and assigns a weapon",a:2,why:"Threat evaluation and weapon assignment are decisions.",src:"S7"},
      {p:"A Mk 41 cell fires the round",a:3,why:"The launcher acts.",src:"S1"},
      {p:"IBCS passes an LTAMDS track to an engagement-control node",a:1,why:"IBCS is the Army's sharing and C2 network.",src:"S14"},
      {p:"HBTSS satellite data is processed into fire control",a:0,why:"Space sensing feeds the track.",src:"S6"},
      {p:"A Typhon battery operations center authorizes a launch",a:2,why:"Authorization is a decision.",src:"S13"},
      {p:"An F/A-18E/F releases an AIM-174B",a:3,why:"Air launch is the Act layer.",src:"S12"}
    ]}
};
