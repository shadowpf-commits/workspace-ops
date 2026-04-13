const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Gold and Glory — 市场发行方案";
pres.author = "Ops Brain";

// Color palette
const DARK_BG = "0d1117";
const SURFACE = "161b22";
const BORDER = "30363d";
const PRIMARY = "58a6ff";
const ACCENT = "bc8cff";
const SUCCESS = "3fb950";
const WARNING = "d29922";
const MUTED = "8b949e";
const TEXT = "e6edf3";

function makeShadow() {
  return { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.2 };
}

// ── Slide 1: Cover ──
let slide1 = pres.addSlide();
slide1.background = { color: DARK_BG };

// Left accent bar
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.12, h: 5.625,
  fill: { color: PRIMARY }
});

// Top accent line
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.8, w: 2.5, h: 0.05,
  fill: { color: ACCENT }
});

slide1.addText("GOLD AND GLORY", {
  x: 0.5, y: 1.9, w: 9, h: 0.8,
  fontSize: 42, bold: true, color: TEXT, fontFace: "Outfit"
});

slide1.addText("市场发行方案", {
  x: 0.5, y: 2.65, w: 9, h: 0.6,
  fontSize: 24, color: PRIMARY, fontFace: "Outfit"
});

slide1.addText("Phase 1 — Indonesia · Vietnam · Mexico", {
  x: 0.5, y: 3.4, w: 9, h: 0.4,
  fontSize: 14, color: MUTED, fontFace: "DM Sans"
});

slide1.addText("2026-04", {
  x: 0.5, y: 5.0, w: 3, h: 0.3,
  fontSize: 12, color: MUTED, fontFace: "DM Sans"
});

// ── Slide 2: Game Overview ──
let slide2 = pres.addSlide();
slide2.background = { color: DARK_BG };
slide2.addText("游戏品类分析", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});

// Core loop box
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 1.0,
  fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
});
slide2.addText("核心循环", {
  x: 0.7, y: 1.28, w: 2, h: 0.35,
  fontSize: 11, bold: true, color: MUTED, fontFace: "Outfit"
});
slide2.addText("进入地牢  →  搜刮  →  战斗  →  提取（或死亡）", {
  x: 0.7, y: 1.6, w: 8.5, h: 0.5,
  fontSize: 16, color: TEXT, fontFace: "DM Sans"
});

// Category tag
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 2.35, w: 2.2, h: 0.35,
  fill: { color: "1a3a5c" }
});
slide2.addText("Extraction Shooter", {
  x: 0.5, y: 2.35, w: 2.2, h: 0.35,
  fontSize: 10, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center", valign: "middle"
});

slide2.addText("竞技近战搜打撤 · Hero Extraction · 5v5 团战", {
  x: 2.8, y: 2.35, w: 6, h: 0.35,
  fontSize: 12, color: MUTED, fontFace: "DM Sans", valign: "middle"
});

// 4 feature cards
const features = [
  { icon: "⚔", title: "5分钟速战", desc: "地牢→战斗→提取，高频爽感" },
  { icon: "🏰", title: "中世纪题材", desc: "铠甲、剑盾、城堡，差异化明显" },
  { icon: "🛒", title: "英雄直购", desc: "非抽卡，付费透明，降低门槛" },
  { icon: "🏆", title: "赛季制", desc: "Battle Pass，保持长线回访" }
];

features.forEach((f, i) => {
  const x = 0.5 + i * 2.35;
  slide2.addShape(pres.shapes.RECTANGLE, {
    x, y: 2.9, w: 2.15, h: 1.8,
    fill: { color: SURFACE }, line: { color: BORDER, width: 1 },
    shadow: makeShadow()
  });
  slide2.addText(f.icon, {
    x, y: 3.05, w: 2.15, h: 0.5,
    fontSize: 24, align: "center"
  });
  slide2.addText(f.title, {
    x: x + 0.1, y: 3.55, w: 1.95, h: 0.35,
    fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit", align: "center"
  });
  slide2.addText(f.desc, {
    x: x + 0.1, y: 3.88, w: 1.95, h: 0.7,
    fontSize: 10, color: MUTED, fontFace: "DM Sans", align: "center"
  });
});

// Monetization bar
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.85, w: 9, h: 0.55,
  fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
});
slide2.addText("商业化：Hero 直购（主） + Battle Pass（续） + 皮肤外观（辅）", {
  x: 0.7, y: 4.85, w: 8.5, h: 0.55,
  fontSize: 12, color: TEXT, fontFace: "DM Sans", valign: "middle"
});

// ── Slide 3: TA Size ──
let slide3 = pres.addSlide();
slide3.background = { color: DARK_BG };
slide3.addText("目标用户规模", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});
slide3.addText("Phase 1 — 三大核心市场", {
  x: 0.5, y: 1.1, w: 5, h: 0.35,
  fontSize: 13, color: MUTED, fontFace: "DM Sans"
});

// Phase 1 market cards
const phase1Markets = [
  { flag: "🇮🇩", country: "Indonesia", core: "8-12M", reach: "3-6M", ref: "Free Fire · PUBG" },
  { flag: "🇻🇳", country: "Vietnam", core: "5-8M", reach: "2-4M", ref: "Free Fire · PUBG" },
  { flag: "🇲🇽", country: "Mexico", core: "6-10M", reach: "4-8M", ref: "Free Fire · PUBG" }
];

phase1Markets.forEach((m, i) => {
  const x = 0.5 + i * 3.1;
  slide3.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.55, w: 2.9, h: 2.6,
    fill: { color: SURFACE }, line: { color: BORDER, width: 1 },
    shadow: makeShadow()
  });
  slide3.addText(m.flag + " " + m.country, {
    x, y: 1.65, w: 2.9, h: 0.4,
    fontSize: 14, bold: true, color: TEXT, fontFace: "Outfit", align: "center"
  });
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.3, y: 2.1, w: 2.3, h: 0.01,
    fill: { color: BORDER }
  });
  slide3.addText("Core TA", {
    x, y: 2.2, w: 2.9, h: 0.3,
    fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center"
  });
  slide3.addText(m.core, {
    x, y: 2.45, w: 2.9, h: 0.5,
    fontSize: 22, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center"
  });
  slide3.addText("Reachable TA", {
    x, y: 2.95, w: 2.9, h: 0.3,
    fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center"
  });
  slide3.addText(m.reach, {
    x, y: 3.15, w: 2.9, h: 0.5,
    fontSize: 18, bold: true, color: SUCCESS, fontFace: "Outfit", align: "center"
  });
  slide3.addText(m.ref, {
    x, y: 3.65, w: 2.9, h: 0.35,
    fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center"
  });
});

// Summary bar
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.35, w: 9, h: 0.9,
  fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 }
});
slide3.addText("Phase 1 合计 Reachable TA", {
  x: 0.7, y: 4.45, w: 3, h: 0.3,
  fontSize: 10, color: MUTED, fontFace: "DM Sans"
});
slide3.addText("9-18M", {
  x: 0.7, y: 4.7, w: 3, h: 0.5,
  fontSize: 28, bold: true, color: SUCCESS, fontFace: "Outfit"
});
slide3.addText("重点：Extraction Shooter / 竞技射击用户是主要投放目标\n优先使用 Free Fire / PUBG Mobile 玩家受众包", {
  x: 3.5, y: 4.45, w: 5.8, h: 0.8,
  fontSize: 10, color: TEXT, fontFace: "DM Sans"
});

// ── Slide 4: Competitors ──
let slide4 = pres.addSlide();
slide4.background = { color: DARK_BG };
slide4.addText("竞品分析", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});

// Competitor cards
const competitors = [
  { name: "Free Fire", ta: "MAU 100M+", region: "东南亚 · 拉美", gap: "射击，非 Extraction" },
  { name: "PUBG Mobile", ta: "MAU 50M+", region: "全球", gap: "20分钟局，移动端偏慢" },
  { name: "Warzone Mobile", ta: "发展中", region: "全球", gap: "CoD品牌强，EA合规" },
  { name: "Lumeshift", ta: "刚软启动", region: "BR · 印尼", gap: "MOBA-Shooter，非纯 Extraction" }
];

competitors.forEach((c, i) => {
  const x = 0.5 + i * 2.35;
  slide4.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.2, w: 2.15, h: 2.0,
    fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
  });
  slide4.addText(c.name, {
    x, y: 1.3, w: 2.15, h: 0.4,
    fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit", align: "center"
  });
  slide4.addText(c.ta, {
    x, y: 1.7, w: 2.15, h: 0.4,
    fontSize: 16, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center"
  });
  slide4.addText(c.region, {
    x, y: 2.1, w: 2.15, h: 0.3,
    fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center"
  });
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.2, y: 2.45, w: 1.75, h: 0.01,
    fill: { color: BORDER }
  });
  slide4.addText("G&G 机会", {
    x, y: 2.5, w: 2.15, h: 0.25,
    fontSize: 8, color: SUCCESS, fontFace: "DM Sans", align: "center"
  });
  slide4.addText(c.gap, {
    x: x + 0.1, y: 2.75, w: 1.95, h: 0.4,
    fontSize: 9, color: TEXT, fontFace: "DM Sans", align: "center"
  });
});

// Blue ocean callout
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.4, w: 9, h: 0.8,
  fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 }
});
slide4.addText("💡 移动端 Extraction Shooter 赛道，目前无强力选手。Free Fire 虽是射击但非 Extraction 机制。", {
  x: 0.7, y: 3.4, w: 8.5, h: 0.8,
  fontSize: 13, color: TEXT, fontFace: "DM Sans", valign: "middle"
});

// SWOT
slide4.addText("SWOT", {
  x: 0.5, y: 4.35, w: 1, h: 0.4,
  fontSize: 11, bold: true, color: PRIMARY, fontFace: "Outfit"
});

const swots = [
  { label: "S", color: SUCCESS, text: "5分钟节奏 · 中世纪题材差异化 · 英雄直购透明" },
  { label: "W", color: "f85149", text: "3.7评分需提升 · 品类认知需建立" },
  { label: "O", color: PRIMARY, text: "Extraction 空白 · FF 玩家可转化" },
  { label: "T", color: WARNING, text: "Moonton 入局 · FF 推类似模式" }
];

swots.forEach((s, i) => {
  const x = 1.6 + i * 2.0;
  slide4.addShape(pres.shapes.RECTANGLE, {
    x, y: 4.35, w: 0.35, h: 0.35,
    fill: { color: s.color }
  });
  slide4.addText(s.label, {
    x, y: 4.35, w: 0.35, h: 0.35,
    fontSize: 11, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle"
  });
  slide4.addText(s.text, {
    x: x + 0.45, y: 4.35, w: 1.5, h: 0.5,
    fontSize: 8, color: TEXT, fontFace: "DM Sans"
  });
});

// ── Slide 5: Trend Windows ──
let slide5 = pres.addSlide();
slide5.background = { color: DARK_BG };
slide5.addText("趋势窗口", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});

const trends = [
  {
    flag: "🇮🇩", country: "Indonesia", items: [
      { time: "Feb-Apr", event: "Ramadan + Lebaran", star: true, note: "🔥 最优先发行窗口" },
      { time: "Jun-Aug", event: "暑假", star: false, note: "学生玩家增加" },
      { time: "全年", event: "TikTok 活跃", star: false, note: "短视频种草持续" }
    ]
  },
  {
    flag: "🇻🇳", country: "Vietnam", items: [
      { time: "Jun-Aug", event: "暑假", star: true, note: "🎯 次优先发行窗口" },
      { time: "Jan-Feb", event: "Tet 春节", star: false, note: "节日营销" }
    ]
  },
  {
    flag: "🇲🇽", country: "Mexico", items: [
      { time: "Jun-Jul", event: "FIFA World Cup", star: true, note: "🔥 MONSTER 事件" },
      { time: "Sep 16", event: "独立日 El Grito", star: false, note: "爱国主题营销" }
    ]
  }
];

trends.forEach((t, i) => {
  const x = 0.5 + i * 3.1;
  slide5.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.2, w: 2.9, h: 4.1,
    fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
  });
  slide5.addText(t.flag + " " + t.country, {
    x, y: 1.3, w: 2.9, h: 0.45,
    fontSize: 14, bold: true, color: TEXT, fontFace: "Outfit", align: "center"
  });
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.3, y: 1.8, w: 2.3, h: 0.01,
    fill: { color: BORDER }
  });

  t.items.forEach((item, j) => {
    const y = 1.95 + j * 1.1;
    if (item.star) {
      slide5.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.1, y, w: 2.7, h: 0.95,
        fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 }
      });
    }
    slide5.addText(item.time, {
      x: x + 0.15, y: y + 0.05, w: 2.6, h: 0.3,
      fontSize: 9, bold: true, color: PRIMARY, fontFace: "DM Sans"
    });
    slide5.addText(item.event, {
      x: x + 0.15, y: y + 0.3, w: 2.6, h: 0.3,
      fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit"
    });
    slide5.addText(item.note, {
      x: x + 0.15, y: y + 0.58, w: 2.6, h: 0.3,
      fontSize: 9, color: item.star ? SUCCESS : MUTED, fontFace: "DM Sans"
    });
  });
});

// ── Slide 6: Launch Timeline ──
let slide6 = pres.addSlide();
slide6.background = { color: DARK_BG };
slide6.addText("上线时间线", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});
slide6.addText("Phase 1 — Indonesia + Vietnam + Mexico 同步", {
  x: 0.5, y: 1.1, w: 9, h: 0.35,
  fontSize: 13, color: MUTED, fontFace: "DM Sans"
});

// Timeline
const timeline = [
  { phase: "T-4W", title: "封闭 Alpha", color: PRIMARY,
    desc: "200-500 人定向招募\n目标：D2 > 35%，服务器稳定\nKOL 种子内容开始产出" },
  { phase: "T-2W", title: "限量测试扩大", color: ACCENT,
    desc: "1000-3000 人\n开放 TikTok/YouTube KOL 内容\nDiscord 社区正式开放" },
  { phase: "T-0", title: "公测上线", color: SUCCESS,
    desc: "ID + VN + MX 同步\nGoogle UAC + TikTok 付费启动\nVtuber 直播 campaign" },
  { phase: "T+1M", title: "数据复盘", color: WARNING,
    desc: "R7 > 10% 达标\n开始 Phase 2 市场评估\nBattle Pass 第一赛季收官" }
];

// Timeline line
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 1.7, w: 0.04, h: 3.5,
  fill: { color: BORDER }
});

timeline.forEach((t, i) => {
  const y = 1.65 + i * 0.9;
  // Dot
  slide6.addShape(pres.shapes.OVAL, {
    x: 1.37, y: y + 0.1, w: 0.3, h: 0.3,
    fill: { color: t.color }
  });
  // Phase tag
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y + 0.05, w: 0.8, h: 0.4,
    fill: { color: t.color }
  });
  slide6.addText(t.phase, {
    x: 0.5, y: y + 0.05, w: 0.8, h: 0.4,
    fontSize: 10, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle"
  });
  // Content card
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: 1.85, y, w: 7.6, h: 0.8,
    fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
  });
  slide6.addText(t.title, {
    x: 2.0, y: y + 0.05, w: 2, h: 0.35,
    fontSize: 12, bold: true, color: t.color, fontFace: "Outfit"
  });
  slide6.addText(t.desc, {
    x: 4.0, y: y + 0.05, w: 5.3, h: 0.7,
    fontSize: 10, color: TEXT, fontFace: "DM Sans"
  });
});

// ── Slide 7: Channel Strategy ──
let slide7 = pres.addSlide();
slide7.background = { color: DARK_BG };
slide7.addText("渠道与预算分配", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});
slide7.addText("Phase 1 总预算参考：$50-100K/月（视测试数据调整）", {
  x: 0.5, y: 1.1, w: 9, h: 0.35,
  fontSize: 12, color: MUTED, fontFace: "DM Sans"
});

// Channel allocation bars
const channels = [
  { name: "Google UAC", pct: 50, color: PRIMARY },
  { name: "TikTok 付费", pct: 20, color: "f0883e" },
  { name: "YouTube 付费", pct: 15, color: "f85149" },
  { name: "KOL/KOC 合作", pct: 10, color: ACCENT },
  { name: "Apple Search Ads", pct: 5, color: SUCCESS }
];

channels.forEach((c, i) => {
  const y = 1.65 + i * 0.7;
  // Label
  slide7.addText(c.name, {
    x: 0.5, y: y + 0.05, w: 2.2, h: 0.5,
    fontSize: 12, color: TEXT, fontFace: "DM Sans", valign: "middle"
  });
  // Bar background
  slide7.addShape(pres.shapes.RECTANGLE, {
    x: 2.8, y: y + 0.1, w: 6.7, h: 0.4,
    fill: { color: SURFACE }
  });
  // Bar fill
  slide7.addShape(pres.shapes.RECTANGLE, {
    x: 2.8, y: y + 0.1, w: 6.7 * (c.pct / 100), h: 0.4,
    fill: { color: c.color }
  });
  // Percentage
  slide7.addText(c.pct + "%", {
    x: 9.6, y: y + 0.05, w: 0.8, h: 0.5,
    fontSize: 12, bold: true, color: c.color, fontFace: "Outfit", valign: "middle"
  });
});

// CPM reference
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 5.15, w: 9, h: 0.35,
  fill: { color: SURFACE }
});
slide7.addText("CPM 参考：YouTube $0.29 · TikTok $0.56 · UGC $2.31 · KOL $10-20", {
  x: 0.5, y: 5.15, w: 9, h: 0.35,
  fontSize: 10, color: MUTED, fontFace: "DM Sans", align: "center", valign: "middle"
});

// ── Slide 8: KOL Strategy ──
let slide8 = pres.addSlide();
slide8.background = { color: DARK_BG };
slide8.addText("KOL 策略", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});

// Key insight
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.15, w: 9, h: 0.7,
  fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 }
});
slide8.addText("核心洞察：泛游戏主播（Vtuber / General Gaming）> 垂类 Extraction 主播    Vtuber 直播：DAU 平均提升 26%", {
  x: 0.7, y: 1.15, w: 8.5, h: 0.7,
  fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle"
});

// Priority tiers
const kolTiers = [
  { tier: "T1", icon: "🎮", title: "泛游戏主播", desc: "Vtuber / General Gaming\n主力渠道", color: SUCCESS },
  { tier: "T2", icon: "🎯", title: "FPS 竞技 YouTuber", desc: "辅助渠道\n精准触达", color: PRIMARY },
  { tier: "T3", icon: "🐷", title: "本地 Meme 创作者", desc: "病毒传播\n低成本高回报", color: ACCENT }
];

kolTiers.forEach((k, i) => {
  const x = 0.5 + i * 3.1;
  slide8.addShape(pres.shapes.RECTANGLE, {
    x, y: 2.0, w: 2.9, h: 1.7,
    fill: { color: SURFACE }, line: { color: k.color, width: 1 }
  });
  slide8.addText(k.tier, {
    x: x + 0.1, y: 2.1, w: 0.5, h: 0.3,
    fontSize: 10, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle",
    fill: { color: k.color }
  });
  slide8.addText(k.icon, {
    x, y: 2.1, w: 2.9, h: 0.5,
    fontSize: 22, align: "center"
  });
  slide8.addText(k.title, {
    x, y: 2.6, w: 2.9, h: 0.4,
    fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit", align: "center"
  });
  slide8.addText(k.desc, {
    x: x + 0.1, y: 3.0, w: 2.7, h: 0.6,
    fontSize: 10, color: MUTED, fontFace: "DM Sans", align: "center"
  });
});

// KOC program
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.85, w: 9, h: 1.6,
  fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
});
slide8.addText("KOC Star Cultivation Program", {
  x: 0.7, y: 3.95, w: 4, h: 0.35,
  fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit"
});
slide8.addText("主题：Easy Play, Easy Win", {
  x: 5, y: 3.95, w: 4, h: 0.35,
  fontSize: 11, color: SUCCESS, fontFace: "DM Sans", align: "right"
});
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.7, y: 4.35, w: 8.5, h: 0.01,
  fill: { color: BORDER }
});

const kocItems = [
  "奖励：5K Gold/视频，最多 4 视频/周期",
  "Top 10 获得官方推广 + $50 ad boost",
  "每周检查 performance metrics，下滑时给 Special Mission",
  "核心：给方向 + 给资源 + 持续沟通"
];
slide8.addText(kocItems.map((item, i) => ({ text: "• " + item, options: { bullet: false, breakLine: i < kocItems.length - 1 } })), {
  x: 0.7, y: 4.4, w: 8.5, h: 1.0,
  fontSize: 10, color: TEXT, fontFace: "DM Sans"
});

// ── Slide 9: OM Estimates ──
let slide9 = pres.addSlide();
slide9.background = { color: DARK_BG };
slide9.addText("OM 数据预估", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit"
});
slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.95, w: 1.5, h: 0.04,
  fill: { color: ACCENT }
});

// Benchmarks table
const headers = ["市场", "目标 CPR", "目标 R2", "目标 R7", "自然占比"];
const rows = [
  ["🇮🇩 印尼", "$0.40-0.60", ">38%", ">10%", ">35%"],
  ["🇻🇳 越南", "$0.30-0.40", ">35%", ">10%", ">35%"],
  ["🇲🇽 墨西哥", "$0.25-0.35", ">32%", ">8%", ">30%"]
];

const tableData = [
  headers.map(h => ({ text: h, options: { bold: true, color: "ffffff", fill: { color: "1a3a5c" }, align: "center" } })),
  ...rows.map((r, ri) => r.map((cell, ci) => ({
    text: cell,
    options: {
      color: ci === 0 ? TEXT : (ci === 1 ? WARNING : (ci === 3 ? "f85149" : TEXT)),
      fill: { color: ri % 2 === 0 ? SURFACE : DARK_BG },
      align: ci === 0 ? "left" : "center"
    }
  })))
];

slide9.addTable(tableData, {
  x: 0.5, y: 1.2, w: 9, h: 1.5,
  fontSize: 11, fontFace: "DM Sans",
  border: { pt: 0.5, color: BORDER },
  colW: [2.2, 1.8, 1.5, 1.5, 2.0]
});

// Download & revenue estimates
const estimates = [
  { title: "6个月累计下载", items: [["乐观", "3-5M"], ["中性", "1.5-2.5M"], ["保守", "0.5-1M"]] },
  { title: "月流水估算（中性）", items: [["首月", "$80-150K"], ["3个月", "$200-400K"], ["6个月", "$300-600K"]] }
];

estimates.forEach((est, i) => {
  const x = 0.5 + i * 4.6;
  slide9.addShape(pres.shapes.RECTANGLE, {
    x, y: 2.9, w: 4.4, h: 2.4,
    fill: { color: SURFACE }, line: { color: BORDER, width: 1 }
  });
  slide9.addText(est.title, {
    x: x + 0.15, y: 3.0, w: 4.1, h: 0.4,
    fontSize: 12, bold: true, color: PRIMARY, fontFace: "Outfit"
  });
  est.items.forEach((item, j) => {
    const y = 3.5 + j * 0.55;
    slide9.addText(item[0], {
      x: x + 0.15, y, w: 1.5, h: 0.45,
      fontSize: 10, color: MUTED, fontFace: "DM Sans", valign: "middle"
    });
    slide9.addText(item[1], {
      x: x + 1.7, y, w: 2.5, h: 0.45,
      fontSize: 16, bold: true, color: i === 0 ? PRIMARY : SUCCESS, fontFace: "Outfit", valign: "middle"
    });
  });
});

// ── Save ──
pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GNG_Game_Publishing_Plan.pptx" })
  .then(() => console.log("PPTX saved!"))
  .catch(err => console.error("Error:", err));
