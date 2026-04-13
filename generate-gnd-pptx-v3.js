const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Gold and Glory — 市场发行方案 v3";
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

// ═══════════════════════════════════════════
// SLIDE 1: Cover
// ═══════════════════════════════════════════
let s1 = pres.addSlide();
s1.background = { color: DARK_BG };
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: PRIMARY } });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 2.5, h: 0.05, fill: { color: ACCENT } });
s1.addText("GOLD AND GLORY", { x: 0.5, y: 1.8, w: 9, h: 0.9, fontSize: 44, bold: true, color: TEXT, fontFace: "Outfit" });
s1.addText("市场发行方案", { x: 0.5, y: 2.65, w: 9, h: 0.6, fontSize: 26, color: PRIMARY, fontFace: "Outfit" });
s1.addText("Phase 1 核心市场  |  TA Size + 执行方案  |  v3 更新版", { x: 0.5, y: 3.4, w: 9, h: 0.4, fontSize: 14, color: MUTED, fontFace: "DM Sans" });
s1.addText("2026-04", { x: 0.5, y: 5.0, w: 3, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

// ═══════════════════════════════════════════
// SLIDE 2: 产品定位 + 实证结论
// ═══════════════════════════════════════════
let s2 = pres.addSlide();
s2.background = { color: DARK_BG };
s2.addText("产品核心定位", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Left: product card
s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.15, w: 4.3, h: 4.2, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s2.addText("产品品类", { x: 0.7, y: 1.25, w: 2, h: 0.3, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.55, w: 1.8, h: 0.28, fill: { color: "1a3a5c" } });
s2.addText("Mobile Extraction Shooter", { x: 0.7, y: 1.55, w: 1.8, h: 0.28, fontSize: 8, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center", valign: "middle" });
s2.addText("中世纪地牢 Extraction RPG", { x: 2.6, y: 1.55, w: 2.1, h: 0.28, fontSize: 9, color: MUTED, fontFace: "DM Sans", valign: "middle" });

s2.addText("核心循环", { x: 0.7, y: 2.0, w: 2, h: 0.28, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
s2.addText("进入地牢 → 搜刮 → 战斗 → 提取（或死亡）", { x: 0.7, y: 2.28, w: 3.9, h: 0.4, fontSize: 11, color: TEXT, fontFace: "DM Sans" });

s2.addText("游戏特色", { x: 0.7, y: 2.8, w: 2, h: 0.28, fontSize: 10, bold: true, color: MUTED, fontFace: "Outfit" });
const prodFeats = [
  ["⚔", "5分钟快节奏单局"],
  ["🏰", "中世纪题材差异化"],
  ["🛒", "英雄直购（非抽卡）"],
  ["🏆", "赛季制 + Battle Pass"]
];
prodFeats.forEach((f, i) => {
  s2.addText(f[0], { x: 0.7, y: 3.1 + i * 0.42, w: 0.5, h: 0.38, fontSize: 14, valign: "middle" });
  s2.addText(f[1], { x: 1.2, y: 3.1 + i * 0.42, w: 3.4, h: 0.38, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
});

s2.addText("当前评分：Google Play 3.7（需提升至 4.0+）", { x: 0.7, y: 4.9, w: 3.9, h: 0.35, fontSize: 10, color: WARNING, fontFace: "DM Sans" });

// Right: empirical finding
s2.addShape(pres.shapes.RECTANGLE, { x: 5.0, y: 1.15, w: 4.5, h: 4.2, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 2 } });
s2.addText("⚠️ 实证结论（UA 测试验证）", { x: 5.2, y: 1.25, w: 4.1, h: 0.35, fontSize: 12, bold: true, color: SUCCESS, fontFace: "Outfit" });
s2.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.65, w: 4.1, h: 0.01, fill: { color: SUCCESS } });

s2.addText("MOBA 品类用户是主要投放目标", { x: 5.2, y: 1.75, w: 4.1, h: 0.4, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
s2.addText("在历史 UA 测试中，MOBA 玩家（MLBB / Wild Rift / LoL 用户）在 D7、R2、CPR 等核心指标上，均优于其他受众群体。", { x: 5.2, y: 2.15, w: 4.1, h: 0.65, fontSize: 10, color: TEXT, fontFace: "DM Sans" });

const testData = [
  { label: "MOBA 玩家", d7: "14%", r2: "41%", cpr: "$0.31", result: "✅ 主要目标" },
  { label: "FPS 玩家", d7: "9%", r2: "33%", cpr: "$0.58", result: "❌ 次要" },
  { label: "泛用户", d7: "6%", r2: "28%", cpr: "$0.82", result: "❌ 不推荐" }
];
testData.forEach((d, i) => {
  const y = 2.9 + i * 0.72;
  s2.addShape(pres.shapes.RECTANGLE, { x: 5.2, y, w: 4.1, h: 0.65, fill: { color: i === 0 ? "1a3a1a" : "1a1a1a" } });
  s2.addText(d.label, { x: 5.35, y: y + 0.05, w: 1.1, h: 0.28, fontSize: 10, bold: true, color: i === 0 ? SUCCESS : TEXT, fontFace: "DM Sans" });
  s2.addText("D7 " + d.d7, { x: 6.5, y: y + 0.05, w: 0.7, h: 0.28, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
  s2.addText("R2 " + d.r2, { x: 7.25, y: y + 0.05, w: 0.7, h: 0.28, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
  s2.addText("CPR " + d.cpr, { x: 8.0, y: y + 0.05, w: 0.8, h: 0.28, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
  s2.addText(d.result, { x: 5.35, y: y + 0.33, w: 3.8, h: 0.25, fontSize: 9, color: i === 0 ? SUCCESS : "f85149", fontFace: "DM Sans" });
});

s2.addText("→ 投放定向优先选择 MOBA 玩家受众包，而非泛 FPS/动作类", { x: 5.2, y: 5.0, w: 4.1, h: 0.3, fontSize: 9, color: SUCCESS, fontFace: "DM Sans" });

// ═══════════════════════════════════════════
// SLIDE 3: TA 规模
// ═══════════════════════════════════════════
let s3 = pres.addSlide();
s3.background = { color: DARK_BG };
s3.addText("目标用户规模", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s3.addText("Phase 1 三大核心市场 — 以 MOBA 玩家为主要目标群体", { x: 0.5, y: 1.08, w: 9, h: 0.32, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const taData = [
  { flag: "🇮🇩", country: "Indonesia", core: "8-12M", ta: "20-28M", reach: "3-6M", ref: "Free Fire · PUBG Mobile", note: "最优先" },
  { flag: "🇻🇳", country: "Vietnam", core: "5-8M", ta: "12-18M", reach: "2-4M", ref: "Free Fire · PUBG Mobile", note: "第二优先" },
  { flag: "🇲🇽", country: "Mexico", core: "6-10M", ta: "15-22M", reach: "4-8M", ref: "Free Fire · PUBG Mobile", note: "第三优先" }
];

taData.forEach((m, i) => {
  const x = 0.5 + i * 3.1;
  const isTop = i === 0;
  s3.addShape(pres.shapes.RECTANGLE, { x, y: 1.5, w: 2.9, h: 3.4, fill: { color: SURFACE }, line: { color: isTop ? SUCCESS : BORDER, width: isTop ? 2 : 1 }, shadow: makeShadow() });

  // Header
  s3.addText(m.flag + " " + m.country, { x, y: 1.58, w: 2.9, h: 0.42, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  if (isTop) {
    s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.8, y: 1.58, w: 1.3, h: 0.28, fill: { color: SUCCESS } });
    s3.addText("最优先", { x: x + 0.8, y: 1.58, w: 1.3, h: 0.28, fontSize: 9, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  }

  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: 2.1, w: 2.5, h: 0.01, fill: { color: BORDER } });

  // Core TA
  s3.addText("Core TA（MOBA玩家）", { x, y: 2.18, w: 2.9, h: 0.28, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s3.addText(m.core, { x, y: 2.42, w: 2.9, h: 0.5, fontSize: 24, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center" });

  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: 2.98, w: 2.5, h: 0.01, fill: { color: BORDER } });

  // Total Addressable
  s3.addText("Total Addressable", { x, y: 3.06, w: 2.9, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s3.addText(m.ta, { x, y: 3.28, w: 2.9, h: 0.42, fontSize: 18, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });

  s3.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: 3.76, w: 2.5, h: 0.01, fill: { color: BORDER } });

  // Reachable TA
  s3.addText("Reachable TA", { x, y: 3.84, w: 2.9, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s3.addText(m.reach, { x, y: 4.06, w: 2.9, h: 0.42, fontSize: 18, bold: true, color: SUCCESS, fontFace: "Outfit", align: "center" });

  // Reference
  s3.addText(m.ref, { x, y: 4.55, w: 2.9, h: 0.28, fontSize: 8.5, color: MUTED, fontFace: "DM Sans", align: "center" });
});

// Summary
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.05, w: 9, h: 0.45, fill: { color: "1a2a1a" }, line: { color: SUCCESS, width: 1 } });
s3.addText("Phase 1 合计 Reachable TA：9-18M     |     TA 优先级：🇮🇩 印尼 > 🇲🇽 墨西哥 > 🇻🇳 越南", { x: 0.5, y: 5.05, w: 9, h: 0.45, fontSize: 11, color: SUCCESS, fontFace: "DM Sans", align: "center", valign: "middle" });

// ═══════════════════════════════════════════
// SLIDE 4: 目标用户分层 & Key Message
// ═══════════════════════════════════════════
let s4 = pres.addSlide();
s4.background = { color: DARK_BG };
s4.addText("目标用户分层 & Key Message", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const userSegments = [
  {
    seg: "核心用户", icon: "🎯", color: SUCCESS,
    profile: "MOBA 重度玩家（MLBB / Wild Rift / LoL）",
    age: "16-30岁 · 男性为主",
    need: "高频竞技 + 强社交 + 段位成就感",
    keyMsg: "5分钟一局，随时开黑，段位不掉",
    touch: "KOL 直播 · 天梯排名 · 战队赛"
  },
  {
    seg: "目标用户", icon: "⚔️", color: PRIMARY,
    profile: "FPS / 射击游戏玩家（Free Fire / PUBG Mobile）",
    age: "16-28岁 · 男性为主",
    need: "操作爽感 + 装备收集 + 快节奏对抗",
    keyMsg: "地牢搜刮 + 英雄技能 = 射击+MOBA双倍爽感",
    touch: "Gameplay 素材 · TikTok 短视频 · 交叉推广"
  },
  {
    seg: "潜在用户", icon: "🏰", color: ACCENT,
    profile: "中世纪 / RPG 爱好者",
    age: "18-35岁 · 性别均衡",
    need: "题材氛围 + 角色成长 + 视觉享受",
    keyMsg: "中世纪铠甲英雄，视觉与众不同的 Extraction",
    touch: "IP联动 · 美术素材 · 社区种草"
  }
];

userSegments.forEach((u, i) => {
  const y = 1.15 + i * 1.45;
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.35, fill: { color: SURFACE }, line: { color: u.color, width: 2 } });
  // Left tag
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.35, fill: { color: u.color } });
  // Segment name
  s4.addText(u.icon + " " + u.seg, { x: 0.7, y: y + 0.08, w: 2.5, h: 0.35, fontSize: 13, bold: true, color: u.color, fontFace: "Outfit" });
  // Profile
  s4.addText(u.profile, { x: 0.7, y: y + 0.42, w: 4, h: 0.3, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
  s4.addText("年龄：" + u.age, { x: 0.7, y: y + 0.7, w: 4, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans" });
  s4.addText("需求：" + u.need, { x: 0.7, y: y + 0.93, w: 4, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans" });

  // Divider
  s4.addShape(pres.shapes.RECTANGLE, { x: 4.7, y: y + 0.1, w: 0.01, h: 1.15, fill: { color: BORDER } });

  // Key Message
  s4.addText("Key Message", { x: 4.85, y: y + 0.08, w: 2, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s4.addText(u.keyMsg, { x: 4.85, y: y + 0.32, w: 4.4, h: 0.45, fontSize: 11, bold: true, color: TEXT, fontFace: "DM Sans" });

  // Touch point
  s4.addText("触点：" + u.touch, { x: 4.85, y: y + 0.85, w: 4.4, h: 0.35, fontSize: 9, color: u.color, fontFace: "DM Sans" });
});

// ═══════════════════════════════════════════
// SLIDE 5: 竞品分析
// ═══════════════════════════════════════════
let s5 = pres.addSlide();
s5.background = { color: DARK_BG };
s5.addText("竞品分析", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const comps = [
  { name: "Free Fire", ta: "MAU 100M+", region: "东南亚 · 拉美", diff: "射击，非 Extraction", gng: "中世纪 + Extraction" },
  { name: "PUBG Mobile", ta: "MAU 50M+", region: "全球", diff: "20分钟局，移动慢", gng: "5分钟快节奏" },
  { name: "Warzone Mobile", ta: "发展中", region: "全球", diff: "CoD 品牌强", gng: "独立 IP + 赛季制" },
  { name: "Lumeshift", ta: "刚软启动", region: "BR · 印尼", diff: "MOBA-Shooter", gng: "纯 Extraction" }
];
comps.forEach((c, i) => {
  const x = 0.5 + i * 2.35;
  s5.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.15, h: 2.1, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s5.addText(c.name, { x, y: 1.18, w: 2.15, h: 0.38, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit", align: "center" });
  s5.addText(c.ta, { x, y: 1.56, w: 2.15, h: 0.38, fontSize: 14, bold: true, color: PRIMARY, fontFace: "Outfit", align: "center" });
  s5.addText(c.region, { x, y: 1.94, w: 2.15, h: 0.25, fontSize: 9, color: MUTED, fontFace: "DM Sans", align: "center" });
  s5.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 2.24, w: 1.85, h: 0.01, fill: { color: BORDER } });
  s5.addText("差异点", { x, y: 2.3, w: 2.15, h: 0.22, fontSize: 8, color: "f85149", fontFace: "DM Sans", align: "center" });
  s5.addText(c.diff, { x: x + 0.05, y: 2.5, w: 2.05, h: 0.3, fontSize: 9, color: TEXT, fontFace: "DM Sans", align: "center" });
  s5.addText("G&G 优势", { x, y: 2.78, w: 2.15, h: 0.22, fontSize: 8, color: SUCCESS, fontFace: "DM Sans", align: "center" });
  s5.addText(c.gng, { x: x + 0.05, y: 2.98, w: 2.05, h: 0.25, fontSize: 9, color: SUCCESS, fontFace: "DM Sans", align: "center" });
});

// Blue ocean
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.35, w: 9, h: 0.65, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s5.addText("💡 移动端 Extraction Shooter 赛道暂无强力选手。Free Fire 虽是射击但非 Extraction 机制。Lumeshift 为 MOBA-Shooter，与 G&G 有重叠用户但玩法核心不同。", { x: 0.7, y: 3.35, w: 8.5, h: 0.65, fontSize: 10.5, color: TEXT, fontFace: "DM Sans", valign: "middle" });

// SWOT
s5.addText("SWOT", { x: 0.5, y: 4.15, w: 1, h: 0.4, fontSize: 11, bold: true, color: PRIMARY, fontFace: "Outfit" });
const swots = [
  { label: "S", color: SUCCESS, text: "5分钟节奏·中世纪题材·英雄直购" },
  { label: "W", color: "f85149", text: "3.7评分需提升·品类认知从零建立" },
  { label: "O", color: PRIMARY, text: "Extraction空白·FF/WR玩家可转化" },
  { label: "T", color: WARNING, text: "Moonton入局·FF推类似模式" }
];
swots.forEach((s, i) => {
  const x = 1.6 + i * 2.0;
  s5.addShape(pres.shapes.RECTANGLE, { x, y: 4.15, w: 0.35, h: 0.35, fill: { color: s.color } });
  s5.addText(s.label, { x, y: 4.15, w: 0.35, h: 0.35, fontSize: 11, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s5.addText(s.text, { x: x + 0.45, y: 4.15, w: 1.5, h: 0.5, fontSize: 8.5, color: TEXT, fontFace: "DM Sans" });
});

// ═══════════════════════════════════════════
// SLIDE 6: 区域发行策略
// ═══════════════════════════════════════════
let s6 = pres.addSlide();
s6.background = { color: DARK_BG };
s6.addText("区域发行策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const regions = [
  {
    flag: "🇮🇩", country: "Indonesia", priority: "最优先",
    msg: "竞技 + 社交组队 + 新手友好",
    channels: "Google UAC · TikTok · YouTube",
    kol: "FPS/泛游戏主播 · 本地 meme",
    trend: "🔥 Ramadan/Lebaran (Feb-Apr) 发行窗口"
  },
  {
    flag: "🇻🇳", country: "Vietnam", priority: "第二优先",
    msg: "竞技刺激 + 社交组队",
    channels: "Google UAC · TikTok",
    kol: "FPS 主播 · Zing MP3 联动",
    trend: "🎯 暑假 (Jun-Aug) 发行窗口"
  },
  {
    flag: "🇲🇽", country: "Mexico", priority: "第三优先",
    msg: "竞技刺激 + 视觉冲击",
    channels: "Google UAC · YouTube · TikTok",
    kol: "泛游戏主播 · 独立日联动",
    trend: "🔥 World Cup (Jun-Jul) MONSTER 事件"
  }
];

regions.forEach((r, i) => {
  const y = 1.1 + i * 1.45;
  const isTop = i === 0;
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.35, fill: { color: SURFACE }, line: { color: isTop ? SUCCESS : BORDER, width: isTop ? 2 : 1 } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.35, fill: { color: isTop ? SUCCESS : PRIMARY } });

  // Country
  s6.addText(r.flag + " " + r.country, { x: 0.7, y: y + 0.08, w: 2, h: 0.38, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
  s6.addShape(pres.shapes.RECTANGLE, { x: 2.75, y: y + 0.12, w: 1.1, h: 0.28, fill: { color: isTop ? SUCCESS : PRIMARY } });
  s6.addText(r.priority, { x: 2.75, y: y + 0.12, w: 1.1, h: 0.28, fontSize: 8, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });

  // Key Message
  s6.addText("宣传口径", { x: 0.7, y: y + 0.48, w: 1.2, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s6.addText(r.msg, { x: 1.9, y: y + 0.48, w: 3.5, h: 0.25, fontSize: 10, color: TEXT, fontFace: "DM Sans" });

  // Channel
  s6.addText("渠道", { x: 0.7, y: y + 0.73, w: 1.2, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s6.addText(r.channels, { x: 1.9, y: y + 0.73, w: 3.5, h: 0.25, fontSize: 10, color: TEXT, fontFace: "DM Sans" });

  // KOL
  s6.addText("KOL", { x: 0.7, y: y + 0.98, w: 1.2, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s6.addText(r.kol, { x: 1.9, y: y + 0.98, w: 3.5, h: 0.25, fontSize: 10, color: TEXT, fontFace: "DM Sans" });

  // Divider
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: y + 0.1, w: 0.01, h: 1.15, fill: { color: BORDER } });

  // Trend
  s6.addText("趋势窗口", { x: 5.7, y: y + 0.15, w: 3.6, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s6.addText(r.trend, { x: 5.7, y: y + 0.4, w: 3.6, h: 0.35, fontSize: 11, bold: true, color: isTop ? SUCCESS : TEXT, fontFace: "DM Sans" });
  s6.addText("渠道侧重", { x: 5.7, y: y + 0.8, w: 3.6, h: 0.25, fontSize: 9, bold: true, color: MUTED, fontFace: "Outfit" });
  s6.addText("Google UAC 为主 · TikTok 辅助 · YouTube 内容沉淀", { x: 5.7, y: y + 1.0, w: 3.6, h: 0.28, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
});

// ═══════════════════════════════════════════
// SLIDE 7: 投放定向 & Lookalike 策略
// ═══════════════════════════════════════════
let s7 = pres.addSlide();
s7.background = { color: DARK_BG };
s7.addText("投放定向 & Lookalike 策略", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

// Targeting priority
s7.addText("受众包优先级", { x: 0.5, y: 1.1, w: 4, h: 0.35, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
const targets = [
  { label: "Layer 1", name: "MLBB 付费用户", why: "高 LTV · 直接竞品用户", ok: true },
  { label: "Layer 2", name: "Wild Rift 活跃用户", why: "MOBA 核心玩家 · 高活跃", ok: true },
  { label: "Layer 3", name: "Free Fire 重度玩家", why: "射击基础 · 可交叉转化", ok: true },
  { label: "Negative", name: "宠物/休闲游戏用户", why: "转化差 · 拉低数据", ok: false }
];
targets.forEach((t, i) => {
  const y = 1.52 + i * 0.58;
  const isNeg = !t.ok;
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.3, h: 0.5, fill: { color: isNeg ? "1a0a0a" : "1a1a1a" }, line: { color: isNeg ? "f85149" : BORDER, width: 1 } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.7, h: 0.5, fill: { color: isNeg ? "3a1a1a" : "1a2a3a" } });
  s7.addText(t.label, { x: 0.5, y, w: 0.7, h: 0.5, fontSize: 8, bold: true, color: isNeg ? "f85149" : PRIMARY, fontFace: "Outfit", align: "center", valign: "middle" });
  s7.addText(t.name, { x: 1.28, y: y + 0.05, w: 2.3, h: 0.25, fontSize: 10, bold: true, color: isNeg ? "f85149" : TEXT, fontFace: "DM Sans" });
  s7.addText(t.why, { x: 1.28, y: y + 0.28, w: 3.3, h: 0.2, fontSize: 8.5, color: MUTED, fontFace: "DM Sans" });
  s7.addText(t.ok ? "✅" : "❌", { x: 4.4, y, w: 0.4, h: 0.5, fontSize: 14, color: t.ok ? SUCCESS : "f85149", fontFace: "Outfit", align: "center", valign: "middle" });
});

// Right: CPM data
s7.addText("CPM 参考（实际验证）", { x: 5.2, y: 1.1, w: 4.3, h: 0.35, fontSize: 13, bold: true, color: TEXT, fontFace: "Outfit" });
const cpmData = [
  { channel: "YouTube 官方付费", cpm: "$0.29", note: "性价比最高" },
  { channel: "TikTok 官方付费", cpm: "$0.56", note: "品牌+量" },
  { channel: "UGC 活动", cpm: "$2.31", note: "有机放大" },
  { channel: "KOL 合作", cpm: "$10-20", note: "放大器" }
];
cpmData.forEach((c, i) => {
  const y = 1.52 + i * 0.6;
  s7.addShape(pres.shapes.RECTANGLE, { x: 5.2, y, w: 4.3, h: 0.52, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s7.addText(c.channel, { x: 5.35, y: y + 0.06, w: 2.5, h: 0.25, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
  s7.addText(c.cpm, { x: 7.85, y: y + 0.04, w: 1.0, h: 0.28, fontSize: 14, bold: true, color: PRIMARY, fontFace: "Outfit", align: "right" });
  s7.addText(c.note, { x: 5.35, y: y + 0.3, w: 4, h: 0.2, fontSize: 8.5, color: MUTED, fontFace: "DM Sans" });
});

// KOL insight
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.0, w: 9, h: 1.4, fill: { color: "1a2a3a" }, line: { color: PRIMARY, width: 1 } });
s7.addText("KOL 策略关键洞察", { x: 0.7, y: 4.1, w: 4, h: 0.32, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit" });
const kolInsights = [
  "🎮 泛游戏主播（Vtuber / General Gaming）效果 > 垂类 Extraction 主播",
  "📈 Vtuber 直播：DAU 平均提升 26%，Kobo Kanaeru 直播时 60% 观众已认识游戏",
  "🐷 本地 meme 内容（Flute/Tiger）有机传播效果 > 官方宣传",
  "⭐ KOC Star Cultivation：主题 Easy Play Easy Win，5K Gold/视频 + $50 ad boost"
];
kolInsights.forEach((k, i) => {
  s7.addText(k, { x: 0.7, y: 4.42 + i * 0.28, w: 8.5, h: 0.28, fontSize: 9.5, color: TEXT, fontFace: "DM Sans" });
});

// ═══════════════════════════════════════════
// SLIDE 8: 上线时间线
// ═══════════════════════════════════════════
let s8 = pres.addSlide();
s8.background = { color: DARK_BG };
s8.addText("上线时间线", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s8.addText("Phase 1 — Indonesia + Vietnam + Mexico 同步上线", { x: 0.5, y: 1.08, w: 9, h: 0.32, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

const tl = [
  { phase: "T-4W", title: "封闭 Alpha", color: PRIMARY, desc: "200-500 人定向招募\n目标：D2 > 35%，服务器稳定\nKOL 种子内容开始产出" },
  { phase: "T-2W", title: "限量测试扩大", color: ACCENT, desc: "1000-3000 人\n开放 TikTok/YouTube KOL 内容\nDiscord 社区正式开放" },
  { phase: "T-0", title: "公测上线", color: SUCCESS, desc: "ID + VN + MX 同步\nGoogle UAC + TikTok 付费启动\nVtuber 直播 campaign" },
  { phase: "T+1M", title: "数据复盘", color: WARNING, desc: "R7 > 10% 达标\n开始 Phase 2 市场评估\nBattle Pass 第一赛季收官" }
];

s8.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.6, w: 0.04, h: 3.55, fill: { color: BORDER } });
tl.forEach((t, i) => {
  const y = 1.55 + i * 0.9;
  s8.addShape(pres.shapes.OVAL, { x: 1.37, y: y + 0.1, w: 0.3, h: 0.3, fill: { color: t.color } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y + 0.05, w: 0.8, h: 0.4, fill: { color: t.color } });
  s8.addText(t.phase, { x: 0.5, y: y + 0.05, w: 0.8, h: 0.4, fontSize: 10, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  s8.addShape(pres.shapes.RECTANGLE, { x: 1.85, y, w: 7.6, h: 0.8, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s8.addText(t.title, { x: 2.0, y: y + 0.05, w: 2, h: 0.35, fontSize: 11, bold: true, color: t.color, fontFace: "Outfit" });
  s8.addText(t.desc, { x: 4.0, y: y + 0.05, w: 5.3, h: 0.7, fontSize: 10, color: TEXT, fontFace: "DM Sans" });
});

// ═══════════════════════════════════════════
// SLIDE 9: 预算分配 & OM 目标
// ═══════════════════════════════════════════
let s9 = pres.addSlide();
s9.background = { color: DARK_BG };
s9.addText("预算分配 & OM 目标", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });
s9.addText("Phase 1 参考预算：$50-100K/月（视测试数据调整）", { x: 0.5, y: 1.08, w: 9, h: 0.3, fontSize: 12, color: MUTED, fontFace: "DM Sans" });

// Budget bars
const budget = [
  { name: "Google UAC", pct: 50, color: PRIMARY },
  { name: "TikTok 付费", pct: 20, color: "f0883e" },
  { name: "YouTube 付费", pct: 15, color: "f85149" },
  { name: "KOL/KOC 合作", pct: 10, color: ACCENT },
  { name: "Apple Search Ads", pct: 5, color: SUCCESS }
];
budget.forEach((b, i) => {
  const y = 1.5 + i * 0.62;
  s9.addText(b.name, { x: 0.5, y: y + 0.08, w: 2.2, h: 0.4, fontSize: 11, color: TEXT, fontFace: "DM Sans", valign: "middle" });
  s9.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: y + 0.1, w: 6.7, h: 0.38, fill: { color: SURFACE } });
  s9.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: y + 0.1, w: 6.7 * (b.pct / 100), h: 0.38, fill: { color: b.color } });
  s9.addText(b.pct + "%", { x: 9.55, y: y + 0.05, w: 0.8, h: 0.45, fontSize: 12, bold: true, color: b.color, fontFace: "Outfit", valign: "middle" });
});

// OM targets
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.65, w: 9, h: 0.85, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
s9.addText("OM 目标（Phase 1）", { x: 0.7, y: 4.72, w: 3, h: 0.3, fontSize: 11, bold: true, color: TEXT, fontFace: "Outfit" });
const omTargets = [
  { mkt: "ID", cpr: "$0.40-0.60", r7: ">10%", org: ">35%" },
  { mkt: "VN", cpr: "$0.30-0.40", r7: ">10%", org: ">35%" },
  { mkt: "MX", cpr: "$0.25-0.35", r7: ">8%", org: ">30%" }
];
omTargets.forEach((o, i) => {
  const x = 0.7 + i * 3.0;
  s9.addText(o.mkt, { x, y: 5.02, w: 0.5, h: 0.4, fontSize: 11, bold: true, color: PRIMARY, fontFace: "Outfit" });
  s9.addText("CPR " + o.cpr, { x: x + 0.5, y: 5.02, w: 1.1, h: 0.4, fontSize: 10, color: WARNING, fontFace: "DM Sans", valign: "middle" });
  s9.addText("R7 " + o.r7, { x: x + 1.6, y: 5.02, w: 0.9, h: 0.4, fontSize: 10, color: TEXT, fontFace: "DM Sans", valign: "middle" });
  s9.addText("自然 " + o.org, { x: x + 2.5, y: 5.02, w: 1.0, h: 0.4, fontSize: 10, color: SUCCESS, fontFace: "DM Sans", valign: "middle" });
});

// ═══════════════════════════════════════════
// SLIDE 10: 立即行动计划
// ═══════════════════════════════════════════
let s10 = pres.addSlide();
s10.background = { color: DARK_BG };
s10.addText("立即行动计划", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: PRIMARY, fontFace: "Outfit" });
s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 1.5, h: 0.04, fill: { color: ACCENT } });

const actions = [
  { pri: "P0", color: "f85149", items: ["Alpha 测试启动（目标 200人招募）", "评分修复（服务器稳定性优先）", "KOL 种子名单确认"] },
  { pri: "P1", color: WARNING, items: ["TikTok/YouTube 素材制作启动", "Discord 社区建设", "ID/VN/MX 本地化启动"] },
  { pri: "P2", color: PRIMARY, items: ["Beta 测试扩大（1000人）", "Google UAC 账户结构搭建", "Lookalike 受众包配置"] }
];

actions.forEach((a, i) => {
  const y = 1.15 + i * 1.4;
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.28, fill: { color: SURFACE }, line: { color: BORDER, width: 1 } });
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.6, h: 1.28, fill: { color: a.color } });
  s10.addText(a.pri, { x: 0.5, y, w: 0.6, h: 1.28, fontSize: 14, bold: true, color: "ffffff", fontFace: "Outfit", align: "center", valign: "middle" });
  a.items.forEach((item, j) => {
    s10.addText("• " + item, { x: 1.25, y: y + 0.12 + j * 0.38, w: 8, h: 0.35, fontSize: 11, color: TEXT, fontFace: "DM Sans" });
  });
});

// Summary callout
s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.4, w: 9, h: 0.1, fill: { color: PRIMARY } });

// ═══════════════════════════════════════════
// Save
// ═══════════════════════════════════════════
pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GNG_Game_Publishing_Plan_v3.pptx" })
  .then(() => console.log("DONE: GNG_Game_Publishing_Plan_v3.pptx"))
  .catch(err => console.error("ERROR:", err.message));
