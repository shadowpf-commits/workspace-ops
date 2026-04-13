const pptxgen = require("pptxgenjs");

// Gaming / Esports Style - Purple + Cyan + Pink
const C = {
  purple: "7C3AED",
  purpleDark: "5B21B6",
  purpleLight: "A78BFA",
  cyan: "06B6D4",
  pink: "EC4899",
  darkBg: "0F0A1A",
  cardBg: "1A1025",
  cardElevated: "251A35",
  slate: "3D2952",
  text: "FFFFFF",
  textMuted: "A0A0B0",
  gold: "FBBF24",
  warning: "FB923C",
  success: "10B981",
  danger: "EF4444",
};

// ─── Slide 1: Title ────────────────────────────────────────────────────────────
async function createSlide1(pres) {
  let slide = pres.addSlide();
  slide.background = { color: C.darkBg };
  
  // Background gradient overlay
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625, fill: { color: C.purple, transparency: 88 }
  });
  
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.12, fill: { color: C.purple }
  });
  
  // Left gold accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 0.08, h: 2.0, fill: { color: C.gold }
  });
  
  // Decorative circle
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 2.0, w: 0.5, h: 0.5, fill: { color: C.purple }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.85, y: 2.15, w: 0.2, h: 0.2, fill: { color: C.cyan }
  });
  
  // Main title
  slide.addText("GOLD AND GLORY", {
    x: 1.4, y: 1.7, w: 8, h: 0.9,
    fontSize: 48, fontFace: "Arial Black", color: C.gold, charSpacing: 4
  });
  
  // Subtitle
  slide.addText("7月大版本完整发行策略", {
    x: 1.4, y: 2.6, w: 8, h: 0.6,
    fontSize: 26, fontFace: "Arial", color: C.text, bold: true
  });
  
  // Tagline
  slide.addText("Arena  ·  PVE  ·  3C升级  ·  UA买量  ·  本地化", {
    x: 1.4, y: 3.3, w: 8, h: 0.5,
    fontSize: 15, fontFace: "Arial", color: C.purpleLight
  });
  
  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.4, y: 4.0, w: 2.5, h: 0.03, fill: { color: C.purple }
  });
  
  // Date
  slide.addText("2026年4月  |  Confidential — Internal Use Only", {
    x: 1.4, y: 4.2, w: 8, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: C.textMuted
  });
  
  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.505, w: 10, h: 0.12, fill: { color: C.cyan }
  });
}

// ─── Slide 2: Product Positioning ───────────────────────────────────────────────
async function createSlide2(pres) {
  let slide = pres.addSlide();
  slide.background = { color: C.darkBg };
  
  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple }
  });
  slide.addText("产品核心定位", {
    x: 0.5, y: 0.2, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0
  });
  
  // USP Quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 9, h: 1.0, fill: { color: C.cardBg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 0.06, h: 1.0, fill: { color: C.cyan }
  });
  slide.addText("\u201C进去抢，活着出来就是你的\u201D", {
    x: 0.8, y: 1.1, w: 8.5, h: 0.55,
    fontSize: 22, fontFace: "Georgia", color: C.gold, italic: true, align: "center"
  });
  slide.addText("— G&G 核心 USP，Mobile Extraction Shooter 独家机制", {
    x: 0.8, y: 1.6, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: "Arial", color: C.textMuted, align: "center"
  });
  
  // 4 Cards - 2x2 grid
  const cards = [
    { title: "产品定位", content: "中世纪地牢 Extraction RPG\n5–15分钟快节奏单局\n赛季制 + 英雄收集", x: 0.5, y: 2.2, color: C.purple, icon: "⚔" },
    { title: "核心特色", content: "Mobile 端独家 Extraction Shooter\n风险回报机制\n死后全失的刺激感", x: 5.05, y: 2.2, color: C.cyan, icon: "🛡" },
    { title: "当前状态", content: "Google Play 评分：3.7 ⚠\n已测试：墨西哥、哥伦比亚\n服务器：4–6月停服维护", x: 0.5, y: 3.85, color: C.warning, icon: "⚠" },
    { title: "7月目标", content: "7月大版本发布在即\n⚠ 3.7分是市场门槛\n目标：7月前改善至 3.8–4.0", x: 5.05, y: 3.85, color: C.success, icon: "🎯" },
  ];
  
  for (const c of cards) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: c.y, w: 4.45, h: 1.45, fill: { color: C.cardBg }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: c.y, w: 0.06, h: 1.45, fill: { color: c.color }
    });
    slide.addText(c.icon, {
      x: c.x + 0.2, y: c.y + 0.15, w: 0.5, h: 0.5,
      fontSize: 22, align: "center", valign: "middle"
    });
    slide.addText(c.title, {
      x: c.x + 0.75, y: c.y + 0.18, w: 3.5, h: 0.4,
      fontSize: 15, fontFace: "Arial", color: c.color, bold: true, margin: 0
    });
    slide.addText(c.content, {
      x: c.x + 0.2, y: c.y + 0.65, w: 4.1, h: 0.75,
      fontSize: 12, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.25, margin: 0
    });
  }
}

// ─── Slide 3: 7月大版本核心内容 ──────────────────────────────────────────────
async function createSlide3(pres) {
  let slide = pres.addSlide();
  slide.background = { color: C.darkBg };
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple }
  });
  slide.addText("7月大版本核心内容", {
    x: 0.5, y: 0.2, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0
  });
  
  slide.addText("三大营销素材支柱（按重要度排序）", {
    x: 0.5, y: 0.95, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Arial", color: C.purpleLight
  });
  
  const pillars = [
    { rank: "#1", title: "竞技场 Arena", tags: "PVP核心玩法，天梯/排名，可做大量内容素材",
      points: ["天梯冲分 / 以弱胜强", "公平竞技 / 新手逆袭", "地牢风险回报 / 装备驱动"],
      badge: "最高营销价值", color: C.purple, icon: "⚔" },
    { rank: "#2", title: "PVE 模式", tags: "降低门槛，留存友好，适合「新手友好」叙事",
      points: ["新手友好 / 通关成就感", "剧情体验 / 组队副本"],
      badge: "留存利器", color: C.cyan, icon: "🗺" },
    { rank: "#3", title: "3C 核心升级", tags: "Control + Camera + Character 整体升级",
      points: ["易用性（视野） · 操作性（精准度）", "打击感（反馈） · 策略性（观察）"],
      badge: "核心玩法质变", color: C.pink, icon: "🎮" },
  ];
  
  for (let i = 0; i < pillars.length; i++) {
    const p = pillars[i];
    const x = 0.5 + i * 3.1;
    
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.4, w: 2.9, h: 3.8, fill: { color: C.cardBg }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.4, w: 2.9, h: 0.08, fill: { color: p.color }
    });
    slide.addText(p.rank, {
      x: x + 0.15, y: 1.55, w: 0.7, h: 0.5,
      fontSize: 26, fontFace: "Arial Black", color: p.color, bold: true, margin: 0
    });
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.9, y: 2.15, w: 1.1, h: 1.1, fill: { color: p.color, transparency: 70 }
    });
    slide.addText(p.icon, {
      x: x + 0.9, y: 2.15, w: 1.1, h: 1.1,
      fontSize: 38, align: "center", valign: "middle"
    });
    slide.addText(p.title, {
      x: x + 0.1, y: 3.35, w: 2.7, h: 0.4,
      fontSize: 15, fontFace: "Arial", color: C.text, bold: true, align: "center", margin: 0
    });
    slide.addText(p.tags, {
      x: x + 0.1, y: 3.75, w: 2.7, h: 0.5,
      fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0
    });
    slide.addText(p.points.map((pt, idx) => ({
      text: "• " + pt,
      options: { breakLine: idx < p.points.length - 1 }
    })), {
      x: x + 0.15, y: 4.25, w: 2.6, h: 0.65,
      fontSize: 9, fontFace: "Arial", color: C.text, margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.35, y: 4.95, w: 2.2, h: 0.26, fill: { color: p.color, transparency: 80 }
    });
    slide.addText(p.badge, {
      x: x + 0.35, y: 4.95, w: 2.2, h: 0.26,
      fontSize: 9, fontFace: "Arial", color: p.color, bold: true, align: "center", valign: "middle", margin: 0
    });
  }
  
  slide.addText("三个内容支柱构成7月营销的核心素材库，所有广告素材、KOL合作均围绕这三个展开。", {
    x: 0.5, y: 5.3, w: 9, h: 0.25,
    fontSize: 10, fontFace: "Arial", color: C.textMuted, italic: true, align: "center"
  });
}

// ─── Remaining slides simplified ───────────────────────────────────────────────
async function createSimplifiedSlides(pres) {
  // Slide 4: 宣传讯息层级
  let slide = pres.addSlide();
  slide.background = { color: C.darkBg };
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple }
  });
  slide.addText("宣传讯息层级", {
    x: 0.5, y: 0.2, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0
  });
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 9, h: 0.7, fill: { color: C.cardBg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 0.06, h: 0.7, fill: { color: C.gold }
  });
  slide.addText("核心USP：进去抢，活着出来就是你的（Extraction Shooter独家机制）", {
    x: 0.75, y: 1.05, w: 8.5, h: 0.7,
    fontSize: 15, fontFace: "Arial", color: C.gold, valign: "middle", margin: 0
  });
  
  const pillars4 = [
    { num: "1", title: "Pillar 1 — 竞技刺激", angle: "Arena天梯 / 以弱胜强 / 公平竞技", users: "竞技型玩家 / BR玩家", content: "地牢风险回报 / 装备驱动 / 死后全失", color: C.purple },
    { num: "2", title: "Pillar 2 — 社交组队", angle: "和朋友下地牢 / 组队开黑", users: "社交型玩家 / 东南亚/拉美", content: "10-15分钟快节奏 / 碎片时间友好", color: C.cyan },
    { num: "3", title: "Pillar 3 — 新手友好", angle: "PVE降门槛 / 3C升级上手更容易", users: "泛用户 / 女性用户", content: "3C升级后视野更广 / 操作更精准", color: C.success },
    { num: "4", title: "Pillar 4 — 视觉冲击", angle: "3C对比 / 打击感展示", users: "所有用户 / 视觉型玩家", content: "Camera变更前后对比 / 战斗特效", color: C.pink },
  ];
  
  for (let i = 0; i < pillars4.length; i++) {
    const p = pillars4[i];
    const y = 1.9 + i * 0.88;
    
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.8, fill: { color: C.cardBg }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 0.8, fill: { color: p.color }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: 0.72, y: y + 0.15, w: 0.5, h: 0.5, fill: { color: p.color }
    });
    slide.addText(p.num, {
      x: 0.72, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 15, fontFace: "Arial", color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0
    });
    slide.addText(p.title, {
      x: 1.4, y: y + 0.1, w: 2.3, h: 0.35,
      fontSize: 13, fontFace: "Arial", color: p.color, bold: true, margin: 0
    });
    slide.addText("切入角度：" + p.angle, {
      x: 1.4, y: y + 0.42, w: 2.7, h: 0.32,
      fontSize: 9, fontFace: "Arial", color: C.text, margin: 0
    });
    slide.addText("目标用户：" + p.users, {
      x: 4.2, y: y + 0.1, w: 2.4, h: 0.32,
      fontSize: 10, fontFace: "Arial", color: C.purpleLight, margin: 0
    });
    slide.addText("内容：" + p.content, {
      x: 4.2, y: y + 0.42, w: 5.1, h: 0.32,
      fontSize: 9, fontFace: "Arial", color: C.textMuted, margin: 0
    });
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function buildPresentation() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gold and Glory - 7月大版本完整发行策略";
  pres.author = "Ops Team";
  
  await createSlide1(pres);
  await createSlide2(pres);
  await createSlide3(pres);
  await createSimplifiedSlides(pres);
  
  // Save
  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GoldAndGlory_v6_gaming.pptx" });
  console.log("✅ Done! GoldAndGlory_v6_gaming.pptx");
}

buildPresentation().catch(console.error);
