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

## Date: 2026-04 | Version: 1.0 | Source: GNG OM Data Analysis
