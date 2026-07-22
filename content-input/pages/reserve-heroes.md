# /reserve-heroes — Guildrun Reserve Heroes

slug: reserve-heroes
title: Guildrun Reserve Heroes — Bench Strategy & Rotations
h1: Reserve Heroes: Your Bench Is a Weapon
description: How Guildrun's reserve system works — roster size, board limits, Backup abilities, rank-up mechanics, and the strategy most beginners get wrong.
recommendedStatus: ready
recommendedIndexable: true
lastReviewed: 2026-07-22
versionContext: Steam demo (released 2026-07-16); reserve mechanics from game files via guildrun.wiki

## directAnswer

Your reserve (bench) in Guildrun holds heroes you own but aren't fielding. It's not a trophy case — it's a strategic extension of your active team. You can hold up to 6 heroes total, with 3-5 on the board. Heroes in reserve still receive rank-ups when you buy duplicates, and some heroes have **Backup** abilities that work even from the bench. Here's how to use your reserve properly.

## sections

### How Reserve Works

heading: Reserve: The Confirmed Rules
body: |
  From the game data (guildrun.wiki glossary):

  > **Reserve**: "The hero is on the bench, not on the active board."

  Simple enough. But the implications matter more than the definition:

  - **Roster cap**: You can own up to **6 heroes** at any time. At least one of them is always in reserve, since the board maxes out at 5 slots.
  - **Board size**: Starts at **3 active heroes**, caps at **5** as you progress.
  - **Reserve = Roster − Active**: If your board holds 4 and you own 6 heroes, 2 are in reserve.

  Source: guildrun.wiki Economy & Glossary — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04, S02]

### Backup Abilities

heading: The Backup Mechanic — Abilities That Work from the Bench
body: |
  Some heroes have the **Backup** keyword, which means their effect works even while they sit in reserve:

  > **Backup**: "The effect also works while the hero is in reserve (on the bench)."

  This is the mechanic that makes reserve strategy genuinely interesting. A hero with Backline healing, shard generation, or stat buffs from the bench changes your entire approach to team composition — you're not just picking 3-5 active heroes, you're picking a 6-hero roster where some contribute from off the field.

  The exact list of heroes with Backup abilities is not compiled in a single source, but the mechanic itself is confirmed in the game data.

  Source: guildrun.wiki Glossary — https://guildrun.wiki/systems/glossary/#backup

evidenceType: confirmed-fact
sourceRefs: [S02]

### Rank-Ups from Reserve

heading: Buying Duplicates — Rank-Ups Work from the Bench
body: |
  One of the most important things to understand about reserve: **buying a duplicate hero ranks it up even if it's currently in reserve.** You don't need to field a hero to upgrade it.

  When you buy a matching hero from the shop:
  - The duplicate must match the hero's **current rank** (you can't buy a rank C copy to upgrade a rank A hero — the shop only offers duplicates at the hero's exact current rank)
  - The rank-up applies automatically, giving the hero stat bonuses (HP%, Mana Regen, Defense, Attack, Magic, Attack Speed, Crit)
  - Primary class stats get the biggest gains: +25% HP, +4 Mana Regen, +30 Defense, +25 Attack, +25 Magic, +20 Attack Speed, +15 Crit
  - This works whether the hero is active or in reserve

  The strategic implication: you can pivot your entire active team while keeping previous heroes ranked up in reserve. If your Rush comp isn't working, swap in the rank B tank from your bench — it's fully upgraded and ready.

  Source: guildrun.wiki Economy — https://guildrun.wiki/systems/economy/

evidenceType: confirmed-fact
sourceRefs: [S04]

### The Rank Duplicate Bug

heading: Watch Out — The Rank Duplicate Bug
body: |
  A Steam community member reported a specific interaction that may cost you ranks:

  > "I froze a rank A Rowan in the shop. At the Auction House after the boss, I bought a rank C Rowan. When the normal shop opened and I bought the frozen rank A Rowan, it only upgraded my reserve Rowan from C to B — not to A."

  — AshChiqs, July 21 2026

  If confirmed, this means the game checks the hero's current rank at time of purchase, and buying a lower-rank version first can "downgrade" a pending upgrade. The workaround: if you freeze a high-rank hero in the shop, **don't buy a lower-rank version at the Auction House before completing the purchase.** Buy the frozen high-rank version first.

  Community post: https://steamcommunity.com/app/3669200/discussions/0/618435289300111364/

evidenceType: community-report
sourceRefs: [S07]

### When to Swap

heading: Reserve Rotation Strategy
body: |
  **When to bench a hero:**
  - They're underperforming against the current enemy composition (e.g., your Assassin can't penetrate a tank-heavy enemy lineup)
  - You found a better hero in the shop that fills the same role at a higher rank
  - The hero has a Backup ability and contributes more from reserve than on the field

  **When to pull from reserve:**
  - You need a specific counter (Tank for high burst damage, Mystic for shield-heavy enemies)
  - Your reserve hero has been stacking ranks from duplicate purchases and is now stronger than an active hero
  - A Backup hero's bench contribution is less valuable than another hero's active presence

  **Don't do this:**
  - Fill your reserve with heroes you'll never use "just in case." A full reserve limits your ability to pivot — when you see a hero you want in the shop, you'll need to sell someone to make room.
  - Sell heroes impulsively for a few Shards. Ranked-up heroes are an investment. Selling a rank B hero to afford one shop reroll is a net loss.

evidenceType: editorial-recommendation
sourceRefs: [S04, S07]

### Beginner Mistakes

heading: What Beginners Get Wrong About Reserve
body: |
  **Mistake 1: Treating reserve as a graveyard.**
  Your bench isn't where bad heroes go to die. If a hero isn't useful, sell it. Keeping dead weight in reserve just wastes roster space you could use for a real option.

  **Mistake 2: Never swapping.**
  Some beginners pick 3 heroes in Act 1 and never touch their bench again. The shop will offer you better heroes as you progress — ignoring those options because "my team is set" is how you lose to Act 3 bosses with a team full of rank C heroes.

  **Mistake 3: Not accounting for Backup synergies.**
  If you're running a Warrior/Vanguard front line and a Backup hero provides +Defense from the bench, that's arguably better than a 4th active hero who does nothing for your existing comp. Think of Backup abilities as passive bonuses, not wasted slots.

  **Mistake 4: Forgetting that rank-ups apply to reserve heroes.**
  When deciding whether to reroll the shop, check: is there a duplicate for any hero you own (active or reserve)? If yes, that's a guaranteed power spike. Don't reroll past it.

evidenceType: editorial-recommendation
sourceRefs: [S04]

## quickFacts

| Fact | Detail |
|------|--------|
| Roster cap | 6 heroes total |
| Board size | Starts at 3, caps at 5 |
| Reserve | Roster − Active (at least 1 hero always benched) |
| Backup keyword | Effect works from reserve |
| Rank-up from reserve | Buying duplicates ranks up benched heroes automatically |
| Rank duplicate bug | Buying lower-rank copy first may reduce frozen upgrade (community report) |

## relatedGuides
- /beginner-guide
- /shop-guide
- /builds

## uncertainties
- Complete list of heroes with Backup abilities not documented in a single source
- The rank duplicate bug (S07) is a single community report — not independently verified

## blockers
- None. Core reserve mechanics are confirmed from game data. Bug report is clearly labeled as community-report.
