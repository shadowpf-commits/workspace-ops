# Competitive Intelligence Framework

## Overview

This framework provides a systematic method for researching and analyzing competitors in any mobile game category. Use this when starting a new game analysis or entering a new market.

---

## Core Workflow

```
Step 1: Identify Target Game & Category
        ↓
Step 2: Find "大成" Competitors (Big Winners in Last 3 Years)
        ↓
Step 3: Analyze Player Perception (Reviews + Community)
        ↓
Step 4: Quantify Market Saturation (Category Density)
        ↓
Step 5: Synthesize into Actionable Insights
```

---

## Step 1: Identify Target Game & Category

**Inputs needed:**
- Game name and developer
- Category (MOBA, FPS, RPG, Puzzle, etc.)
- Sub-genre and hybrid elements
- Target regions

**Output:**
```
Game: [Name]
Category: [Primary] / [Sub-genre]
Hybrid Elements: [List]
Target Regions: [List]
```

**Example for Lumeshift:**
```
Game: Lumeshift
Category: Hero Shooter / TPS / MOBA hybrid
Hybrid Elements: 5v5, Zipline mobility, lane control, hero abilities
Target Regions: Brazil, Indonesia (soft launch), global planned
```

---

## Step 2: Find "大成" Competitors

### Definition of "大成" (Big Winner)
- **Annual revenue > $50M USD** OR
- **Annual downloads > 3M**

### Data Sources

| Source | What to Look For | Access |
|--------|-----------------|--------|
| **Sensor Tower** | Top charts, revenue estimates, download estimates | API or web (app.sensortower-china.com) |
| **App Annie / data.ai** | Top charts by country, category, revenue | Web subscription |
| **点点数据** | CN-focused performance data | Web (didi201.com) |
| **Google Play / App Store** | Top charts by category and country | Public |
| **YouTube** | Gameplay videos, view counts, KOL mentions | Public |
| **Gaming media** | PocketGamer, GameBiz, GamingOnPhone | Public |

### Search Query Templates

For Sensor Tower / App Annie:
```
Category: [MOBA / Hero Shooter / TPS]
Region: [Target Country]
Timeframe: Last 90 days / Last 12 months
Sort by: Revenue / Downloads
Filter: Top 50 / Top 100
```

For Google/TikTok search:
```
site:sensortower.com [Game Name]
[Game Name] revenue estimate 2025
[Category] top games 2024 2025
[Game Name] gameplay review
[Game Name] player feedback
```

### Competitor Research Template

For each big winner found, document:

```
## [Competitor Name]

### Basic Info
- Developer: [Name]
- Launch Date: [Month Year]
- Category: [Primary / Sub-genre]
- Platforms: [iOS / Android / Both]

### Scale Indicators
- Estimated Annual Revenue: [$XX M]
- Estimated Annual Downloads: [X M]
- Peak Market: [Top country/countries]
- Current Trend: [Growing / Stable / Declining]

### Why They Won
- Core differentiator: [What made them successful]
- Key feature driving retention: [What keeps players]
- Monetization approach: [Battle pass / IAP / Ads / Hybrid]

### Weaknesses (from reviews)
- [Player complaint 1]
- [Player complaint 2]
- [Player complaint 3]

### Relevance to Our Game
- [How this competitor informs our strategy]
```

---

## Step 3: Analyze Player Perception

### Sources to Check

| Source | What to Extract | Effort |
|--------|----------------|--------|
| **Google Play reviews** | Star rating, review text, update frequency | Low |
| **App Store reviews** | Star rating, review text | Low |
| **TapTap reviews** | Detailed CN/SEA player feedback | Medium |
| **Reddit** | In-depth discussions, sentiment | Medium |
| **Facebook groups** | Community discussions | Medium |
| **Discord** | Active feedback from core players | High |
| **Twitter/X** | Real-time player opinions | Medium |

### Review Analysis Framework

**For each competitor or target game, collect:**

```
Game: [Name]
Total Reviews Analyzed: [X]
Data Sources: [GP / AS / TapTap / Reddit / etc.]
Date Range: [Timeframe of reviews]

## Rating Overview
- Average rating: [X.X / 5.0]
- 5-star: [X%]
- 4-star: [X%]
- 3-star: [X%]
- 2-star: [X%]
- 1-star: [X%]

## Positive Themes (What Players Love)
1. [Theme]: [X mentions] — [Example quote if available]
2. [Theme]: [X mentions]
3. [Theme]: [X mentions]

## Negative Themes (What Players Hate)
1. [Theme]: [X mentions] — [Example quote if available]
2. [Theme]: [X mentions]
3. [Theme]: [X mentions]

## Sentiment Trend
- [Version X]: [Sentiment direction]
- [Version Y]: [Sentiment direction]
- Overall trend: [Improving / Stable / Declining]

## Sound Bites
- [Best representative positive quote]
- [Best representative negative quote]
```

### Sentiment Quantification Method

**Positive vs Negative Ratio:**

```
Total Reviews: [X]
Positive Reviews (4-5 star): [X] = [X%]
Negative Reviews (1-2 star): [X] = [X%]
Neutral (3 star): [X] = [X%]

Ratio: Positive : Negative = [X] : [Y]
```

**Example for Lumeshift:**
```
Total Reviews Analyzed: ~340 (Google Play BR + ID combined)
Positive (4-5 star): ~55% (187 reviews)
Negative (1-2 star): ~30% (102 reviews)
Neutral (3 star): ~15% (51 reviews)

Ratio: Positive : Negative ≈ 6 : 4 (slightly positive but concerning)

Note: Rating is 4.3 but reviews skew toward "initial positive" — 
technical issues dominate recent 1-star reviews
```

### Theme Extraction Method

From review text, categorize into themes:

| Theme | Count | % of Total |
|-------|-------|------------|
| Server/Login Issues | 45 | 22% |
| Graphics/Visuals | 32 | 16% |
| Gameplay Fun | 28 | 14% |
| Matchmaking | 22 | 11% |
| Monetization | 18 | 9% |
| Hero Balance | 15 | 7% |
| Zipline Mobility | 12 | 6% |
| Other | 28 | 14% |

---

## Step 4: Quantify Market Saturation

### Category Density Analysis

**Question:** How many games compete in this category?

**Method:**
1. Count games in top 200 (category charts) for each target market
2. Estimate market concentration (top 5 vs long tail)
3. Identify if category is "crowded" or "blue ocean"

**Template:**

```
Category: [MOBA / Hero Shooter / etc.]
Region: [Target Market]

## Market Density Indicators
- Games in [Target] category top 200: [X]
- Top 5 games hold [X]% of category revenue
- Category trend: [Growing / Saturated / Declining]

## Competitive Landscape Map
| Rank | Game | Revenue Est | Downloads | Age |
|------|------|------------|-----------|-----|
| 1 | [Name] | $XX M | X M | [Y] years |
| 2 | [Name] | $XX M | X M | [Y] years |
| 3 | [Name] | $XX M | X M | [Y] years |
| ... | ... | ... | ... | ... |

## Is There Room for a New Entrant?
- [Yes/No] — [Rationale]
- Gap in market: [What players want but don't have]
- Risk: [Oversaturation / cannibalization]
```

### Blue Ocean vs Red Ocean Framework

| Signal | Blue Ocean (Room to Win) | Red Ocean (Hard Fight) |
|--------|-------------------------|------------------------|
| Top 5 revenue | < 60% of category | > 80% of category |
| New entrants in 2 years | Few successful | Many failed attempts |
| Player complaints | "Nothing good exists" | "Too many similar games" |
| Differentiation | Clear winner traits | All games look same |

---

## Step 5: Synthesize into Actionable Insights

### Competitor Intelligence Summary Template

```
# Competitor Analysis: [Game Category] in [Target Market]

## Big Winners (>$50M Revenue or >3M Downloads)
1. [Competitor 1]: $XX M revenue, X M downloads
2. [Competitor 2]: $XX M revenue, X M downloads
3. [Competitor 3]: $XX M revenue, X M downloads

## Player Perception Summary
### Positive (What Works)
- [Theme 1]
- [Theme 2]
- [Theme 3]

### Negative (What to Fix / Avoid)
- [Theme 1]
- [Theme 2]
- [Theme 3]

### Sentiment Ratio: Positive : Negative = [X] : [Y]

## Market Saturation
- Category status: [Blue Ocean / Red Ocean / Transitional]
- Top 5 dominance: [X]% of revenue
- Room for new entrant: [Yes/No/Maybe]

## Strategic Implications for [Our Game]
### Opportunities
- [Leverage player-loved themes from competitors]
- [Fill gaps competitors aren't serving]

### Risks
- [Specific weakness we share with competitors]
- [Market saturation risk]

### Differentiator Required
- [The one thing we MUST have to compete]
```

---

## Regional Dimensions

**All analysis must be broken down by region.** Apply the framework per market:

| Region | Key Competitors | Player Preferences | Channel Focus |
|--------|----------------|-------------------|----------------|
| SEA (ID/VN/PH) | [List] | [Summary] | Google UAC |
| LATAM (MX/BR) | [List] | [Summary] | Google UAC + TikTok |
| EA (JP/KR) | [List] | [Summary] | Google UAC + ASA |
| EMEA (DE/FR/UK) | [List] | [Summary] | Google UAC + ASA |
| CN | [List] | [Summary] | 腾讯/字节/华为 |

---

## Data Collection Checklist

When conducting competitive intelligence research, verify you've covered:

- [ ] At least 3 big-winner competitors identified
- [ ] Revenue and download estimates documented
- [ ] 50+ reviews analyzed per major competitor
- [ ] Positive/negative themes extracted
- [ ] Sentiment ratio quantified
- [ ] Category density assessed
- [ ] All data segmented by target region
- [ ] Sources cited for all data points
- [ ] Date of data collection noted

---

## Version

- Date: 2026-04
- Version: 1.0
- Based on: User framework + Lumeshift analysis experience
- Update frequency: Weekly (refresh data for active projects)
