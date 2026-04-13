# OM Data Reading Methodology

## Overview

When users provide OM (Organic + Marketing) data, follow this standardized framework to interpret the numbers and extract actionable insights.

---

## Key Metrics Explained

### Installation & Registration
- **Install**: Number of app installs driven by paid marketing
- **Registration (Reg)**: Users who completed registration after install
- **CPR (Cost Per Registration)**: `Spend / Registration` — true cost to acquire a registered user
- **CPI (Cost Per Install)**: `Spend / Install` — cost per raw install, before registration

### Retention Indicators
- **R2**: Day 2 retention rate — % of users who returned 1 day after install
- **R7**: Day 7 retention rate — % of users who returned 6 days later
- Typical benchmarks: R2 30-50%, R7 8-15% for mid-core games
- R2 < 30% = red flag, users don't come back after install day
- R7 < 10% = concerning, likely poor onboarding or targeting issue

### Channel Performance
- **Organic %**: `Organic Users / Total Users` — higher = better natural appeal, lower = dependent on paid
- **Channel breakdown**: Google UAC / Facebook / TikTok / etc.
- Each channel has different strengths by region

### Budget Utilization
- **Planned Budget**: What was allocated
- **Actual Spend**: What was burned through
- **PB (Post Boosting)**: Budget for re-engaging existing users — if underspent, the product may not support strong PB mechanics

---

## OM Data Reading Checklist

### Step 1: Identify Channel Efficiency by Region

For each country, calculate:
```
Channel Efficiency = Spend / Registration
```

Typical patterns by region:
| Region | Best Channel | Avoid |
|--------|-------------|-------|
| SEA (VN, ID, TH) | Google UAC | Facebook (often underperforms) |
| LATAM (MX, BR) | Google UAC | Facebook |
| South Asia | Google UAC, TikTok | Facebook |
| MENA | Google, TikTok | Facebook |

### Step 2: Spot Budget Utilization Issues

If PB budget is underspent:
- Likely NOT a channel issue — check if PB campaigns were actively controlled/budget-capped
- PB underspend ≠ channel failure; PB overspend + low reg = targeting problem

### Step 3: Identify Retention Problems

For each country:
```
Organic % = Organic Reg / Total Reg
```

- Organic % > 40% = strong product-market fit
- Organic % < 30% = reliant on paid, fragile

### Step 4: Calculate ROI proxy

```python
# Simple LTV proxy
LTV_Proxy = R7_Rate * ARPDAU * 30  # monthly value per user

# ROI check
Spend_CPA = Total_Spend / Total_Reg
Break_Even_LTV = Spend_CPA / Gross_Margin
```

### Step 5: Segment by User Quality

Look at R2 and R7 by channel:
- Google UAC users often have higher R7 than TikTok users
- Facebook often has lower retention but higher social engagement
- Organic users always have best retention

---

## Red Flags to Watch

1. **CPR rising over time** — targeting may be broadening too fast
2. **R7 dropping faster than competitors** — product issue, not just targeting
3. **FB channel CPR 3x+ higher than Google in same market** — FB not viable there, reallocate budget
4. **TikTok only works with KOL boost** — pure paid TikTok may not work
5. **Organic % declining while spend increases** — may be buying low-quality users
6. **PB budget not burning** — either controlled (OK) or PB mechanics not engaging users (bad)

---

## Standard OM Data Summary Format

When analyzing OM data, always output:

```
Country: [XX]
Total Spend: $XXX,XXX
├─ Installation+Revival: $XX,XXX (XX%)
└─ Post Boosting: $XX,XXX (XX%)

Installs: XX,XXX
Registrations: XX,XXX
CPR: $X.XX
CPI: $X.XX

R2: XX% | R7: XX%
Organic %: XX%

Channel Breakdown:
├─ Google UAC: XX% (CPR: $X.XX)
├─ Facebook: XX% (CPR: $X.XX)
└─ TikTok: XX% (CPR: $X.XX)

Key Issues:
├─ [Issue 1]
├─ [Issue 2]
└─ [Issue 3]

Recommendations:
├─ [Action 1]
├─ [Action 2]
└─ [Action 3]
```

---

## Case Reference: GNG OM Data (2025-2026)

Based on actual OM data from a recent test:

| Country | Spend | CPR | CPI | R2 | R7 | Organic% | Key Insight |
|---------|-------|-----|-----|-----|-----|---------|------------|
| VN | $24,517 | $0.35 | $0.26 | 42% | 11% | 42.69% | FB/TikTok underperformed; PB budget was capped, not exhausted |
| MX | $21,004 | $0.24 | $0.19 | 36% | 8% | 35.31% | Best CPR/CPI but worst R7 — quality issue |
| ID | $77,478 | $0.65 | $0.45 | 46% | 10% | 43.61% | Most expensive market; Ramadan campaign was partially missed |
| AR | — | — | — | — | — | — | Independent server, separate tracking |
| BR | — | — | — | — | — | — | Independent server, separate tracking |

---

## Regional Channel Patterns (Empirical)

### Google UAC
- Works everywhere; best overall efficiency
- VN: ~70% of spend, strong
- MX: ~99%+ of spend, dominant
- ID: ~99%+ of spend, dominant
- BR: Strong
- AR: Expected to be dominant

### Facebook/Meta
- Works in: US, Western Europe, some LATAM
- Fails in: VN, ID, TH (unless heavily localized)
- Partial in: PH, MY

### TikTok
- Works in: VN (modest), ID (growing), BR (strong), MX (limited testing)
- Best with KOL boost; pure paid often underperforms
- Not viable standalone — needs organic/KOL amplification

### Apple Search Ads
- High intent users, best R7
- Expensive — use for testing user quality, not volume

---

---

## TA 验证框架

### 为什么需要重新验证 TA

每次产品大改版（特别是核心玩法/3C 变化），之前测试的 TA 结论可能失效。不要假设"上次 MOBA 用户最好，这次也是"。

### 验证方法：分层 Campaign 结构

在 Google UAC / TikTok 中，按 TA 分组设独立 campaign：

| Campaign | 受众定向 | 目的 |
|----------|---------|------|
| Camp-A | MOBA受众包（MLBB/AOV/WR 兴趣） | 验证 MOBA 用户留存 |
| Camp-B | RPG/地牢受众包（地牢/暗黑/Extraction 兴趣） | 验证品类核心用户 |
| Camp-C | 泛竞技受众包（FPS/BR/Action 兴趣） | 验证泛用户 |
| Camp-D | Broad（无定向） | 对照组 |

每组独立追踪：D2 / D7 / CPR / Organic%

### TA 验证报告模板

```
# TA 验证报告 — [项目名] [版本] [日期]

## 测试设置
- 市场：[国家]
- 测试时间：[开始]-[结束]
- 总预算：$XX,XXX
- Campaign 分层：A(MOBA) / B(RPG) / C(泛竞技) / D(Broad)

## 各层数据

| TA层 | 预算 | 安装 | 注册 | CPR | D2 | D7 | Organic% |
|------|------|------|------|-----|-----|-----|---------|
| MOBA | $X | X | X | $X | X% | X% | X% |
| RPG/地牢 | $X | X | X | $X | X% | X% | X% |
| 泛竞技 | $X | X | X | $X | X% | X% | X% |
| Broad | $X | X | X | $X | X% | X% | X% |

## 结论
- 最佳 TA 层：[哪个D7最高]
- 与上次测试对比：[结论是否变化]
- 建议后续TA定义：[调整/保持]
```

### 检验清单："上次结论还适用吗？"

- [ ] 核心玩法是否有重大变化？（如果是 → 必须重新验证）
- [ ] 商业化模式是否变化？
- [ ] 目标市场是否新增？
- [ ] 竞品格局是否有新进入者？
- [ ] 上次测试距今是否超过6个月？

---

## 区域对比看板

多市场同步测试时，使用标准化看板每周对比：

```
# 区域对比看板 — Week of [YYYY-MM-DD]

| 指标 | ID | VN | MX | BR | AR | CL |
|------|----|----|----|----|----|----|
| D2 | | | | | | |
| D7 | | | | | | |
| CPR | | | | | | |
| CPI | | | | | | |
| Organic% | | | | | | |
| 评分 | | | | | | |
| TA层最佳 | | | | | | |

## 决策规则
- D7 ≥ 目标线 + CPR 可控 → ✅ 后续加投
- D7 及格但 CPR 偏高 → ⚠️ 优化素材/定向
- D7 < 及格线 → ❌ 止损，资源转移到优质区域
```

---

## Date: 2026-04 | Version: 2.0 | Source: GNG OM Data Analysis + TA验证讨论
