# Guildrun Content Site — SOURCE_LOG (V2 — Research Update)
## Date: 2026-07-22
## Version Context: Steam Demo (released 2026-07-16), App ID 3669200

## Source Levels
- **L1 official**: Developer website, Steam store page, developer announcements
- **L2 dev-statement**: Developer posts on Steam/Discord
- **L3 game-store**: Steam store description
- **L4 community-reference**: Structured reference site (guildrun.wiki)
- **L5 community-discussion**: Steam community, Reddit, YouTube
- **L6 editorial**: This site's analysis/recommendation

## Source List

### S01 — Steam Store Page
- id: S01
- level: game-store
- title: Guildrun on Steam
- url: https://store.steampowered.com/app/3669200/Guildrun/
- publisherOrAuthor: Leyline
- publishedAt: 2026-07-16
- capturedAt: 2026-07-22
- usedFor: [release-date, beginner-guide, difficulty-endless, shop-guide, rush-mechanic, reserve-heroes]
- keyFacts:
  - "25 heroes, 180 specializations, 300+ relics and 100+ items in the demo alone"
  - "Progress through 8 difficulties"
  - "Endless mode to chase the top of the global leaderboards"
  - "Weekly Patches and an active Community. Since we launched the alpha in January of this year"
  - "Unlock Heroes, items and relics. Run-by-run, unlock new heroes, relics and items"
  - "No timer, no queue, no PvP. Think as long as you want, save mid-run"
  - "25 heroes across 75 spec paths"
  - "Play on your clock"

### S02 — guildrun.wiki Glossary (Rush, Stall, Reserve, Mana, Storm)
- id: S02
- level: community-reference
- title: Glossary | Guildrun Wiki
- url: https://guildrun.wiki/systems/glossary/
- publisherOrAuthor: guildrun.wiki (community-maintained)
- publishedAt: null
- capturedAt: 2026-07-22
- usedFor: [rush-mechanic, reserve-heroes, beginner-guide]
- keyFacts:
  - Rush: "The effect is live only during the first N seconds of combat (shown as Rush (N)), then shuts off. Some heroes can refresh their own Rush windows. Used by Warrior, Vanguard, Assassin, Duelist."
  - Stall: "The effect stays off until N seconds into the battle (shown as Stall (N)), then switches on permanently; it fires once per battle, not repeatedly. Used by Tank, Duelist, Mystic, Mage."
  - Reserve: "The hero is on the bench, not on the active board."
  - Backup: "The effect also works while the hero is in reserve (on the bench)."
  - Mana: "+5 mana per auto-attack | +ManaRegen every 2 s → ability fires at Mana ≥ MaxMana"
  - The Storm: "The anti-stall clock, a hard ~65-75 s wall on every fight. A battle timeout counts as a defeat... Starts at 50 s. Damage Hits everyone every 1 s for 5. Escalation +5 per tick, then ×1.5 from ~65 s."
  - Attack Speed: "Hard clamp 0.2-5 attacks/sec"
  - Targeting: "Primary rule: Nearest reachable enemy. Class tie-break: Tank > Vanguard > Warrior > Duelist > Assassin > Mage > Mystic"
  - Poison: "1 damage/stack, ticks every 2s, ignores Defense (absorbed by shields)"
  - Burn: "1 damage/stack, ticks every 1s, decays -1 stack/s, ignores Defense"
  - Frost: "Attack speed -0.5/stack, Defense -0.5/stack, dissipates -1 every 2s"
  - Stun: "Default 1.5s. Re-stun rule: shorter stuns never overwrite longer ones."
  - Shields: "Multiple shields: shortest remaining duration consumed first. Ordinary 10s, Relic 99s, Hero/rank 999s"
  - OmniVamp: "Heals a % of post-defense damage dealt"
  - True Damage: "Ignores Defense, still blocked by shields"
  - Anti-Heal: "Healing multiplier ×0.5"
  - Damage Amp: "Inert / unused in the demo simulation"
  - Bleed: "Removed / never applied in the demo"

### S03 — guildrun.wiki Game Modes (Difficulty Ladder, Endless, Rift)
- id: S03
- level: community-reference
- title: Game Modes | Guildrun Wiki
- url: https://guildrun.wiki/systems/game-modes/
- publisherOrAuthor: guildrun.wiki (community-maintained)
- publishedAt: null
- capturedAt: 2026-07-22
- usedFor: [difficulty-endless, builds, beginner-guide]
- keyFacts:
  - Standard difficulty ladder: 7 entries (Base through SSS)
  - Difficulty picks stack: each tier keeps all effects from tiers below + adds one new modifier
  - Index 0 (Base): — (no modifier)
  - Index 1 (C): Heroes start battles at 90% HP
  - Index 2 (B): — (no modifier in current build)
  - Index 3 (A): Surviving-hero shard reward reduced by 1
  - Index 4 (S): Item slots unlock with hero rank
  - Index 5 (SS): — (no modifier in current build)
  - Index 6 (SSS): Act boss carries a buff relic
  - EndlessModeScore = endlessFloor + bonusScore + 2 * difficultyIndex (bonus term 0 at the top difficulty)
  - Enemy scaling: E = 0.43092*cycle + 0.07815*cycle², cycle = floor(floor/3)
  - Rift mode: Max hero deaths 10, Wins per class 3
  - Rift shop tax: Act 1 = 10 + 2/shop, Act 2 = 15 + 3/shop

### S03b — guildrun.wiki Difficulty (Selectable Picks, Ladder, Red Rift)
- id: S03b
- level: community-reference
- title: Difficulty | Guildrun Wiki
- url: https://guildrun.wiki/systems/difficulty/
- publisherOrAuthor: guildrun.wiki (community-maintained)
- publishedAt: null
- capturedAt: 2026-07-22
- usedFor: [difficulty-endless, release-date, beginner-guide]
- keyFacts:
  - 8 selectable difficulty picks total: Base, C, B, A, S, SS, SSS, Red Rift
  - 7 standard ladder entries (Base through SSS) feed into Endless scoring
  - Red Rift is the 8th pick — a separate contract with its own leaderboard
  - "Red Rift does not enter Endless"
  - Difficulty picks stack: each tier carries all effects from tiers below
  - Endless: no shops, no events after final boss; score = floors + events + difficulty bonus (+0 to +12)
  - According to guildrun.wiki, which describes its reference data as extracted from the current demo build

### S04 — guildrun.wiki Economy (Shop, Reroll, Rank-up, Income)
- id: S04
- level: community-reference
- title: Economy | Guildrun Wiki
- url: https://guildrun.wiki/systems/economy/
- publisherOrAuthor: guildrun.wiki (community-maintained)
- publishedAt: null
- capturedAt: 2026-07-22
- usedFor: [shop-guide, beginner-guide, reserve-heroes]
- keyFacts:
  - Regular shop: 3 hero offers + 2 item offers + 1 relic offer
  - Auction House: appears after boss wins, larger offer counts
  - Reroll cost: starts at 1 Shard, increases by 1 per reroll within same shop
  - Roster size: 6 heroes
  - Board size: starts at 3, caps at 5 active heroes
  - Rank-up stat gains (primary class): +25% HP, +4 Mana Regen, +30 Defense, +25 Attack, +25 Magic, +20 Attack Speed, +15 Crit
  - Rank-up stat gains (secondary): +12.5% HP, +1 Mana Regen, +8 Defense, +6 Attack, +6 Magic, +5 Attack Speed, +4 Crit
  - "All per-floor rank-up probabilities ship at 0 in this build"
  - Buying duplicate hero → automatic rank-up
  - "Defeats pay no Shards, and normal combat losses retry the same floor"

### S05 — Steam Community: Difficulty spike at SS rank
- id: S05
- level: community-discussion
- title: "What the hell!?!" — Sidrandom
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111365/
- publisherOrAuthor: Sidrandom
- publishedAt: 2026-07-21
- capturedAt: 2026-07-22
- usedFor: [difficulty-endless, beginner-mistakes]
- keyFacts:
  - "After I got to SS I cant even beat the first boss anymore on the easiest difficulty"
  - Has 7 replies, community engagement

### S06 — Steam Community: Aria and Sal debate
- id: S06
- level: community-discussion
- title: "Can someone please explain Aria and Sal to me?" — Harem Route
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111362/
- publisherOrAuthor: Harem Route
- publishedAt: 2026-07-21
- capturedAt: 2026-07-22
- usedFor: [tier-list, builds]
- keyFacts:
  - "Aria just misses everything, hitting one target at best"
  - "Sal is pretty much just a worse Karsu with a little benefit of increasing tank's def"
  - Has 5 replies, community debate

### S07 — Steam Community: Rank duplicate bug
- id: S07
- level: community-discussion
- title: "PSA on buying higher ranked duplicates" — AshChiqs
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111364/
- publisherOrAuthor: AshChiqs
- publishedAt: 2026-07-21
- capturedAt: 2026-07-22
- usedFor: [beginner-mistakes, shop-guide, reserve-heroes]
- keyFacts:
  - Froze rank A Rowan → bought rank C at Auction House → buying rank A only upgraded C to B

### S08 — Steam Community: Hero upgrade chances
- id: S08
- level: community-discussion
- title: "Chances for finding hero upgrades" — TheGrouch
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111363/
- publisherOrAuthor: TheGrouch
- publishedAt: 2026-07-20
- capturedAt: 2026-07-22
- usedFor: [beginner-guide, shop-guide]
- keyFacts:
  - "I've had runs where I see multiple S ranks offered but I cannot find a single upgrade to a measly C rank"
  - 25 replies, high community engagement

### S09 — Steam Community: Duelist skill animations
- id: S09
- level: community-discussion
- title: "Skill Animations" — Baprika
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111361/
- publisherOrAuthor: Baprika
- publishedAt: 2026-07-20
- capturedAt: 2026-07-22
- usedFor: [builds, beginner-mistakes]
- keyFacts:
  - "Duelist skills stop attack speed → they don't heal during animation → can die during skill use"
  - 10 replies

### S10 — Steam Community: Rewind design criticism
- id: S10
- level: community-discussion
- title: "the rewind feature with bonuses is very stupidly designed" — Guitar wave
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111366/
- publisherOrAuthor: Guitar wave
- publishedAt: 2026-07-21
- capturedAt: 2026-07-22
- usedFor: [difficulty-endless]
- keyFacts:
  - Rewind bonuses at high difficulty waste too much time

### S11 — Steam Community: "Aiming for 2027" reference
- id: S11
- level: community-discussion
- title: "I really do enjoy this game, sad we have to wait until somewhen in 2027" — ซิสเซิล
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111367/
- publisherOrAuthor: ซิสเซิล
- publishedAt: 2026-07-21
- capturedAt: 2026-07-22
- usedFor: [release-date]
- keyFacts:
  - Community user mentions "wait until somewhen in 2027"
  - NOTE: This is a player post, NOT a developer statement. Cannot use as official 2027 confirmation.

### S12 — Steam Community: Meta progression missing
- id: S12
- level: community-discussion
- title: "Where is the meta progression?" — Martoq (inferred)
- url: https://steamcommunity.com/app/3669200/discussions/0/618435289300111368/
- publisherOrAuthor: Martoq
- publishedAt: ~2026-07-21
- capturedAt: 2026-07-22
- usedFor: [release-date]
- keyFacts:
  - No meta progression in demo; devs may add for full release

### S15 — guildrun.wiki Heroes listing
- id: S15
- level: community-reference
- title: Guildrun Heroes: Stats, Abilities and Specializations
- url: https://guildrun.wiki/heroes/
- publisherOrAuthor: guildrun.wiki
- publishedAt: null
- capturedAt: 2026-07-22
- usedFor: [tier-list, builds, beginner-guide]
- keyFacts:
  - "25 heroes | 162 items | 322 relics"
  - "Numbers and text come from the shipped game data. Not affiliated with Leyline."

## Data Conflicts (Resolved)

### C-1: Difficulty Index Range
- Source A (三件套 CONTENT_DATA): "6 total, Index 0-6" with Index 2 and 5 marked "—"
- Source B (龙虾 suggestion): "Should be 0-5"
- **RESOLUTION**: Source S03 (guildrun.wiki game-modes) shows 7 rows of data (Index 0 through 6), and the Endless edge case references "top difficulty" = index 6. The original CONTENT_DATA was correct: **7 standard ladder entries, Index 0-6**. Indices 2 and 5 appear to have no modifiers in the current demo build, but exist in the data structure. 龙虾's suggestion to change to 0-5 was incorrect — keep 0-6.

### C-2: Difficulty Count — 7 vs 8
- Source A (release-date.md v1): "7 difficulty levels"
- Source B (Steam store S01): "Progress through 8 difficulties"
- Source C (guildrun.wiki difficulty S03b): 8 selectable picks (Base/C/B/A/S/SS/SSS + Red Rift)
- **RESOLUTION**: Both are correct from different perspectives.
  - 8 selectable difficulty picks (Steam store and in-game new-run screen)
  - 7 standard ladder entries Base-SSS that feed into Endless scoring
  - Red Rift is the 8th pick — a separate contract with its own leaderboard, does not enter Endless
  - Internal Index 0-6 corresponds to the 7 ladder entries only
  - All pages updated to use this consistent taxonomy

### C-3: Aria/Sal Strength
- Source A: "Worthless" (Harem Route)
- Source B: "Has niche use" (Mazy)
- **RESOLUTION**: Both perspectives are community opinions, not objective fact. Present both sides.

### C-4: "Aiming for 2027"
- Source: Steam community post (S11), possibly developer statement on Discord
- **RESOLUTION**: No official developer source found for "2027". Keep as "no confirmed release date".

## Uncertainties (Unresolved)

| ID | Topic | Status |
|----|-------|--------|
| U-1 | Rush exact time window (N seconds) | guildrun.wiki says effect shows "Rush (N)" but N is hero-specific; no universal N documented |
| U-2 | Stall exact time window (N seconds) | Same as U-1 — hero-specific |
| U-3 | Developer 2027 release statement | No official URL found. Community posts reference it but no dev source confirmed. |
| U-4 | Specialization tree details | guildrun.wiki reference page exists but content not extracted. Steam says "180 specializations" and "75 spec paths" across 25 heroes. |
| U-5 | Shop shard income per floor | guildrun.wiki economy page mentions a table but the data wasn't rendered in our fetch |
| U-6 | Duelist animation issue: confirmed bug or design | Community report (S09) with 10 replies, but no dev response found |
