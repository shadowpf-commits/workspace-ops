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
- **发行阶段**（探索期 / 测试期 / 软发布 / 正式发布 / 长线运营）
- **产品重点**（如：市场进入、评分提升、用户增长、商业化）

---

## 发行阶段决定打法

不同阶段，工作流程的重心不同。先读 `references/lifecycle-playbook.md` 确定当前阶段，再进入对应流程：

| 阶段 | 重心 | 执行流程 |
|------|------|---------|
| 探索期 | 桌面调研 → 竞品研究 → Go/No-Go | 仅 Step 1 |
| 测试期 | 留存验证 → 小预算 UA | Step 1 + Step 2（验证假设） |
| 软发布 | 渠道筛选 → 放量测试 | Step 2 + Step 3（素材优化） |
| 正式发布 | 全渠道爆发 | Step 1-3 完整执行 |
| 长线运营 | 回流 + 商业化 + 社群 | Step 3（侧重回流和长线） |

---

## 工作流程

### Step 1 — 产品分析

**目标：** 通过竞品分析找到产品的优缺点，推导出发行思路和大方向。

**执行：**
1. 读取 `references/game-type-analysis.md`（品类专项框架）
2. 读取 `references/game-analysis-framework.md`（通用分析方法）
3. 读取 `references/competitive-intelligence.md`（竞品情报框架）
4. 读取 `references/competitor-monitoring.md`（竞品动态监控 — 非首次分析时使用）

**产出：**
- 产品定位（品类、子类型、核心玩法）
- 竞品分析（"大成"定义：年收入>$50M 或下载量>3M）
- 优缺点拆解（玩法深度、付费设计、生命周期、美术风格）
- **发行推导**：从优缺点导出发行思路和大方向（差异化入手点、目标用户画像、上线节奏）
- **竞品动态看板**（持续更新，非一次性）

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
1. 读取 `references/lifecycle-playbook.md`（按当前阶段匹配打法）
2. 读取 `references/trend-discovery.md`（趋势发现方法论）
3. 读取 `references/ua-creative-guide.md`（UA 素材与投放策略）
4. 读取 `references/om-data-reading.md`（OM 数据解读，如提供数据）

**产出：**
- **OM 策略**：渠道优先级、预算分配模型、素材方向、A/B 测试计划
- **KOL/KOC 大方向**：按阶段定义角色（详细执行由专属 agent 负责）
  - 探索/测试期：不用或极少量
  - 软发布：小规模 KOL 试水（3-5个中小 KOL，效果验证）
  - 正式发布：KOL 集中爆发（头部引爆 + 中腰部覆盖）
  - 长线运营：培养游戏专属 KOC 和素人内容创作者
- **社群大方向**：平台选择 + 建设节奏（详细执行由专属 agent 负责）
- **执行时间线**：预热期→测试期→爆发期→长线运营，含各阶段关键动作

---

## 参考文件

```
references/
├── lifecycle-playbook.md           ← 五阶段发行策略手册（探索→测试→软发布→正式→长线）
├── game-analysis-framework.md      ← Step1：通用分析框架（优缺点推导）
├── game-type-analysis.md           ← Step1：品类专项（Extraction/MOBA/BR等）
├── competitive-intelligence.md     ← Step1：竞品情报（"大成"定义、声量分析）
├── competitor-monitoring.md        ← Step1：竞品动态监控（持续跟踪模板）
├── regional-market-profiles.md     ← Step2：SEA + LATAM 市场（含TA Size）
├── cn-tw-hk-market-profile.md      ← Step2：大中华市场
├── ea-market-profile.md            ← Step2：日本 + 韩国
├── emea-market-profile.md          ← Step2：欧洲 + 中东
├── trend-discovery.md              ← Step3：趋势发现（TREND Filter）
├── ua-creative-guide.md            ← Step3：UA素材与投放策略（含素材优先级逻辑）
├── om-data-reading.md              ← Step3：OM数据解读（含TA验证框架+区域对比看板）
└── rating-management.md            ← 评分管理策略（关服/开服/紧急预案SOP）
```

---

## 标准输出结构

```
# [游戏名] — 发行方案（[阶段]）

## 〇、当前阶段判断
- 所处阶段：[探索期/测试期/软发布/正式发布/长线运营]
- 本次工作重心：[基于阶段的核心任务]

## 一、产品分析
### 1.1 产品定位（品类 / 子类型 / 核心玩法）
### 1.2 竞品分析（"大成"竞品 / 优缺点 / 市场空白）
### 1.3 竞品动态（当前竞品状态 / 版本节奏 / 窗口机会）
### 1.4 发行推导（差异化入手点 / 目标用户画像 / 上线节奏建议）

## 二、目标用户与发行区域
### 2.1 TA × 市场矩阵
### 2.2 各市场 TA 规模

## 三、执行方案
### 3.1 OM 策略（渠道 + 预算 + 素材方向）
### 3.2 KOL/KOC 大方向（按阶段）
### 3.3 社群大方向（平台 + 节奏）
### 3.4 执行时间线
```

---

## 核心原则

- **阶段决定打法**：探索期只做调研，测试期只看留存，不要跨阶段做事
- **产品分析先行**：没有竞品分析不出发行方向，不盲目给方案
- **竞品动态持续跟踪**：不是一次性调研，需要周级更新
- **TA × 市场决定策略**：不同 TA + 不同市场组合需要不同打法
- **实证驱动**：MOBA 用户是最优投放目标（结论基于历史测试）
- **可执行为终点**：方案必须包含具体渠道、预算、时间线
- **趋势优先**：发行时间节点由趋势窗口决定，而非拍脑袋
- **KOL/社群做方向、不做细节**：详细执行交给专属 agent

---

## 版本

- Current: 6.0
- Last Updated: 2026-04
- Key Changes from v5:
  - 新增发行生命周期维度（五阶段：探索→测试→软发布→正式→长线）
  - 新增竞品动态监控框架（从静态分析变为持续跟踪）
  - 新增 UA 素材与投放策略指南
  - KOL/社群明确为"大方向"，细节由专属 agent 执行
  - 输出结构增加"阶段判断"作为第〇节
  - 阶段×流程映射表，不同阶段走不同深度的流程

---

## 更新节奏

每周更新一次 reference 文件，重点关注：
- [ ] 新"大成"竞品出现
- [ ] 竞品评分/评价变化
- [ ] 竞品版本更新和活动动态
- [ ] OM 数据新项目结果
- [ ] 各市场趋势变化
- [ ] CN 版号监管政策变化
- [ ] UA 素材效率数据更新
