const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Gold and Glory — 7月大版本发行方案 v2";
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
s1.addText("7月大版本发行方案 v2", { x: 0.5, y: 2.55, w: 9, h: 0.6, fontSize: 26, color: PRIMARY, fontFace: "Outfit" });
s1.addText("Arena · PVE · 3C升级 · 留存为核心  |  2026年4月", { x: 0.5, y: 3.3, w: 9, h: 0.4, fontSize: 13, color: MUTED, fontFace: "DM Sans" });
s1.addText("Confidential — Internal Use Only", { x: 0.5, y: 5.0, w: 4, h: 0.3, fontSize: 10, color: MUTED, fontFace: "DM Sans" });

// ─────────────────────────────────────
// SLIDE 2: 产品核心定位
// ─────────────────────────────────────
let s2 = pres.addSlide();
s2.background = { color: DARK_BG };
s2.addText("产品核心定位", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// USP
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.85, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s2.addText("进去抢，活着出来就是你的", { x: 0.5, y: 1.1, w: 9, h: 0.85, fontSize: 18, bold: true, color: TEXT, fontFace: "Outfit", align: "center", valign: "middle" });

const prodInfo = [
  ["产品定位", "中世纪地牢 Extraction RPG"],
  ["单局时长", "5–15分钟快节奏单局"],
  ["商业化", "Hero直购（本次测试不宣传BP等付费内容）"],
  ["当前状态", "Google Play 3.7 ⚠  ·  测试：MX/CO  ·  4-6月停服维护"]
];
prodInfo.forEach((p, i) => {
  const y = 2.1 + i * 0.52;
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 2.2, h: 0.45, fill: { color: "1a3a5c" } });
  s2.addText(p[0], { x: 0.5, y, w: 2.2, h: 0.45, fontSize: 10, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center", valign: "middle" });
  s2.addShape(pres.shapes.RECTANGLE, { x: 2.7, y, w: 6.8, h: 0.45, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s2.addText(p[1], { x: 2.85, y, w: 6.5, h: 0.45, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

// Retention priority note (updated)
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.25, w: 9, h: 0.55, fill: { color: "2a1a0a" }, line: { color: WARNING, width: 1 } });
s2.addText("⚠ 7月目标：3.8 emergency trigger → 4.0+（3.8是紧急触发线，低于此评分流量将受限）  |  留存是最优先目标，外围活动/改动都不如 ingame 痛点改动有效", { x: 0.7, y: 4.25, w: 8.5, h: 0.55, fontSize: 11.5, color: WARNING, fontFace: "DM Sans", valign: "middle" });

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
// SLIDE 3: TA估算逻辑（修正版）
// ─────────────────────────────────────
let s3 = pres.addSlide();
s3.background = { color: DARK_BG };
s3.addText("目标用户估算逻辑", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.75, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s3.addText("⚠️ TA 不是\u201C所有MOBA用户\u201D——而是经过年龄 \u00D7 品类偏好 \u00D7 市场渗透率 \u00D7 转化率筛选后的实际可触达用户", { x: 0.7, y: 1.05, w: 8.5, h: 0.75, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

// Filter funnel
const filterSteps = [
  { label: "总人口", value: "例：印尼 2.8亿", color: MUTED },
  { label: "网民 / 智能手机用户", value: "× 80%", color: MUTED },
  { label: "年龄段筛选（16-30岁）", value: "× ~25%", color: WARNING },
  { label: "品类偏好（竞技/射击/MOBA）", value: "× ~15%", color: WARNING },
  { label: "市场渗透率（MOBA成熟度）", value: "× High/Growing", color: PRIMARY },
  { label: "Reachable TA", value: "= 最终可触达用户", color: SUCCESS }
];
filterSteps.forEach((f, i) => {
  const y = 1.9 + i * 0.52;
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.3, h: 0.45, fill: { color: i === filterSteps.length - 1 ? "1a2a1a" : SURFACE }, line: { color: f.color, width: 1 } });
  s3.addText((i + 1) + ". " + f.label, { x: 0.7, y, w: 4, h: 0.45, fontSize: 11, color: f.color, fontFace: "DM Sans", valign: "middle" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 5.0, y, w: 4.5, h: 0.45, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s3.addText(f.value, { x: 5.15, y, w: 4.2, h: 0.45, fontSize: 11, color: f.color, fontFace: "DM Sans", valign: "middle" });
  if (i < filterSteps.length - 1) {
    s3.addText("↓", { x: 2.3, y: y + 0.42, w: 0.5, h: 0.2, fontSize: 10, color: MUTED, fontFace: "DM Sans", align: "center" });
  }
});

// LATAM note
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.55, fill: { color: "2a1a0a" }, line: { color: WARNING, width: 1 } });
s3.addText("⚠️ 拉美MOBA渗透说明：MLBB全球MAU ~24.6M，巴西/墨西哥仅列\u201cGrowing\u201d（非High）。MOBA在拉美体量远小于SEA，TA规模应保守估算。参考：MLBB Brazil #7全球兴趣，Wild Rift在BR/MX有渗透但无官方数据。", { x: 0.7, y: 5.0, w: 8.5, h: 0.55, fontSize: 10, color: WARNING, fontFace: "DM Sans", valign: "middle" });

// ─────────────────────────────────────
// SLIDE 4: TA规模估算（修正版）
// ─────────────────────────────────────
let s4 = pres.addSlide();
s4.background = { color: DARK_BG };
s4.addText("目标用户规模估算（修正版）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.55, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s4.addText("TA = 网民 × 年龄段 × 品类偏好 × 市场渗透率 × 转化率（所有漏斗均需相乘）", { x: 0.7, y: 1.05, w: 8.5, h: 0.55, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

const taMarkets = [
  { flag: "🇮🇩", country: "Indonesia", type: "老市场", note: "最优先", reachable: "1-3M", ref: "MLBB High / AOV", noteColor: SUCCESS },
  { flag: "🇻🇳", country: "Vietnam", type: "老市场", note: "最优先", reachable: "0.8-2M", ref: "AOV MAU ~4-6M（已验证）", noteColor: SUCCESS },
  { flag: "🇲🇽", country: "Mexico", type: "老市场", note: "第三", reachable: "0.3-0.8M", ref: "WR Growing + MLBB Growing", noteColor: WARNING },
  { flag: "🇧🇷", country: "Brazil", type: "新市场", note: "第二", reachable: "0.3-0.8M", ref: "MLBB Growing #7全球兴趣", noteColor: WARNING },
  { flag: "🇦🇷", country: "Argentina", type: "新市场", note: "第四", reachable: "0.1-0.3M", ref: "LoL PC传承 / WR渗透低", noteColor: "f85149" },
  { flag: "🇨🇱", country: "Chile", type: "新市场", note: "第五", reachable: "0.05-0.2M", ref: "LoL PC传承 / WR渗透低", noteColor: "f85149" }
];

taMarkets.forEach((m, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  const x = 0.5 + col * 3.1;
  const y = 1.72 + row * 1.85;
  s4.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.9, h: 1.7, fill: { color: SURFACE }, line: { color: BORDER, width: 1 }, shadow: makeShadow() });
  s4.addText(m.flag + " " + m.country, { x, y: y + 0.05, w: 1.9, h: 0.35, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit" });
  s4.addShape(pres.shapes.RECTANGLE, { x: x + 1.95, y: y + 0.08, w: 0.8, h: 0.28, fill: { color: m.noteColor } });
  s4.addText(m.note, { x: x + 1.95, y: y + 0.08, w: 0.8, h: 0.28, fontSize: 8, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s4.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: y + 0.45, w: 2.5, h: 0.01, fill: { color: BORDER } });
  // Reachable
  s4.addText("Reachable TA", { x, y: y + 0.52, w: 2.9, h: 0.22, fontSize: 8, color: MUTED, fontFace: "DM Sans", align: "center" });
  s4.addText(m.reachable, { x, y: y + 0.72, w: 2.9, h: 0.45, fontSize: 22, bold: true, color: SUCCESS, fontFace: "Outfit", align: "center" });
  // Reference
  s4.addText("参考用户", { x, y: y + 1.2, w: 2.9, h: 0.2, fontSize: 8, color: MUTED, fontFace: "DM Sans", align: "center" });
  s4.addText(m.ref, { x, y: y + 1.38, w: 2.9, h: 0.28, fontSize: 9, color: TEXT, fontFace: "DM Sans", align: "center" });
});

// Summary
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.5, w: 9, h: 0.1, fill: { color: BORDER } });

// ─────────────────────────────────────
// SLIDE 4B: TA 漏斗三层（新增）
// ─────────────────────────────────────
let s4b = pres.addSlide();
s4b.background = { color: DARK_BG };
s4b.addText("目标用户三层漏斗", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s4b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Inverted triangle visual (left side)
// Layer 1 - Core (top, smallest)
s4b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.15, w: 4.0, h: 1.0, fill: { color: SUCCESS } });
s4b.addText("CORE — 核心用户", { x: 0.5, y: 1.15, w: 4.0, h: 0.38, fontSize: 12, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
s4b.addText("MOBA 品类玩家（5v5/竞技类）", { x: 0.5, y: 1.5, w: 4.0, h: 0.3, fontSize: 10, color: "ffffff", fontFace: "DM Sans", align: "center", valign: "middle" });
s4b.addText("单市场 ~0.05-3M  |  6市场合计 ~3-9M", { x: 0.5, y: 1.78, w: 4.0, h: 0.3, fontSize: 9, bold: true, color: "ffffff", fontFace: "DM Sans", align: "center", valign: "middle" });

// Layer 2 - Secondary (middle)
s4b.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 2.2, w: 4.6, h: 1.0, fill: { color: PRIMARY } });
s4b.addText("SECONDARY — 次核心用户", { x: 0.2, y: 2.2, w: 4.6, h: 0.38, fontSize: 12, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
s4b.addText("竞技品类 + RPG 玩家（Extraction/PvP/地牢）", { x: 0.2, y: 2.55, w: 4.6, h: 0.3, fontSize: 10, color: "ffffff", fontFace: "DM Sans", align: "center", valign: "middle" });
s4b.addText("单市场 ~0.2-6M  |  6市场合计 ~7-20M", { x: 0.2, y: 2.83, w: 4.6, h: 0.3, fontSize: 9, bold: true, color: "ffffff", fontFace: "DM Sans", align: "center", valign: "middle" });

// Layer 3 - General (bottom, largest)
s4b.addShape(pres.shapes.RECTANGLE, { x: -0.1, y: 3.25, w: 5.0, h: 1.0, fill: { color: ACCENT } });
s4b.addText("TERTIARY — 泛用户", { x: -0.1, y: 3.25, w: 5.0, h: 0.38, fontSize: 12, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
s4b.addText("动作游戏轻度用户 / 世界杯泛流量", { x: -0.1, y: 3.6, w: 5.0, h: 0.3, fontSize: 10, color: "ffffff", fontFace: "DM Sans", align: "center", valign: "middle" });
s4b.addText("单市场 ~0.5-15M  |  6市场合计 ~20-45M", { x: -0.1, y: 3.88, w: 5.0, h: 0.3, fontSize: 9, bold: true, color: "ffffff", fontFace: "DM Sans", align: "center", valign: "middle" });

// Arrow on right side of triangle
s4b.addText("▼ 漏斗 ▼", { x: 0.5, y: 4.05, w: 4.0, h: 0.3, fontSize: 11, color: MUTED, fontFace: "Outfit", align: "center" });

// Right side: per-region tier breakdown
const regionTiers = [
  { flag: "🇮🇩", country: "Indonesia", core: "1-3M", sec: "3-6M", ter: "8-15M", color: SUCCESS },
  { flag: "🇻🇳", country: "Vietnam", core: "0.8-2M", sec: "2-4M", ter: "5-10M", color: SUCCESS },
  { flag: "🇲🇽", country: "Mexico", core: "0.3-0.8M", sec: "1-2M", ter: "3-6M", color: WARNING },
  { flag: "🇧🇷", country: "Brazil", core: "0.3-0.8M", sec: "1-2M", ter: "4-8M", color: WARNING },
  { flag: "🇦🇷", country: "Argentina", core: "0.1-0.3M", sec: "0.3-0.8M", ter: "1-2M", color: "f85149" },
  { flag: "🇨🇱", country: "Chile", core: "0.05-0.2M", sec: "0.2-0.5M", ter: "0.5-1M", color: "f85149" }
];

// Headers
s4b.addText("各市场三层估算", { x: 5.2, y: 1.1, w: 4.3, h: 0.35, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
const headers = ["市场", "Core", "次核心", "泛用户"];
const colW = [1.1, 1.0, 1.1, 1.1];
let colX2 = [5.2];
for (let i = 1; i < colW.length; i++) colX2[i] = colX2[i-1] + colW[i-1];
headers.forEach((h, i) => {
  s4b.addShape(pres.shapes.RECTANGLE, { x: colX2[i], y: 1.5, w: colW[i], h: 0.35, fill: { color: "1a3a5c" } });
  s4b.addText(h, { x: colX2[i], y: 1.5, w: colW[i], h: 0.35, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
});
regionTiers.forEach((r, i) => {
  const y = 1.85 + i * 0.55;
  const bg = i % 2 === 0 ? SURFACE : DARK_BG;
  [r.flag + " " + r.country, r.core, r.sec, r.ter].forEach((val, ci) => {
    s4b.addShape(pres.shapes.RECTANGLE, { x: colX2[ci], y, w: colW[ci], h: 0.5, fill: { color: bg }, line: { color: BORDER, width: 0.5 } });
    s4b.addText(val, { x: colX2[ci] + 0.05, y, w: colW[ci] - 0.1, h: 0.5, fontSize: ci === 0 ? 9 : 10, color: ci === 0 ? TEXT : (ci === 1 ? SUCCESS : (ci === 2 ? PRIMARY : ACCENT)), fontFace: "DM Sans", align: ci === 0 ? "left" : "center", valign: "middle" });
  });
});

// Legend note
s4b.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 5.1, w: 4.3, h: 0.45, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s4b.addText("Core = MOBA品类  |  次核心 = 竞技+地牢RPG  |  泛用户 = 动作轻度+世界杯流量", { x: 5.3, y: 5.1, w: 4.1, h: 0.45, fontSize: 8.5, color: MUTED, fontFace: "DM Sans", valign: "middle" });

// ─────────────────────────────────────
// SLIDE 5: 7月大版本核心内容
// ─────────────────────────────────────
let s5 = pres.addSlide();
s5.background = { color: DARK_BG };
s5.addText("7月大版本核心内容（三大营销素材支柱）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s5.addText("测试重点：留存（Battle Pass等付费内容本次不宣传）", { x: 0.5, y: 1.05, w: 9, h: 0.32, fontSize: 11, color: WARNING, fontFace: "DM Sans" });

const big3 = [
  { icon: "⚔", title: "#1 竞技场 Arena", tag: "最高营销价值", color: SUCCESS,
    points: ["PVP核心玩法，天梯/排名", "可做大量素材", "天梯冲分 / 以弱胜强 / 公平竞技", "地牢风险回报 / 装备驱动"],
    formats: "15s竖屏×3版 | TikTok/YT Reels" },
  { icon: "🏰", title: "#2 PVE 模式", tag: "留存利器", color: PRIMARY,
    points: ["降低门槛，留存友好", "适合「新手友好」叙事", "新手友好 / 通关成就感", "剧情体验 / 组队副本"],
    formats: "15-30s版 | YT/TikTok" },
  { icon: "🎯", title: "#3 3C 核心升级", tag: "核心玩法质变", color: ACCENT,
    points: ["Control + Camera + Character整体升级", "易用性（视野）·操作性（精准度）", "打击感（反馈）·策略性（观察）", "Before/After对比视频素材"],
    formats: "并排对比视频 | YT/FB/买量" }
];
big3.forEach((b, i) => {
  const x = 0.5 + i * 3.1;
  s5.addShape(pres.shapes.RECTANGLE, { x, y: 1.45, w: 2.9, h: 3.85, fill: { color: SURFACE }, line: { color: b.color, width: 2 }, shadow: makeShadow() });
  s5.addText(b.icon + " " + b.title, { x, y: 1.52, w: 2.9, h: 0.45, fontSize: 12, bold: true, color: b.color, fontFace: "Outfit", align: "center" });
  s5.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: 1.98, w: 2.5, h: 0.28, fill: { color: b.color } });
  s5.addText(b.tag, { x: x + 0.2, y: 1.98, w: 2.5, h: 0.28, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  b.points.forEach((pt, j) => {
    s5.addText("• " + pt, { x: x + 0.15, y: 2.35 + j * 0.38, w: 2.6, h: 0.38, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
  });
  s5.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 3.95, w: 2.6, h: 0.01, fill: { color: BORDER } });
  s5.addText("素材格式: " + b.formats, { x: x + 0.15, y: 4.0, w: 2.6, h: 0.35, fontSize: 8.5, color: MUTED, fontFace: "DM Sans" });
});

// ─────────────────────────────────────
// SLIDE 6: 竞品分析
// ─────────────────────────────────────
let s6 = pres.addSlide();
s6.background = { color: DARK_BG };
s6.addText("竞品分析：手游近战搜打撤赛道", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.6, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s6.addText("手游「中世纪地牢 + 近战 + Extraction + 英雄技能」= 真正品类空白", { x: 0.7, y: 1.05, w: 8.5, h: 0.6, fontSize: 13, bold: true, color: SUCCESS, fontFace: "DM Sans", valign: "middle" });

const competitors = [
  { name: "Arena Breakout", style: "FPS写实", melee: false, medieval: false, issue: "P2W争议，15-30分钟局" },
  { name: "Delta Force Mobile", style: "FPS写实", melee: false, medieval: false, issue: "Extraction是附加，非核心" },
  { name: "MISFITZ", style: "Top-down卡通", melee: true, medieval: false, issue: "最接近但非中世纪/地牢" },
  { name: "Roads of Ruin", style: "Top-down ARPG", melee: true, medieval: false, issue: "RPG而非Extraction" }
];
competitors.forEach((c, i) => {
  const x = 0.5 + i * 2.35;
  s6.addShape(pres.shapes.RECTANGLE, { x, y: 1.8, w: 2.15, h: 1.8, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s6.addText(c.name, { x, y: 1.88, w: 2.15, h: 0.35, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s6.addText(c.style, { x, y: 2.23, w: 2.15, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  const tags = [
    { label: "近战", ok: c.melee }, { label: "中世纪", ok: c.medieval }
  ];
  tags.forEach((t, j) => {
    s6.addShape(pres.shapes.RECTANGLE, { x: x + 0.15 + j * 0.95, y: 2.55, w: 0.9, h: 0.26, fill: { color: t.ok ? "1a2a1a" : "1a0a0a" } });
    s6.addText((t.ok ? "✅" : "❌") + t.label, { x: x + 0.15 + j * 0.95, y: 2.55, w: 0.9, h: 0.26, fontSize: 8, color: t.ok ? SUCCESS : "f85149", fontFace: "DM Sans", align: "center", valign: "middle" });
  });
  s6.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 2.9, w: 1.85, h: 0.01, fill: { color: BORDER } });
  s6.addText(c.issue, { x: x + 0.1, y: 2.95, w: 1.95, h: 0.55, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
});

s6.addText("PC/Console 参考（用户认知来源，无手游版本）", { x: 0.5, y: 3.75, w: 5, h: 0.3, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
const pcComps = ["Dark and Darker — 中世纪地牢 Extraction", "Hunt: Showdown — 中世纪近战", "Marvel Rivals — 英雄+地牢"];
pcComps.forEach((p, i) => {
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.1 + i * 0.32, w: 9, h: 0.28, fill: { color: SURFACE } });
  s6.addText("→ " + p, { x: 0.65, y: 4.1 + i * 0.32, w: 8.5, h: 0.28, fontSize: 10, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

// ─────────────────────────────────────
// SLIDE 7: KOC 爆发策略
// ─────────────────────────────────────
let s7 = pres.addSlide();
s7.background = { color: DARK_BG };
s7.addText("KOC 爆发策略（替代大KOL投放）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.6, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s7.addText("测试期预算有限，不走大KOL路线。利用现有KOC种子用户做有机传播爆发。", { x: 0.7, y: 1.05, w: 8.5, h: 0.6, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

const kocItems = [
  {
    icon: "🎮", title: "Easy Play, Easy Win 计划", color: SUCCESS,
    desc: "给KOC方向 + 给资源 + 持续沟通\n5K Gold/视频，最多4视频/周期\nTop 10 获得官方推广 + $50 ad boost\n每周检查performance metrics"
  },
  {
    icon: "🏆", title: "Arena 挑战赛（UGC传播）", color: PRIMARY,
    desc: "举办Arena冲分挑战赛\nKOC参与有奖励（皮肤/Gold）\n赛事内容二创传播\n锚定「Arena回来了」的舆论"
  },
  {
    icon: "🤝", title: "老玩家召回计划", color: ACCENT,
    desc: "定向邀请老测试玩家回归\n提供Arena独占体验\n口碑裂变：老带新奖励\nDiscord/FB社群激活"
  },
  {
    icon: "🎯", title: "World Cup 热点绑定", color: WARNING,
    desc: "蹭世界杯话题做内容\nArena世界杯地图上线\nPredict the Exit话题\n比赛日有机爆发（不花钱买量）"
  }
];

kocItems.forEach((k, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.5 + col * 4.6;
  const y = 1.78 + row * 1.65;
  s7.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.4, h: 1.5, fill: { color: SURFACE }, line: { color: k.color, width: 2 } });
  s7.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: 1.5, fill: { color: k.color } });
  s7.addText(k.icon + " " + k.title, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.35, fontSize: 13, bold: true, color: k.color, fontFace: "Outfit" });
  s7.addText(k.desc, { x: x + 0.2, y: y + 0.5, w: 4, h: 0.95, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
});

// CPM note
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.55, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s7.addText("CPM参考（实际验证）：YouTube $0.29 · TikTok $0.56 · UGC活动 $2.31（KOC有机传播CPM极低）", { x: 0.7, y: 5.0, w: 8.5, h: 0.55, fontSize: 10, color: MUTED, fontFace: "DM Sans", valign: "middle" });

// ─────────────────────────────────────
// SLIDE 8: 素材 breakdown
// ─────────────────────────────────────
let s8 = pres.addSlide();
s8.background = { color: DARK_BG };
s8.addText("素材 breakdown", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s8.addText("测试重点：留存（Battle Pass等付费内容不宣传）  |  优先素材：Arena + 组队类", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 11, color: WARNING, fontFace: "DM Sans" });

const materialData = [
  { type: "Arena 实况", audience: "竞技型玩家", content: "天梯冲分 / 以弱胜强", format: "15s竖屏×3版", channel: "TikTok/YT Reels" },
  { type: "Arena 真人反应", audience: "泛用户", content: "开黑翻车集锦", format: "竖屏×2版", channel: "TikTok" },
  { type: "PVE 实录", audience: "新手玩家", content: "新手友好 / 通关成就感", format: "15-30s版", channel: "YT/TikTok" },
  { type: "3C 对比（旧vs新）", audience: "所有用户", content: "Camera变更 / 打击感", format: "并排对比视频", channel: "YT/FB/买量" },
  { type: "新英雄展示", audience: "核心用户", content: "技能展示 / 强度分析", format: "10s技能+立绘", channel: "YT/KOC" },
  { type: "组队开黑片段", audience: "社交型玩家", content: "和朋友一起玩的乐趣", format: "竖屏/横版", channel: "TikTok/FB" },
  { type: "迷因向短剪", audience: "MZ世代", content: "地牢翻车搞笑集锦", format: "5-10s梗视频", channel: "TikTok" },
  { type: "World Cup 绑定", audience: "所有用户", content: "世界杯热点 + Arena地图", format: "5-15s热点视频", channel: "TikTok有机" }
];

const cols = [1.8, 1.2, 1.8, 1.6, 1.6];
const colX = [0.5];
for (let i = 1; i < cols.length; i++) colX[i] = colX[i-1] + cols[i-1];
const materialHeaders = ["素材类型", "受众", "内容方向", "格式", "渠道"];
materialHeaders.forEach((h, i) => {
  s8.addShape(pres.shapes.RECTANGLE, { x: colX[i], y: 1.4, w: cols[i], h: 0.35, fill: { color: "1a3a5c" } });
  s8.addText(h, { x: colX[i], y: 1.4, w: cols[i], h: 0.35, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
});
materialData.forEach((m, i) => {
  const y = 1.75 + i * 0.46;
  const bg = i % 2 === 0 ? SURFACE : DARK_BG;
  [m.type, m.audience, m.content, m.format, m.channel].forEach((val, ci) => {
    s8.addShape(pres.shapes.RECTANGLE, { x: colX[ci], y, w: cols[ci], h: 0.45, fill: { color: bg }, line: { color: BORDER, width: 0.5 } });
    s8.addText(val, { x: colX[ci] + 0.08, y, w: cols[ci] - 0.16, h: 0.45, fontSize: 9.5, color: ci === 0 ? SUCCESS : TEXT, fontFace: "DM Sans", valign: "middle" });
  });
});

// ─────────────────────────────────────
// SLIDE 9: 区域差异化策略
// ─────────────────────────────────────
let s9 = pres.addSlide();
s9.background = { color: DARK_BG };
s9.addText("区域差异化宣传策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const regionData = [
  { region: "🌏 ID/VN（老市场）", color: SUCCESS, msg: "7月大版本上线，所有人一起回归", audience: "新玩家：上手容易 | 老玩家：Arena+PVE内容更新", note: "版本回来了，这次不一样" },
  { region: "🌎 CO/MX/AR/CL（南北开放）", color: PRIMARY, msg: "北部（CO/MX）+ 南部（AR/CL）同步开放", audience: "北部回归玩家 + 南部新玩家", note: "终于等到你！南北全面开放" },
  { region: "🇧🇷 巴西（新市场首次）", color: WARNING, msg: "服务器回来了，欢迎老玩家回归，新玩家加入", audience: "老玩家召回为主，新玩家补充", note: "服务器回来了，你还在吗？" }
];
regionData.forEach((r, i) => {
  const y = 1.1 + i * 1.45;
  s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.35, fill: { color: SURFACE }, line: { color: r.color, width: 2 } });
  s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.35, fill: { color: r.color } });
  s9.addText(r.region, { x: 0.7, y: y + 0.08, w: 4.3, h: 0.35, fontSize: 13, bold: true, color: r.color, fontFace: "Outfit" });
  const items = [["口径", r.msg], ["受众", r.audience]];
  items.forEach((item, j) => {
    s9.addText(item[0], { x: 0.7, y: y + 0.45 + j * 0.3, w: 0.8, h: 0.28, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
    s9.addText(item[1], { x: 1.5, y: y + 0.45 + j * 0.3, w: 4, h: 0.28, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
  });
  s9.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: y + 0.1, w: 0.01, h: 1.15, fill: { color: BORDER } });
  s9.addText("Key Message", { x: 5.7, y: y + 0.1, w: 3.5, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s9.addText(r.note, { x: 5.7, y: y + 0.4, w: 3.5, h: 0.7, fontSize: 14, bold: true, color: r.color, fontFace: "DM Sans" });
});
// World Cup note updated
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.45, w: 9, h: 0.12, fill: { color: WARNING } });
s9.addText("⚠ 无预算，纯 ingame event + 少量 OM 素材  |  测试阶段，KOC为主，KOL按需。", { x: 0.5, y: 5.5, w: 9, h: 0.12, fontSize: 9, color: WARNING, fontFace: "DM Sans", align: "center" });

// ─────────────────────────────────────
// SLIDE 10: 时间轴
// ─────────────────────────────────────
let s10 = pres.addSlide();
s10.background = { color: DARK_BG };
s10.addText("推广时间轴", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s10.addText("全部目标市场7月同步上线（ID/VN/MX + AR/BR/CL）", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const tlData = [
  { month: "4月", phase: "停服维护", color: WARNING, items: ["评分改善（3.8为紧急触发线）", "本地化启动", "KOC名单确认"] },
  { month: "5月", phase: "预热期", color: PRIMARY, items: ["KOC种子内容", "Discord激活", "Arena开发日志"] },
  { month: "6月", phase: "预约+预热", color: PRIMARY, items: ["预约开放", "World Cup预热绑定", "KOC挑战赛启动"] },
  { month: "7月初", phase: "大版本上线", color: SUCCESS, items: ["T-7:Arena预告", "T日:Arena+PVE上线", "World Cup有机爆发"] },
  { month: "7月后", phase: "留存运营", color: ACCENT, items: ["D7数据追踪", "KOC持续运营", "Phase2评估"] }
];
s10.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.45, w: 0.04, h: 3.7, fill: { color: BORDER } });
tlData.forEach((t, i) => {
  const y = 1.42 + i * 0.76;
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
s11.addText("Phase 1 参考预算：$50-100K/月（测试期，KOC为主，KOL按需）", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const budget = [
  { name: "Google UAC（谷歌搜索+Play）", pct: 50, color: PRIMARY, note: "主渠道，稳定量" },
  { name: "TikTok 付费", pct: 25, color: "f0883e", note: "有机放大，世界杯绑定" },
  { name: "YouTube 付费", pct: 15, color: "f85149", note: "内容沉淀" },
  { name: "KOC 合作（种子用户）", pct: 10, color: ACCENT, note: "有机爆发" }
];
budget.forEach((b, i) => {
  const y = 1.5 + i * 0.75;
  s11.addText(b.name, { x: 0.5, y: y + 0.08, w: 2.8, h: 0.45, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
  s11.addShape(pres.shapes.RECTANGLE, { x: 3.4, y: y + 0.1, w: 5.6, h: 0.38, fill: { color: SURFACE } });
  s11.addShape(pres.shapes.RECTANGLE, { x: 3.4, y: y + 0.1, w: 5.6 * (b.pct / 100), h: 0.38, fill: { color: b.color } });
  s11.addText(b.pct + "%", { x: 9.1, y: y + 0.05, w: 0.8, h: 0.45, fontSize: 12, bold: true, color: b.color, fontFace: "Outfit", valign: "middle" });
  s11.addText(b.note, { x: 0.5, y: y + 0.52, w: 9, h: 0.2, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
});

// ASA note
s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.65, w: 9, h: 0.85, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s11.addText("ASA = Apple Search Ads（苹果搜索广告）", { x: 0.7, y: 4.72, w: 4, h: 0.3, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit" });
s11.addText("App Store 内的付费搜索流量，用户主动搜索时展示，精准但量小。测试期可小预算测试。", { x: 0.7, y: 5.02, w: 8.5, h: 0.4, fontSize: 10, color: MUTED, fontFace: "DM Sans" });

// ─────────────────────────────────────
// SLIDE 11C: 越南暑假非世界杯国家策略（新增）
// ─────────────────────────────────────
let s11c = pres.addSlide();
s11c.background = { color: DARK_BG };
s11c.addText("越南暑假非世界杯国家策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s11c.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Context
s11c.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.65, fill: { color: "1a2a3a" }, line: { color: WARNING, width: 1 } });
s11c.addText("⚠ 越南暑假（6-8月）与世界杯（6月中-7月）时间重叠。非世界杯国家，蹭热度能力有限，需本地化独立打法", { x: 0.7, y: 1.05, w: 8.5, h: 0.65, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

// Content blocks
const vnBlocks = [
  { icon: "🏟", title: "Arena Challenge Tournament", color: SUCCESS,
    desc: "本地赛事：Arena冲分挑战赛\n奖品：本地热门奖品（手机/游戏手柄/充值卡）\nKOC参与门槛低，二创传播自然\n口号：Arena暑假杯，等你来战" },
  { icon: "🎬", title: "本地 KOC 种子内容", color: PRIMARY,
    desc: "本地KOC（越南语）制作内容\nArena真实对战片段 + 地牢探险\nKOC有机传播为主，不花大钱买量\nUGC挑战赛：最好笑翻车集锦" },
  { icon: "🎮", title: "暑假专属游戏内活动", color: ACCENT,
    desc: "暑假限定地图（越南风格地牢）\n登录送暑假限定皮肤\n组队开黑奖励加成\n低门槛参与，高社交传播" }
];
vnBlocks.forEach((b, i) => {
  const x = 0.5 + i * 3.1;
  s11c.addShape(pres.shapes.RECTANGLE, { x, y: 1.85, w: 2.9, h: 2.85, fill: { color: SURFACE }, line: { color: b.color, width: 2 } });
  s11c.addText(b.icon + " " + b.title, { x, y: 1.95, w: 2.9, h: 0.42, fontSize: 11, bold: true, color: b.color, fontFace: "Outfit", align: "center" });
  s11c.addText(b.desc, { x: x + 0.15, y: 2.45, w: 2.6, h: 2.1, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
});

// Budget note
s11c.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.7, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s11c.addText("💰 预算说明", { x: 0.7, y: 4.92, w: 2, h: 0.25, fontSize: 10, bold: true, color: WARNING, fontFace: "Outfit" });
s11c.addText("Minimal budget — 包含在现有 KOC 预算内。本地KOC合作 + 少量 OM 素材费用。不单独申请预算。", { x: 0.7, y: 5.18, w: 8.5, h: 0.3, fontSize: 10, color: MUTED, fontFace: "DM Sans" });

// ─────────────────────────────────────
// SLIDE 11D: 外挂后置处理策略（新增）
// ─────────────────────────────────────
let s11d = pres.addSlide();
s11d.background = { color: DARK_BG };
s11d.addText("外挂后置处理策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s11d.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Industry reference
s11d.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.65, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s11d.addText("行业参考：Valorant（每日Ban名单+设备指纹） · Apex（EA anticheat） · PUBG Mobile（硬件封禁+统计异常检测）", { x: 0.7, y: 1.05, w: 8.5, h: 0.65, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

// GNG approach
const acItems = [
  { icon: "📋", title: "每日 Ban 名单更新", color: "f85149",
    desc: "每日检测并Ban作弊账号\n公开每日Ban名单（官方公告）\n形成威慑：作弊会被抓\n参考：Valorant 每日Ban公示" },
  { icon: "📱", title: "设备指纹封禁", color: WARNING,
    desc: "IMEI/MAC/硬件指纹关联封禁\n换账号无法解封\n封禁设备黑名单库\n对批量开挂工作室最有效" },
  { icon: "📊", title: "统计异常检测", color: PRIMARY,
    desc: "AI检测异常游戏数据\n如：爆头率异常/移动轨迹异常\n配合人工复查\n减少误封，保护正常玩家" },
  { icon: "📢", title: "公开Ban公告", color: SUCCESS,
    desc: "每周/每日官方公示Ban名单\n社区公告：作弊者被处理\n社交媒体传播：游戏在维护公平\n形成正向舆论：认真做反外挂" }
];

acItems.forEach((a, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.5 + col * 4.6;
  const y = 1.85 + row * 1.7;
  s11d.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.4, h: 1.55, fill: { color: SURFACE }, line: { color: a.color, width: 2 } });
  s11d.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: 1.55, fill: { color: a.color } });
  s11d.addText(a.icon + " " + a.title, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.38, fontSize: 12, bold: true, color: a.color, fontFace: "Outfit" });
  s11d.addText(a.desc, { x: x + 0.2, y: y + 0.52, w: 4, h: 0.98, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
});

// Key note
s11d.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.2, w: 9, h: 0.4, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s11d.addText("✅ 核心原则：宁可少Ban不错Ban，误封比漏封更伤玩家信任", { x: 0.7, y: 5.2, w: 8.5, h: 0.4, fontSize: 11, color: SUCCESS, fontFace: "DM Sans", valign: "middle" });

// ─────────────────────────────────────
// SLIDE 11B: 新老用户差异化策略（新增）
// ─────────────────────────────────────
let s11b = pres.addSlide();
s11b.background = { color: DARK_BG };
s11b.addText("新老用户差异化策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s11b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// 老用户策略（左侧）
s11b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 4.4, h: 4.3, fill: { color: SURFACE }, line: { color: SUCCESS, width: 2 } });
s11b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 4.4, h: 0.5, fill: { color: SUCCESS } });
s11b.addText("👤 老用户策略 — 召回为主", { x: 0.5, y: 1.1, w: 4.4, h: 0.5, fontSize: 13, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
s11b.addText("口径：Arena回来了，你还在吗？", { x: 0.7, y: 1.7, w: 4, h: 0.3, fontSize: 10, bold: true, color: SUCCESS, fontFace: "Outfit" });

const oldUser = [
  ["召回渠道", "Email/Push定向 + Discord激活 + 再营销广告"],
  ["召回钩子", "Arena新玩法 + 登录送限定皮肤/装备"],
  ["专属活动", "Arena传说杯（老玩家天梯赛）"],
  ["老带新", "邀请新玩家得Arena限定货币"],
  ["D7留存目标", "召回D7 ≥ 50%（有基础的老玩家更高）"]
];
oldUser.forEach((item, i) => {
  s11b.addText(item[0], { x: 0.7, y: 2.1 + i * 0.55, w: 1.5, h: 0.28, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s11b.addText(item[1], { x: 2.2, y: 2.1 + i * 0.55, w: 2.5, h: 0.5, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
});

// 新用户策略（右侧）
s11b.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.1, w: 4.4, h: 4.3, fill: { color: SURFACE }, line: { color: PRIMARY, width: 2 } });
s11b.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.1, w: 4.4, h: 0.5, fill: { color: PRIMARY } });
s11b.addText("🆕 新用户策略 — 转化为主", { x: 5.1, y: 1.1, w: 4.4, h: 0.5, fontSize: 13, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
s11b.addText("口径：5分钟进地牢抢宝，活着出来就是你的", { x: 5.3, y: 1.7, w: 4, h: 0.3, fontSize: 10, bold: true, color: PRIMARY, fontFace: "Outfit" });

const newUser = [
  ["转化渠道", "TikTok有机 + YouTube教学 + KOC种子"],
  ["转化钩子", "PVE低门槛（新手友好）+ 3C升级展示"],
  ["专属活动", "新人地牢周（全通送稀有装备）"],
  ["新手引导", "3分钟入门 + Arena新手专属天梯"],
  ["D7留存目标", "≥ 35%（品类均值）"]
];
newUser.forEach((item, i) => {
  s11b.addText(item[0], { x: 5.3, y: 2.1 + i * 0.55, w: 1.5, h: 0.28, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s11b.addText(item[1], { x: 6.8, y: 2.1 + i * 0.55, w: 2.5, h: 0.5, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
});

// 共同策略
s11b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.55, fill: { color: "1a2a3a" }, line: { color: BORDER, width: 1 } });
s11b.addText("共同KPI：老用户召回率≥15%  |  新用户D7≥35%  |  Arena老用户参与率≥60% / 新用户≥40%", { x: 0.7, y: 5.0, w: 8.5, h: 0.55, fontSize: 10, color: TEXT, fontFace: "DM Sans", valign: "middle" });

// ─────────────────────────────────────
// SLIDE 11E: 立即行动项
// ─────────────────────────────────────
let s12 = pres.addSlide();
s12.background = { color: DARK_BG };
s12.addText("立即行动项（4-6月）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, bold: true, color: PRIMARY, fontFace: "Outfit" });
s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s12.addText("停服维护期 · 准备冲刺阶段", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const actionData = [
  {
    pri: "P0", color: "f85149", items: [
      "评分改善（3.8为紧急触发线，目标4.0）",
      "印尼/越南/巴西本地化（6月中前）",
      "KOC种子名单确认（5月底前）",
      "广告素材制作（6月中前）：Arena实况×3版 / PVE实录 / 3C对比"
    ]
  },
  {
    pri: "P1", color: WARNING, items: [
      "预约页面开放（6月中）",
      "Discord社区激活（持续）",
      "World Cup 热点内容储备",
      "KOC Arena挑战赛规则设计"
    ]
  },
  {
    pri: "P2", color: PRIMARY, items: [
      "智利/阿根廷本地化（7月前）",
      "日本市场评估（Q3决策）",
      "巴西Free Fire社群打入（KOC种子）"
    ]
  }
];
actionData.forEach((a, i) => {
  const y = 1.45 + i * 1.35;
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.22, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.6, h: 1.22, fill: { color: a.color } });
  s12.addText(a.pri, { x: 0.5, y, w: 0.6, h: 1.22, fontSize: 14, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  a.items.forEach((item, j) => {
    s12.addText("• " + item, { x: 1.25, y: y + 0.12 + j * 0.28, w: 8, h: 0.28, fontSize: 11, color: TEXT, fontFace: "DM Sans" });
  });
});

// ─────────────────────────────────────
// SAVE
// ─────────────────────────────────────
pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GNG_July_Publishing_Plan_v2.pptx" })
  .then(() => console.log("DONE: GNG_July_Publishing_Plan_v2.pptx"))
  .catch(err => console.error("ERROR:", err.message));
