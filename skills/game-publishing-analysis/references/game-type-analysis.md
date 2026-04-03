# Game-Type Specific Analysis Framework

## Overview

Different game genres require different analysis approaches. This reference provides specialized frameworks for complex/mid-core genres that don't fit standard casual game analysis.

---

## Extraction Shooter / Extraction Shooter (搜打撤)

### Definition
Players scavenge for loot/p VP, fight other players, and must extract before being eliminated. Examples: Escape from Tarkov, DMZ, The Division, Hunt: Showdown.

### Sub-types
1. **Hardcore Extraction** (Tarkov-style): Permadeath, high stakes, realistic
2. **Arcade Extraction** (DMZ-style): Respawns, less punishing, more accessible
3. **Hero Extraction** (Marvel Rivals?): Pick a hero, short matches, team-based

### For "GNG" (竞技近战搜打撤)
- Near-combat (近战) as core mechanic
- Competitive (竞技) not just PvE extraction
- Likely faster matches, more accessible than Tarkov

### Analysis Framework for Extraction Shooters

**Core Loop:**
```
Search → Fight → Extract (or Die)
     ↑__________________|
```

**Key Metrics:**
- Average match length
- Extraction success rate
- PvP vs PvE kill ratio
- Loot rarity / progression depth
- Social组队 features

**Monetization Fit:**
- Cosmetic skins (weapons, characters)
- Battle pass with extraction-themed rewards
- Loot-related IAP (controversial but profitable in hardcore)
- Pay-to-shorten grind (risky for hardcore audience)

**Target Audience Signals:**
- Plays: Escape from Tarkov, Warzone DMZ, The Division, Hunt
- Watches: PvP streamers, extraction gameplay on YouTube/Twitch
- Communities: Reddit r/EscapeFromTarkov, Discord extraction shooter servers

**Competitor Benchmarks:**
- Warzone: MAU 100M+, free-to-play, Activision ecosystem
- DMZ: Free, integrated into Warzone 2.0
- The Division 2: $60+ buy, Ubisoft ecosystem
- Hunt: Showdown: $40+ buy, smaller but dedicated community

**User Acquisition Signals:**
- Google UAC: Works for mid-core shooters
- YouTube: Very strong for shooter content (gameplay videos, tutorials)
- Twitch/Streaming: Extraction shooters have strong streamer culture
- KOL: FPS streamers, PvP-focused YouTubers

**Retention Benchmarks:**
- D1: 35-50%
- D7: 15-25%
- D30: 8-15%
(Extraction shooters have high early churn but dedicated core)

---

## Battle Royale

### Sub-types
1. **Standard BR**: 100 players, last standing (PUBG, Warzone, Fortnite)
2. **Aren BR**: Smaller teams, faster matches (Valorant, Apex Legends)
3. **Hybrid BR**: BR + other mechanics (Halo Infinite, Rocket Royale)

### Analysis Framework

**Core Loop:**
```
Drop → Loot → Fight → Survive → Win
```

**Key Metrics:**
- Average match length
- Average kills per match
- "Victory Royole" rate (1%)
- Time-to-first-blood
- Squad vs Solo ratio

**Monetization:**
- Battle Pass: Essential (seasonal, $10-15)
- Cosmetics: Weapon skins, character skins, emotes
- Event passes: Limited events with exclusive rewards
- Loot boxes: Controversial but effective (less in West due to regulation)

**Target Audience:**
- Plays: PUBG, Warzone, Fortnite, Apex, Fortnite
- Watches: Battle royale streamers, esports (Apex, Fortnite tournaments)
- Age: 13-35, heavily male (75-85%)

**User Acquisition:**
- YouTube: Gameplay + montage content works very well
- TikTok: Short clips, highlight plays
- Twitch: BR streamers have massive followings
- Google UAC: Works but competitive CPI

**Competitive Landscape:**
- Fortnite: Dominant in West, creative + social features
- Warzone: Dominant in US, integration with CoD ecosystem
- PUBG: Strong in Asia (VN, ID, TH, KR)
- Apex Legends: Strong in BR mode, FPS fans

---

## Hero Shooter / MOBA-Arena

### Sub-types
1. **Classic MOBA**: League of Legends, Dota 2, Mobile Legends
2. **Hero Shooter**: Overwatch, Valorant, Paladins
3. **Auto Battler**: Teamfight Tactics, Dota Auto Chess

### Analysis Framework

**Core Loop:**
```
Select Hero → Team Fight → Destroy Objective → Win
```

**Key Metrics:**
- Hero pool size
- Match length
- Replayability (do players return for "one more game"?)
- Social/team formation rate

**Monetization:**
- Battle Pass: Standard
- Hero Skins: Core revenue driver
- New Hero releases: Can drive massive spikes
- Esports integration: Adds long-term interest

**Target Audience:**
- Plays: LoL, Dota, Mobile Legends, Valorant
- Watches: Esports tournaments, pro gameplay
- Age: 16-35, competitive, often with team play

---

## Mid-Core / Hardcore Mobile

### Characteristics
- More complex than casual games
- Longer sessions than hyper-casual
- Higher ARPPU than casual
- Examples: AFK Arena, Whiteout, Arknights, Genshin Impact

### Analysis Framework

**Core Metrics:**
- D1 retention is critical (35-50% is good)
- D7 for mid-core is telling (10-20%)
- ARPPU: $50-200 is typical for engaged payers
- Session length: 15-45 minutes

**User Acquisition:**
- Google UAC: Works
- Facebook: Works in markets with gaming culture
- TikTok: Rising, especially with creative
- KOL: Gaming-focused influencers
- Apple Search Ads: High LTV users

**Retention Levers:**
- Daily login rewards
- Guild/team features
- Seasonal events
- Progression walls (gated by time or pay)

---

## Seasonal / Event-Driven Marketing

### For Extraction Shooter / Mid-Core

**Framework:**
1. **Identify the event window**
2. **Create in-game tie-in**
3. **Create out-of-game marketing tie-in**
4. **Coordinate launch with event**

**Example: World Cup (July 2026)**

In-game:
- Limited-time "World Cup" event mode
- Themed cosmetics (team skins if licensing allows, or generic red/white/blue)
- Special extraction map or zone
- Login bonuses during tournament days

Out-of-game:
- Pre-event marketing starting 4-6 weeks before
- KOL content tied to tournament schedule
- User-generated content encouragement
- Social media hashtag campaign

**Event Calendar (2026)**
- Jan-Feb: Tet (VN), Chinese New Year (CNY)
- Feb-Apr: Ramadan/Eid (ID, MY)
- Apr: Easter (Western markets)
- May: Labor Day (global)
- Jun-Jul: World Cup 2026
- Jul: US Independence Day (Jul 4)
- Jul 9: Argentina Independence Day
- Aug 17: Indonesia Independence Day
- Sep: Mexican Independence Day (Sep 16)
- Oct: German Unity Day, Halloween
- Nov: US Thanksgiving, Black Friday
- Dec: Christmas/New Year, Carnival pre-Lenten (BR)

---

## Version

- Date: 2026-04
- Version: 1.0
- Based on: GNG analysis + industry knowledge
