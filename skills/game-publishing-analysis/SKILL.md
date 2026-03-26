---
name: game-publishing-analysis
description: Analyze mobile/PC games and produce a structured publishing strategy covering game category analysis (genre, core loop, unique features, target audience) and go-to-market planning (online ads, offline marketing, KOL, PR, ASO, launch timeline). Use when: user says "帮我分析一下这个游戏怎么发行", "做一个游戏的发行方案", "分析这个游戏的品类和特色", "制定市场发行策略", or asks to build a reusable game publishing framework.
---

# Game Publishing Analysis

This skill analyzes a given game and outputs a structured publishing strategy combining Step 1 (game analysis) and Step 4 (market & publishing plan).

## Workflow

**Trigger:** User provides a game to analyze, or asks to build a publishing framework.

1. Read `references/game-analysis-framework.md` for the full methodology
2. Ask the user for game information (if not already provided):
   - Game name / type / genre
   - Core gameplay description
   - Target markets
   - Monetization model
   - Development stage (prototype / soft launch / ready to publish)
3. Execute the analysis using the frameworks in the reference file:
   - Phase 1: Game & Category Analysis (genre, loop, unique features, TA)
   - Phase 2: Competitive landscape + revenue estimation
   - Phase 3: Publishing strategy (ads, KOL, PR, ASO, launch timeline)
4. Output the strategy using the standard deliverable format

**Output format:** Markdown document with sections:
1. Game & Category Analysis
2. Competitive Landscape
3. Go-to-Market Strategy
4. Budget Summary (optional)

## Core Principles

- **Always use structured output** — follow the deliverable template exactly
- **Back claims with data** — when making competitive or revenue estimates, cite your sources and make assumptions explicit
- **Be specific about markets** — SEA, East Asia, Europe, and US require different strategies
- **Category benchmarks** — use the retention and ARPPU benchmarks in the reference file to sanity-check revenue models
- **No competitor exists = build TA from scratch** — define demographics, habits, payment behavior, and communities

## Interaction Pattern

- If game info is incomplete, ask targeted questions rather than outputting a partial analysis
- After delivering the first draft, ask: "Want to deep-dive into any specific section (e.g., KOL strategy, ASO, revenue model)?"
- Each game = one fresh analysis; do not carry over assumptions between different games
