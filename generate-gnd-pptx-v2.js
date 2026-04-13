const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Gold and Glory — 市场发行方案 v2";
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
  return { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.18 };
}

// ── Slide 1: Cover ──
let s1 = pres.addSlide();
s1.background = { color: DARK_BG };
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: PRIMARY } });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 2.5, h: 0.05, fill: { color: ACCENT } });
s1.addText("GOLD AND GLORY", { x: 0.5, y: 1.8, w: 9, h: 0.9, fontSize: 44, bold: true, color: TEXT, fontFace: "Outfit" });
s1.addText("市场发行方案", { x: 0.5, y: 2.65, w: 9, h: 0.6, fontSize: 26, color: PRIMARY, fontFace: "Outfit" });
s1.addText("Phase 1 — Indonesia · Vietnam · Mexico  |  v2 更新版", { x: 0.5, y: 3.4, w: 9, h: 0.4, fontSize: 14, color: MUTED, fontFace: "DM Sans" });
s1.addText("2026-04", { x: 0.5, y: 5.0, w: 3, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

// ── Slide 2: 品类分析 ──
let s2 = pres.addSlide();
s2.background = { color: DARK_BG };
s2.addText("品类分析", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Core loop
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.15, w: 9, h: 0.85, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s2.addText("核心循环", { x: 0.7, y: 1.22, w: 2, h: 0.3, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
s2.addText("进入地牢  →  搜刮  →  战斗  →  提取（或死亡）", { x: 0.7, y: 1.5, w: 8.5, h: 0.4, fontSize: 15, color: TEXT, fontFace: "DM Sans" });

// Category tag
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.15, w: 2.5, h: 0.32, fill: { color: "1a3a5c" } });
s2.addText("Extraction Shooter · Hero Extraction", { x: 0.5, y: 2.15, w: 2.5, h: 0.32, fontSize: 9, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center", valign: "middle" });
s2.addText("5分钟快节奏 · 中世纪题材 · 赛季制", { x: 3.1, y: 2.15, w: 5, h: 0.32, fontSize: 11, color: MUTED, fontFace: "DM Sans", valign: "middle" });

// Features
const feats = [
  { icon: "⚔", title: "5分钟速战", desc: "地牢→战斗→提取，高频爽感" },
  { icon: "🏰", title: "中世纪题材", desc: "铠甲、剑盾、城堡，差异化明显" },
  { icon: "🛒", title: "英雄直购", desc: "非抽卡，付费透明，降低门槛" },
  { icon: "🏆", title: "赛季制", desc: "Battle Pass，保持长线回访" }
];
feats.forEach((f, i) => {
  const x = 0.5 + i * 2.35;
  s2.addShape(pres.shapes.RECTANGLE, { x, y: 2.65, w: 2.15, h: 1.7, fill: { color: SURFACE }, line: { color: BORDER, width: 1 }, shadow: makeShadow() });
  s2.addText(f.icon, { x, y: 2.78, w: 2.15, h: 0.45, fontSize: 22, align: "center" });
  s2.addText(f.title, { x: x + 0.1, y: 3.23, w: 1.95, h: 0.35, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s2.addText(f.desc, { x: x + 0.1, y: 3.55, w: 1.95, h: 0.7, fontSize: 9.5, color: MUTED, fontFace: "DM Sans", align: "center" });
});

// Monetization
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.8, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s2.addText("商业化", { x: 0.7, y: 4.58, w: 1.5, h: 0.3, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
s2.addText("Hero 直购（主）  +  Battle Pass（续）  +  皮肤外观（辅）", { x: 0.7, y: 4.85, w: 8.5, h: 0.35, fontSize: 12, color: TEXT, fontFace: "DM Sans" });

// ── Slide 3: TA 规模 ──
let s3 = pres.addSlide();
s3.background = { color: DARK_BG };
s3.addText("目标用户规模", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Empirical callout
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.7, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s3.addText("⚠️ 实证结论（基于历史 UA 测试）", { x: 0.7, y: 1.15, w: 4, h: 0.3, fontSize: 10, bold: true, color: SUCCESS, fontFace: "Outfit" });
s3.addText("MOBA 品类用户 UA 表现最佳，是主要投放目标。优先使用 MLBB / Wild Rift / LoL 玩家受众包作为 UA 种子。", { x: 0.7, y: 1.42, w: 8.5, h: 0.35, fontSize: 10, color: TEXT, fontFace: "DM Sans" });

// Column headers
const colX = [0.5, 3.55, 6.6];
const colW = [2.9, 2.9, 2.9];
const taMarkets = [
  { flag: "🇮🇩", country: "Indonesia", core: "8-12M", ta: "20-28M", reach: "3-6M", ref: "Free Fire · PUBG Mobile" },
  { flag: "🇻🇳", country: "Vietnam", core: "5-8M", ta: "12-18M", reach: "2-4M", ref: "Free Fire · PUBG Mobile" },
  { flag: "🇲🇽", country: "Mexico", core: "6-10M", ta: "15-22M", reach: "4-8M", ref: "Free Fire · PUBG Mobile" }
];

// Header row
["Indonesia", "Vietnam", "Mexico"].forEach((name, i) => {
  s3.addText(name, { x: colX[i], y: 1.95, w: colW[i], h: 0.35, fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
});

taMarkets.forEach((m, i) => {
  const x = colX[i];
  const y = 2.35;

  // Card
  s3.addShape(pres.shapes.RECTANGLE, { x, y, w: colW[i], h: 2.6, fill: { color: SURFACE }, line: { color: BORDER, width: 1 }, shadow: makeShadow() });

  // Core TA
  s3.addText("Core TA", { x, y: y + 0.1, w: colW[i], h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s3.addText(m.core, { x, y: y + 0.32, w: colW[i], h: 0.45, fontSize: 20, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center" });

  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: y + 0.85, w: colW[i] - 0.4, h: 0.01, fill: { color: BORDER } });

  // Total Addressable
  s3.addText("Total Addressable", { x, y: y + 0.92, w: colW[i], h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s3.addText(m.ta, { x, y: y + 1.14, w: colW[i], h: 0.4, fontSize: 16, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });

  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: y + 1.62, w: colW[i] - 0.4, h: 0.01, fill: { color: BORDER } });

  // Reachable TA
  s3.addText("Reachable TA", { x, y: y + 1.7, w: colW[i], h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s3.addText(m.reach, { x, y: y + 1.92, w: colW[i], h: 0.4, fontSize: 18, bold: true, color: SUCCESS, fontFace: "Outfit", align: "center" });

  // Reference
  s3.addText(m.ref, { x, y: y + 2.32, w: colW[i], h: 0.25, fontSize: 8, color: MUTED, fontFace: "DM Sans", align: "center" });
});

// Summary
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.1, w: 9, h: 0.42, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s3.addText("Phase 1 合计 Reachable TA：9-18M     |     重点市场优先级：🇮🇩 印尼 > 🇲🇽 墨西哥 > 🇻🇳 越南", { x: 0.5, y: 5.1, w: 9, h: 0.42, fontSize: 11, color: SUCCESS, fontFace: "DM Sans", align: "center", valign: "middle" });

// ── Slide 4: TA 投放策略 ──
let s4 = pres.addSlide();
s4.background = { color: DARK_BG };
s4.addText("目标用户策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Empirical finding highlight
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.15, w: 9, h: 1.0, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s4.addText("实证结论", { x: 0.7, y: 1.22, w: 2, h: 0.3, fontSize: 11, bold: true, color: PRIMARY, fontFace: "Outfit" });
s4.addText("MOBA 品类用户（MLBB / Wild Rift / LoL 玩家）在历史 UA 测试中，D7、R2、CPR 等指标均优于其他受众群体。\n这意味着：投放目标应优先选择 MOBA 玩家，而非泛 FPS/动作类定向。", { x: 0.7, y: 1.5, w: 8.5, h: 0.6, fontSize: 10, color: TEXT, fontFace: "DM Sans" });

// Two columns: targeting vs lookalike
s4.addText("投放定向策略", { x: 0.5, y: 2.3, w: 4, h: 0.35, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
const targeting = [
  "优先：MLBB 玩家受众包",
  "次优先：Wild Rift 玩家受众包",
  "参考：Free Fire 重度玩家",
  "不推荐：泛 FPS/动作类定向（转化差）"
];
targeting.forEach((t, i) => {
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.72 + i * 0.55, w: 4.3, h: 0.48, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s4.addText(t, { x: 0.65, y: 2.72 + i * 0.55, w: 4, h: 0.48, fontSize: 10.5, color: i === 0 ? SUCCESS : (i === 3 ? "f85149" : TEXT), fontFace: "DM Sans", valign: "middle" });
});

s4.addText("Lookalike 种子选择", { x: 5.2, y: 2.3, w: 4.3, h: 0.35, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
const lookalike = [
  { label: "Layer 1", desc: "MLBB 付费用户（高 LTV）" },
  { label: "Layer 2", desc: "Wild Rift 活跃用户" },
  { label: "Layer 3", desc: "Free Fire 重度玩家" },
  { label: "Negative", desc: "休闲游戏、宠物游戏用户" }
];
lookalike.forEach((l, i) => {
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.72 + i * 0.55, w: 4.3, h: 0.48, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.72 + i * 0.55, w: 0.7, h: 0.48, fill: { color: i === 3 ? "3a1a1a" : "1a2a3a" } });
  s4.addText(l.label, { x: 5.2, y: 2.72 + i * 0.55, w: 0.7, h: 0.48, fontSize: 8, bold: true, color: i === 3 ? "f85149" : PRIMARY, fontFace: "Outfit", align: "center", valign: "middle" });
  s4.addText(l.desc, { x: 6.0, y: 2.72 + i * 0.55, w: 3.4, h: 0.48, fontSize: 10.5, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

// Note
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.5, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s4.addText("注：Extraction Shooter 玩法较硬核，实际转化需配合上手引导内容（Tutorial / Gameplay 素材）降低认知门槛", { x: 0.7, y: 5.0, w: 8.5, h: 0.5, fontSize: 10, color: MUTED, fontFace: "DM Sans", valign: "middle" });

// ── Slide 5: 竞品分析 ──
let s5 = pres.addSlide();
s5.background = { color: DARK_BG };
s5.addText("竞品分析", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const comps = [
  { name: "Free Fire", ta: "MAU 100M+", region: "东南亚 · 拉美", gap: "射击，非 Extraction" },
  { name: "PUBG Mobile", ta: "MAU 50M+", region: "全球", gap: "20分钟局，移动端偏慢" },
  { name: "Warzone Mobile", ta: "发展中", region: "全球", gap: "CoD 品牌强，EA 合规" },
  { name: "Lumeshift", ta: "刚软启动", region: "BR · 印尼", gap: "MOBA-Shooter，非纯 Extraction" }
];
comps.forEach((c, i) => {
  const x = 0.5 + i * 2.35;
  s5.addShape(pres.shapes.RECTANGLE, { x, y: 1.15, w: 2.15, h: 1.95, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s5.addText(c.name, { x, y: 1.25, w: 2.15, h: 0.38, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s5.addText(c.ta, { x, y: 1.63, w: 2.15, h: 0.4, fontSize: 15, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center" });
  s5.addText(c.region, { x, y: 2.03, w: 2.15, h: 0.28, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s5.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 2.36, w: 1.85, h: 0.01, fill: { color: BORDER } });
  s5.addText("G&G 机会", { x, y: 2.42, w: 2.15, h: 0.25, fontSize: 8, color: SUCCESS, fontFace: "DM Sans", align: "center" });
  s5.addText(c.gap, { x: x + 0.1, y: 2.67, w: 1.95, h: 0.38, fontSize: 9, color: TEXT, fontFace: "DM Sans", align: "center" });
});

// Blue ocean
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.25, w: 9, h: 0.7, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s5.addText("💡 移动端 Extraction Shooter 赛道，目前无强力选手。Free Fire 虽是射击但非 Extraction 机制。", { x: 0.7, y: 3.25, w: 8.5, h: 0.7, fontSize: 12, color: TEXT, fontFace: "DM Sans", valign: "middle" });

// SWOT
s5.addText("SWOT", { x: 0.5, y: 4.1, w: 1, h: 0.4, fontSize: 11, bold: true, color: PRIMARY, fontFace: "Outfit" });
const swots = [
  { label: "S", color: SUCCESS, text: "5分钟节奏·中世纪题材差异化·英雄直购透明" },
  { label: "W", color: "f85149", text: "3.7评分需提升·品类认知需建立" },
  { label: "O", color: PRIMARY, text: "Extraction 空白·FF 玩家可转化" },
  { label: "T", color: WARNING, text: "Moonton 入局·FF 推类似模式" }
];
swots.forEach((s, i) => {
  const x = 1.6 + i * 2.0;
  s5.addShape(pres.shapes.RECTANGLE, { x, y: 4.1, w: 0.35, h: 0.35, fill: { color: s.color } });
  s5.addText(s.label, { x, y: 4.1, w: 0.35, h: 0.35, fontSize: 11, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s5.addText(s.text, { x: x + 0.45, y: 4.1, w: 1.5, h: 0.5, fontSize: 8, color: TEXT, fontFace: "DM Sans" });
});

// ── Slide 6: 趋势窗口 ──
let s6 = pres.addSlide();
s6.background = { color: DARK_BG };
s6.addText("趋势窗口", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const trendData = [
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

trendData.forEach((t, i) => {
  const x = 0.5 + i * 3.1;
  s6.addShape(pres.shapes.RECTANGLE, { x, y: 1.15, w: 2.9, h: 4.2, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s6.addText(t.flag + " " + t.country, { x, y: 1.22, w: 2.9, h: 0.42, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s6.addShape(pres.shapes.RECTANGLE, { x: x + 0.25, y: 1.7, w: 2.4, h: 0.01, fill: { color: BORDER } });

  t.items.forEach((item, j) => {
    const y = 1.8 + j * 1.15;
    if (item.star) {
      s6.addShape(pres.shapes.RECTANGLE, { x: x + 0.1, y, w: 2.7, h: 1.0, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
    }
    s6.addText(item.time, { x: x + 0.15, y: y + 0.05, w: 2.6, h: 0.28, fontSize: 9, bold: true, color: PRIMARY, fontFace: "DM Sans" });
    s6.addText(item.event, { x: x + 0.15, y: y + 0.3, w: 2.6, h: 0.3, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit" });
    s6.addText(item.note, { x: x + 0.15, y: y + 0.6, w: 2.6, h: 0.28, fontSize: 9, color: item.star ? SUCCESS : MUTED, fontFace: "DM Sans" });
  });
});

// ── Slide 7: 上线时间线 ──
let s7 = pres.addSlide();
s7.background = { color: DARK_BG };
s7.addText("上线时间线", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s7.addText("Phase 1 — Indonesia + Vietnam + Mexico 同步", { x: 0.5, y: 1.08, w: 9, h: 0.32, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const tl = [
  { phase: "T-4W", title: "封闭 Alpha", color: PRIMARY, desc: "200-500 人定向招募\n目标：D2 > 35%，服务器稳定\nKOL 种子内容开始产出" },
  { phase: "T-2W", title: "限量测试扩大", color: ACCENT, desc: "1000-3000 人\n开放 TikTok/YouTube KOL 内容\nDiscord 社区正式开放" },
  { phase: "T-0", title: "公测上线", color: SUCCESS, desc: "ID + VN + MX 同步\nGoogle UAC + TikTok 付费启动\nVtuber 直播 campaign" },
  { phase: "T+1M", title: "数据复盘", color: WARNING, desc: "R7 > 10% 达标\n开始 Phase 2 市场评估\nBattle Pass 第一赛季收官" }
];

s7.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.6, w: 0.04, h: 3.6, fill: { color: BORDER } });

tl.forEach((t, i) => {
  const y = 1.55 + i * 0.92;
  s7.addShape(pres.shapes.OVAL, { x: 1.37, y: y + 0.12, w: 0.3, h: 0.3, fill: { color: t.color } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y + 0.05, w: 0.8, h: 0.4, fill: { color: t.color } });
  s7.addText(t.phase, { x: 0.5, y: y + 0.05, w: 0.8, h: 0.4, fontSize: 10, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s7.addShape(pres.shapes.RECTANGLE, { x: 1.85, y, w: 7.6, h: 0.82, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s7.addText(t.title, { x: 2.0, y: y + 0.05, w: 2, h: 0.35, fontSize: 11, bold: true, color: t.color, fontFace: "Outfit" });
  s7.addText(t.desc, { x: 4.0, y: y + 0.05, w: 5.3, h: 0.72, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
});

// ── Slide 8: 渠道与预算 ──
let s8 = pres.addSlide();
s8.background = { color: DARK_BG };
s8.addText("渠道与预算分配", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s8.addText("Phase 1 参考预算：$50-100K/月（视测试数据调整）", { x: 0.5, y: 1.08, w: 9, h: 0.32, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const channels = [
  { name: "Google UAC", pct: 50, color: PRIMARY },
  { name: "TikTok 付费", pct: 20, color: "f0883e" },
  { name: "YouTube 付费", pct: 15, color: "f85149" },
  { name: "KOL/KOC 合作", pct: 10, color: ACCENT },
  { name: "Apple Search Ads", pct: 5, color: SUCCESS }
];

channels.forEach((c, i) => {
  const y = 1.6 + i * 0.68;
  s8.addText(c.name, { x: 0.5, y: y + 0.08, w: 2.2, h: 0.45, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
  s8.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: y + 0.1, w: 6.7, h: 0.38, fill: { color: SURFACE } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: y + 0.1, w: 6.7 * (c.pct / 100), h: 0.38, fill: { color: c.color } });
  s8.addText(c.pct + "%", { x: 9.55, y: y + 0.05, w: 0.8, h: 0.5, fontSize: 12, bold: true, color: c.color, fontFace: "Outfit", valign: "middle" });
});

s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.35, fill: { color: SURFACE } });
s8.addText("CPM 参考：YouTube $0.29  ·  TikTok $0.56  ·  UGC $2.31  ·  KOL $10-20", { x: 0.5, y: 5.0, w: 9, h: 0.35, fontSize: 10, color: MUTED, fontFace: "DM Sans", align: "center", valign: "middle" });

// ── Slide 9: KOL 策略 ──
let s9 = pres.addSlide();
s9.background = { color: DARK_BG };
s9.addText("KOL 策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.65, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s9.addText("核心洞察：泛游戏主播（Vtuber / General Gaming）> 垂类 Extraction 主播    Vtuber 直播：DAU 平均提升 26%", { x: 0.7, y: 1.1, w: 8.5, h: 0.65, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });

const kolTiers = [
  { tier: "T1", icon: "🎮", title: "泛游戏主播", desc: "Vtuber / General Gaming\n主力渠道", color: SUCCESS },
  { tier: "T2", icon: "🎯", title: "FPS 竞技 YouTuber", desc: "辅助渠道\n精准触达", color: PRIMARY },
  { tier: "T3", icon: "🐷", title: "本地 Meme 创作者", desc: "病毒传播\n低成本高回报", color: ACCENT }
];

kolTiers.forEach((k, i) => {
  const x = 0.5 + i * 3.1;
  s9.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 2.9, h: 1.7, fill: { color: SURFACE }, line: { color: k.color, width: 1 } });
  s9.addShape(pres.shapes.RECTANGLE, { x: x + 0.1, y: 1.98, w: 0.5, h: 0.28, fill: { color: k.color } });
  s9.addText(k.tier, { x: x + 0.1, y: 1.98, w: 0.5, h: 0.28, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s9.addText(k.icon, { x, y: 2.0, w: 2.9, h: 0.48, fontSize: 22, align: "center" });
  s9.addText(k.title, { x, y: 2.5, w: 2.9, h: 0.38, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s9.addText(k.desc, { x: x + 0.1, y: 2.88, w: 2.7, h: 0.6, fontSize: 10, color: MUTED, fontFace: "DM Sans", align: "center" });
});

// KOC
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.75, w: 9, h: 1.75, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s9.addText("KOC Star Cultivation Program", { x: 0.7, y: 3.85, w: 4, h: 0.35, fontSize: 12, bold: true, color: TEXT, fontFace: "Outfit" });
s9.addText("主题：Easy Play, Easy Win", { x: 5, y: 3.85, w: 4.3, h: 0.35, fontSize: 11, color: SUCCESS, fontFace: "DM Sans", align: "right" });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 4.25, w: 8.5, h: 0.01, fill: { color: BORDER } });

const kocItems = [
  "奖励：5K Gold/视频，最多 4 视频/周期",
  "Top 10 获得官方推广 + $50 ad boost",
  "每周检查 performance metrics，下滑时给 Special Mission",
  "核心：给方向 + 给资源 + 持续沟通"
];
kocItems.forEach((item, i) => {
  s9.addText("• " + item, { x: 0.7, y: 4.3 + i * 0.28, w: 8.5, h: 0.28, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
});

// ── Slide 10: OM 数据预估 ──
let s10 = pres.addSlide();
s10.background = { color: DARK_BG };
s10.addText("OM 数据预估", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const tblData = [
  [
    { text: "市场", options: { bold: true, color: "ffffff", fill: { color: "1a3a5c" }, align: "center" } },
    { text: "目标 CPR", options: { bold: true, color: "ffffff", fill: { color: "1a3a5c" }, align: "center" } },
    { text: "目标 R2", options: { bold: true, color: "ffffff", fill: { color: "1a3a5c" }, align: "center" } },
    { text: "目标 R7", options: { bold: true, color: "ffffff", fill: { color: "1a3a5c" }, align: "center" } },
    { text: "自然占比", options: { bold: true, color: "ffffff", fill: { color: "1a3a5c" }, align: "center" } }
  ],
  [
    { text: "🇮🇩 印尼", options: { color: TEXT, fill: { color: SURFACE }, align: "left" } },
    { text: "$0.40-0.60", options: { color: WARNING, fill: { color: SURFACE }, align: "center" } },
    { text: ">38%", options: { color: TEXT, fill: { color: SURFACE }, align: "center" } },
    { text: ">10%", options: { color: TEXT, fill: { color: SURFACE }, align: "center" } },
    { text: ">35%", options: { color: SUCCESS, fill: { color: SURFACE }, align: "center" } }
  ],
  [
    { text: "🇻🇳 越南", options: { color: TEXT, fill: { color: DARK_BG }, align: "left" } },
    { text: "$0.30-0.40", options: { color: WARNING, fill: { color: DARK_BG }, align: "center" } },
    { text: ">35%", options: { color: TEXT, fill: { color: DARK_BG }, align: "center" } },
    { text: ">10%", options: { color: TEXT, fill: { color: DARK_BG }, align: "center" } },
    { text: ">35%", options: { color: SUCCESS, fill: { color: DARK_BG }, align: "center" } }
  ],
  [
    { text: "🇲🇽 墨西哥", options: { color: TEXT, fill: { color: SURFACE }, align: "left" } },
    { text: "$0.25-0.35", options: { color: WARNING, fill: { color: SURFACE }, align: "center" } },
    { text: ">32%", options: { color: TEXT, fill: { color: SURFACE }, align: "center" } },
    { text: ">8%", options: { color: TEXT, fill: { color: SURFACE }, align: "center" } },
    { text: ">30%", options: { color: SUCCESS, fill: { color: SURFACE }, align: "center" } }
  ]
];

s10.addTable(tblData, {
  x: 0.5, y: 1.15, w: 9, h: 1.6,
  fontSize: 11, fontFace: "DM Sans",
  border: { pt: 0.5, color: BORDER },
  colW: [2.2, 1.8, 1.5, 1.5, 2.0]
});

// Downloads & Revenue
const estData = [
  {
    title: "6个月累计下载",
    items: [["乐观", "3-5M"], ["中性", "1.5-2.5M"], ["保守", "0.5-1M"]],
    color: PRIMARY
  },
  {
    title: "月流水估算（中性场景）",
    items: [["首月", "$80-150K"], ["3个月", "$200-400K"], ["6个月", "$300-600K"]],
    color: SUCCESS
  }
];

estData.forEach((est, i) => {
  const x = 0.5 + i * 4.6;
  s10.addShape(pres.shapes.RECTANGLE, { x, y: 2.95, w: 4.4, h: 2.4, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s10.addText(est.title, { x: x + 0.15, y: 3.05, w: 4.1, h: 0.4, fontSize: 11, bold: true, color: est.color, fontFace: "Outfit" });
  est.items.forEach((item, j) => {
    const y = 3.55 + j * 0.58;
    s10.addText(item[0], { x: x + 0.15, y, w: 1.5, h: 0.45, fontSize: 10, color: MUTED, fontFace: "DM Sans", valign: "middle" });
    s10.addText(item[1], { x: x + 1.7, y, w: 2.5, h: 0.45, fontSize: 16, bold: true, color: est.color, fontFace: "Outfit", valign: "middle" });
  });
});

// ── Save ──
pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GNG_Game_Publishing_Plan_v2.pptx" })
  .then(() => console.log("DONE: GNG_Game_Publishing_Plan_v2.pptx"))
  .catch(err => console.error("ERROR:", err.message));
