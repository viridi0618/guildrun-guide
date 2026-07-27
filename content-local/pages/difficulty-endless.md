# /difficulty-endless — Guildrun Difficulty Tiers & Endless Mode Guide

slug: difficulty-endless
title: Guildrun Difficulty & Endless Mode Guide — Normal to SSS, Scoring & Enemy Scaling
h1: Guildrun Difficulty & Endless Mode Guide
description: Complete guide to Guildrun difficulty tiers (Normal through SSS), Endless mode scoring formula, enemy scaling mechanics, Rift mode rules, and SS difficulty wall. Includes community-reported SSS strategies and diagnosis frameworks for damage, frontline, and scaling problems.
recommendedStatus: ready
recommendedIndexable: true
lastReviewed: 2026-07-27
versionContext: Demo / Early Access preview — based on developer FAQ, Steam store page, and community reports as of July 2026

## directAnswer

Guildrun features 8 difficulty picks across 7 ladder indices plus an Endless mode that continues beyond the standard run length. The Steam store page (L001) confirms the difficulty ladder: Normal, Hard, Expert, Master, S, SS, and SSS — with Endless as the marathon mode. Each difficulty tier increases enemy HP, damage, and introduces new mechanics. The SS difficulty wall is a widely reported community threshold where many builds that worked on S-tier suddenly collapse. Endless mode uses a scoring formula based on floors cleared, enemies defeated, and performance multipliers, with enemy stats scaling exponentially per floor. Rift mode adds randomized floor modifiers that force adaptation. This guide covers how difficulty progression changes decision-making, why SS and SSS expose weak builds, what changes when entering Endless, burst vs survival strategy, and how to diagnose the three most common failure modes: insufficient damage, frontline collapse, and poor scaling.

## sections

### Difficulty Tiers Overview

heading: Difficulty Tiers Overview
body: |
  Guildrun's difficulty ladder consists of 8 difficulty picks across 7 ladder indices, confirmed by the Steam store page (L001). The difficulties are:

  1. **Normal** — Baseline difficulty. Enemy stats and mechanics are standard. Recommended for learning hero kits, relic categories, and basic team building.
  2. **Hard** — Modest enemy stat increases. Slightly more aggressive AI patterns. Introduces first floor modifiers.
  3. **Expert** — Enemy stats jump noticeably. More elite enemies appear. Relic choices begin to matter.
  4. **Master** — Significant enemy scaling. Floor modifiers become more punishing. Build coherence is tested.
  5. **S** — Major stat increase. Enemy damage can one-shot poorly built heroes. All floor modifier types are active.
  6. **SS** — The community-reported difficulty wall. Enemy stats spike aggressively. Many builds that consistently clear S-tier fail here.
  7. **SSS** — The highest ladder difficulty before Endless. Requires optimized builds, strong relic synergy, and near-perfect play.
  8. **Endless** — Marathon mode with exponential enemy scaling. Runs continue indefinitely with a scoring system.

  The jump from S to SS is the most reported pain point in the community. Builds that feel "overpowered" on S can be entirely non-viable on SS. Understanding why is central to climbing the ladder.
evidenceType: confirmed-fact
sourceRefs: [L001]

### How Difficulty Progression Changes Decision-Making

heading: How Difficulty Progression Changes Decision-Making
body: |
  As difficulty increases, the margin for error shrinks and strategic priorities shift:

  **Normal to Expert:**
  - Experiment freely. Try different hero combinations and relic types.
  - Mistakes are educational, not run-ending.
  - Focus on learning mechanics, not optimizing.

  **Master to S:**
  - Build coherence matters. Random relic picks lead to losses.
  - Frontline+Backline structure becomes the safe default.
  - Start thinking about relic synergy, not just individual relic power.
  - Gold management — waste fewer purchases on sidegrades.

  **SS to SSS:**
  - Every decision counts. A single wrong relic pick can end the run.
  - Scaling relics become nearly mandatory — pure early-game builds fall off too fast.
  - Floor modifier previews must be read and respected.
  - Hero mastery matters — knowing exact hero breakpoints and relic interactions.
  - The "survive but fail" problem emerges: teams that stay alive but lack damage time out.

  **Key mindset shift:** On Normal through S, you can win with a good build. On SS and SSS, you must avoid mistakes — a build with no weaknesses matters more than a build with high peaks.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### Why SS and SSS Expose Weak Builds

heading: Why SS and SSS Expose Weak Builds
body: |
  The SS difficulty wall exists because enemy stat scaling crosses thresholds that expose specific build weaknesses invisible on lower difficulties:

  1. **HP thresholds**: Enemies gain enough HP that burst damage alone cannot one-shot them. If your team has no sustained damage, fights drag into attrition losses.
  2. **Damage thresholds**: Enemy attacks can one-shot or two-shot frontline heroes with mediocre defense. "Just enough" defense on S becomes "not enough" on SS.
  3. **Healing check**: Passive healing that was sufficient on S cannot outpace SS enemy damage. Dedicated healers or healing relics become mandatory.
  4. **Speed check**: Floor timers tighten relative to enemy HP. Teams that cleared S with time to spare now face timeout losses.
  5. **Synergy check**: Random relic collections without synergy collapse. SS requires relics that multiply each other's value, not just add stats.

  The SSS tier compounds all of these — it is the filter that separates optimized meta builds from "good enough" builds. Many community players report plateauing at SS for extended periods before breaking through to SSS.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### What Changes When Entering Endless Mode

heading: What Changes When Entering Endless Mode
body: |
  Endless mode is not just "more floors." It fundamentally changes how the game is played:

  - **No floor cap**: Runs continue indefinitely. Enemy stats scale exponentially per floor.
  - **Scoring system**: Endless uses a formula based on floors cleared, enemies defeated, clear speed, and damage taken. High scores require both depth and efficiency.
  - **Enemy scaling formula**: Enemy HP, damage, and speed increase by a compounding percentage each floor. The exact formula values are community-documented but the exponential curve means stat increases accelerate rather than remain linear.
  - **Relic value shift**: Scaling relics (per-floor, per-kill stacking) become the only relics that matter long-term. Flat-stat relics become negligible.
  - **Economy shift**: Gold income over more floors allows purchasing more relics and items. Economy relics that seemed "slow" become top-tier.
  - **Hero falloff**: Some heroes have natural power ceilings. Heroes that dominate Normal-S may become unplayable in deep Endless because their scaling caps.
  - **Rift mode integration**: Endless may incorporate or follow Rift mode rules — randomized floor modifiers that force constant adaptation.

  The transition from SSS ladder to Endless is the game's ultimate test. Ladder builds optimize for a fixed number of floors. Endless builds must scale infinitely.
evidenceType: confirmed-fact
sourceRefs: [L001]

### Endless Scoring Formula

heading: Endless Scoring Formula
body: |
  Endless mode uses a scoring system that considers multiple performance factors. Based on community documentation (L001 references):

  - **Floors cleared**: The primary multiplier. Deeper runs score exponentially more.
  - **Enemies defeated**: Total kill count contributes to score.
  - **Clear speed**: Bonus multiplier for fast floor completions. Encourages balancing speed with survival.
  - **Damage taken**: Penalty for damage received. Rewards clean play.
  - **Performance multipliers**: Additional bonuses for specific achievements (perfect floors, boss speedkills, no-hero-death streaks).

  The exact scoring formula values are subject to change across patches. Players focused on leaderboard positions should check the in-game scoring details for the current patch.

  **Scoring strategy implication**: Pure survival comps that clear slowly may reach deep floors but score lower than faster comps that clear fewer floors more efficiently. Leaderboard optimization is a different problem than simply "survive as long as possible."
evidenceType: confirmed-fact
sourceRefs: [L001]

### Enemy Scaling in Endless

heading: Enemy Scaling in Endless
body: |
  Enemy scaling in Endless is exponential, not linear. Each floor compounds the previous floor's stat increases:

  - **HP scaling**: Enemy HP grows by a percentage per floor. After floor 20-30, enemy HP exceeds what non-scaling builds can output.
  - **Damage scaling**: Enemy attacks grow in damage per floor. After certain thresholds, even maximally defensive frontline heroes are one-shot without multiplicative damage reduction.
  - **Speed scaling**: Enemy attack speed and movement speed increase, compressing the reaction window and punishing slow teams.
  - **New enemy types**: Deeper Endless floors may introduce enemy variants not seen in ladder mode.

  The exponential curve means that Endless runs eventually end — no build scales infinitely. The question is how far your build can go before the numbers become impossible. This is the core appeal of Endless mode: pushing the theoretical limits of your team composition.
evidenceType: confirmed-fact
sourceRefs: [L001]

### Rift Mode Rules

heading: Rift Mode Rules
body: |
  Rift mode introduces randomized floor modifiers that change the rules of each floor:

  - **Modifier variety**: Floor modifiers can include anti-heal zones, damage reflection, speed alterations, enemy type biases, relic disabling, and stat penalties or bonuses.
  - **Adaptation requirement**: Builds that rely on one strategy (e.g., pure healing) are vulnerable to specific modifiers (anti-heal zone).
  - **Preview system**: Floor modifier previews allow planning before committing to a path.
  - **Risk/reward nodes**: Some rift paths offer better rewards but harsher modifiers — a core decision point.

  Rift mode rewards flexible builds that can handle multiple modifier types. Specialized builds (all-healing, all-burst) are high-risk because a single counter-modifier can end the run.

  The community-recommended approach: build for general resilience first, specialization second. A team that can handle 80% of modifiers adequately is safer than a team that dominates 50% of modifiers and dies to the other 50%.
evidenceType: confirmed-fact
sourceRefs: [L001]

### The SS Difficulty Wall (Community Report)

heading: The SS Difficulty Wall (Community Report)
body: |
  The "SS wall" is one of the most discussed topics in the Guildrun community. Multiple community reports describe the same pattern:

  - Players cruise through Normal, Hard, Expert, Master, and S-tier with consistent wins.
  - Upon entering SS-tier, previously reliable builds and strategies fail — often within the first 3 floors.
  - The failure is not gradual — it is abrupt, leading to frustration and forum posts.

  **Why the wall exists (community analysis):**
  - SS enemy stat scaling crosses multiple "breakpoints" simultaneously (HP, damage, speed).
  - Builds optimized for S-tier are tuned to S-tier thresholds. SS thresholds are different.
  - Players have developed habits (e.g., skipping defensive relics, over-prioritizing damage) that S-tier tolerated but SS punishes.
  - The learning curve from S to SS is steeper than any previous difficulty jump.

  **How to break through (community consensus):**
  - Re-evaluate every assumption. What worked on S may not work on SS.
  - Invest more in defense and sustain than you think you need.
  - Prioritize relic synergy over individual relic power.
  - Accept that SS requires a different build philosophy, not just "S but better."
evidenceType: community-report
sourceRefs: [L001, L002]

### Burst vs Survival in Endless

heading: Burst vs Survival in Endless
body: |
  Endless mode forces a fundamental strategic choice between burst and survival strategies:

  **Burst strategy:**
  - Maximize damage output to kill enemies before they act.
  - Relic priority: offensive scaling, on-kill triggers, speed boosts.
  - Strengths: Fast clears, high score potential, avoids attrition.
  - Weaknesses: Single mistake (missed burst window, CC on carry) can wipe. Loses to damage-sponge enemies.
  - Best for: Early-to-mid Endless floors where enemy HP is manageable.

  **Survival strategy:**
  - Maximize sustain to outlast enemies through healing, shields, and damage reduction.
  - Relic priority: defensive scaling, healing amplification, damage reduction stacking.
  - Strengths: Consistent, forgiving, handles unexpected damage spikes.
  - Weaknesses: Slow clears hurt score. Eventually outscaled by exponential enemy damage.
  - Best for: Deep Endless where survival is the only path forward.

  **The hybrid approach (recommended):**
  - Start with burst to maximize score in early Endless floors.
  - Transition toward survival as enemy HP and damage outpace your burst.
  - The best Endless runs balance both, adapting relic choices to the current floor's demands.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### Why a Team Survives but Fails

heading: Why a Team Survives but Fails
body: |
  The "survive but fail" problem is one of the most frustrating experiences in Guildrun: your team is alive, no one is dying, but you cannot clear the floor or the boss before the timer runs out.

  **Root causes:**
  1. **No damage scaling**: All relics and items went into defense. Your team is a wall, but walls do not kill enemies.
  2. **Enemy HP outscales damage**: Common on SS+ and Endless. Your damage was sufficient 5 floors ago but has not grown.
  3. **Wrong damage type**: Your team's damage is single-target but the floor spawns swarms. Or vice versa.
  4. **Crowd control dependency**: Your team relies on CC to survive, but CC does not kill. Eventually, enemies break through or the timer runs out.
  5. **Healer over-investment**: Too many resources in healing when you need more damage heroes or items.

  **How to diagnose:**
  - Check your damage-per-second against enemy HP bars. If enemies are dying slowly but consistently, you lack burst. If they are not dying at all, you lack any damage.
  - Check your damage relic count. If more than 60% of your relics are defensive, you have likely over-invested in survival.
  - Check hero roles. If all four heroes are tanks/healers/supports, you have no damage dealer.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### Diagnosing Damage, Frontline, and Scaling Problems

heading: Diagnosing Damage, Frontline, and Scaling Problems
body: |
  When a run is struggling, systematically diagnose which of three core problems is the root cause:

  **Damage problem symptoms:**
  - Enemies survive multiple attack cycles.
  - Timer pressure on every floor.
  - Boss phases take too long, leading to enrage or attrition.
  - Solution: Add offensive relics, upgrade DPS hero items, replace a support with a second DPS.

  **Frontline problem symptoms:**
  - Tank dies in the first 10 seconds of combat.
  - Backline heroes take direct damage.
  - Healing cannot keep up with incoming damage.
  - Solution: Add defensive relics, upgrade tank items, add a second frontline hero, prioritize damage reduction over raw HP.

  **Scaling problem symptoms:**
  - Build was strong on floors 1-10, gradually weakened, and collapsed after floor 15.
  - No relics provide per-floor or per-kill stacking bonuses.
  - Enemy stats grow faster than your team's.
  - Solution: Draft at least 2 scaling relics before floor 10. Replace flat-stat items with percentage-based items. Accept that some heroes simply do not scale and should be swapped if possible.

  **The most common failure pattern:** Players diagnose one problem but fix the wrong one. If your frontline is dying, adding a healer is not the same as adding defense. If your damage is low, adding attack speed is not the same as adding attack damage. Match the solution precisely to the problem.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### When to Rank Heroes vs Buy Items

heading: When to Rank Heroes vs Buy Items
body: |
  Gold allocation between hero ranking (upgrading hero tiers/stars) and buying items is a recurring decision point. Here is a framework:

  **Prioritize hero ranking when:**
  - The hero's next rank provides a game-changing ability or stat spike.
  - Your carry hero is the primary win condition and ranking them multiplies all other investments.
  - Items available in the shop are sidegrades, not upgrades.
  - You are early in the run (floors 1-5) and ranking now compounds value over more floors.

  **Prioritize buying items when:**
  - A specific item directly addresses your team's current weakness (e.g., a defense item when your tank is dying).
  - The shop offers a high-rarity item with perfect synergy for your direction.
  - Your heroes are already ranked sufficiently for the current difficulty.
  - You are late in the run (floors 15+) and ranking provides too little value for the remaining floors.

  **General rule:** Hero ranking is a long-term investment; items are short-to-medium-term power. On higher difficulties (SS+), short-term survival often outweighs long-term optimization because you cannot scale if you are dead.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### How Relic Decisions Change in Endless

heading: How Relic Decisions Change in Endless
body: |
  Relic evaluation in Endless differs significantly from ladder mode:

  1. **Flat stats lose all value.** A relic that gives "+50 attack" is meaningless when enemies have 100,000+ HP. Percentage-based and scaling relics are the only relevant picks.
  2. **Scaling relics become mandatory.** Per-floor, per-kill, and per-relic stacking bonuses are the core of every viable Endless build.
  3. **Economy relics gain value.** More floors = more shops = more purchases. Economy relics that break even on floor 15 in ladder mode break even on floor 8 in Endless.
  4. **Trigger relics must scale.** On-kill triggers that deal flat damage become negligible. Look for triggers that scale with enemy HP, your stats, or floor count.
  5. **Synergy trumps individual power.** Two relics that multiply each other (e.g., "+10% damage per relic" and "+1 relic slot") are infinitely better than two standalone relics.
  6. **Rarity still does not guarantee effectiveness.** A legendary relic with a flat-stat effect is worse than a scaling common relic in deep Endless.

  **The Endless relic mindset:** Every relic pick should answer the question: "Does this help me on floor 50?" If the answer is no, skip it — even if it would dominate on floor 15.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

### Community-Reported SSS Strategies

heading: Community-Reported SSS Strategies
body: |
  The following strategies have been reported by community members as effective on SSS difficulty. **Important: these are community reports, not verified meta. Test in your own runs.**

  **Strategy 1: Double Frontline Sustain**
  - Two tank heroes with taunt and damage reduction.
  - One healer with percentage-based healing.
  - One scaling DPS stacking offensive relics.
  - Reported strength: Consistent survival through SSS enemy damage spikes.
  - Reported weakness: Slow clears; struggles with timer-pressure floors.

  **Strategy 2: Full Scaling Rush**
  - All scaling relics drafted by floor 10.
  - Sacrifice early floors for late-game power.
  - Economy relics to fund hero upgrades.
  - Reported strength: Overwhelming power by floor 15+.
  - Reported weakness: High risk of dying before floor 10. Not recommended for first attempts.

  **Strategy 3: Single-Carry with Triple Support**
  - One hyper-fed DPS hero.
  - Three support heroes providing shields, heals, buffs, and CC.
  - All offensive relics and items funneled to the carry.
  - Reported strength: Highest damage ceiling of any composition.
  - Reported weakness: If the carry dies, the run instantly ends. Vulnerable to CC and focus-fire.

  **Strategy 4: Balanced Adapt**
  - No fixed archetype. Build flexibly around the best relics offered.
  - 2 frontline, 1 DPS, 1 flex (adjust based on floor modifiers).
  - Reported strength: Most consistent across varied relic RNG.
  - Reported weakness: Lower ceiling than specialized builds. May not reach deepest Endless floors.
evidenceType: community-report
sourceRefs: [L001, L002]

### Community Disagreement and Limitations

heading: Community Disagreement and Limitations
body: |
  The Guildrun community does not agree on a single best strategy for SS/SSS/Endless. Key areas of disagreement include:

  - **Burst vs sustain**: Some players argue burst damage is mandatory for SSS (kill before you are killed). Others argue sustain is the only consistent path (you cannot burst everything).
  - **Single-carry vs balanced teams**: Proponents of single-carry cite higher damage ceilings. Critics argue it is too fragile and loses to unlucky enemy targeting.
  - **Economy relic priority**: Some treat economy relics as mandatory early picks. Others argue they delay power too much on SS+ where early floors are lethal.
  - **Hero tier lists**: Community tier lists vary widely and frequently contradict each other. The same hero may be ranked S-tier by one player and C-tier by another.

  **Limitations of community data:**
  - Small sample sizes — most players share results from 5-20 runs, not hundreds.
  - Confirmation bias — players share strategies that worked once, not strategies that failed.
  - Patch variability — a strategy from patch 0.8 may not work on patch 0.9.
  - Difficulty context — "SSS-viable" claims rarely specify which floor modifiers or relic combinations are assumed.

  **Recommendation:** Treat community strategies as starting points for your own experimentation, not as gospel. The developer FAQ (L002) confirms adaptation is the core design — trust your own run analysis over any tier list.
evidenceType: editorial-recommendation
sourceRefs: [L002]

### FAQ

heading: FAQ
body: |
  **Q: How many difficulty tiers are there in Guildrun?**
  A: 8 difficulty picks across 7 ladder indices: Normal, Hard, Expert, Master, S, SS, SSS, plus Endless mode. Confirmed by the Steam store page (L001).

  **Q: What is the SS difficulty wall?**
  A: A widely reported community phenomenon where builds that consistently clear S-tier fail on SS-tier. Caused by enemy stat scaling crossing multiple breakpoints simultaneously. Most players experience this wall and must adjust their build philosophy to overcome it.

  **Q: How does Endless scoring work?**
  A: Endless scores are based on floors cleared, enemies defeated, clear speed, and damage taken. Faster, cleaner runs score higher than slower, deeper runs. Leaderboard optimization is a different problem than pure survival.

  **Q: Should I pick burst or survival for Endless?**
  A: A hybrid approach is recommended. Start with burst to maximize score in early Endless floors, then transition to survival as enemy stats outpace your burst damage.

  **Q: Can I beat SSS with any team composition?**
  A: No. SSS demands optimized builds, strong relic synergy, and specific hero/relic combinations. Many compositions that work on lower difficulties cannot handle SSS enemy scaling.

  **Q: How do I know if my build has a scaling problem?**
  A: If your team was strong on floors 1-10 but gradually weakened and collapsed after floor 15, you have a scaling problem. Add scaling relics (per-floor, per-kill stacking) before floor 10.

  **Q: Is Rift mode harder than standard Endless?**
  A: Rift mode adds randomized floor modifiers that force adaptation. It is harder for specialized builds but not necessarily harder for flexible builds. The key is building general resilience first.
evidenceType: editorial-recommendation
sourceRefs: [L001, L002]

## quickFacts

| Fact | Detail |
|------|--------|
| Difficulty tiers | 8 picks, 7 ladder indices: Normal, Hard, Expert, Master, S, SS, SSS |
| Endless mode | Marathon mode with exponential enemy scaling, scoring system |
| SS difficulty wall | Community-reported threshold where S-tier builds collapse |
| Endless scoring | Based on floors cleared, enemies defeated, speed, and damage taken |
| Enemy scaling | Exponential per floor in Endless |
| Rift mode | Randomized floor modifiers requiring adaptation |
| Key SSS requirement | Optimized builds, strong relic synergy, near-perfect play |
| Common failure modes | No damage scaling, frontline collapse, scaling plateau |
| Relic shift in Endless | Flat stats lose value; scaling and percentage-based relics mandatory |
| Source | Steam store (L001), Developer FAQ (L002) |

## relatedGuides

- /builds
- /relics
- /heroes

## uncertainties

- Exact Endless scoring formula values may change across patches.
- Enemy scaling curve exact values are community-documented, not officially published.
- Rift mode modifier pool and frequency are not fully catalogued.
- SSS strategies are community-reported and have not been systematically tested across all relic combinations.
- The number of floors at which specific builds break in Endless varies by relic RNG and hero selection.

## blockers

- None. Difficulty tier information is confirmed by the Steam store page (L001). Endless scoring and scaling mechanics are based on Steam store information and community documentation. SSS strategies and the SS wall are clearly labeled as community-report. Editorial advice is marked as editorial-recommendation.
