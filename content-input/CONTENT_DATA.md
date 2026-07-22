# Guildrun Content Guide Site — CONTENT_DATA
## 版本
- Demo build (2026-07-16), Steam App ID: 3669200
- 开发者: Leyline
- 游戏类型: Auto-battler / roguelike
- 注意: ⚠️ 所有数据仅代表 Demo，正式版（2027）可能有变化

---

## 1. 首页 (P0)

### Quick Facts
- 🎮 Game: Guildrun (Demo)
- 🏢 Developer: Leyline
- 📅 Demo released: July 16, 2026
- 🕹️ Genre: Auto-battler roguelike
- 🖥️ Platform: Steam (PC)
- 📦 Full release: Aiming for 2027
- 👥 Heroes: 25
- 🗡️ Items: 162
- 💎 Relics: 322
- ⚔️ Classes: Warrior, Mage, Vanguard, Duelist, Mystic, Tank, Assassin

> ⚠️ 数据来源：guildrun.wiki（game files extraction）— L2

### Hero 区文案
"Guildrun throws you into an auto-battler roguelike where you draft heroes, stack items, and pray the shop gives you something better than common garbage. The demo has 25 heroes, 162 items, and a Rush mechanic that most beginners ignore — and lose because of it. This guide covers what actually matters: which heroes carry, how Rush works, and the shop decisions that decide your run."

> ⚠️ 措辞要有人味，不用百科体

### 3 大核心 GuideCard
1. Beginner Guide — "Your first run, explained"
2. Tier List — "Which heroes actually win"
3. Rush Mechanic — "The mechanic that decides runs"

---

## 2. Beginner Guide (P0)

### One Decision That Decides Most Runs
- **核心决策：Rush vs Stall**
- Rush = 更快击杀敌人获得额外奖励（Shards、更优物品）
- Stall = 拖长战斗让己方 Scaling 英雄和物品叠层
- 新手默认应该 Rush，因为不 Rush 等于放弃免费资源

### Core Resources
- **Shards**: 主要货币，来源=每关胜利奖励（固定值）+ Rush 奖励。失败=0。
- **Rerolls**: 商店刷新成本，首次 1 Shard，每多 reroll +1（来源: L2-3）
- **Team size**: 最多 3→5 个上场英雄，roster 最多 6 个（来源: L2-3）
- **Reserve**: 不上场但保留的英雄，战斗中不能切换（来源: L2-3）
- **Rank-up**: 买重复英雄自动升 Rank，Rank 提升 = HP% + 各项 Stats 提升（来源: L2-3）
  - Primary stat: +25% HP, +4 Mana Regen, +30 Defense, +25 Attack, +25 Magic, +20 Attack Speed, +15 Crit
  - Secondary: 各约一半
  - Base/Other: 各约一半

### First Run Walkthrough
- Act 1: 选英雄（优先 Warrior/Assassin → 容易理解），不要 reroll 太多
- Act 2: 开始决定 Rush vs Stall 方向
- Act 3: Boss 关，Auction House 出现（来源: L2-3）
- After Boss: 评估队伍，决定接下来方向

### Key Tips
1. **Always Rush early** — 前期敌人弱，Rush 免费奖励
2. **Don't over-reroll** — Reroll 成本递增，3 次以上基本不值
3. **Use your reserve** — 板凳是你的策略池，不是垃圾场
4. **Auto-attacks give mana** — 每次平 A 约 5 mana（来源: L3-7，社区说法）
5. **Freeze shop when you see your hero** — 攒钱再买

### FAQ
**Q: What difficulty should I start on?**
A: Difficulty 0（或最低）。Demo 的难度爬升很陡 — Steam 社区多人报告 SS 难度后第一关 Boss 都打不过（来源: L3-6）。

**Q: How do I get more Shards?**
A: 打赢关卡（固定奖励）+ Rush 击杀奖励。没有被动收入，每场战斗都有机会赚。

> ⚠️ 以上数值来自 guildrun.wiki（L2），引用时标注"from the demo game files"

---

## 3. Tier List (P0)

### 排名方法说明
- 只覆盖 Demo 版本的 25 个英雄
- 分级: S / A / B / C
- S = 单核能 Carry，A = 强力但有条件，B = 可用的 Situational Pick，C = 需要特定构筑才能发光
- 标注争议角色（有 Steam 社区讨论分歧的）
- 不给出绝对结论 — 游戏只上线 6 天，meta 在演变

### S Tier
需要从 guildrun.wiki/heroes 中筛选出 Stats 和 Abilities 最强的英雄。候选方向：
- High base Attack Speed + Crit scaling 的 Duelist
- High Defense + HP scaling 的 Tank
- 具体英雄名需从数据中提取

### A Tier
需要从数据中提取。原则：有明确 niche 但需要特定物品/遗物配合。

### B Tier  
Situational picks。

### C Tier
- **Aria**: Steam 社区有争议 — Harem Route 说"misses everything"，Mazy 说"有 niche use"（来源: L3-4）
- **Sal**: 同上，被描述为"a worse Karsu with a defense buff"（来源: L3-4）

> ⚠️ 具体排名需要从 guildrun.wiki hero 数据中提取 Stats+Abilities 后分层。目前只有社区争议数据。

### Known Bugs Affecting Tiers
- **Zuri's Stoneskin**: Defense/Magic 增益可能不显示在 stat window 中（来源: L3-8）

---

## 4. Builds (P0)

### Build 1: Rush-Focused
- **核心理念**: 快速击杀 → 最大化 Rush 奖励 → 滚雪球
- **推荐英雄**: 高 Attack Speed + 高 Burst 的 Duelist/Assassin
- **推荐物品**: 提升 Attack Speed 和 Crit 的物品
- **推荐遗物**: 强化 Rush 奖励或加速战斗的遗物
- **决策逻辑**: Rush 的额外 Shards 让你多买英雄/物品 → 多 Rank-up → 更强 → 继续 Rush
- **风险**: 遇到高 Defense 敌人会卡壳，需要备一个 True Damage 来源

### Build 2: Stall-Focused
- **核心理念**: 拖慢战斗让 Scaling 英雄/物品叠层 → 后期无敌
- **推荐英雄**: Tank + Scaling Mage
- **推荐物品**: Poison/Burn/Frost 叠加物品
- **推荐遗物**: 延长战斗奖励的遗物
- **决策逻辑**: 不抢 Rush 奖励，让 DoT 和 Stats 叠满
- **风险**: 前期弱，可能还没叠起来就死了

### Build 3: Balanced Beginner
- **核心理念**: 1 Tank + 1 Healer/Support + Damage dealers
- **推荐英雄**: 容易理解的单职英雄
- **推荐物品**: 基础 Defence + 基础 Damage
- **决策逻辑**: 不极端，Rush 和 Stall 都可以随商店调整

### Build 4: Single-Carry
- **核心理念**: 一个主 C 吃所有资源（物品、Rank-up）
- **推荐英雄**: 能单核 Carry 的 S 级英雄
- **推荐物品**: 最大化主 C 的 Stats
- **决策逻辑**: 把所有 Shards 灌给一个英雄 → 买它的重复 → 升 Rank → 滚雪球
- **风险**: 主 C 死了你就完了

### Build 5: Frontline Survival
- **核心理念**: 3 个坦克在前排，后排慢慢输出
- **推荐英雄**: Vanguard/Tank
- **推荐物品**: Defense + HP stacking
- **决策逻辑**: 不被秒就有无限时间输出
- **风险**: 遇到 True Damage 敌人（无视 Defense）会被穿透

> ⚠️ 以上 Build 的具体英雄名和物品名需要从 guildrun.wiki 数据中提取。目前是方向性描述。

---

## 5. Rush Mechanic (P0)

### 一句话定义
Rush 是 Guildrun 的核心战斗节奏机制：你在每场战斗中要在"快速击杀获取奖励"和"拖慢战斗叠 Stats"之间做选择。

### 数值（来自 L2-1）
- ⚠️ Rush 的具体时间窗口和奖励机制在 guildrun.wiki glossary 中未直接列出"Rush"条目
- 需要进一步搜索或实测确定 Rush 的触发条件、时间限制、奖励类型

### When to Rush
1. **前期（Act 1-2）**: 几乎总是 Rush — 敌人弱，奖励免费
2. **中期（Act 3-4）**: 评估 — 敌人开始变强，Rush 可能不值得
3. **Boss**: 取决于你队伍的 burst damage 能力

### When NOT to Rush
1. **你的队伍是 Stall 构筑**: 物品和英雄靠时间叠层
2. **敌人有高 Defense**: Rush 需要快速击杀，高 Defense 敌人拖慢 kill time
3. **你已经在 Snowball**: 不需要冒险

### Common Misunderstanding
"Rush is always good" — 不是。后期敌人能扛住你的 burst，强行 Rush 可能让你什么都没赚到还死英雄。

---

## 6. Reserve Heroes (P0)

### 一句话定义
Reserve = 你的板凳。你在商店买的英雄不一定要上场 — 放 Reserve 中保留，战斗中不能切换。

### 数值（来自 L2-3）
- Roster 上限: 6 个英雄
- 上场槽位: 3 个起步，最高 5 个
- Reserve = Roster - Active

### Strategy
1. **Reserve 不是垃圾场** — 放你未来想用的英雄
2. **买重复英雄自动 rank-up** — 即使该英雄在 Reserve 中（来源: L2-3）
3. **Rank duplicate bug**: Steam 社区报告 — 如果你 freeze 了一个高 Rank 英雄，然后在 Auction House 买了低 Rank 版本，再回去买 freeze 的那个，可能只升一级而非预期（来源: L3-5）

### When to Swap
- 当前队伍有弱点（如缺 Defense）→ 从 Reserve 换入 Tank
- 遇到特定敌人类型 → 换入 Counter

---

## 7. Release Date (P0)

### Known Facts
- Demo 发布: 2026-07-16
- 平台: Steam (PC)
- 正式版: Aiming for 2027（来源: L3-3 讨论中提到开发者说法）
- 具体日期: 未公布

### Demo Content
- 25 个英雄
- 162 个物品
- 322 个遗物
- 多个难度等级
- Endless 模式 + Rift Challenge 模式（来源: L2-2）

### What's Missing in Demo
- No meta progression（来源: L3-3）
- Specializations 可能未完全实现
- 正式版可能有更多英雄、物品、模式

---

## 8. Shop Guide (P1)

### 数值（来源: L2-3）
- **Regular Shop**: 3 hero offers + 2 item offers + 1 relic offer
- **Auction House** (after Boss): Larger offer counts
- **Reroll cost**: 首次 1 Shard → 每次递增 1 Shard → 同一 shop 内累加
- **Shard income**: 每关固定数量（具体数值需要查 L2-3 表格）
- **Freeze**: 锁定当前商店，下次仍然显示（可以用来攒钱）

### Strategy
1. **不要随便 reroll**: 3 次 reroll = 1+2+3 = 6 Shards，可能够买一个英雄了
2. **Freeze early, buy later**: 看到想要的英雄但钱不够 → Freeze → 打完下一关再来
3. **Auction House 不同**: Offer 更多，优先级高于 Regular Shop
4. **Rank-up 在商店中自动发生**: 买重复 = 自动升 Rank

---

## 9. Specializations (P1)

> ⚠️ 数据不足。guildrun.wiki 中未找到 Specialization tree 的详细内容。需要进一步搜索或实测。
> 当前只能写：Specializations 系统存在但 Demo 中可能未完全实现。

---

## 10. Difficulty & Endless (P2)

### 数值（来自 L2-2）

**Difficulty Levels (6 total, Index 0-6)**

| Index | Modifier |
|-------|----------|
| 0 | （基础难度） |
| 1 | Heroes start at 90% HP |
| 2 | — |
| 3 | Surviving-hero shard reward reduced by 1 |
| 4 | Item slots unlock with hero rank |
| 5 | — |
| 6 | Act boss carries a buff relic |

> ⚠️ 注意: Index 2 和 5 的 modifier 在数据中标为 "—"，可能是空的或待实现。

**Endless Scoring Formula**
```
EndlessModeScore = endlessFloor + bonusScore + 2 × difficultyIndex
```
- bonusScore: +1 per IncreaseEndlessModeScore event reward
- Edge case: 当 difficulty index = 6（最高）时，difficulty bonus term = 0

**Endless Enemy Scaling**
```
E = 0.43092 × cycle + 0.07815 × cycle²
```
where cycle = floor(floor / 3)

### Rift (Challenge) Mode
- Max hero deaths: 10
- Wins per class: 3
- Shop tax per act: Act 1 = 10 + 2/shop, Act 2 = 15 + 3/shop

### Player Feedback
- Steam 社区: Sidrandom 在 SS 难度后打不过第一关 Boss（来源: L3-6）
- Guitar wave: Rewind 奖励机制在高难度设计有问题（来源: L3-9）

---

## 11. Beginner Mistakes (P2)

### 10 Mistakes（内容草图）
1. **Never using Rush** — 放弃免费资源
2. **Over-rerolling** — 3 次 reroll = 6+ Shards，可以买英雄
3. **Ignoring reserve** — 板凳不是装饰
4. **Buying every hero** — 专注 rank-up 比分散投资好
5. **Wrong freeze timing** — Freeze 太早浪费，太晚来不及
6. **Not checking enemy types** — 不同敌人需要不同 counter
7. **Selling too early** — 有些英雄后期才发力
8. **Bad item placement** — Items 要给对英雄
9. **Ignoring defense** — 全输出 = 脆皮
10. **Playing on too high difficulty** — 先通关低难度（来源: L3-6）

> ⚠️ 具体展开时需要加入数值依据和社区经验引用

---

## 12. Japanese / 日本語 (P2)

### Known Facts
- Demo 中 **没有日语** 支持
- 开发者未明确承诺日语本地化
- "guildrun 日本語" 搜索词在 SERP 上已有搜索量 → 说明日本玩家在找

### 页面内容
- 现状描述：Demo 不支持日语
- 如果未来支持：更新此页
- 给日本玩家的替代建议：用英语玩（基本操作可理解）

> ⚠️ 内容极少，但覆盖一个搜索词就有价值

---

## 附录：数据缺口汇总

| # | 缺口 | 需要做什么 |
|---|------|-----------|
| G-1 | 25 个英雄的 Stats + Abilities 完整数据 | 从 guildrun.wiki/heroes 提取，用于 Tier List 和 Builds |
| G-2 | Rush 具体机制（触发条件、时间窗口、奖励公式） | 搜索 Steam 社区/实测/找开发者 FAQ |
| G-3 | Stall 精确定义 | 同上 |
| G-4 | Specialization trees 内容 | 搜索或实测 |
| G-5 | Shop Shard 收入表（每关精确数值） | 从 L2-3 提取完整表格 |
| G-6 | 开发者 FAQ 位置 | 搜索 Steam 社区开发者帖 |
| G-7 | 英雄 Class 分布（各 Class 各有多少英雄） | 从 hero 数据统计 |
| G-8 | Duelist 技能动画 bug 确认 | 验证 L3-1 是否真实存在 |
| G-9 | 每关 boss 的 Relic 增益（Difficulty 6） | 从 L2-2 或实测 |
