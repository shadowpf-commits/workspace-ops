const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Gold and Glory — 7月大版本发行方案";
pres.author = "Ops Brain";

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
  return { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.15 };
}

// ─────────────────────────────────────
// SLIDE 1: Cover
// ─────────────────────────────────────
let s1 = pres.addSlide();
s1.background = { color: DARK_BG };
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: PRIMARY } });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 2.5, h: 0.05, fill: { color: ACCENT } });
s1.addText("GOLD AND GLORY", { x: 0.5, y: 1.7, w: 9, h: 0.9, fontSize: 44, bold: true, color: TEXT, fontFace: "Outfit" });
s1.addText("7月大版本完整发行策略", { x: 0.5, y: 2.55, w: 9, h: 0.6, fontSize: 26, color: PRIMARY, fontFace: "Outfit" });
s1.addText("Arena · PVE · 3C升级 · UA买量 · 本地化  |  2026年4月", { x: 0.5, y: 3.3, w: 9, h: 0.4, fontSize: 13, color: MUTED, fontFace: "DM Sans" });
s1.addText("Confidential — Internal Use Only", { x: 0.5, y: 5.0, w: 4, h: 0.3, fontSize: 10, color: MUTED, fontFace: "DM Sans" });

// ─────────────────────────────────────
// SLIDE 2: 产品核心定位
// ─────────────────────────────────────
let s2 = pres.addSlide();
s2.background = { color: DARK_BG };
s2.addText("产品核心定位", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// USP box
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.85, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s2.addText("进去抢，活着出来就是你的", { x: 0.5, y: 1.1, w: 9, h: 0.85, fontSize: 18, bold: true, color: TEXT, fontFace: "Outfit", align: "center", valign: "middle" });

// Product info cards
const prodInfo = [
  ["产品定位", "中世纪地牢 Extraction RPG"],
  ["单局时长", "5–15分钟快节奏单局"],
  ["商业化", "Hero直购 + Battle Pass + 皮肤外观"],
  ["当前状态", "Google Play 3.7 ⚠  ·  测试：MX/CO  ·  4-6月停服维护"]
];
prodInfo.forEach((p, i) => {
  const y = 2.1 + i * 0.52;
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 2.2, h: 0.45, fill: { color: "1a3a5c" } });
  s2.addText(p[0], { x: 0.5, y, w: 2.2, h: 0.45, fontSize: 10, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center", valign: "middle" });
  s2.addShape(pres.shapes.RECTANGLE, { x: 2.7, y, w: 6.8, h: 0.45, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s2.addText(p[1], { x: 2.85, y, w: 6.5, h: 0.45, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

// Rating alert
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.25, w: 9, h: 0.55, fill: { color: "2a1a0a" }, line: { color: WARNING, width: 1 } });
s2.addText("⚠ 7月目标：3.7 → 4.0+（3.7分是市场门槛，7月前需改善）", { x: 0.7, y: 4.25, w: 8.5, h: 0.55, fontSize: 12, color: WARNING, fontFace: "DM Sans", valign: "middle" });

// 7月版本
s2.addText("7月大版本核心内容", { x: 0.5, y: 4.95, w: 9, h: 0.35, fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit" });
const pillars = [
  { icon: "⚔", title: "Arena 竞技场", desc: "PVP核心，天梯排名", color: SUCCESS },
  { icon: "🏰", title: "PVE 模式", desc: "降低门槛，留存友好", color: PRIMARY },
  { icon: "🎯", title: "3C 核心升级", desc: "Camera/操作/打击感", color: ACCENT }
];
pillars.forEach((p, i) => {
  const x = 0.5 + i * 3.1;
  s2.addShape(pres.shapes.RECTANGLE, { x, y: 5.35, w: 2.9, h: 0.22, fill: { color: p.color } });
  s2.addText(p.icon + " " + p.title, { x, y: 5.35, w: 2.9, h: 0.22, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
});

// ─────────────────────────────────────
// SLIDE 3: 7月大版本核心内容（三大营销素材支柱）
// ─────────────────────────────────────
let s3 = pres.addSlide();
s3.background = { color: DARK_BG };
s3.addText("7月大版本核心内容（三大营销素材支柱）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s3.addText("三个内容支柱构成7月营销的核心素材库，所有广告素材、KOL合作均围绕这三个展开", { x: 0.5, y: 1.08, w: 9, h: 0.35, fontSize: 11, color: MUTED, fontFace: "DM Sans" });

const big3 = [
  {
    icon: "⚔", title: "#1 竞技场 Arena", stars: 5, tag: "最高营销价值", color: SUCCESS,
    points: ["PVP核心玩法，天梯/排名", "可做大量素材", "天梯冲分 / 以弱胜强 / 公平竞技", "地牢风险回报 / 装备驱动"],
    formats: "15s竖屏×3版 | TikTok/YT Reels"
  },
  {
    icon: "🏰", title: "#2 PVE 模式", stars: 4, tag: "留存利器", color: PRIMARY,
    points: ["降低门槛，留存友好", "适合「新手友好」叙事", "新手友好 / 通关成就感", "剧情体验 / 组队副本"],
    formats: "15-30s版 | YT/TikTok"
  },
  {
    icon: "🎯", title: "#3 3C 核心升级", stars: 4, tag: "核心玩法质变", color: ACCENT,
    points: ["Control + Camera + Character整体升级", "易用性（视野）·操作性（精准度）", "打击感（反馈）·策略性（观察）", "Before/After对比视频素材"],
    formats: "并排对比视频 | YT/FB/买量"
  }
];

big3.forEach((b, i) => {
  const x = 0.5 + i * 3.1;
  s3.addShape(pres.shapes.RECTANGLE, { x, y: 1.5, w: 2.9, h: 3.85, fill: { color: SURFACE }, line: { color: b.color, width: 2 }, shadow: makeShadow() });
  s3.addText(b.icon + " " + b.title, { x, y: 1.58, w: 2.9, h: 0.45, fontSize: 12, bold: true, color: b.color, fontFace: "Outfit", align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: 2.05, w: 2.5, h: 0.28, fill: { color: b.color } });
  s3.addText(b.tag + " ".repeat(b.stars - 1), { x: x + 0.2, y: 2.05, w: 2.5, h: 0.28, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  b.points.forEach((pt, j) => {
    s3.addText("• " + pt, { x: x + 0.15, y: 2.42 + j * 0.38, w: 2.6, h: 0.38, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
  });
  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 4.05, w: 2.6, h: 0.01, fill: { color: BORDER } });
  s3.addText("素材格式: " + b.formats, { x: x + 0.15, y: 4.12, w: 2.6, h: 0.35, fontSize: 8.5, color: MUTED, fontFace: "DM Sans" });
  s3.addText("★".repeat(b.stars), { x, y: 4.5, w: 2.9, h: 0.25, fontSize: 10, color: b.color, fontFace: "Outfit", align: "center" });
});

s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.45, w: 9, h: 0.1, fill: { color: BORDER } });

// ─────────────────────────────────────
// SLIDE 4: 竞品分析（手游近战搜打撤赛道）
// ─────────────────────────────────────
let s4 = pres.addSlide();
s4.background = { color: DARK_BG };
s4.addText("竞品分析：手游近战搜打撤赛道", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Blue ocean callout
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.08, w: 9, h: 0.7, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s4.addText("手游「中世纪地牢 + 近战 + Extraction + 英雄技能」= 真正品类空白", { x: 0.7, y: 1.08, w: 8.5, h: 0.7, fontSize: 13, bold: true, color: SUCCESS, fontFace: "DM Sans", valign: "middle" });

// Competitor cards
const competitors = [
  { name: "Arena Breakout", company: "腾讯/MoreFun", style: "FPS写实", duration: "15-30min", melee: false, medieval: false, dungeon: false, hero: false, issue: "P2W争议，服务器，15-30分钟局" },
  { name: "Delta Force Mobile", company: "TiMi", style: "FPS写实", duration: "15-30min", melee: false, medieval: false, dungeon: false, hero: false, issue: "Extraction是附加，非核心" },
  { name: "MISFITZ", company: "Antihero", style: "Top-down卡通", duration: "5-10min", melee: true, medieval: false, dungeon: false, hero: false, issue: "最接近但非中世纪/地牢" },
  { name: "Roads of Ruin", company: "—", style: "Top-down ARPG", duration: "15-20min", melee: true, medieval: false, dungeon: true, hero: false, issue: "RPG而非Extraction" },
];
competitors.forEach((c, i) => {
  const x = 0.5 + i * 2.35;
  s4.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 2.15, h: 2.15, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s4.addText(c.name, { x, y: 1.98, w: 2.15, h: 0.35, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s4.addText(c.company, { x, y: 2.33, w: 2.15, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s4.addText(c.style + " · " + c.duration, { x, y: 2.58, w: 2.15, h: 0.25, fontSize: 9, color: PRIMARY, fontFace: "DM Sans", align: "center" });
  // Tags
  const tags = [
    { label: "近战", ok: c.melee }, { label: "中世纪", ok: c.medieval }, { label: "地牢", ok: c.dungeon }, { label: "英雄", ok: c.hero }
  ];
  tags.forEach((t, j) => {
    const tx = x + 0.1 + (j % 2) * 1.0;
    const ty = 2.9 + Math.floor(j / 2) * 0.32;
    s4.addShape(pres.shapes.RECTANGLE, { x: tx, y: ty, w: 0.95, h: 0.26, fill: { color: t.ok ? "1a2a1a" : "1a0a0a" } });
    s4.addText((t.ok ? "✅" : "❌") + t.label, { x: tx, y: ty, w: 0.95, h: 0.26, fontSize: 8, color: t.ok ? SUCCESS : "f85149", fontFace: "DM Sans", align: "center", valign: "middle" });
  });
  s4.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 3.55, w: 1.85, h: 0.01, fill: { color: BORDER } });
  s4.addText(c.issue, { x: x + 0.1, y: 3.6, w: 1.95, h: 0.4, fontSize: 8, color: MUTED, fontFace: "DM Sans" });
});

// PC reference competitors
s4.addText("PC/Console 参考（用户认知来源，但无手游版本）", { x: 0.5, y: 4.15, w: 5, h: 0.3, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
const pcComps = ["Dark and Darker — 中世纪地牢 Extraction", "Hunt: Showdown — 中世纪，近战武器", "Marvel Rivals — 英雄技能 + 地牢"];
pcComps.forEach((p, i) => {
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5 + i * 0.35, w: 9, h: 0.3, fill: { color: SURFACE } });
  s4.addText("→ " + p, { x: 0.65, y: 4.5 + i * 0.35, w: 8.5, h: 0.3, fontSize: 9.5, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

// ─────────────────────────────────────
// SLIDE 5: TA规模（基于MOBA品类）
// ─────────────────────────────────────
let s5 = pres.addSlide();
s5.background = { color: DARK_BG };
s5.addText("目标用户规模", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.6, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s5.addText("⚠️ 实证结论：MOBA品类用户是主要投放目标（基于历史UA测试，D7/R2/CPR均最优）", { x: 0.7, y: 1.05, w: 8.5, h: 0.6, fontSize: 11, bold: true, color: SUCCESS, fontFace: "DM Sans", valign: "middle" });

// Market cards
const taMarkets = [
  { flag: "🇮🇩", country: "Indonesia", type: "老市场", note: "最优先", core: "25-35M", reach: "15-25M", ref: "MLBB High", mobaRef: "MLBB", noteColor: SUCCESS },
  { flag: "🇻🇳", country: "Vietnam", type: "老市场", note: "最优先", core: "4-6M", reach: "4-7M", ref: "AOV（Sensor Tower验证）", mobaRef: "AOV", noteColor: SUCCESS },
  { flag: "🇲🇽", country: "Mexico", type: "老市场", note: "第三", core: "10-15M", reach: "8-15M", ref: "WR Growing", mobaRef: "WR", noteColor: WARNING },
  { flag: "🇧🇷", country: "Brazil", type: "新市场", note: "第二", core: "15-22M", reach: "3-6M", ref: "MLBB Growing", mobaRef: "MLBB", noteColor: WARNING },
  { flag: "🇦🇷", country: "Argentina", type: "新市场", note: "第四", core: "4-6M", reach: "2-5M", ref: "LoL PC", mobaRef: "LoL", noteColor: "f85149" },
  { flag: "🇨🇱", country: "Chile", type: "新市场", note: "第五", core: "1-2M", reach: "0.5-1M", ref: "LoL PC", mobaRef: "LoL", noteColor: "f85149" }
];

taMarkets.forEach((m, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  const x = 0.5 + col * 3.1;
  const y = 1.75 + row * 1.9;
  s5.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.9, h: 1.75, fill: { color: SURFACE }, line: { color: BORDER, width: 1 }, shadow: makeShadow() });
  // Flag + country
  s5.addText(m.flag + " " + m.country, { x, y: y + 0.05, w: 1.9, h: 0.35, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit" });
  s5.addShape(pres.shapes.RECTANGLE, { x: x + 1.95, y: y + 0.08, w: 0.8, h: 0.28, fill: { color: m.noteColor } });
  s5.addText(m.note, { x: x + 1.95, y: y + 0.08, w: 0.8, h: 0.28, fontSize: 8, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s5.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: y + 0.45, w: 2.5, h: 0.01, fill: { color: BORDER } });
  // Core TA
  s5.addText("Core TA（MOBA）", { x, y: y + 0.52, w: 2.9, h: 0.22, fontSize: 8, color: MUTED, fontFace: "DM Sans", align: "center" });
  s5.addText(m.core, { x, y: y + 0.72, w: 2.9, h: 0.35, fontSize: 18, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center" });
  // Reachable
  s5.addText("Reachable TA", { x, y: y + 1.05, w: 2.9, h: 0.22, fontSize: 8, color: MUTED, fontFace: "DM Sans", align: "center" });
  s5.addText(m.reach, { x, y: y + 1.25, w: 2.9, h: 0.3, fontSize: 14, bold: true, color: SUCCESS, fontFace: "Outfit", align: "center" });
  // Reference
  s5.addText(m.ref, { x, y: y + 1.52, w: 2.9, h: 0.2, fontSize: 8, color: MUTED, fontFace: "DM Sans", align: "center" });
});

// Summary
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.45, w: 9, h: 0.12, fill: { color: BORDER } });

// ─────────────────────────────────────
// SLIDE 6: 区域差异化宣传策略
// ─────────────────────────────────────
let s6 = pres.addSlide();
s6.background = { color: DARK_BG };
s6.addText("区域差异化宣传策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const regionData = [
  {
    region: "🌏 亚洲（ID/VN）", type: "老市场", color: SUCCESS,
    msg: "7月大版本上线，所有人一起回归",
    audience: "新玩家：上手容易 | 老玩家：内容更新",
    kol: "按需，OM为主",
    note: "版本回来了，内容更多"
  },
  {
    region: "🌎 拉美（CO/MX/AR/CL）", type: "南北全面开放", color: PRIMARY,
    msg: "北部（CO/MX）+ 南部（AR/CL）同步开放",
    audience: "北部回归玩家 + 南部新玩家",
    kol: "按需，OM为主",
    note: "终于等到你！南北全面开放"
  },
  {
    region: "🇧🇷 巴西", type: "时隔1年首次开服", color: WARNING,
    msg: "服务器回来了，欢迎老玩家回归，新玩家加入",
    audience: "老玩家召回为主，新玩家补充",
    kol: "老玩家召回侧重点",
    note: "服务器回来了，你还在吗？"
  }
];

regionData.forEach((r, i) => {
  const y = 1.1 + i * 1.45;
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.35, fill: { color: SURFACE }, line: { color: r.color, width: 2 } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.35, fill: { color: r.color } });
  s6.addText(r.region, { x: 0.7, y: y + 0.08, w: 4, h: 0.35, fontSize: 13, bold: true, color: r.color, fontFace: "Outfit" });
  s6.addShape(pres.shapes.RECTANGLE, { x: x => 4.7, y: y + 0.1, w: 1.2, h: 0.28, fill: { color: r.color } });
  s6.addText(r.type, { x: 4.7, y: y + 0.1, w: 1.2, h: 0.28, fontSize: 8, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });

  const items = [
    ["口径", r.msg], ["受众", r.audience], ["KOL", r.kol]
  ];
  items.forEach((item, j) => {
    s6.addText(item[0], { x: 0.7, y: y + 0.45 + j * 0.28, w: 0.8, h: 0.28, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
    s6.addText(item[1], { x: 1.5, y: y + 0.45 + j * 0.28, w: 3.5, h: 0.28, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
  });

  // Divider
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: y + 0.1, w: 0.01, h: 1.15, fill: { color: BORDER } });
  s6.addText("Key Message", { x: 5.4, y: y + 0.1, w: 3.8, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s6.addText(r.note, { x: 5.4, y: y + 0.4, w: 3.8, h: 0.6, fontSize: 13, bold: true, color: r.color, fontFace: "DM Sans" });
});

// Warning
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.45, w: 9, h: 0.12, fill: { color: WARNING } });
s6.addText("⚠ 非正式上线（测试阶段），预算有限。OM为主，KOL/KOC按区域单独评估", { x: 0.5, y: 5.5, w: 9, h: 0.12, fontSize: 8.5, color: WARNING, fontFace: "DM Sans", align: "center" });

// ─────────────────────────────────────
// SLIDE 7: 素材细化 breakdown
// ─────────────────────────────────────
let s7 = pres.addSlide();
s7.background = { color: DARK_BG };
s7.addText("素材细化 breakdown（按渠道/格式/受众）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s7.addText("预计素材总量：各市场约 100-200 个组合，优先测试 Arena + 组队类素材", { x: 0.5, y: 1.05, w: 9, h: 0.32, fontSize: 11, color: MUTED, fontFace: "DM Sans" });

const materialData = [
  { type: "Arena 实况", audience: "竞技型玩家", content: "天梯冲分 / 以弱胜强", format: "15s竖屏×3版", channel: "TikTok/YT Reels" },
  { type: "Arena 真人反应", audience: "泛用户", content: "开黑翻车集锦", format: "竖屏×2版", channel: "TikTok" },
  { type: "PVE 实录", audience: "新手玩家", content: "新手友好 / 通关成就感", format: "15-30s版", channel: "YT/TikTok" },
  { type: "3C 对比（旧vs新）", audience: "所有用户", content: "Camera变更前后 / 打击感", format: "并排对比视频", channel: "YT/FB/买量" },
  { type: "新英雄展示", audience: "核心用户", content: "技能展示 / 强度分析", format: "10s技能+立绘", channel: "YT/KOL" },
  { type: "组队开黑片段", audience: "社交型玩家", content: "和朋友一起玩的乐趣", format: "竖屏/横版", channel: "TikTok/FB" },
  { type: "迷因向短剪", audience: "MZ世代", content: "地牢翻车搞笑集锦", format: "5-10s梗视频", channel: "TikTok" },
  { type: "玩家UGC二创", audience: "所有用户", content: "官方转发激励扩散", format: "UGC", channel: "社媒矩阵" }
];

// Table header
const cols = [1.8, 1.2, 1.8, 1.6, 1.6];
const colX = [0.5];
for (let i = 1; i < cols.length; i++) colX[i] = colX[i-1] + cols[i-1];

const headers = ["素材类型", "受众", "内容方向", "格式", "渠道"];
headers.forEach((h, i) => {
  s7.addShape(pres.shapes.RECTANGLE, { x: colX[i], y: 1.42, w: cols[i], h: 0.35, fill: { color: "1a3a5c" } });
  s7.addText(h, { x: colX[i], y: 1.42, w: cols[i], h: 0.35, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
});

materialData.forEach((m, i) => {
  const y = 1.77 + i * 0.46;
  const bg = i % 2 === 0 ? SURFACE : DARK_BG;
  [m.type, m.audience, m.content, m.format, m.channel].forEach((val, ci) => {
    s7.addShape(pres.shapes.RECTANGLE, { x: colX[ci], y, w: cols[ci], h: 0.45, fill: { color: bg }, line: { color: BORDER, width: 0.5 } });
    s7.addText(val, { x: colX[ci] + 0.08, y, w: cols[ci] - 0.16, h: 0.45, fontSize: 9.5, color: ci === 0 ? SUCCESS : TEXT, fontFace: "DM Sans", valign: "middle" });
  });
});

// ─────────────────────────────────────
// SLIDE 8: KOL矩阵
// ─────────────────────────────────────
let s8 = pres.addSlide();
s8.background = { color: DARK_BG };
s8.addText("KOL矩阵（分层 × 宣传点 × CPM）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.55, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s8.addText("类型：泛游戏主播为主，不采用纯垂类/Vtuber  |  OM为主，KOL按需决策", { x: 0.7, y: 1.05, w: 8.5, h: 0.55, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

const kolData = [
  { tier: "Macro KOL", range: "100万+", regions: "BR/MX/CO", platform: "YouTube", cpm: "$10-15", pillars: "Pillar 1+2", role: "品牌背书 + 泛用户破圈", color: SUCCESS },
  { tier: "Mid KOL", range: "10-100万", regions: "ID/VN/BR/MX", platform: "TikTok + YouTube", cpm: "$8-12", pillars: "全部", role: "深度实况 + Arena/PVE体验", color: PRIMARY },
  { tier: "Micro KOL", range: "1-10万", regions: "ID/VN/BR/MX", platform: "TikTok", cpm: "$5-8", pillars: "Pillar 2+3", role: "素人口碑 + 真实反应 + Meme", color: ACCENT },
  { tier: "Nano KOL", range: "1万以下", regions: "全部5国", platform: "TikTok + Discord", cpm: "$2-5", pillars: "Pillar 2+4", role: "UGC扩散 + 种子用户", color: MUTED }
];

kolData.forEach((k, i) => {
  const y = 1.7 + i * 0.95;
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.85, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  // Tier badge
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 1.1, h: 0.85, fill: { color: k.color } });
  s8.addText(k.tier, { x: 0.5, y, w: 1.1, h: 0.85, fontSize: 10, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  // Info
  const info = [
    ["粉丝", k.range], ["地区", k.regions], ["平台", k.platform], ["CPM", k.cpm], ["内容", k.pillars]
  ];
  info.forEach((inf, j) => {
    const ix = 1.7 + j * 1.4;
    s8.addText(inf[0], { x: ix, y: y + 0.08, w: 0.6, h: 0.25, fontSize: 8, bold: true, color: MUTED, fontFace: "Outfit" });
    s8.addText(inf[1], { x: ix, y: y + 0.32, w: 1.3, h: 0.3, fontSize: 11, bold: true, color: j === 3 ? k.color : TEXT, fontFace: "DM Sans" });
  });
  // Role
  s8.addText(k.role, { x: 1.7, y: y + 0.62, w: 7.5, h: 0.22, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
});

// CPM note
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.5, w: 9, h: 0.1, fill: { color: BORDER } });

// ─────────────────────────────────────
// SLIDE 9: 世界杯利用
// ─────────────────────────────────────
let s9 = pres.addSlide();
s9.background = { color: DARK_BG };
s9.addText("世界杯利用方案（2026 World Cup）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: WARNING, fontFace: "Outfit" });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: WARNING } });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.75, fill: { color: "1a1a0a" }, line: { color: WARNING, width: 1 } });
s9.addText("墨西哥是共同举办国（比赛城市：墨西哥城、瓜达拉哈拉、蒙特雷）；阿根廷若进决赛阶段则拉美全面峰值。7月所有创意内容绑定足球话题。", { x: 0.7, y: 1.05, w: 8.5, h: 0.75, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

const wcItems = [
  { title: "Arena世界杯主题地图", desc: "7月推出世界杯主题地牢地图，提取物=大力神杯，绑定足球话题", icon: "🏆" },
  { title: "Predict the Exit", desc: "TikTok发起预测话题——谁能活着出地牢，蹭世界杯预测热潮", icon: "🎯" },
  { title: "比赛日加投", desc: "MX/AR/BR比赛日当天加投，用户中场休息刷手机是黄金时段", icon: "📺" },
  { title: "足球KOL跨界", desc: "找体育解说/球迷账号（非纯游戏KOL）做跨界内容", icon: "⚽" },
  { title: "进球庆祝表情包", desc: "官方发布进球庆祝GIF/表情包，引导用户在足球话题下讨论GNG", icon: "🎉" }
];

wcItems.forEach((w, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.5 + col * 4.6;
  const y = 1.95 + row * 1.1;
  s9.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.4, h: 0.95, fill: { color: SURFACE }, line: { color: WARNING, width: 1 } });
  s9.addText(w.icon + " " + w.title, { x: x + 0.15, y: y + 0.1, w: 4.1, h: 0.32, fontSize: 12, bold: true, color: WARNING, fontFace: "Outfit" });
  s9.addText(w.desc, { x: x + 0.15, y: y + 0.45, w: 4.1, h: 0.45, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
});

// ─────────────────────────────────────
// SLIDE 10: 推广时间轴
// ─────────────────────────────────────
let s10 = pres.addSlide();
s10.background = { color: DARK_BG };
s10.addText("推广时间轴（关键节点）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s10.addText("全部目标市场7月同步上线（亚洲+拉美+美国）", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

// Timeline
const tlData = [
  { month: "3月", phase: "准备期", color: MUTED, items: ["评分改善", "本地化", "KOL名单", "广告素材制作"] },
  { month: "4-5月", phase: "停服维护", color: WARNING, items: ["素材储备", "KOL接触", "Discord建设"] },
  { month: "6月", phase: "预热期", color: PRIMARY, items: ["官宣+预约开放", "KOL内容爆发", "世界杯预热"] },
  { month: "7月", phase: "大版本爆发", color: SUCCESS, items: ["T-7:Arena预告", "T日:KOL同步爆发", "T+7:BP发售"] },
  { month: "8月+", phase: "长尾运营", color: ACCENT, items: ["赛季+内容", "世界波延续"] }
];

// Timeline line
s10.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.5, w: 0.04, h: 3.7, fill: { color: BORDER } });

tlData.forEach((t, i) => {
  const y = 1.45 + i * 0.76;
  s10.addShape(pres.shapes.OVAL, { x: 1.37, y: y + 0.08, w: 0.3, h: 0.3, fill: { color: t.color } });
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y + 0.05, w: 0.8, h: 0.38, fill: { color: t.color } });
  s10.addText(t.month, { x: 0.5, y: y + 0.05, w: 0.8, h: 0.38, fontSize: 10, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s10.addShape(pres.shapes.RECTANGLE, { x: 1.85, y, w: 7.6, h: 0.66, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s10.addText(t.phase, { x: 2.0, y: y + 0.05, w: 1.8, h: 0.3, fontSize: 11, bold: true, color: t.color, fontFace: "Outfit" });
  s10.addText(t.items.join(" · "), { x: 3.8, y: y + 0.05, w: 5.4, h: 0.55, fontSize: 10, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

// ─────────────────────────────────────
// SLIDE 11: 预算分配
// ─────────────────────────────────────
let s11 = pres.addSlide();
s11.background = { color: DARK_BG };
s11.addText("预算分配建议", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s11.addText("Phase 1 参考预算：$80-150K/月（测试期，视数据调整）", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const budget = [
  { name: "Google UAC", pct: 40, color: PRIMARY },
  { name: "TikTok 付费", pct: 25, color: "f0883e" },
  { name: "YouTube 付费", pct: 15, color: "f85149" },
  { name: "KOL/KOC 合作", pct: 15, color: ACCENT },
  { name: "ASA", pct: 5, color: SUCCESS }
];

budget.forEach((b, i) => {
  const y = 1.5 + i * 0.65;
  s11.addText(b.name, { x: 0.5, y: y + 0.08, w: 2.2, h: 0.45, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
  s11.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: y + 0.1, w: 6.7, h: 0.38, fill: { color: SURFACE } });
  s11.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: y + 0.1, w: 6.7 * (b.pct / 100), h: 0.38, fill: { color: b.color } });
  s11.addText(b.pct + "%", { x: 9.55, y: y + 0.05, w: 0.8, h: 0.45, fontSize: 12, bold: true, color: b.color, fontFace: "Outfit", valign: "middle" });
});

// CPM note
s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.65, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s11.addText("CPM参考（历史验证数据）", { x: 0.7, y: 4.92, w: 3, h: 0.25, fontSize: 10, bold: true, color: TEXT, fontFace: "Outfit" });
const cpmNote = "YouTube官方 $0.29  |  TikTok官方 $0.56  |  UGC活动 $2.31  |  KOL合作 $10-20";
s11.addText(cpmNote, { x: 0.7, y: 5.18, w: 8.5, h: 0.25, fontSize: 9.5, color: MUTED, fontFace: "DM Sans" });

// ─────────────────────────────────────
// SLIDE 12: 立即行动项
// ─────────────────────────────────────
let s12 = pres.addSlide();
s12.background = { color: DARK_BG };
s12.addText("立即行动项（4-6月）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s12.addText("停服维护期 · 准备冲刺阶段", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const actionData = [
  {
    pri: "P0", color: "f85149", title: "最高优先",
    items: [
      "评分改善（3.7→3.8，目标4.0）",
      "印尼/越南/巴西本地化（6月中前）",
      "KOL名单确认（5月底前）",
      "广告素材制作（6月中前）：Arena实况×3版 / PVE实录 / 3C对比"
    ]
  },
  {
    pri: "P1", color: WARNING, title: "重要",
    items: [
      "预约页面开放（6月中）",
      "Discord社区激活（持续）",
      "买量素材制作（TikTok竖屏各2版）"
    ]
  },
  {
    pri: "P2", color: PRIMARY, title: "跟进",
    items: [
      "智利/阿根廷/美国本地化（7月前）",
      "日本市场评估（Q3决策）",
      "KOL正式合作谈判（6月前）"
    ]
  }
];

actionData.forEach((a, i) => {
  const y = 1.42 + i * 1.35;
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.22, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.6, h: 1.22, fill: { color: a.color } });
  s12.addText(a.pri, { x: 0.5, y, w: 0.6, h: 0.6, fontSize: 14, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s12.addText(a.title, { x: 0.5, y: y + 0.6, w: 0.6, h: 0.6, fontSize: 8, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  a.items.forEach((item, j) => {
    s12.addText("• " + item, { x: 1.25, y: y + 0.12 + j * 0.28, w: 8, h: 0.28, fontSize: 11, color: TEXT, fontFace: "DM Sans" });
  });
});

// ─────────────────────────────────────
// SAVE
// ─────────────────────────────────────
pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GNG_July_Publishing_Plan.pptx" })
  .then(() => console.log("DONE: GNG_July_Publishing_Plan.pptx"))
  .catch(err => console.error("ERROR:", err.message));
