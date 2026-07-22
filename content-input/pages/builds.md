# /builds — Early Build Concepts for Guildrun

slug: builds
title: Guildrun Builds — Early Team Concepts & Strategic Directions
h1: Early Build Concepts for Guildrun
description: Practical Guildrun build directions for the Steam demo — Rush-focused, Stall-focused, balanced beginner, and single-carry approaches with hero class picks, item recommendations, and relic synergies.
recommendedStatus: review
recommendedIndexable: false
lastReviewed: 2026-07-22
versionContext: Steam demo (released 2026-07-16); build concepts are editorial, backed by game mechanics

## directAnswer

Guildrun builds are defined by your strategic direction (Rush or Stall) rather than fixed hero+item formulas. The four main approaches in the current demo meta are: **Rush-focused** (fast kills, maximum Shard income), **Stall-focused** (scaling through DoT and defensive stacking), **Balanced Beginner** (forgiving comp for learning), and **Single-Carry** (one hyper-fed hero). No build is universally "best" — each has matchups it dominates and matchups it struggles against. Here's what works, with the caveat that the demo has only been out since July 16, 2026, and the meta is still evolving.

## sections

### Build Direction 1: Rush-Focused

heading: Rush-Focused — Win Fast, Snowball Hard
body: |
  **Core idea**: End fights within the Rush window (first N seconds). Maximize surviving heroes → maximize Shard income → more purchases → stronger team → faster kills.

  **Recommended classes**: Warrior, Vanguard, Assassin, Duelist (all have Rush keyword)

  **Ideal hero types**:
  - High base Attack Speed heroes (for fast mana → fast abilities)
  - High Crit scaling heroes (Crit doubles damage at 100, excess Crit converts to damage bonus)
  - Burst damage abilities rather than DoT/scaling abilities

  **Key items**: Attack Speed, Crit, Attack (damage). Avoid Magic items — Rush heroes are Attack-scalers.
  **Key relics**: Anything that boosts Attack Speed or Crit. Relics that increase Shard rewards per kill (if available) directly feed the snowball.

  **Play pattern**:
  1. Position Rush heroes in front rows (y=2 or 3) for fastest enemy contact
  2. Stack Attack Speed items on your highest-DPS hero first, not spread across all
  3. Prioritize buying duplicates for your main carry — one rank = +25% HP, +25 Attack, +20 Attack Speed
  4. Don't take Stall items or relics — they don't activate until after your Rush window closes

  **Weaknesses**:
  - High Defense enemies (Tanks, Vanguards with Defense stacking) can survive the Rush window
  - If your carry dies early, the entire strategy collapses
  - Falls off in deep Endless where enemy HP outscales your burst

  **Counter**: Include one source of True Damage (if available) for high-Defense enemies.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

### Build Direction 2: Stall-Focused

heading: Stall-Focused — Survive, Scale, Outlast
body: |
  **Core idea**: Drag fights long enough for Stall effects to activate and scaling to take over. Use Poison/Burn stacking and defensive items to become nearly unkillable by the late fight.

  **Recommended classes**: Tank, Duelist, Mystic, Mage (all have Stall keyword)

  **Ideal hero types**:
  - High base HP/Defense heroes
  - Heroes with Poison, Burn, or Frost abilities (DoT damage bypasses Defense)
  - Heroes with healing or shield abilities for sustain

  **Key items**: Defense, HP, Shield items. DoT-enhancing items. Mana Regen (for more abilities).
  **Key relics**: The Riftbreaker (legendary — at t=90s, deals 33% max HP true damage to all enemies, then 5%/0.25s). Defense/HPregen relics.

  **Play pattern**:
  1. Position Tanks in the very front row (y=3), backline DPS in rows 0-1
  2. Stack Defense on your frontline — Defense has no diminishing returns (EHP = HP × (1+DEF/100))
  3. Let Poison/Burn stacks accumulate — Poison ticks every 2s and never falls off
  4. Survive until The Storm (~50s). By this point, your DoT should have worn enemies down

  **Weaknesses**:
  - The Storm kills everyone by ~75s — you can't wait forever
  - Weak early game — can lose fights before scaling kicks in
  - Riftbreaker relic is legendary rarity — cannot count on finding it

  **Counter**: Rush comps with high burst damage can kill your slow-scaling heroes before they come online.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

### Build Direction 3: Balanced Beginner

heading: Balanced Beginner — The Forgiving Starter Build
body: |
  **Core idea**: 1 Tank (frontline) + 1 DPS (backline) + 1 flex slot. Not optimized for Rush or Stall — optimized for not dying while learning.

  **Recommended classes**: Tank (frontline), any DPS class (backline), any flex

  **Key items**: Defense on Tank, Attack/Crit on DPS. Don't overthink it.
  **Key relics**: Generic stat boosts. Avoid conditional relics that require specific play patterns.

  **Play pattern**:
  1. Place Tank in front, DPS behind. Let the Tank absorb damage, let the DPS do damage.
  2. Buy hero duplicates when you see them (rank-ups are always good).
  3. After Act 2-3, you'll naturally have enough items and heroes to decide: is your team winning fast? Go Rush. Are fights lasting long and you're surviving well? Lean Stall.

  **This build's purpose**: It's a learning tool, not an optimal strategy. Use it for your first 3-5 runs. Once you understand the systems, you should transition to Rush or Stall — the Balanced build spends the mid-game without a clear direction, which caps your power ceiling.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

### Build Direction 4: Single-Carry

heading: Single-Carry — Feed One Hero Everything
body: |
  **Core idea**: Identify one hero as your hard carry. All Shards, all items, all rank-ups go to this hero. The rest of the team exists to keep the carry alive.

  **Requirements**: A hero with high scaling potential — high base Attack Speed for Duelists, high Crit for Assassins, or strong scaling abilities for Mages.

  **Key items**: Stack items on ONE hero. Don't spread. A carry with 3 items is dramatically stronger than three heroes with 1 item each.
  **Key relics**: Relics that buff a single hero or reward high-damage kills.

  **Play pattern**:
  1. Identify your carry by Act 2 (first hero that gets a rank-up or legendary item)
  2. Every duplicate purchase targets this hero specifically
  3. Position the carry where they can attack without being in the direct line of fire (row 1-2, not row 3)
  4. Surround with tanks/supports — they don't need items, they just need to not die

  **Weaknesses**:
  - If your carry dies, the run ends immediately
  - Vulnerable to enemy targeting that bypasses your frontline (Assassins with Stealth)
  - Single damage type can be walled by enemies resistant to it

  **Counter**: Diversify — even in a single-carry build, consider one backup damage source (a hero with Backup keyword in reserve) for when the carry is threatened.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

### Build Direction 5: Frontline Survival

heading: Frontline Survival — The Unkillable Wall
body: |
  **Core idea**: Stack 2-3 Tanks/Vanguards in the front line with max Defense and HP. They don't kill fast — they just don't die. Your backline does the actual damage.

  **Recommended classes**: Tank, Vanguard (frontline); Mage, Mystic (backline)

  **Key items**: Defense, HP on EVERY frontline hero. Magic/Mana Regen for backline.
  **Key relics**: Defense-boosting relics, HP regeneration relics, The Riftbreaker.

  **Play pattern**:
  1. 2 Tanks in row 3 (absolute front), 1 Vanguard in row 2
  2. Backline in rows 0-1 — they benefit from the targeting priority system (enemies target closest hero = Tanks)
  3. Survive the opening, let backline Mages stack abilities
  4. At high difficulties, item slots are gated by hero rank (Index 4+) — your Tanks need ranks, not just items

  **Weaknesses**:
  - True Damage ignores Defense entirely — enemy True Damage dealers shred this comp
  - The Storm is your hard ceiling — you must win before ~75s even with max Defense
  - Slow fights mean fewer fights per run → less total Shard income

  **Counter**: Rush comps with True Damage abilities.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04, S03]

### What We Can't Recommend Yet

heading: Builds We Can't Recommend (Yet)
body: |
  **"Best Builds" or definitive tier rankings**: The demo has been out for 6 days. Any guide claiming to know the definitively best build is guessing. The meta will evolve as more players reach Endless and discover synergies.

  **Hero-specific builds (e.g., "Karsu Carry Build")**: We'd need confirmed data on individual hero abilities, scaling numbers, and relic interactions. The game data exists (25 heroes, 162 items, 322 relics) but systematic hero analysis hasn't been published yet.

  **"Always pick X hero" recommendations**: Hero viability depends on: your other heroes, your items, your relics, the enemy composition, and the difficulty level. There is no hero that's always correct.

  When more community data emerges (particularly Endless leaderboard compositions and high-difficulty clear strategies), this page will be updated with specific hero names and item combinations.

evidenceType: uncertainty
sourceRefs: [S06]

## quickFacts

| Build | Direction | Key Classes | Key Items | Risk Level |
|-------|-----------|-------------|-----------|------------|
| Rush-Focused | Win fast | Warrior, Vanguard, Assassin, Duelist | Attack Speed, Crit, Attack | Medium |
| Stall-Focused | Outlast | Tank, Duelist, Mystic, Mage | Defense, HP, DoT | High |
| Balanced Beginner | Forgiving | Tank + any DPS | Defense on Tank, Damage on DPS | Low |
| Single-Carry | One hyper-fed hero | Any high-scaler | All items on one hero | Very High |
| Frontline Survival | Unkillable wall | Tank, Vanguard × 2-3 | Defense, HP | Medium |

## relatedGuides
- /beginner-guide
- /rush-mechanic
- /reserve-heroes
- /shop-guide
- /tier-list

## uncertainties
- No hero-specific build data available (demo is 6 days old)
- Best-in-slot items per hero not yet established by community
- Endless leaderboard compositions not yet analyzed

## blockers
- Page remains review (not ready) because builds are currently directional concepts, not specific hero+item formulas. To reach ready, need: at least one concrete hero+item+relic combination with named heroes and sourcing. The page provides strategic frameworks but lacks the specificity that competitive players searching for "guildrun builds" would expect.
