# /rush-mechanic — What Is Known About Rush in Guildrun

slug: rush-mechanic
title: Guildrun Rush Mechanic — How It Works & When to Use It
h1: What Is Known About Rush in Guildrun
description: Rush is one of the most important mechanics in Guildrun that a surprising number of beginners ignore. Here's what we know — and what we don't — about how Rush works based on the demo game data.
recommendedStatus: ready
recommendedIndexable: true
lastReviewed: 2026-07-22
versionContext: Steam demo (released 2026-07-16); Rush data from game files via guildrun.wiki

## directAnswer

Rush is a combat-time mechanic in Guildrun where certain effects are **only active during the first N seconds of a fight**, then shut off completely. If you're not actively trying to win fights fast with Rush-optimized heroes (Warrior, Vanguard, Assassin, Duelist), you're leaving free rewards on the table. The counterpart is **Stall** — effects that stay off until N seconds into the fight, then switch on permanently. Which one your team leans into determines your entire run strategy. Here's what's actually confirmed vs. what's community theory.

## sections

### What Rush Actually Does

heading: Rush: The Confirmed Definition
body: |
  According to the game data (documented on guildrun.wiki and extracted from the current demo build), Rush is defined as:

  > **"The effect is live only during the first N seconds of combat (shown as Rush (N)), then shuts off. Some heroes can refresh their own Rush windows."**

  Key points:
  - Rush effects have a **time window** (N seconds from combat start). The specific N value varies by hero or item — it's shown as "Rush (N)" in-game.
  - After N seconds pass, the Rush effect **turns off entirely** for the rest of that fight.
  - Some heroes can **refresh** their own Rush windows, effectively extending their Rush bonus time.
  - Rush is used by these classes: **Warrior, Vanguard, Assassin, Duelist**

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/#rush

evidenceType: confirmed-fact
sourceRefs: [S02]

### Rush vs Stall: The Core Decision

heading: Rush vs Stall — The Decision That Defines Your Run
body: |
  Guildrun's combat design gives you two fundamentally opposite approaches, and your early hero picks + shop decisions lock you into one direction:

  **Rush**: Win fast, gain more rewards. Rush effects are front-loaded. Heroes with Rush bonuses get stronger in the opening seconds. If you can kill enemies before their scaling kicks in, you get:
  - More Shards from surviving-hero bonuses (dead heroes earn nothing)
  - Earlier access to re-roll opportunities
  - Less enemy scaling time

  **Stall**: Survive the opening, then outscale. Defined in the game data as: "The effect stays off until N seconds into the battle (shown as Stall (N)), then switches on permanently; it fires once per battle, not repeatedly." Stall is used by **Tank, Duelist, Mystic, Mage**.

  The "once per battle" part matters — Stall isn't something that keeps reactivating. It triggers once when the timer hits N seconds, and then it's on for good. This makes Stall heroes weak in the opening but increasingly dominant the longer a fight goes.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/#stall

evidenceType: confirmed-fact
sourceRefs: [S02]

### The Storm: Why You Can't Just Stall Forever

heading: The Anti-Stall Clock (The Storm)
body: |
  Here's a mechanic most beginners don't notice until it kills them: **The Storm**.

  Starting at 50 seconds into any fight, The Storm begins dealing damage to **everyone** — your heroes AND enemies. Here's the exact sequence from the game data:
  - Starts at t=50 seconds
  - Deals 5 damage/s to everyone, escalating every tick
  - At ~65 seconds, the per-tick damage multiplier jumps to ×1.5
  - Around 65-75 seconds, the fight becomes basically unwinnable — "A battle timeout counts as a defeat"

  This matters because it puts a **hard ceiling on stall strategies**. You can't just stack 3 tanks and wait. If you can't kill the enemy before The Storm ramps up, you lose — your own team dies to the same Storm. It's damage that can be reduced by Defense (it's not True Damage), so high-Defense tanks survive longer, but even they will eventually fall.

  There's also a legendary relic called **The Riftbreaker** that deals True Damage to enemies only at t=90s (33% max HP first tick, then 5% every 0.25s). This is a dedicated "I win if I survive" relic for stall builds, but it requires getting the relic first — and The Storm is still killing your team while the Riftbreaker does its work.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/#the-storm

evidenceType: confirmed-fact
sourceRefs: [S02]

### When to Rush

heading: Practical Rush Timing
body: |
  Based on how the game's economy and combat work:

  **Early game (Acts 1-2): Rush aggressively.**
  - Enemies have low HP, low Defense, no scaling. Rush bonuses let you end fights in seconds.
  - Every surviving hero means more Shards. Every dead hero means zero Shards from that fight.
  - Early Shard advantage snowballs into better shop purchases, faster rank-ups, and a stronger mid-game.

  **Mid game (Acts 3-4): Evaluate per fight.**
  - Enemy Defense and HP start climbing. Your burst damage may no longer be enough to secure the Rush window.
  - Check the enemy composition before committing. If they have multi-Tank or high-Defense front lines, consider whether a slower approach works better.

  **Boss fights: Depends on your comp.**
  - Bosses have high HP pools. Rush can work if you have high burst damage (Crit-stacked Assassin, maxed Attack Speed Duelist).
  - If your damage is more sustained (Poison/Burn stacking, scaling Mage), don't force Rush against bosses — you'll waste the window and be stuck in a drawn-out fight with no bonuses.

  **Late game (Act 5+, Endless): Rush becomes situational.**
  - Enemy scaling in Endless makes early burst increasingly difficult. By this point, you need either overwhelming damage or a pivot to a more balanced approach.
  - If you've built a Rush comp from Act 1 and kept it fed with items and relics, it can still work. If you're trying to pivot into Rush late, don't.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

### What We Don't Know Yet

heading: What's Still Unconfirmed About Rush
body: |
  The demo build and game data tell us how Rush works, but there are gaps:

  - **Exact Rush time windows (N)**: These are hero-specific and not documented in a single source. The game shows "Rush (N)" for each hero, but a comprehensive list of all N values across all 25 heroes is not available.
  - **Rush refresh mechanics**: "Some heroes can refresh their own Rush windows." Which heroes? Under what conditions? The game data confirms the mechanic exists but doesn't detail which heroes have it.
  - **Rush reward formulas**: The connection between "winning faster" and "getting more Shards" is confirmed by the game economy (surviving heroes = more Shards), but whether there are additional Rush-specific rewards beyond this is unclear.
  - **Rush counter-synergies**: Which enemy types or compositions specifically punish Rush strategies hasn't been systematically documented.

  These aren't reasons to avoid using Rush — the core mechanic is well-understood and directly impacts your run. But if someone tells you "always Rush on Act 1, always Stall on Act 4," they're oversimplifying.

evidenceType: uncertainty
sourceRefs: [S02]

### Common Misunderstandings

heading: Don't Fall for These Rush Myths
body: |

  **Myth 1: "Rush is always better than Stall"**
  Reality: Rush and Stall are both viable. Rush gives you immediate rewards and tempo. Stall lets scaling heroes and DoT effects (Poison, Burn) reach their full potential. The correct choice depends on your hero composition, items, and relics — not a universal rule.

  **Myth 2: "If you're not Rushing, you're playing wrong"**
  Reality: A Stall build with Poison-stacking, high-Defense tanks, and The Riftbreaker relic is a legitimate strategy. It works differently — slower starts, stronger late-game. The Storm puts a ceiling on it, but with the right setup, it's perfectly viable.

  **Myth 3: "Rush means you have to win in the first N seconds"**
  Reality: Rush effects shut off after N seconds. That doesn't mean you instantly lose the fight. It means you lose the Rush bonuses. Your heroes still auto-attack, still use abilities, still scale. You just don't have the extra edge anymore.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

## quickFacts

| Fact | Detail |
|------|--------|
| Rush definition | Effects active only during first N seconds of combat |
| Rush classes | Warrior, Vanguard, Assassin, Duelist |
| Stall definition | Effects activate after N seconds, then stay on permanently |
| Stall classes | Tank, Duelist, Mystic, Mage |
| Anti-stall mechanic | The Storm (starts at 50s, lethal by ~75s) |
| Rush refresh | Some heroes can extend their Rush window (hero-specific) |

## relatedGuides
- /beginner-guide
- /builds
- /difficulty-endless

## uncertainties
- Exact Rush time windows (N) are hero-specific and not comprehensively documented
- Which heroes can refresh Rush windows is not exhaustively documented
- Whether there are Rush-specific rewards beyond "faster kills = more surviving heroes = more Shards" is unclear

## blockers
- None. The core mechanic is well-defined in the game data. Remaining uncertainties are hero-specific details that don't prevent the page from answering the core search intent.
