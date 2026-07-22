# Guildrun Content Guide Site — SOURCE_LOG
## 版本
- Demo build: 2026-07-16 released (Steam App ID: 3669200)
- 数据截止: 2026-07-22
- 所有数据仅代表 Demo 版本，正式版可能有变化

## 来源等级体系

| 等级 | 定义 | 可信度 |
|------|------|--------|
| L1 | Official — 开发者 FAQ、官网、Steam 商店页面官方描述 | 最高 |
| L2 | Guide — 结构化参考站点（guildrun.wiki 等，数据提取自游戏文件） | 高（数值可信，解读需验证） |
| L3 | Community — Steam 社区讨论、Reddit、YouTube 玩家经验 | 中等（需标注+交叉验证） |

## 来源明细

### L1 — Official Sources

| # | 来源 | URL | 内容 | 用途 |
|---|------|-----|------|------|
| L1-1 | Steam 商店页 | https://store.steampowered.com/app/3669200/ | 游戏描述、特性、截图 | Release Date 页、首页 Hero 文案 |
| L1-2 | 开发者 FAQ | （需进一步定位 — Steam 社区开发者帖或 Discord FAQ 频道） | 发布时间、平台计划、机制说明 | Release Date、Japanese 页 |

> ⚠️ L1-2 需补充：搜索 Steam 社区开发者帖或 Discord。

### L2 — Structured Reference

| # | 来源 | URL | 内容 | 用途 |
|---|------|-----|------|------|
| L2-1 | Guildrun Wiki (glossary) | https://guildrun.wiki/systems/glossary/ | 状态效果、伤害公式、Stats 定义、Stun 机制、Damage pipeline | Rush 页、Builds 页、Shop 页 |
| L2-2 | Guildrun Wiki (game modes) | https://guildrun.wiki/systems/game-modes/ | Endless scoring 公式、Difficulty 等级、Rift challenge 规则 | Difficulty & Endless 页 |
| L2-3 | Guildrun Wiki (economy) | https://guildrun.wiki/systems/economy/ | Shop 机制、Reroll 成本、Shard 收入、Rank-up 数值、Team size | Shop Guide 页、Beginner Guide 页 |
| L2-4 | Guildrun Wiki (heroes) | https://guildrun.wiki/heroes/ | 25 个英雄的 Stats、Class、Abilities | Tier List 页、Builds 页 |
| L2-5 | Guildrun Wiki (items) | https://guildrun.wiki/items/ | 162 个物品 | Builds 页、Shop Guide 页 |
| L2-6 | Guildrun Wiki (relics) | https://guildrun.wiki/relics/ | 322 个遗物 | Builds 页 |

> ⚠️ L2 数据来源标注：数值和公式提取自游戏 Demo 文件，置信度高。但 guildrun.wiki 的"shipped data"标注本身就是从游戏文件提取，属于二次引用。我们在站点中引用时标注"数据来自 Demo game files"而非直接引用 guildrun.wiki。

### L3 — Community Sources

| # | 来源 | URL | 内容 | 用途 |
|---|------|-----|------|------|
| L3-1 | Steam 社区 — Duelist skill animation 问题 | https://steamcommunity.com/app/3669200/discussions/ | Baprika 发现 Duelist 技能动画期间不吸血，可能导致角色死亡 | Beginner Mistakes 页、Builds 页 |
| L3-2 | Steam 社区 — Hero upgrade 概率 | https://steamcommunity.com/app/3669200/discussions/ | TheGrouch 质疑找到 hero 升级的概率过低 | Beginner Guide 页 |
| L3-3 | Steam 社区 — Meta progression 缺失 | https://steamcommunity.com/app/3669200/discussions/ | Martoq 询问 meta progression，Demo 中没有 | Release Date 页（标注 Demo 限制） |
| L3-4 | Steam 社区 — Aria/Sal 价值争议 | https://steamcommunity.com/app/3669200/discussions/ | Harem Route 认为 Aria 和 Sal 是最差角色，社区提供反驳 | Tier List 页、Builds 页 |
| L3-5 | Steam 社区 — Rank duplicate bug | https://steamcommunity.com/app/3669200/discussions/ | AshChiqs 报告购买高 Rank 重复英雄时行为异常 | Beginner Mistakes 页 |
| L3-6 | Steam 社区 — Difficulty spike | https://steamcommunity.com/app/3669200/discussions/ | Sidrandom 在 SS 难度后第一关 Boss 都打不过 | Difficulty 页 |
| L3-7 | Steam 社区 — Auto attack mana | https://steamcommunity.com/app/3669200/discussions/ | Glenn 问平 A 是否回蓝（社区说每次攻击 5 mana） | Beginner Guide 页 |
| L3-8 | Steam 社区 — Zuri Stoneskin bug | https://steamcommunity.com/app/3669200/discussions/ | LochWess 报告 Zuri Stoneskin 技能 Defense/Magic 增益不显示 | Tier List 页（标注已知 bug） |
| L3-9 | Steam 社区 — Rewind 机制争议 | https://steamcommunity.com/app/3669200/discussions/ | Guitar wave 认为高难度的 rewind 奖励设计有问题 | Difficulty 页 |

### 数据冲突

| # | 冲突 | 来源 A | 来源 B | 处理 |
|---|------|--------|--------|------|
| C-1 | Aria/Sal 强弱 | Steam 社区（Harem Route: "worthless"） | Steam 社区（Mazy: "Aria has niche use"） | 在 Tier List 中分层处理：标注为社区争议角色，不给出绝对结论 |
| C-2 | Hero upgrade 概率是否过低 | TheGrouch（"impossible at times"） | Baprika（"working as intended, swap strategy matters"） | 在 Beginner Guide 中解释概率模型，不站队 |

### 不确定项

| # | 内容 | 状态 |
|---|------|------|
| U-1 | Rush 具体持续秒数 | guildrun.wiki 中未直接列出 Rush 定义，需进一步搜索或实测 |
| U-2 | Stall 机制精确定义 | 同上 |
| U-3 | 开发者 FAQ 在哪里（Steam 社区 / Discord / 官网） | 待定位 |
| U-4 | 正式版发布时间 | 开发者说"aiming for 2027"，无具体日期 |
| U-5 | Japanese 语言支持计划 | Demo 中无日语，开发者未明确承诺 |
| U-6 | 各难度具体 modifier 数值（难度 1-6 的 enemy scaling） | guildrun.wiki game-modes 有部分数据，需完整提取 |
| U-7 | Specialization trees 的具体内容和解锁等级 | 需进一步搜索或实测 |
