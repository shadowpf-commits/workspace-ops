---
name: game-publishing-analysis
description: Analyze mobile/PC games and produce a structured publishing strategy covering game category analysis (genre, core loop, unique features, target audience) and go-to-market planning (online ads, offline marketing, KOL, PR, ASO, launch timeline). Use when: user says "帮我分析一下这个游戏怎么发行", "做一个游戏的发行方案", "分析这个游戏的品类和特色", "制定市场发行策略", or asks to build a reusable game publishing framework.
---

# Game Publishing Analysis

This skill analyzes a given game and outputs a structured publishing strategy combining Step 1 (game analysis) and Step 4 (market & publishing plan).

## Reference Files

This skill uses a modular reference system. Read ALL applicable references before starting:

1. **`references/game-analysis-framework.md`** — Universal analysis methodology, competitive analysis, output templates, and category benchmarks
2. **`references/om-data-reading.md`** — How to interpret OM (Organic + Marketing) data: CPR, CPI, R2, R7, channel efficiency, and budget utilization analysis
3. **`references/regional-market-profiles.md`** — Standardized market profiles for SEA and LATAM countries: VN, ID, PH, MY, MX, AR, BR. Includes cultural notes, channel performance, marketing calendar, and localization requirements
4. **`references/game-type-analysis.md`** — Specialized frameworks for complex genres: Extraction Shooter (搜打撤), Battle Royale, Hero Shooter/MOBA, Mid-Core, and event-driven marketing

## Workflow

**Trigger:** User provides a game to analyze, or asks to build a publishing framework.

1. **Read all applicable references** (see above)
2. **Ask the user for game information** (if not already provided):
   - Game name / type / genre
   - Core gameplay description
   - Target markets
   - Monetization model
   - Development stage (prototype / soft launch / ready to publish)
   - (Optional) User research report or OM data if available
3. **Execute the analysis** using the frameworks in the reference files:
   - Phase 1: Game & Category Analysis (genre, loop, unique features, TA)
   - Phase 2: Competitive landscape + revenue estimation
   - Phase 3: Publishing strategy (ads, KOL, PR, ASO, launch timeline)
   - Phase 4: OM Data Analysis (if data provided)
4. **Output the strategy** using the standard deliverable format

**Output format:** Markdown document with sections:
1. Game & Category Analysis
2. Competitive Landscape
3. Go-to-Market Strategy
4. Regional Market Plans (per country)
5. OM Data Insights (if data provided)
6. Budget Summary (optional)

## Core Principles

- **Always use structured output** — follow the deliverable template exactly
- **Back claims with data** — when making competitive or revenue estimates, cite your sources and make assumptions explicit
- **Be specific about markets** — SEA, LATAM, and each country within require different strategies
- **Category benchmarks** — use the retention and ARPPU benchmarks in the reference file to sanity-check revenue models
- **No competitor exists = build TA from scratch** — define demographics, habits, payment behavior, and communities
- **OM data first** — when user provides OM data, always use the om-data-reading framework to extract insights before building strategy
- **Game type drives framework** — use game-type-analysis.md for complex genres (Extraction Shooter, BR, MOBA, Mid-Core)

## Interaction Pattern

- If game info is incomplete, ask targeted questions rather than outputting a partial analysis
- If OM data is provided, always run the OM reading framework first, then integrate insights into the strategy
- After delivering the first draft, ask: "Want to deep-dive into any specific section (e.g., KOL strategy, ASO, regional plans, OM data breakdown)?"
- Each game = one fresh analysis; do not carry over assumptions between different games

## Updating This Skill

When new market insights or project learnings become available:
1. Update the relevant reference file (e.g., regional-market-profiles.md if a new country's data is confirmed)
2. Update om-data-reading.md if new channel patterns emerge
3. Update game-type-analysis.md if new genre-specific patterns are discovered
4. Keep this SKILL.md as the orchestrator — all methodology lives in references/

## Version

- Current: 2.0
- Last Updated: 2026-04
- Key Additions from v1: OM data reading framework, regional market profiles (SEA + LATAM), game-type analysis for Extraction Shooter/Battle Royale, World Cup 2026 marketing framework
