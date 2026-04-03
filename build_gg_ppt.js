const pptxgen = require("pptxgenjs");

// ─── Color Palette: Gold & Glory Gaming Theme ─────────────────────────────────
const C = {
  gold: "D4A853",        
  goldLight: "F5D78E",   
  goldDark: "B8860B",   
  midnight: "0D1117",    
  navy: "161B22",       
  slate: "21262D",       
  text: "F0F6FC",        
  textMuted: "8B949E",   
  accent: "FF6B35",      
  success: "3FB950",     
  warning: "D29922",     
  danger: "F85149",      
  purple: "A371F7",      
};

// ─── Shadow Factory ────────────────────────────────────────────────────────────
const makeShadow = () => ({
  type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.3
});

const makeCardShadow = () => ({
  type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.25
});

// ─── Main Builder ──────────────────────────────────────────────────────────────
async function buildPresentation() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gold and Glory - 7月大版本发行策略";
  pres.author = "Ops Team";

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 1: Title Slide
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Top gold bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.08, w: 10, h: 0.03, fill: { color: C.goldLight, transparency: 50 }
    });
    
    // Left decorative element
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.8, w: 0.08, h: 1.5, fill: { color: C.gold }
    });
    
    // Decorative diamond shapes
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 1.95, w: 0.25, h: 0.25, fill: { color: C.gold }, rotate: 45
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.95, y: 2.2, w: 0.18, h: 0.18, fill: { color: C.goldLight }, rotate: 45
    });
    
    // Main title
    slide.addText("GOLD AND GLORY", {
      x: 1.5, y: 1.6, w: 7.5, h: 0.9,
      fontSize: 52, fontFace: "Arial Black", color: C.gold,
      bold: true, charSpacing: 4
    });
    
    // Subtitle
    slide.addText("7月大版本发行策略", {
      x: 1.5, y: 2.5, w: 7.5, h: 0.6,
      fontSize: 28, fontFace: "Arial", color: C.text
    });
    
    // Tagline
    slide.addText("Arena · PVE · 3C核心升级", {
      x: 1.5, y: 3.2, w: 7.5, h: 0.5,
      fontSize: 18, fontFace: "Arial", color: C.goldLight
    });
    
    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.5, y: 3.9, w: 3, h: 0.02, fill: { color: C.gold, transparency: 50 }
    });
    
    // Date
    slide.addText("2026年4月  |  Confidential — Internal Use Only", {
      x: 1.5, y: 4.1, w: 7.5, h: 0.4,
      fontSize: 12, fontFace: "Arial", color: C.textMuted
    });
    
    // Bottom gold bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.gold }
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 2: Product Core Positioning
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    // Header icon placeholder (diamond)
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("产品核心定位", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    // USP Quote box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.1, w: 9, h: 1.0, fill: { color: C.slate }, shadow: makeCardShadow()
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.1, w: 0.06, h: 1.0, fill: { color: C.gold }
    });
    slide.addText("\u201C进去抢，活着出来就是你的\u201D", {
      x: 0.8, y: 1.15, w: 8.5, h: 0.55,
      fontSize: 22, fontFace: "Georgia", color: C.gold, italic: true, align: "center"
    });
    slide.addText("— G&G 核心 USP，Mobile Extraction Shooter 独家机制", {
      x: 0.8, y: 1.65, w: 8.5, h: 0.35,
      fontSize: 12, fontFace: "Arial", color: C.textMuted, align: "center"
    });
    
    // 4 cards - 2x2 grid
    const cards = [
      { title: "产品定位", content: "中世纪地牢 Extraction RPG\n5–15分钟快节奏单局\n赛季制 + 英雄收集", x: 0.5, y: 2.3, symbol: "◆" },
      { title: "核心特色", content: "Mobile 端独家 Extraction Shooter\n风险回报机制\n死后全失的刺激感", x: 5.05, y: 2.3, symbol: "◇" },
      { title: "当前状态", content: "Google Play 评分：3.7 ⚠\n已测试：墨西哥、哥伦比亚\n服务器：4–6月停服维护", x: 0.5, y: 3.95, symbol: "!" },
      { title: "7月目标", content: "7月大版本发布在即\n⚠ 3.7分是市场进入门槛\n7月前必须改善至 3.8，目标 4.0", x: 5.05, y: 3.95, symbol: "►" },
    ];
    
    for (const c of cards) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: c.x, y: c.y, w: 4.45, h: 1.45, fill: { color: C.navy }, shadow: makeCardShadow()
      });
      slide.addShape(pres.shapes.RECTANGLE, {
        x: c.x, y: c.y, w: 0.05, h: 1.45, fill: { color: C.gold }
      });
      // Symbol
      slide.addText(c.symbol, {
        x: c.x + 0.15, y: c.y + 0.12, w: 0.4, h: 0.4,
        fontSize: 20, fontFace: "Arial", color: C.gold
      });
      slide.addText(c.title, {
        x: c.x + 0.5, y: c.y + 0.15, w: 3.7, h: 0.4,
        fontSize: 14, fontFace: "Arial", color: C.gold, bold: true
      });
      slide.addText(c.content, {
        x: c.x + 0.2, y: c.y + 0.6, w: 4, h: 0.8,
        fontSize: 11, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.2
      });
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 3: 7月大版本核心内容
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("7月大版本核心内容", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    slide.addText("三大营销素材支柱（按重要度排序）", {
      x: 0.5, y: 0.95, w: 9, h: 0.35,
      fontSize: 14, fontFace: "Arial", color: C.goldLight
    });
    
    // 3 Pillar cards
    const pillars = [
      {
        rank: "#1", stars: "★★★★★", title: "竞技场 Arena",
        tags: "PVP核心玩法，天梯/排名，可做大量内容素材",
        points: ["天梯冲分 / 以弱胜强", "公平竞技 / 新手逆袭", "地牢风险回报 / 装备驱动"],
        badge: "最高营销价值", color: C.gold, symbol: "⚔"
      },
      {
        rank: "#2", stars: "★★★★☆", title: "PVE 模式",
        tags: "降低门槛，留存友好，适合「新手友好」叙事",
        points: ["新手友好 / 通关成就感", "剧情体验 / 组队副本"],
        badge: "留存利器", color: C.goldLight, symbol: "🗺"
      },
      {
        rank: "#3", stars: "★★★★☆", title: "3C 核心升级",
        tags: "Control + Camera + Character 整体升级",
        points: ["易用性（视野） · 操作性（精准度）", "打击感（反馈） · 策略性（观察）"],
        badge: "核心玩法质变", color: C.goldLight, symbol: "🎮"
      }
    ];
    
    for (let i = 0; i < pillars.length; i++) {
      const p = pillars[i];
      const x = 0.5 + i * 3.1;
      
      // Card
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.45, w: 2.9, h: 3.9, fill: { color: C.navy }, shadow: makeCardShadow()
      });
      
      // Top accent
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.45, w: 2.9, h: 0.06, fill: { color: p.color }
      });
      
      // Rank
      slide.addText(p.rank, {
        x: x + 0.15, y: 1.6, w: 0.6, h: 0.5,
        fontSize: 28, fontFace: "Arial Black", color: p.color, bold: true
      });
      slide.addText(p.stars, {
        x: x + 0.7, y: 1.7, w: 2, h: 0.35,
        fontSize: 12, color: p.color
      });
      
      // Symbol icon
      slide.addText(p.symbol, {
        x: x + 0.9, y: 2.2, w: 1.1, h: 1.0,
        fontSize: 48, align: "center", color: p.color
      });
      
      // Title
      slide.addText(p.title, {
        x: x + 0.15, y: 3.3, w: 2.6, h: 0.45,
        fontSize: 16, fontFace: "Arial", color: C.text, bold: true, align: "center"
      });
      
      // Tags
      slide.addText(p.tags, {
        x: x + 0.1, y: 3.75, w: 2.7, h: 0.55,
        fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center"
      });
      
      // Points
      slide.addText(p.points.map((pt, idx) => ({
        text: "• " + pt,
        options: { breakLine: idx < p.points.length - 1 }
      })), {
        x: x + 0.15, y: 4.3, w: 2.6, h: 0.7,
        fontSize: 9, fontFace: "Arial", color: C.text
      });
      
      // Badge
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.4, y: 5.0, w: 2.1, h: 0.28, fill: { color: p.color, transparency: 20 }
      });
      slide.addText(p.badge, {
        x: x + 0.4, y: 5.0, w: 2.1, h: 0.28,
        fontSize: 9, fontFace: "Arial", color: p.color, bold: true, align: "center", valign: "middle"
      });
    }
    
    // Bottom note
    slide.addText("三个内容支柱构成7月营销的核心素材库，所有广告素材、KOL合作均围绕这三个展开。", {
      x: 0.5, y: 5.35, w: 9, h: 0.25,
      fontSize: 10, fontFace: "Arial", color: C.textMuted, italic: true, align: "center"
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 4: 宣传讯息层级
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("宣传讯息层级", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    // Core USP highlight
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.0, w: 9, h: 0.7, fill: { color: C.slate }, shadow: makeCardShadow()
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.0, w: 0.06, h: 0.7, fill: { color: C.gold }
    });
    slide.addText("核心USP：进去抢，活着出来就是你的（Extraction Shooter独家机制）", {
      x: 0.75, y: 1.05, w: 8.5, h: 0.6,
      fontSize: 14, fontFace: "Arial", color: C.gold, valign: "middle"
    });
    
    // 4 Pillars
    const pillars4 = [
      { num: "1", title: "Pillar 1 — 竞技刺激", angle: "Arena天梯 / 以弱胜强 / 公平竞技", users: "竞技型玩家 / BR玩家", content: "地牢风险回报 / 装备驱动 / 死后全失" },
      { num: "2", title: "Pillar 2 — 社交组队", angle: "和朋友下地牢 / 组队开黑", users: "社交型玩家 / 东南亚/拉美", content: "10-15分钟快节奏 / 碎片时间友好" },
      { num: "3", title: "Pillar 3 — 新手友好", angle: "PVE降门槛 / 3C升级上手更容易", users: "泛用户 / 女性用户", content: "3C升级后视野更广 / 操作更精准" },
      { num: "4", title: "Pillar 4 — 视觉冲击", angle: "3C对比 / 打击感展示", users: "所有用户 / 视觉型玩家", content: "Camera变更前后对比 / 战斗特效" },
    ];
    
    for (let i = 0; i < pillars4.length; i++) {
      const p = pillars4[i];
      const y = 1.85 + i * 0.92;
      
      // Row card
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 0.85, fill: { color: C.navy }, shadow: makeCardShadow()
      });
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 0.05, h: 0.85, fill: { color: C.gold }
      });
      
      // Number circle
      slide.addShape(pres.shapes.OVAL, {
        x: 0.7, y: y + 0.15, w: 0.55, h: 0.55, fill: { color: C.gold }
      });
      slide.addText(p.num, {
        x: 0.7, y: y + 0.15, w: 0.55, h: 0.55,
        fontSize: 16, fontFace: "Arial", color: C.midnight, bold: true, align: "center", valign: "middle"
      });
      
      // Title
      slide.addText(p.title, {
        x: 1.4, y: y + 0.08, w: 2.5, h: 0.35,
        fontSize: 13, fontFace: "Arial", color: C.gold, bold: true
      });
      
      // Angle
      slide.addText("切入角度：" + p.angle, {
        x: 1.4, y: y + 0.4, w: 2.8, h: 0.4,
        fontSize: 9, fontFace: "Arial", color: C.text
      });
      
      // Users
      slide.addText("目标用户：" + p.users, {
        x: 4.3, y: y + 0.08, w: 2.5, h: 0.35,
        fontSize: 10, fontFace: "Arial", color: C.goldLight
      });
      
      // Content
      slide.addText("内容：" + p.content, {
        x: 4.3, y: y + 0.4, w: 5, h: 0.4,
        fontSize: 9, fontFace: "Arial", color: C.textMuted
      });
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 5: 区域差异化宣传策略
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("区域差异化宣传策略", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    slide.addText("亚洲 · 拉美（北部/南部） · 巴西 — 三大市场，三套叙事", {
      x: 0.5, y: 0.92, w: 9, h: 0.3,
      fontSize: 12, fontFace: "Arial", color: C.goldLight
    });
    
    // 3 Region cards
    const regions = [
      {
        flag: "🌏", name: "亚洲（印尼/越南）", nature: "版本更新",
        口径: "7月大版本上线，所有人一起回归",
        受众: "新玩家：上手容易 | 老玩家：内容更新",
        kol: "按需，OM为主",
        coreMsg: "版本回来了，内容更多"
      },
      {
        flag: "🌎", name: "拉美（CO/MX/AR/CL）", nature: "南北部全面开放",
        口径: "北部（CO/MX）+ 南部（AR/CL）同步开放，回应南部玩家之前的抱怨",
        受众: "北部回归玩家 + 南部新玩家",
        kol: "按需，OM为主",
        coreMsg: "终于等到你！南北全面开放"
      },
      {
        flag: "🇧🇷", name: "巴西", nature: "时隔1年首次开服",
        口径: "服务器回来了，欢迎老玩家回归，新玩家加入",
        受众: "老玩家召回为主，新玩家补充",
        kol: "老玩家召回侧重点，预算允许下可做",
        coreMsg: "服务器回来了，你还在吗？"
      }
    ];
    
    for (let i = 0; i < regions.length; i++) {
      const r = regions[i];
      const x = 0.5 + i * 3.1;
      
      // Card
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.35, w: 2.9, h: 4.0, fill: { color: C.navy }, shadow: makeCardShadow()
      });
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.35, w: 2.9, h: 0.55, fill: { color: C.slate }
      });
      
      // Flag & Name
      slide.addText(r.flag + " " + r.name, {
        x: x + 0.15, y: 1.4, w: 2.6, h: 0.45,
        fontSize: 14, fontFace: "Arial", color: C.text, bold: true, valign: "middle"
      });
      
      // Content rows
      const rows = [
        { label: "性质", value: r.nature },
        { label: "核心口径", value: r.口径 },
        { label: "受众", value: r.受众 },
        { label: "KOL/KOC", value: r.kol },
        { label: "核心信息", value: r.coreMsg },
      ];
      
      for (let j = 0; j < rows.length; j++) {
        const row = rows[j];
        const y = 2.0 + j * 0.6;
        
        slide.addText(row.label, {
          x: x + 0.1, y: y, w: 0.9, h: 0.25,
          fontSize: 8, fontFace: "Arial", color: C.gold, bold: true
        });
        slide.addText(row.value, {
          x: x + 0.1, y: y + 0.22, w: 2.7, h: 0.35,
          fontSize: 9, fontFace: "Arial", color: C.text
        });
      }
    }
    
    // Note
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 5.4, w: 9, h: 0.2, fill: { color: C.warning, transparency: 80 }
    });
    slide.addText("※ 非正式上线（测试阶段），预算有限。OM为主，KOL/KOC按区域单独评估", {
      x: 0.6, y: 5.4, w: 8.8, h: 0.2,
      fontSize: 8, fontFace: "Arial", color: C.warning, valign: "middle"
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 6: 素材细化
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("素材细化（按渠道/格式/受众）", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    // Table header
    const colX = [0.5, 2.2, 3.8, 5.3, 6.8];
    const colW = [1.6, 1.5, 1.4, 1.4, 3.3];
    const headers = ["素材类型", "目标用户", "切入角度", "格式", "渠道"];
    
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.0, w: 9, h: 0.4, fill: { color: C.slate }
    });
    for (let i = 0; i < headers.length; i++) {
      slide.addText(headers[i], {
        x: colX[i], y: 1.0, w: colW[i], h: 0.4,
        fontSize: 10, fontFace: "Arial", color: C.gold, bold: true, align: "center", valign: "middle"
      });
    }
    
    // Table rows
    const materials = [
      { type: "Arena实况", users: "竞技型玩家", angle: "天梯冲分 / 以弱胜强", format: "15s竖屏×3版", channel: "TikTok/YT Reels" },
      { type: "Arena真人反应", users: "泛用户", angle: "开黑翻车集锦", format: "竖屏×2版", channel: "TikTok" },
      { type: "PVE实录", users: "新手玩家", angle: "新手友好 / 通关成就感", format: "15-30s版", channel: "YT/TikTok" },
      { type: "3C对比（旧vs新）", users: "所有用户", angle: "视觉冲击 / 打击感", format: "并排对比视频", channel: "YT/FB/买量" },
      { type: "新英雄展示", users: "核心用户", angle: "技能展示 / 强度分析", format: "10s技能+立绘", channel: "YT/KOL" },
      { type: "组队开黑片段", users: "社交型玩家", angle: "和朋友一起玩的乐趣", format: "竖屏/横版", channel: "TikTok/FB" },
      { type: "迷因向短剪", users: "泛用户/MZ世代", angle: "地牢翻车搞笑集锦", format: "5-10s梗视频", channel: "TikTok" },
      { type: "玩家UGC二创", users: "所有用户", angle: "官方转发激励扩散", format: "UGC", channel: "社媒矩阵" },
    ];
    
    for (let i = 0; i < materials.length; i++) {
      const m = materials[i];
      const y = 1.4 + i * 0.5;
      const bgColor = i % 2 === 0 ? C.navy : C.slate;
      
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 0.5, fill: { color: bgColor }
      });
      
      const vals = [m.type, m.users, m.angle, m.format, m.channel];
      for (let j = 0; j < vals.length; j++) {
        slide.addText(vals[j], {
          x: colX[j], y: y, w: colW[j], h: 0.5,
          fontSize: 9, fontFace: "Arial", color: j === 0 ? C.goldLight : C.text, 
          align: "center", valign: "middle"
        });
      }
    }
    
    // Note
    slide.addText("※ 预计素材总量：各市场约 100-200 个组合，优先测试 Arena + 组队类素材", {
      x: 0.5, y: 5.45, w: 9, h: 0.2,
      fontSize: 9, fontFace: "Arial", color: C.textMuted, italic: true
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 7: KOL矩阵
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("KOL矩阵（分层 × 宣传点 × CPM）", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    slide.addText("类型：泛游戏主播为主，不采用纯垂类/Vtuber | OM为主，KOL按需决策", {
      x: 0.5, y: 0.92, w: 9, h: 0.25,
      fontSize: 10, fontFace: "Arial", color: C.textMuted
    });
    
    // 4 KOL tiers
    const kolTiers = [
      { name: "Macro KOL", fans: "100万+", market: "巴西/墨西哥/哥伦比亚", platform: "YouTube", cpm: "$10–15", pillar: "Pillar 1+2", angle: "品牌背书 + 泛用户破圈" },
      { name: "Mid KOL", fans: "10–100万", market: "印尼/越南/巴西/墨西哥", platform: "TikTok + YouTube", cpm: "$8–12", pillar: "全部", angle: "深度实况 + Arena/PVE体验" },
      { name: "Micro KOL", fans: "1–10万", market: "印尼/越南/巴西/墨西哥", platform: "TikTok", cpm: "$5–8", pillar: "Pillar 2+3", angle: "素人口碑 + 真实反应 + Meme" },
      { name: "Nano KOL", fans: "1万以下", market: "全部5国", platform: "TikTok + Discord", cpm: "$2–5", pillar: "Pillar 2+4", angle: "UGC扩散 + 种子用户" },
    ];
    
    // Table header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.25, w: 9, h: 0.45, fill: { color: C.slate }
    });
    const kolHeaders = ["类型", "粉丝量", "市场", "平台", "CPM", "对应宣传点", "切入角度"];
    const kolColX = [0.5, 1.35, 2.15, 3.55, 4.65, 5.55, 6.65];
    const kolColW = [0.8, 0.75, 1.35, 1.05, 0.85, 1.05, 3.0];
    for (let i = 0; i < kolHeaders.length; i++) {
      slide.addText(kolHeaders[i], {
        x: kolColX[i], y: 1.25, w: kolColW[i], h: 0.45,
        fontSize: 9, fontFace: "Arial", color: C.gold, bold: true, align: "center", valign: "middle"
      });
    }
    
    for (let i = 0; i < kolTiers.length; i++) {
      const k = kolTiers[i];
      const y = 1.7 + i * 0.72;
      const bgColor = i % 2 === 0 ? C.navy : C.slate;
      
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 0.72, fill: { color: bgColor }
      });
      
      // Left accent
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 0.04, h: 0.72, fill: { color: C.gold }
      });
      
      const vals = [k.name, k.fans, k.market, k.platform, k.cpm, k.pillar, k.angle];
      for (let j = 0; j < vals.length; j++) {
        slide.addText(vals[j], {
          x: kolColX[j], y: y, w: kolColW[j], h: 0.72,
          fontSize: j === 0 ? 11 : 9, 
          fontFace: "Arial", 
          color: j === 0 ? C.gold : (j === 5 ? C.goldLight : C.text), 
          bold: j === 0,
          align: "center", valign: "middle"
        });
      }
    }
    
    // CPM note
    slide.addText("CPM数据来源：G&G印尼历史数据验证（TikTok官方$0.56、YouTube官方$0.29、KOL合作$10-20）；实际CPM因市场/季节浮动", {
      x: 0.5, y: 5.35, w: 9, h: 0.25,
      fontSize: 8, fontFace: "Arial", color: C.textMuted, italic: true
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 8: 目标市场分层
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("目标市场分层", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    // Central circle
    slide.addShape(pres.shapes.OVAL, {
      x: 3.8, y: 1.8, w: 2.4, h: 2.4, fill: { color: C.gold }, shadow: makeShadow()
    });
    slide.addText("全部目标市场\n7月同步上线", {
      x: 3.8, y: 2.4, w: 2.4, h: 1.2,
      fontSize: 14, fontFace: "Arial", color: C.midnight, bold: true, align: "center", valign: "middle"
    });
    
    // Country flags
    const countries = [
      { flag: "🇮🇩", name: "印尼", x: 1.5, y: 1.5 },
      { flag: "🇻🇳", name: "越南", x: 6.5, y: 1.5 },
      { flag: "🇲🇽", name: "墨西哥", x: 0.8, y: 3.0 },
      { flag: "🇧🇷", name: "巴西", x: 7.5, y: 3.0 },
      { flag: "🇨🇴", name: "哥伦比亚", x: 1.2, y: 4.3 },
      { flag: "🇦🇷", name: "阿根廷", x: 4.2, y: 4.8 },
      { flag: "🇨🇱", name: "智利", x: 6.0, y: 4.3 },
      { flag: "🇺🇸", name: "美国", x: 8.0, y: 4.0 },
    ];
    
    for (const c of countries) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: c.x, y: c.y, w: 1.3, h: 0.7, fill: { color: C.navy }, shadow: makeCardShadow()
      });
      slide.addShape(pres.shapes.RECTANGLE, {
        x: c.x, y: c.y, w: 0.04, h: 0.7, fill: { color: C.gold }
      });
      slide.addText(c.flag + " " + c.name, {
        x: c.x + 0.1, y: c.y, w: 1.1, h: 0.7,
        fontSize: 12, fontFace: "Arial", color: C.text, align: "center", valign: "middle"
      });
    }
    
    // Bottom note
    slide.addText("亚洲+拉美+美国同步发行，非分批上线", {
      x: 0.5, y: 5.35, w: 9, h: 0.25,
      fontSize: 12, fontFace: "Arial", color: C.gold, bold: true, align: "center"
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 9: 推广时间轴
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("推广时间轴（关键节点）", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    // Timeline phases
    const phases = [
      { month: "3月", name: "准备期", action: "评分+本地化", color: C.goldLight },
      { month: "4–5月", name: "停服维护", action: "素材储备+KOL接触", color: C.gold },
      { month: "6月", name: "预热期", action: "官宣+预约开放", color: C.gold },
      { month: "7月", name: "大版本爆发", action: "全力投放", color: C.accent },
      { month: "8月+", name: "长尾运营", action: "赛季+内容", color: C.textMuted },
    ];
    
    // Timeline bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: 2.4, w: 8.4, h: 0.08, fill: { color: C.slate }
    });
    
    for (let i = 0; i < phases.length; i++) {
      const p = phases[i];
      const x = 0.8 + i * 1.75;
      
      // Circle node
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.55, y: 2.2, w: 0.45, h: 0.45, fill: { color: p.color }, shadow: makeCardShadow()
      });
      
      // Month label
      slide.addText(p.month, {
        x: x, y: 1.7, w: 1.6, h: 0.4,
        fontSize: 12, fontFace: "Arial", color: p.color, bold: true, align: "center"
      });
      
      // Phase name
      slide.addText(p.name, {
        x: x, y: 2.7, w: 1.6, h: 0.35,
        fontSize: 11, fontFace: "Arial", color: C.text, bold: true, align: "center"
      });
      
      // Action
      slide.addText(p.action, {
        x: x, y: 3.0, w: 1.6, h: 0.3,
        fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center"
      });
    }
    
    // Detail cards - Left
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 3.5, w: 4.4, h: 1.9, fill: { color: C.navy }, shadow: makeCardShadow()
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 3.5, w: 0.05, h: 1.9, fill: { color: C.gold }
    });
    slide.addText("准备期 3月", {
      x: 0.7, y: 3.55, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Arial", color: C.gold, bold: true
    });
    slide.addText([
      { text: "• 评分改善（3.7→3.8）", options: { breakLine: true } },
      { text: "• 本地化完成", options: { breakLine: true } },
      { text: "• KOL名单确认", options: { breakLine: true } },
      { text: "• 广告素材制作（初版）", options: {} }
    ], {
      x: 0.7, y: 3.85, w: 4, h: 1.4,
      fontSize: 10, fontFace: "Arial", color: C.text
    });
    
    // Right column
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: 3.5, w: 4.4, h: 1.9, fill: { color: C.navy }, shadow: makeCardShadow()
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: 3.5, w: 0.05, h: 1.9, fill: { color: C.accent }
    });
    slide.addText("爆发期 7月", {
      x: 5.3, y: 3.55, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Arial", color: C.accent, bold: true
    });
    slide.addText([
      { text: "• T-3: 预告片上线", options: { breakLine: true } },
      { text: "• T日: Mid/Macro KOL同步爆发", options: { breakLine: true } },
      { text: "• T+7: 全渠道买量加投", options: { breakLine: true } },
      { text: "• T+14: BP发售+限量皮肤", options: {} }
    ], {
      x: 5.3, y: 3.85, w: 4, h: 1.4,
      fontSize: 10, fontFace: "Arial", color: C.text
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 10: 预算分配建议
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("预算分配建议", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    
    // Budget bars
    const budgets = [
      { name: "TikTok Ads", pct: "35%", desc: "年轻用户主力平台 · CPM $0.5-1", color: C.gold },
      { name: "Meta Ads", pct: "25%", desc: "触达面广 · CPM $2-3", color: C.goldLight },
      { name: "Google UAC", pct: "20%", desc: "Search + Play双覆盖 · CPM $3-5", color: C.goldDark },
      { name: "KOL合作", pct: "15%", desc: "泛游戏主播为主 · CPM $10-15", color: C.accent },
      { name: "PR / ASO", pct: "5%", desc: "里程碑传播", color: C.textMuted },
    ];
    
    for (let i = 0; i < budgets.length; i++) {
      const b = budgets[i];
      const y = 1.1 + i * 0.85;
      const barW = parseInt(b.pct) / 100 * 6;
      
      // Label
      slide.addText(b.name, {
        x: 0.5, y: y, w: 1.5, h: 0.5,
        fontSize: 12, fontFace: "Arial", color: C.text, bold: true, valign: "middle"
      });
      
      // Bar background
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 2.1, y: y + 0.1, w: 6, h: 0.35, fill: { color: C.slate }
      });
      
      // Bar fill
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 2.1, y: y + 0.1, w: barW, h: 0.35, fill: { color: b.color }, shadow: makeCardShadow()
      });
      
      // Percentage
      slide.addText(b.pct, {
        x: 8.2, y: y, w: 0.6, h: 0.5,
        fontSize: 14, fontFace: "Arial", color: b.color, bold: true, valign: "middle"
      });
      
      // Description
      slide.addText(b.desc, {
        x: 0.5, y: y + 0.4, w: 8.3, h: 0.35,
        fontSize: 9, fontFace: "Arial", color: C.textMuted
      });
    }
    
    // Note
    slide.addText("CPM数据来源：G&G印尼历史数据（TikTok官方$0.56、YouTube官方$0.29、KOL $10-20）", {
      x: 0.5, y: 5.4, w: 9, h: 0.2,
      fontSize: 8, fontFace: "Arial", color: C.textMuted, italic: true
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 11: 立即行动项
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.navy }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.78, w: 10, h: 0.04, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y: 0.2, w: 0.35, h: 0.35, fill: { color: C.gold }, rotate: 45
    });
    slide.addText("立即行动项（4–6月）", {
      x: 1.1, y: 0.15, w: 8, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: C.text, bold: true
    });
    slide.addText("停服维护期 · 准备冲刺阶段", {
      x: 0.5, y: 0.92, w: 9, h: 0.3,
      fontSize: 12, fontFace: "Arial", color: C.goldLight
    });
    
    // 3 Priority sections
    const priorities = [
      {
        label: "P0 — 最高优先", color: C.danger,
        items: [
          "评分改善（3.7→3.8，目标4.0）",
          "印尼/越南/巴西本地化（6月中前）",
          "KOL名单确认（5月底前）",
          "广告素材制作（6月中前）：Arena实况×3版 / PVE实录 / 3C对比"
        ]
      },
      {
        label: "P1 — 重要", color: C.warning,
        items: [
          "预约页面开放（6月中）",
          "Discord社区激活（持续）",
          "买量素材制作（TikTok竖屏各2版）"
        ]
      },
      {
        label: "P2 — 跟进", color: C.textMuted,
        items: [
          "智利/阿根廷/美国本地化（7月前）",
          "日本市场评估（Q3决策）",
          "KOL正式合作谈判（6月前）"
        ]
      }
    ];
    
    for (let i = 0; i < priorities.length; i++) {
      const p = priorities[i];
      const y = 1.35 + i * 1.35;
      
      // Card
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 1.25, fill: { color: C.navy }, shadow: makeCardShadow()
      });
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 0.06, h: 1.25, fill: { color: p.color }
      });
      
      // Label badge
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.75, y: y + 0.1, w: 1.4, h: 0.3, fill: { color: p.color, transparency: 70 }
      });
      slide.addText(p.label, {
        x: 0.75, y: y + 0.1, w: 1.4, h: 0.3,
        fontSize: 10, fontFace: "Arial", color: p.color, bold: true, align: "center", valign: "middle"
      });
      
      // Arrow
      slide.addText("→", {
        x: 2.2, y: y + 0.05, w: 0.3, h: 0.4,
        fontSize: 16, fontFace: "Arial", color: C.gold
      });
      
      // Items
      slide.addText(p.items.map((item, idx) => ({
        text: "• " + item,
        options: { breakLine: idx < p.items.length - 1 }
      })), {
        x: 2.6, y: y + 0.1, w: 6.7, h: 1.1,
        fontSize: 10, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.3
      });
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SLIDE 12: 下一步
  // ══════════════════════════════════════════════════════════════════════════
  {
    let slide = pres.addSlide();
    slide.background = { color: C.midnight };
    
    // Top gold bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.gold }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0.08, w: 10, h: 0.03, fill: { color: C.goldLight, transparency: 50 }
    });
    
    // Decorative diamonds
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.65, y: 0.9, w: 0.4, h: 0.4, fill: { color: C.gold }, rotate: 45
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.35, y: 1.1, w: 0.25, h: 0.25, fill: { color: C.goldLight }, rotate: 45
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: 1.1, w: 0.25, h: 0.25, fill: { color: C.goldLight }, rotate: 45
    });
    
    // Title
    slide.addText("下一步", {
      x: 0.5, y: 1.9, w: 9, h: 0.7,
      fontSize: 36, fontFace: "Arial Black", color: C.gold, align: "center", charSpacing: 6
    });
    
    // 4 action items
    const nextSteps = [
      "确认7月大版本最终上线日期",
      "启动印尼/越南/巴西本地化工作",
      "接触首批 Nano + Micro KOL",
      "制作 Arena 真机实况素材（第一批）"
    ];
    
    for (let i = 0; i < nextSteps.length; i++) {
      const y = 2.7 + i * 0.55;
      
      // Number circle
      slide.addShape(pres.shapes.OVAL, {
        x: 2.0, y: y, w: 0.4, h: 0.4, fill: { color: C.gold }
      });
      slide.addText(String(i + 1), {
        x: 2.0, y: y, w: 0.4, h: 0.4,
        fontSize: 14, fontFace: "Arial", color: C.midnight, bold: true, align: "center", valign: "middle"
      });
      
      // Text
      slide.addText(nextSteps[i], {
        x: 2.6, y: y, w: 5.5, h: 0.4,
        fontSize: 16, fontFace: "Arial", color: C.text, valign: "middle"
      });
    }
    
    // Goal highlight
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.0, y: 4.85, w: 6, h: 0.55, fill: { color: C.slate }, shadow: makeCardShadow()
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.0, y: 4.85, w: 0.05, h: 0.55, fill: { color: C.accent }
    });
    slide.addText("🎯 目标：7月爆发期全力冲击下载 + 榜单", {
      x: 2.2, y: 4.85, w: 5.7, h: 0.55,
      fontSize: 14, fontFace: "Arial", color: C.accent, bold: true, valign: "middle"
    });
    
    // Bottom gold bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.gold }
    });
  }

  // ── Save ──────────────────────────────────────────────────────────────────
  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GoldAndGlory_七月发行策略_v2.pptx" });
  console.log("✅ Done! Saved to GoldAndGlory_七月发行策略_v2.pptx");
}

buildPresentation().catch(console.error);
