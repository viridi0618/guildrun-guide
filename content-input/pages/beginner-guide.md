# /beginner-guide — Guildrun Beginner Guide

slug: beginner-guide
title: Guildrun Beginner Guide — How to Win Your First Run
h1: Guildrun Beginner Guide: Your First Run
description: New to Guildrun? This guide covers Rush vs Stall, reserve heroes, shop basics, team composition, and the decisions that actually matter in your first few runs. No fluff — just what makes the difference between winning and losing.
recommendedStatus: ready
recommendedIndexable: true
lastReviewed: 2026-07-22
versionContext: Steam demo (released 2026-07-16); all data from game files via guildrun.wiki and Steam store page

## directAnswer

Your first Guildrun run will feel overwhelming. Here's the short version of what matters: pick a direction (Rush or Stall) by the end of Act 2 and commit to it, don't reroll the shop more than twice, use your reserve bench strategically, and prioritize keeping heroes alive over everything else — dead heroes earn zero Shards. Start on Index 0. Expect to lose a few runs while you learn. That's normal. Here's the complete breakdown.

## sections

### The One Decision That Shapes Everything

heading: Rush or Stall — Decide by Act 2
body: |
  Guildrun gives you a fundamental choice that determines your entire strategy: **Rush or Stall.**

  **Rush** means your effects are active in the first N seconds of combat. Rush heroes (Warrior, Vanguard, Assassin, Duelist) want to end fights fast. The benefit: more surviving heroes = more Shards per fight, faster snowball, better economy. The risk: if enemies survive past your Rush window, your team loses its edge.

  **Stall** means your effects activate after N seconds and then stay on permanently. Stall heroes (Tank, Duelist, Mystic, Mage) want fights to last. The benefit: Poison/Burn stacking, scaling abilities that grow stronger over time. The risk: The Storm (anti-stall clock starting at 50s) will kill your team if the fight drags too long.

  The most common beginner mistake is **not committing to either**. You end up with a hybrid team that's mediocre at both — not fast enough to Rush effectively, not durable enough to Stall through The Storm. Look at your first few hero picks and items. If you have an Assassin and a Warrior, go Rush. If you have a Tank and a Mage, go Stall. Once you commit, every subsequent decision (shop purchases, item assignments, reserve picks) should support that direction.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/

evidenceType: editorial-recommendation
sourceRefs: [S02]

### Core Resources You Need to Understand

heading: The 4 Resources That Run Your Game
body: |

  **Shards** — Your only currency. Earned from winning fights; zero from losing. Surviving heroes increase your payout. Dead heroes contribute nothing. This is why keeping your team alive matters more than anything else — every death is a direct deduction from your spending power.

  **Ranks** — How heroes get stronger. Buying a duplicate hero in the shop automatically ranks it up, giving stat bonuses: +25% HP, +4 Mana Regen, +30 Defense, +25 Attack, +25 Magic, +20 Attack Speed, +15 Crit (primary class). Secondary and base stats get roughly half. A single rank-up is roughly equivalent to equipping 3-4 items — it's the most efficient power-per-Shard in the game.

  One critical detail: per-floor rank-up probabilities are set to 0 in the current demo build. You will NEVER get a free rank-up just by progressing. All rank-ups come from buying duplicates, rank-up events, and campfires. This makes shop discipline even more important.

  **Roster & Board** — You can own 6 heroes. Your board starts at 3 slots and caps at 5. At least 1 hero is always in reserve. Heroes in reserve still get rank-ups from duplicate purchases, and Backup abilities work from the bench.

  **Mana** — Heroes cast abilities when their mana bar fills. Mana comes from auto-attacks (+5 per hit) and passive regeneration (+ManaRegen every 2 seconds). Faster attack speed = faster mana = more abilities. This is why Attack Speed is valuable beyond just auto-attack damage.

  Source: guildrun.wiki Economy & Glossary — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04, S02]

### First Run Walkthrough

heading: Your First Run — What to Do, Act by Act
body: |

  **Before you start**: Pick Difficulty 0. You can't skip tiers anyway — beating 0 unlocks 1, beating 1 unlocks 2, and so on. Your first goal is to learn the systems, not optimize a leaderboard score.

  **Act 1 — The Opening**
  - Pick heroes from classes you understand. Warrior and Assassin are the most straightforward: Warrior does damage, Assassin has high Attack Speed. Don't pick a Mage+Mystic opening unless you know what you're doing — they rely on ability timing and synergy.
  - Buy one item for your best hero. Don't reroll yet — save Shards for the first boss.
  - Look at what you have. If your first two heroes are both Rush-class (Warrior, Vanguard, Assassin, Duelist), you're probably going Rush. If you got a Tank and a Mage, you're leaning Stall.

  **Act 2 — The Decision**
  - By the end of Act 2, you should know your direction. Shop purchases from here on should reinforce it: Rush heroes get Attack Speed, Crit, and Attack items. Stall heroes get Defense, HP, and damage-over-time items (Poison/Burn).
  - Buy hero duplicates when you see them. The +25% HP and +30 Defense from a single rank-up is worth more than most Act 2 items.
  - Freeze the shop if you see a duplicate for your core hero but can't afford it yet.

  **Act 3 — The Boss**
  - The Auction House appears after the boss. This is your best shop — more offers, better items. Have Shards saved for it.
  - Check enemy composition before the boss. If it's high-Defense, you need True Damage or Armor penetration. If it's high-DPS, you need more Defense/HP on your frontline.
  - After the boss: evaluate. Is your team winning comfortably? If yes, keep building toward your strategy. If you're barely surviving fights, you may need to pivot — check the Auction House for a hero that fills your gap.

  **After Act 3**: Every decision from here is reinforcement. Rank up your core heroes. Stack synergistic items. Replace underperforming heroes with better Auction House finds. Don't experiment mid-run — commit and execute.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04]

### Team Composition Basics

heading: How to Build a Team That Survives
body: |
  Guildrun uses auto-battle — you position heroes before the fight, then watch. You can't micro-manage. This means **team composition and positioning** are your only combat inputs.

  **Frontline heroes** (Tank, Vanguard, Warrior):
  - Place them in the front two rows (board y = 2 or 3)
  - They absorb damage and protect your backline
  - Targeting priority: Tank > Vanguard > Warrior > Duelist > Assassin > Mage > Mystic
  - This means Tanks get targeted FIRST. Give them Defense and HP items.

  **Backline heroes** (Mage, Mystic, Assassin):
  - Place them in the back rows (board y = 0 or 1)
  - They deal damage while the frontline tanks
  - Assassins have Stealth — they can't be targeted while stealthed, making them an exception to the "protect the backline" rule

  **A solid beginner comp**: 1 Tank (frontline) + 1 DPS (backline or front) + 1 flex (adapt to your direction). As you unlock more board slots (up to 5), add more DPS or a second Tank depending on whether fights end too slow or your frontline dies too fast.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/#targeting

evidenceType: confirmed-fact
sourceRefs: [S02]

### Items and Relics

heading: Item and Relic Mechanics
body: |
  **Match items to hero classes:**
  - Warrior → Attack, Crit
  - Assassin → Attack Speed, Crit, OmniVamp
  - Duelist → Attack Speed, OmniVamp
  - Tank → Defense, HP, Shields
  - Vanguard → HP, Defense
  - Mage → Magic, Mana Regen
  - Mystic → Mana Regen, Magic

  **Relics** are game-changing passives. Some apply to your whole team, some to specific heroes. The Riftbreaker is a legendary relic that deals 33% max HP true damage to all enemies at t=90s, then 5% every 0.25s.

  **Item slots are gated at higher difficulties**: at Index 4, item slots unlock with hero rank. At high difficulties, ranking up unlocks the ability to equip more items.

  Source: guildrun.wiki Economy and Glossary; Steam store — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04, S03, S01]

heading: Why Synergy Beats Rarity
body: |
  A common beginner mistake: picking the highest-rarity item for every hero. An S-rank item that does not match your hero's class and build can be worse than a lower-rarity item that perfectly synergizes. Build-defining relics can justify pivoting your entire strategy.

evidenceType: editorial-recommendation
sourceRefs: [S04]

### Status Effects Worth Knowing

heading: The Status Effects You'll See Every Run
body: |
  Guildrun has several damage-over-time and debuff effects. The three most common:

  **Poison** — 1 damage per stack, ticks every 2 seconds, ignores Defense (but absorbed by shields). Stacks indefinitely. Used by Tank and Assassin classes. Best for stall comps — the damage adds up if fights go long.

  **Burn** — 1 damage per stack, ticks every 1 second, decays by 1 stack per tick. Faster than Poison but burns itself out. Used by Vanguard and Mage.

  **Frost** — Reduces enemy Attack Speed by 0.5 per stack and Defense by 0.5 per stack. Dissipates at 1 stack every 2 seconds. Used by Tank and Mage. This is an underrated debuff — reducing enemy Attack Speed also reduces their mana generation (since mana comes from auto-attacks), meaning fewer enemy abilities.

  **Stun** — Forces enemy to stand idle. Default duration is 1.5 seconds, but hero-specific sources can be longer (Zuri's Petrification = 4s, Ming's Searing Mantra = 3s). Important rule: a shorter stun never overwrites a longer one already applied.

  **Anti-Heal** — Reduces incoming healing by 50%. Relevant if you're running healing-focused builds or facing enemies with heal mechanics.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/

evidenceType: confirmed-fact
sourceRefs: [S02]

heading: Using Status Effects in Practice
body: |
  Poison is especially effective in stall comps because the damage accumulates indefinitely without falling off. Frost is worth paying attention to — reducing enemy Attack Speed also reduces their mana generation (since mana comes from auto-attacks), which means fewer enemy abilities. Anti-Heal is relevant when facing enemies with heal mechanics or when running healing-focused builds.

evidenceType: editorial-recommendation
sourceRefs: [S02]

### The Storm and Riftbreaker

heading: The Storm Clock
body: |
  **The Storm**: At 50 seconds into any fight, it starts dealing 5 damage/s to ALL units (yours and enemies), escalating rapidly. Around 65 seconds, the damage multiplier jumps. By 75 seconds, the fight is essentially unwinnable for everyone.

  **The Riftbreaker**: A legendary relic that deals True Damage to enemies only at t=90 seconds (33% max HP first tick, then 5% every 0.25s). This is an "I win if I survive" condition for stall comps, but The Storm is still killing your team simultaneously.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/

evidenceType: confirmed-fact
sourceRefs: [S02]

### 5 Beginner Tips That Actually Matter

heading: 5 Tips That Will Save Your Runs
body: |
  1. **Keep your heroes alive.** Dead heroes earn zero Shards. A fight where all 3 heroes survive is dramatically more profitable than a fight where 2 die. If a hero is about to die and you have no way to save them, you've already made a mistake — earlier in the shop, earlier in your item choices.

  2. **Don't over-reroll.** 1st reroll = 1 Shard (fine). 2nd = 2 Shards (okay). 3rd = 3 Shards (questionable, you've now spent 6). 4th = 4 Shards (you've spent 10 Shards on nothing but chances). At some point, buy what's available and move on.

  3. **Freeze the shop for hero duplicates.** If you see a duplicate for your core carry but can't afford it, freeze. Win the next fight, come back, and buy it. That's a guaranteed power spike you're locking in.

  4. **Start on Difficulty 0.** You literally can't skip to higher difficulties — they unlock progressively. Your first runs should be about learning the game, not optimizing for a leaderboard. Once you can consistently clear Index 0, the game will let you move up.

  5. **Commit to your direction.** The biggest run-killer is indecision. If you're halfway between Rush and Stall, taking mediocre items for both, you'll be too weak to Rush and too fragile to Stall. Pick one by Act 2 and every decision after that should support it.

evidenceType: editorial-recommendation
sourceRefs: [S02, S04, S05]

## quickFacts

| Fact | Detail |
|------|--------|
| Heroes in demo | 25 across 7 classes |
| Board max | 5 active heroes |
| Roster max | 6 heroes total |
| Rush classes | Warrior, Vanguard, Assassin, Duelist |
| Stall classes | Tank, Duelist, Mystic, Mage |
| Mana per auto-attack | +5 |
| Mana regen tick | Every 2 seconds |
| Shop reroll cost | 1 → 2 → 3 → ... per shop |
| Storm starts | 50 seconds into fight |
| Starting difficulty | Index 0 (base) |
| Difficulty picks | 8 (7 ladder + Red Rift; see /difficulty-endless) |

## relatedGuides
- /rush-mechanic
- /reserve-heroes
- /shop-guide
- /difficulty-endless
- /builds

## uncertainties
- Per-floor Shard payout values not extracted from game data
- Complete Backup hero list not compiled

## blockers
- None. Core beginner concepts are well-defined and source-backed.
