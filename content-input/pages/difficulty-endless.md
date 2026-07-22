# /difficulty-endless — Guildrun Difficulty & Endless Mode

slug: difficulty-endless
title: Guildrun Endless Mode & Difficulty Guide
h1: Guildrun Difficulty & Endless Mode
description: How Guildrun's difficulty system works across 8 selectable picks — 7 standard ladder tiers from Base to SSS, plus the Red Rift as a separate contract. Endless scoring formula, enemy scaling, and why SS difficulty makes the first boss impossible for some players.
recommendedStatus: ready
recommendedIndexable: true
lastReviewed: 2026-07-22
versionContext: Steam demo (released 2026-07-16); difficulty data from game files via guildrun.wiki

## directAnswer

Guildrun offers **8 selectable difficulty picks** on the New Run screen: Base, C, B, A, S, SS, SSS, and the Red Rift. Seven of these (Base through SSS) form the standard Endless-scoring ladder — each unlocked progressively by beating the previous tier, with stacking modifiers. The Red Rift is the eighth pick: a separate contract with its own leaderboard that does not enter Endless mode. Internal game data uses Index 0–6 for the seven ladder entries (according to guildrun.wiki, which describes its reference data as extracted from the current demo build). Endless Mode uses a scoring formula that multiplies your floor reached by a difficulty bonus — except at the highest ladder difficulty (SSS / Index 6), where the bonus term drops to zero. Enemy scaling in Endless grows quadratically.

## sections

### Difficulty Tiers

heading: All 8 Difficulty Picks
body: |
  Guildrun's New Run screen presents **8 selectable difficulty picks**. Seven form the standard ladder (Base through SSS), unlocked progressively by beating the previous tier. Each tier adds a stacking modifier — the effects from lower tiers remain active when you pick a higher one.

  **The standard ladder** (from game data, per guildrun.wiki):

  | Pick | Internal Index | Modifier |
  |------|---------------|----------|
  | Base | 0 | No modifiers |
  | C | 1 | Heroes start battles at 90% HP |
  | B | 2 | No modifier (placeholder — may change in future patches) |
  | A | 3 | Surviving-hero shard reward reduced by 1 |
  | S | 4 | Item slots unlock with hero rank |
  | SS | 5 | No modifier (placeholder — may change in future patches) |
  | SSS | 6 | Act boss carries a buff relic |

  **The Red Rift** is the eighth selectable pick. It is a **separate contract** — it has its own leaderboard and does not participate in the Endless scoring ladder. The Steam store page describes it as part of "8 difficulties," but it's more accurately understood as a distinct challenge mode rather than a rung on the standard difficulty ladder.

  A few things to note:
  - Internal indices 0–6 correspond to the seven ladder entries only. Red Rift has no index in this system. According to guildrun.wiki, which describes its reference data as extracted from the current demo build, the seven ladder entries map to indices 0–6.
  - **B and SS** (indices 2 and 5) currently display no modifier in the game data. These may be placeholders for future content, or they may be difficulties where the only change is increased enemy stats (not a visible modifier).
  - **SSS (Index 6)** is the highest ladder difficulty. Bosses carry a buff relic, making boss fights significantly harder on top of whatever stat scaling applies.

  Sources: Steam store page (S01); guildrun.wiki Difficulty — https://guildrun.wiki/systems/difficulty/ (S03b); guildrun.wiki Game Modes — https://guildrun.wiki/systems/game-modes/ (S03)

evidenceType: confirmed-fact
sourceRefs: [S03, S03b, S01]

### The SS Difficulty Wall

heading: Why SS Difficulty Feels Impossible
body: |
  Community reports paint a consistent picture: after unlocking SS rank (around Index 5-6), the game's difficulty spike becomes extreme. One player on the Steam forums put it bluntly:

  > "After I got to SS I cant even beat the first boss anymore on the easiest difficulty. NOTHING but common garbage items dropping. This game was so awesome now its just stupid f'n impossible."
  > — Sidrandom, July 21 2026

  This post got 7 replies and high engagement, suggesting it's a shared experience — not an outlier. The likely causes:

  1. **Stacking modifiers**: By Index 6, you're dealing with -10% starting HP, -1 shard per surviving hero, item slot gating, AND boss relic buffs. Each individual modifier is manageable; all of them at once creates a compound difficulty spike.
  2. **Item rarity doesn't scale with difficulty**: Higher difficulties don't guarantee better shop offerings. The shop's rarity distribution is the same at Index 6 as at Index 0, meaning your power curve doesn't automatically match the enemy's.
  3. **The rewind mechanic**: Some players report that the rewind feature (which lets you replay battles with bonuses) is poorly designed for high difficulty — the bonus takes too long to activate and wastes combat time.

  Community thread: https://steamcommunity.com/app/3669200/discussions/0/618435289300111365/
  Rewind criticism: https://steamcommunity.com/app/3669200/discussions/0/618435289300111366/

evidenceType: community-report
sourceRefs: [S05, S10]

### Endless Mode Scoring

heading: Endless Scoring Formula
body: |
  Endless Mode in Guildrun continues past the normal campaign, scaling enemies with a quadratic growth formula. Your score is calculated as:

  ```
  EndlessModeScore = endlessFloor + bonusScore + 2 × difficultyIndex
  ```

  Where:
  - **endlessFloor**: The floor you reached in Endless mode
  - **bonusScore**: +1 per "IncreaseEndlessModeScore" event reward collected during the run
  - **difficultyIndex**: The selected difficulty level (0-6), multiplied by 2

  **Important edge case**: At the highest difficulty (Index 6), the difficulty bonus term is **set to zero**. This means playing on Index 6 gives you no extra score multiplier — it's purely for the challenge. If you're chasing leaderboard position, Index 5 may actually give you a higher potential score than Index 6 depending on how far you can get.

  Source: guildrun.wiki Game Modes — https://guildrun.wiki/systems/game-modes/

evidenceType: confirmed-fact
sourceRefs: [S03, S03b]

### Endless Enemy Scaling

heading: How Endless Enemies Scale
body: |
  Enemy stats in Endless mode grow according to this formula:

  ```
  E = 0.43092 × cycle + 0.07815 × cycle²
  ```

  Where **cycle = floor(floor / 3)** — the current floor divided by 3 and rounded down.

  What this means in practice:
  - **Floors 1-2**: cycle=0 → no scaling yet
  - **Floors 3-5**: cycle=1 → enemies get a small bump
  - **Floors 6-8**: cycle=2 → scaling starts to be noticeable
  - **By floor 30** (cycle=10): E ≈ 4.31 + 7.82 = ~12.1 — enemies have over 12x base stats
  - **By floor 60** (cycle=20): E ≈ 8.62 + 31.26 = ~39.9 — enemies approaching 40x base stats

  The quadratic term (0.07815 × cycle²) is what makes Endless runs inevitably end. It starts slow — barely noticeable in the first 15 floors — then accelerates. No amount of item optimization can outscale quadratic enemy growth forever. This is by design: Endless is a "how far can you get" mode, not an "infinite scaling" mode.

  Source: guildrun.wiki Game Modes — https://guildrun.wiki/systems/game-modes/

evidenceType: confirmed-fact
sourceRefs: [S03]

### Rift Challenge Mode

heading: Rift (Challenge) Mode Rules
body: |
  Rift mode adds per-run constraints:
  - **Max hero deaths**: 10 (lose your 10th hero and the run ends)
  - **Wins per class**: 3 (you need 3 wins with each class)
  - **Shop tax per act**:
    - Act 1: 10 base + 2 per shop visit
    - Act 2: 15 base + 3 per shop visit

  The shop tax means every purchase costs more in Rift mode. Combined with the hero death limit (10 total), this mode demands careful resource management — you can't afford wasteful rerolls or impulse buys.

  Source: guildrun.wiki Game Modes — https://guildrun.wiki/systems/game-modes/

evidenceType: confirmed-fact
sourceRefs: [S03]

### What Difficulty to Start On

heading: Recommended Starting Difficulty
body: |
  **Start on Index 0.** Here's why:

  The difficulty system is designed as a progressive unlock. You can't skip tiers — you have to beat Index 0 to unlock 1, beat 1 to unlock 2, and so on. There's no benefit to jumping ahead (you physically can't), and the compounding modifiers mean each tier is genuinely harder than the last.

  For your first few runs, focus on learning the core systems (Rush/Stall, shop economy, hero classes) rather than pushing difficulty. Once you consistently clear Index 0, move up. The game gates progression behind successful runs for a reason.

  If you hit a wall (like the SS difficulty experience described above), consider:
  - Dropping back to a lower difficulty to experiment with different builds
  - Rerolling your starting hero/shop seed
  - Focusing on one build archetype rather than trying to adapt mid-run

evidenceType: editorial-recommendation
sourceRefs: [S05]

## quickFacts

| Fact | Detail |
|------|--------|
| Selectable picks | 8 (Base, C, B, A, S, SS, SSS, Red Rift) |
| Standard ladder | 7 entries (Base–SSS, internal indices 0–6) |
| Red Rift | 8th pick — separate contract, own leaderboard, no Endless |
| Index 1 (C) modifier | Heroes start at 90% HP |
| Index 3 (A) modifier | Shard reward -1 per surviving hero |
| Index 4 (S) modifier | Item slots gated by hero rank |
| Index 6 (SSS) modifier | Act boss carries buff relic |
| Endless formula | score = floor + bonus + 2×difficultyIndex (0 at SSS/Index 6) |
| Enemy scaling | E = 0.43092×cycle + 0.07815×cycle² |
| Rift hero deaths | Max 10 |
| Rift shop tax | Act 1: 10+2/shop, Act 2: 15+3/shop |

## relatedGuides
- /beginner-guide
- /rush-mechanic
- /builds

## uncertainties
- Indices 2 and 5 have no current modifiers — these may be placeholders for future content or may simply be "stat-scaling only" tiers
- Whether the "SS difficulty wall" is a balance issue or intended progression is unknown (no developer response found)

## blockers
- None. Difficulty picks are confirmed from Steam store (8 picks) and guildrun.wiki (7 ladder + Red Rift contract). Index 0-6 correspondence is clearly labeled as community-reference data from guildrun.wiki, not Steam-official wording. Community reports about difficulty spikes are sourced with specific URLs and labeled as community-report.
