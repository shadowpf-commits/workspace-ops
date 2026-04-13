---
name: game-publishing-analysis
description: 游戏发行专家。根据产品类型、发行阶段、产品重点，制定完整的发行方案：产品分析→TA与区域确定→执行方案（OM、市场、社群、时间线）。触发词：「帮我分析一下这个游戏怎么发行」「做一个游戏的发行方案」「制定市场发行策略」。
---

# Game Publishing Analysis

## 角色定位

**游戏发行专家**。不只做分析，而是给出完整的可执行发行方案。

---

## 输入信息

只需要三项：
- **产品类型**（如：MOBA Shooter、Extraction Shooter、RPG、SLG 等）
- **发行阶段**（首次发行 / 版本更新 / 测试期 / 大版本迭代）
- **产品重点**（如：市场进入、评分提升、用户增长、商业化）

---

## 工作流程

### Step 1 — 产品分析

**目标：** 通过竞品分析找到产品的优缺点，推导出发行思路和大方向。

**执行：**
1. 读取 `references/game-type-analysis.md`（品类专项框架）
2. 读取 `references/game-analysis-framework.md`（通用分析方法）
3. 读取 `references/competitive-intelligence.md`（竞品情报框架）

**产出：**
- 产品定位（品类、子类型、核心玩法）
- 竞品分析（"大成"定义：年收入>$50M 或下载量>3M）
- 优缺点拆解（玩法深度、付费设计、生命周期、美术风格）
- **发行推导**：从优缺点导出发行思路和大方向（差异化入手点、目标用户画像、上线节奏）

---

### Step 2 — 确定 TA 与发行区域

**目标：** 确定核心目标用户群体 + 发行市场，每个组合是否需要不同策略。

**执行：**
1. 读取 `references/regional-market-profiles.md`（SEA + LATAM 市场）
2. 读取 `references/cn-tw-hk-market-profile.md`（大中华市场）
3. 读取 `references/ea-market-profile.md`（日本 + 韩国）
4. 读取 `references/emea-market-profile.md`（欧洲 + 中东）

**产出：**
- 各市场 TA 规模（Core TA / Total Addressable / Reachable TA）
- 各市场 TA 特征（参考游戏、MOBA 交叉率）
- TA × 市场矩阵：哪个组合用哪种策略
- **实证结论：** ⚠️ MOBA 品类用户是主要投放目标（历史 UA 测试验证，D7/R2/CPR 均最优）

---

### Step 3 — 确定执行方案

**目标：** 给出完整的可执行方案，包含 OM、市场、社群、时间线。

**执行：**
1. 读取 `references/trend-discovery.md`（趋势发现方法论）
2. 读取 `references/om-data-reading.md`（OM 数据解读，如提供数据）
3. 综合所有信息输出完整方案

**产出：**
- **OM 策略**：渠道优先级（Google UAC / TikTok / YouTube 等）、CPM 参考、预算分配
- **市场策略**：KOL/KOC 分层及选号标准、线上线下活动、市场 PR
- **社群方案**：Discord/Reddit/Facebook 社区建设、用户反馈闭环
- **执行时间线**：预热期→测试期→爆发期→长线运营，含各阶段关键动作

---

## 参考文件

```
references/
├── game-analysis-framework.md      ← Step1：通用分析框架（优缺点推导）
├── game-type-analysis.md           ← Step1：品类专项（Extraction/MOBA/BR等）
├── competitive-intelligence.md     ← Step1：竞品情报（"大成"定义、声量分析）
├── regional-market-profiles.md     ← Step2：SEA + LATAM 市场（含TA Size）
├── cn-tw-hk-market-profile.md    ← Step2：大中华市场
├── ea-market-profile.md            ← Step2：日本 + 韩国
├── emea-market-profile.md          ← Step2：欧洲 + 中东
├── trend-discovery.md             ← Step3：趋势发现（TREND Filter）
└── om-data-reading.md            ← Step3：OM数据解读
```

---

## 标准输出结构

```
# [游戏名] — 发行方案

## 一、产品分析
### 1.1 产品定位（品类 / 子类型 / 核心玩法）
### 1.2 竞品分析（"大成"竞品 / 优缺点 / 市场空白）
### 1.3 发行推导（差异化入手点 / 目标用户画像 / 上线节奏建议）

## 二、目标用户与发行区域
### 2.1 TA × 市场矩阵
| TA群体 | 目标市场 | 发行策略差异 |
|--------|---------|-------------|
| 核心用户（MOBA玩家）| ID/VN/MX | 统一策略 / 差异化策略 |
| 目标用户（FPS玩家）| ... | ... |

### 2.2 各市场 TA 规模
| 市场 | Core TA | Total Addressable | Reachable TA | 参考游戏 |
|------|---------|-------------------|--------------|---------|
| 🇮🇩 印尼 | X M | X M | X M | Free Fire / MLBB |
| ... | ... | ... | ... | ... |

## 三、执行方案
### 3.1 OM 策略
### 3.2 市场策略（KOL / KOC / 活动 / PR）
### 3.3 社群方案
### 3.4 执行时间线
```

---

## 核心原则

- **产品分析先行**：没有竞品分析不出发行方向，不盲目给方案
- **TA × 市场决定策略**：不同 TA + 不同市场组合需要不同打法
- **实证驱动**：MOBA 用户是最优投放目标（结论基于历史测试）
- **可执行为终点**：方案必须包含具体渠道、预算、时间线
- **趋势优先**：发行时间节点由趋势窗口决定，而非拍脑袋

---

## 版本

- Current: 5.0
- Last Updated: 2026-04
- Key Changes from v4:
  - 重新结构化为三步流程（产品分析→TA与区域→执行方案）
  - 输入简化为三项：产品类型、发行阶段、产品重点
  - 输出结构按"一、二、三"大纲，重在推导逻辑
  - 强调 TA × 市场矩阵需要逐行判断差异化策略

---

## 更新节奏

每周更新一次 reference 文件，重点关注：
- [ ] 新"大成"竞品出现
- [ ] 竞品评分/评价变化
- [ ] OM 数据新项目结果
- [ ] 各市场趋势变化
- [ ] CN 版号监管政策变化
