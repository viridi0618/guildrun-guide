# Guildrun 泛攻略内容站 — 开发需求文档

> 版本: v1.0 · 2026-07-22 · 基于 GPT 竞争分析 + 我们的 Wiki 开发流程

---

## 一、项目决策

| 决策项 | 结论 |
|--------|------|
| 站点类型 | **预发布信息 + 泛攻略内容站**（Type: Content Guide Site） |
| 数据库型 | ❌ 排除 |
| 全量 Hero/Item/Relic 详情页 | ❌ 排除 |
| Build Planner | ❌ 排除 |

## 二、站点定位

**一句话**: Practical Guildrun guides, builds, mechanics, and answers for the Steam demo.

不做 "the complete database"，不做空洞的 "everything about Guildrun"。做一个真正回答玩家具体问题的攻略站。

## 三、市场窗口

- Guildrun Demo 2026-07-16 上线（约 6 天前）
- 搜索需求处于**爆发初期**（tier list / builds / demo / reddit 全部暴增）
- 竞品站都很新（playguildrun.com DR 1, 1 个月；guildrun.org 刚做基础）
- 前 10 没有真正的攻略 Wiki — Fandom 结果是 Cookie Run 错配
- **窗口判断**: 短期窗口（几周），需要快速上线

## 四、竞争策略

| 竞品 | 优势 | 我们的差异化 |
|------|------|------------|
| guildrun.wiki | 数据库全（25 heroes, 322 relics） | 不拼数据量，拼**可读性 + 实战建议 + 回答具体问题** |
| guildrunwiki.wiki | 覆盖面大 | 我们的 Build 有具体逻辑，Tier List 列真实英雄，不写泛化模板 |
| guildrun.org | 基础介绍 + beginner guide | 我们的 beginner guide 更深，追加 Rush/Reserve/Shop 等机制解释 |
| playguildrun.com | 官方站 | 不竞争 |

核心差异化:
- **Information Gain**: 每个页面提供竞品没有的具体信息
- **不编造**: Build 有决策逻辑，Tier 有排名维度，版本标注
- **回答真实问题**: Steam 社区问题直接做进内容

## 五、首发页面（12 页）

### 第一优先级（8 页，核心流量页）

| # | 页面标题 | Slug | 类型 | 搜索意图 |
|---|---------|------|------|---------|
| 1 | Guildrun Wiki & Guides | `/` (首页) | 总览入口 | `guildrun wiki` |
| 2 | Guildrun Beginner Guide | `/beginner-guide/` | 教程 | `guildrun beginner guide` / `guildrun how to play` |
| 3 | Guildrun Tier List | `/tier-list/` | 排名 | `guildrun tier list` |
| 4 | Guildrun Builds Guide | `/builds/` | 教程 | `guildrun builds` |
| 5 | What Is Rush in Guildrun? | `/rush-mechanic/` | 机制解释 | `guildrun rush` / `what is rush guildrun` |
| 6 | How Reserve Heroes Work | `/reserve-heroes/` | 教程 | `guildrun reserve heroes` / `guildrun reserve system` |
| 7 | Guildrun Release Date | `/release-date/` | 信息页 | `guildrun release date` |
| 8 | Guildrun Shop & Reroll Guide | `/shop-guide/` | 教程 | `guildrun shop guide` / `guildrun reroll` |

### 第二优先级（4 页，补充覆盖）

| # | 页面标题 | Slug | 类型 | 搜索意图 |
|---|---------|------|------|---------|
| 9 | Guildrun Specializations Guide | `/specializations/` | 教程 | `guildrun specializations` |
| 10 | Guildrun Difficulty & Endless Mode | `/difficulty-endless/` | 教程 | `guildrun difficulty` / `guildrun endless mode` |
| 11 | Guildrun Common Beginner Mistakes | `/beginner-mistakes/` | 教程 | `guildrun tips` / `guildrun mistakes` |
| 12 | Is Guildrun Available in Japanese? | `/japanese/` | 信息页 | `guildrun 日本語` / `guildrun japanese` |

## 六、页面内容规格

### 首页 (`/`)

- H1: Guildrun Wiki & Guides
- Hero subtitle: "Practical help for builds, tier lists, Rush, reserve heroes, specializations, the Steam demo, and release updates."
- 导航式布局，指向所有子页面（GuideCard 格式）
- 前置核心信息：游戏一句话介绍 + Demo 状态 + 正式版预计时间
- Footer: "Not affiliated with Leyline or Guildrun."

### Tier List 页面 (`/tier-list/`)

**必须包含**（对照竞品空洞问题）:
- 具体英雄名称（不是 "S/A/B/C 类型描述"）
- 排名维度说明（新手友好度 / 高难度表现 / build 依赖性）
- 适用版本: Demo (2026-07-16)
- 每个 tier 至少 3-5 个英雄举例
- "We based this on X hours of demo play / community consensus from Reddit & Discord"
- 声明: "This list will change with patches — last updated [date]"

### Builds 页面 (`/builds/`)

**不做 25 个英雄的单独 Build 页**。做 5 个有明确逻辑的 Build 类型:

1. Rush-focused build（早期爆发）
2. Stall-focused build（后期成型）
3. Balanced beginner team
4. Single-carry build（围绕一个主 C）
5. Frontline survival build（坦克阵）

每个 Build 包含:
- 推荐英雄（具体名称）
- 推荐物品/遗物（具体名称 + 原因）
- 该 build 的决策逻辑（不是 "很强"）
- 适用场景（新手 / 特定难度 / Endless）
- 当前版本局限性

### 机制解释页（Rush / Reserve / Shop）

- 先给一句话定义，再展开
- 用具体数值（Rush 窗口 N 秒、Reserve 槽位数量、reroll base cost）
- 引用来源（Demo 实际观察 / Steam 社区 / 开发者 FAQ）
- FAQ 片段在底部（1-2 个问答）

### Release Date / Japanese 信息页

- 已知事实 + 来源
- 暴露不确定性（"we're tracking this" / "as of demo, Japanese is not yet supported"）
- Release date: "Aiming for 2027, no specific date announced"（来源: Dev FAQ）

## 七、内容写作规则

严格遵循 MEMORY.md 中「Wiki 文案写作风格」10 条规则：

1. 先给结论，再说细节
2. 有观点的第一人称叙述（you / here's the thing / honestly）
3. 具体细节制造可信度（不是泛泛而谈）
4. 幽默感和短句
5. 主动暴露不确定性
6. 标题直击痛点
7. 开头要有 hook
8. **事实检查是必过的门** — 写完逐条验证，不编造
9. 事实引用 vs 表达抄袭 — 信息可以用，措辞不能复刻
10. 来源标注必须可溯源

## 八、模板选择

⚠️ **待老大确认**: 使用哪个模板？

选项:
- **Moonlight Peaks V2** — 成熟版，GuideCard 带图、Hero inline style、resolveAssetUrl、SEO schema 完整
- **farever-wiki-template** — 原始版，更轻量

> 推荐 Moonlight Peaks V2，因为 Witchbrook 和多个站都基于它，流程最熟。

## 九、域名

⚠️ **待老大确认**。候选方向:
- 游戏名关键词做域名（`guildrun` 在域名中）
- `.wiki` / `.guide` / `.info` TLD

## 十、技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Next.js 15 (静态导出, SSG) |
| 样式 | Tailwind CSS |
| 部署 | Vercel |
| DNS | Cloudflare |
| 分析 | GA4 |
| 变现 | AdSense（后续接入） |

## 十一、角色分工

| 角色 | 负责人 | 做什么 | 不做什么 |
|------|--------|--------|----------|
| 内容/数据 | 龙虾（我） | 拉 YouTube/Steam/社区数据、写人味攻略、SEO 终审 | 不动框架代码 |
| 框架/工程 | Codex | 套模板、生成路由、组件开发、部署 | 不新增/不编造游戏知识点 |
| 图片匹配 | GPT（中间层） | 扒图、逐页匹配 | 不改代码 |
| 决策/审查 | 老大 | 内容审核、域名配置、DNS/GSC、设计决策 |

## 十二、开发流程

```
第一步：老大定需求 ✅（本文档待老大确认）
      → 确认模板选择、域名、页面列表
      
第二步：龙虾拉数据
      → 从 Steam 社区 / YouTube / Reddit / 开发者 FAQ 收集
      → 输出 PAGE_SPEC + SOURCE_LOG + CONTENT_DATA 三件套
      
第三步：老大审核数据
      → 逐条过目三件套
      
第四步：Codex 写框架
      → 从 PAGE_SPEC 生成路由、组件、SEO 骨架
      → 填充结构化内容（不改写、不新增、不编造）
      → 20 项 SEO checklist
      
第五步：龙虾填充内容
      → 在框架上逐页写人味攻略
      → 严格遵循写作 10 条规则
      → SEO 终审
      
第六步：配图
      → 龙虾出配图需求 → GPT 扒图匹配 → 老大过目 → Codex 填充
      
第七步：老大收官
      → DNS / GSC / AdSense / sitemap / 撒链接
```

## 十三、时间策略

| 天 | 任务 |
|----|------|
| D1-D2 | Codex 完成干净攻略站框架 |
| D3-D5 | 龙虾完成首批 8 篇核心内容 |
| D6 | 内链、metadata、sitemap、移动端验收 |
| D7 | 正式上线 |
| D8-D21 | 根据 GSC 和社区问题继续补内容 + 外链 |

## 十四、上线 SEO Checklist（Codex 端）

- [ ] 每页独立 title + meta description
- [ ] layout.tsx 不设 og:title / og:description
- [ ] 每页 page.tsx 设 openGraph.title + openGraph.description
- [ ] canonical URL 一致（WWW 状态确认后统一）
- [ ] BreadcrumbList schema
- [ ] Article schema（含 image 接入）
- [ ] sitemap.xml 自动生成
- [ ] robots.txt
- [ ] GA4 嵌入
- [ ] GSC 验证 meta
- [ ] og:locale = en_US, og:type = website
- [ ] NEXT_PUBLIC_SITE_URL 设正确域名
- [ ] 移动端响应式验证
- [ ] 页面有 loading/error/empty 三态处理

## 十五、上线后复盘

```
D7: 检查 indexed / sitemap 收录 / impressions
D14: A/B/C 分类
  A: 有长尾展示和点击 → 继续扩内容
  B: 有展示无点击 → 改 title/meta
  C: 无展示 (<50) → 暂停投入
月常: 每 30 天看 GSC，监控竞品新增页面
```

## 十六、持续内容扩张（上线后）

根据 GSC 和社区趋势，第二批候选页面：
- Guildrun Best Starting Heroes
- Guildrun Endless Mode Meta
- Guildrun vs The Last Flame（对比页，吃 vs 搜索量）
- Guildrun Patch Notes & Updates
- Guildrun Discord & Community Resources
- Per-hero Spotlight（选择 3-5 个最热英雄做深度页）

## 十七、⚠️ 待老大确认

| # | 事项 | 选项 |
|---|------|------|
| 1 | **模板选择** | Moonlight Peaks V2 / farever-wiki-template / 其他 |
| 2 | **域名** | 需要老大指定 |
| 3 | **页面列表** | 12 页是否 OK？增减？ |
| 4 | **时间线** | 7 天上线的节奏是否可行？ |
| 5 | **Build 数量** | 首发 5 个 Build 类型是否合适？ |
| 6 | **图片策略** | 首发要不要图？还是上线后再补？ |
