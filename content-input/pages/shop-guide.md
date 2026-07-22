# /shop-guide — Guildrun Shop Guide

slug: shop-guide
title: Guildrun Shop Guide — Rerolls, Auction House & Spending
h1: Guildrun Shop: When to Buy, When to Reroll
description: How Guildrun's shop and Auction House work — offer counts, reroll costs, freeze strategy, Shard income, and the spending rules that separate winning runs from wasted resources.
recommendedStatus: ready
recommendedIndexable: true
lastReviewed: 2026-07-22
versionContext: Steam demo (released 2026-07-16); shop data from game files via guildrun.wiki

## directAnswer

Guildrun's shop is where you turn Shards into power. You get a regular shop after every normal win (3 hero offers + 2 items + 1 relic), and the Auction House after boss fights (larger offers). Rerolls start cheap at 1 Shard but the cost climbs fast — three rerolls cost 1+2+3 = 6 Shards, enough to buy an item outright.

## sections

### Shop Structure

heading: Regular Shop vs Auction House
body: |
  Guildrun has two types of shops:

  **Regular Shop** (appears after every normal combat win):
  - 3 hero offers
  - 2 item offers
  - 1 relic offer

  **Auction House** (appears after boss fights):
  - Larger offer counts (specific counts not documented in game data, but confirmed to be more than regular shops)
  - Per-floor rank-up probabilities "ship at 0 in this build," meaning all rank-ups come from buying duplicates, rank-up events, and campfires

  Source: guildrun.wiki Economy — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04]

### Reroll Costs

heading: Reroll Economics
body: |
  Reroll costs in Guildrun are incremental within each shop:

  - 1st reroll: 1 Shard
  - 2nd reroll: 2 Shards
  - 3rd reroll: 3 Shards
  - 4th reroll: 4 Shards
  - ...and so on

  The cost resets when you enter a new shop. Three rerolls = 6 Shards. Four rerolls = 10 Shards.

  Source: guildrun.wiki Economy — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04]

heading: Spending Rerolls Wisely
body: |
  A practical approach: the 1st reroll is cheap at 1 Shard and usually worthwhile if nothing in the shop is useful. The 2nd reroll at 2 Shards is still reasonable if you are fishing for a specific hero upgrade. By the 3rd reroll (6 Shards total), you have spent enough for an item. The 4th reroll (10 Shards total) is more than most items cost — at that point, buy what is available and save Shards for the next shop or Auction House.

evidenceType: editorial-recommendation
sourceRefs: [S04]

### Freeze Strategy

heading: How Freeze Works
body: |
  The freeze mechanic locks the current shop so it reappears after the next fight instead of re-rolling. The guildrun.wiki Economy page documents this as a core shop feature.

  Source: guildrun.wiki Economy — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04]

heading: Rank Duplicate Bug (Community Report)
body: |
  A community report from AshChiqs (July 21 2026) describes a specific interaction: freezing a rank A Rowan in the regular shop, then buying a rank C Rowan at the Auction House after the boss, then buying the frozen rank A Rowan only upgraded the reserve Rowan from C to B — not to A. If confirmed, the workaround is to buy the frozen high-rank version before touching any lower-rank copies.

  Community thread: https://steamcommunity.com/app/3669200/discussions/0/618435289300111364/

evidenceType: community-report
sourceRefs: [S07]

heading: Freeze Decision Guide
body: |
  Situations where freezing is recommended:
  - You see a hero duplicate (rank-up opportunity) but you are 1-2 Shards short — freeze it, win the next fight, come back and buy
  - You see a build-defining relic but cannot afford it yet
  - You see a hero that completes your comp but buying it would leave you with zero Shards for items

  Situations where freezing is not recommended:
  - Freezing a rank C duplicate on Act 1 that you might outgrow — early-game rank-ups matter less than mid-game pivots
  - Freezing when your team is struggling — if you are barely winning fights, you need power immediately, not stored potential

evidenceType: editorial-recommendation
sourceRefs: [S04]

### Shard Income

heading: How You Earn Shards
body: |
  Shards are Guildrun's only currency. The guildrun.wiki Economy page documents:

  - Each campaign floor has a fixed victory payout. Higher floors generally pay more.
  - Surviving heroes contribute to the Shard reward. Dead heroes contribute nothing.
  - Defeats pay zero Shards. Combat losses let you retry the same floor.
  - At Difficulty Index 3 (A rank), the surviving-hero shard reward is reduced by 1 per hero.

  Source: guildrun.wiki Economy — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04, S03]

### Spending Priorities

heading: What to Buy — A Spending Priority Framework
body: |
  When evaluating a shop, the following priority order is a practical framework based on game mechanics:

  **1. Hero duplicates for your core heroes**
  Rank-ups are the most reliable source of power. A rank-up gives +25% HP, +30 Defense, +25 Attack, +25 Magic, +20 Attack Speed, +15 Crit for primary class stats. If you see a duplicate for a hero you are committed to, buy it.

  **2. Build-defining relics**
  Some relics fundamentally change how your team plays (The Riftbreaker for stall comps, for example). If you see one that aligns with your strategy, prioritize it — relics are harder to find than items.

  **3. Synergistic items**
  Items that complement your hero's class and current build. A Crit item on a Warrior with 100+ Crit is worth more than a generic Attack item. Match items to heroes rather than grabbing the highest-rarity thing.

  **4. Filling roster gaps**
  If you have fewer than 5-6 heroes, buying a new hero gives you options. Buying a hero you will never use is wasted Shards. Buy heroes that either fit your comp or have Backup abilities that work from reserve.

  **5. Rerolls**
  1st reroll is cheap, 2nd is acceptable, 3rd is questionable at 6 Shards total, 4th is usually a mistake at 10 Shards total.

evidenceType: editorial-recommendation
sourceRefs: [S04]

### Auction House Strategy

heading: Auction House Mechanics
body: |
  The Auction House appears after boss fights and offers more items and heroes than a regular shop. Per-floor rank-up probabilities ship at 0 in this build, meaning all rank-ups come from buying duplicates, rank-up events, and campfires. This makes the Auction House the primary rank-up opportunity in a run.

  Source: guildrun.wiki Economy — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04]

heading: Auction House Decision Guide
body: |
  Before entering the Auction House, evaluate what your team needs. If you are weak on damage, scan for DPS heroes or Attack/Crit items. If your front line is dying, look for Tank upgrades or Defense items. The Auction House gives you more options than a regular shop.

  The Auction House is also your best opportunity to pivot your build if your current comp is not working and to discover build-defining relics from a larger pool.

evidenceType: editorial-recommendation
sourceRefs: [S04]

### When to Save vs Spend

heading: Spending Decisions
body: |
  Situations where saving Shards is recommended:
  - You are close to the Auction House (after the next boss) — larger offers are more likely to give you what you need
  - Your current team is winning comfortably
  - You have a frozen shop with a high-value purchase waiting

  Situations where spending Shards is recommended:
  - Your team is struggling to win fights — dead heroes cost more Shards in lost income than a timely purchase
  - You see a duplicate for your core carry — guaranteed power spike
  - You are at the Auction House — this is the best shop you will see in a run

  Saving everything for the Auction House can be a mistake — if your team is weak, you may not reach the boss to trigger the Auction House at all.

evidenceType: editorial-recommendation
sourceRefs: [S04]

## quickFacts

| Fact | Detail |
|------|--------|
| Regular shop | 3 heroes + 2 items + 1 relic |
| Auction House | After boss fights, larger offers |
| Reroll cost | 1 Shard → +1 per reroll in same shop |
| 3 rerolls cost | 1+2+3 = 6 Shards |
| Shard income | Fixed per floor, only from wins |
| Rank-up from shop | Buying duplicate at exact current rank |
| Freeze | Locks shop for next visit |

## relatedGuides
- /beginner-guide
- /reserve-heroes
- /builds

## uncertainties
- Exact Shard payout per floor not extracted from game data
- Auction House exact offer counts not documented

## blockers
- None. Core shop mechanics are fully confirmed from game data.
