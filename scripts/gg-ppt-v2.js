const pptxgen = require("pptxgenjs");

const C = {
  darkBg:   "1A1A2E",
  midBg:    "16213E",
  gold:     "D4AF37",
  lightGold:"F0D060",
  cream:    "FDF6E3",
  white:    "FFFFFF",
  muted:    "A0AEC0",
  card:     "1F2B45",
  accent:   "E6B84A",
};

function shadow(opt = {}) {
  return { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.25, ...opt };
}

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Game Publishing AI";
pres.title = "Gold and Glory — 7月大版本完整发行策略";

// ════════════════════════════════════════════════════════════════════
// SLIDE 1: 封面
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.darkBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.gold } });
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.gold } });
  sl.addText("GOLD AND GLORY", { x: 0.5, y: 1.6, w: 9, h: 0.9, fontSize: 52, bold: true, color: C.gold, fontFace: "Arial Black", align: "center", charSpacing: 8 });
  sl.addText("7月大版本完整发行策略", { x: 0.5, y: 2.6, w: 9, h: 0.6, fontSize: 28, color: C.cream, fontFace: "Arial", align: "center" });
  sl.addShape(pres.shapes.RECTANGLE, { x: 4, y: 3.4, w: 2, h: 0.04, fill: { color: C.gold } });
  sl.addText("Arena · PVE · 3C升级 · UA买量 · 本地化  |  2026年4月", { x: 0.5, y: 3.7, w: 9, h: 0.4, fontSize: 13, color: C.muted, fontFace: "Arial", align: "center" });
  sl.addText("Confidential — Internal Use Only", { x: 0, y: 5.1, w: 10, h: 0.3, fontSize: 10, color: C.muted, fontFace: "Arial", align: "center" });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 2: 产品核心定位
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("产品核心定位", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });

  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.3, fill: { color: C.card }, shadow: shadow() });
  sl.addText('"进去抢，活着出来就是你的"', { x: 0.5, y: 1.1, w: 9, h: 0.8, fontSize: 22, italic: true, color: C.lightGold, fontFace: "Georgia", align: "center", valign: "middle" });
  sl.addText("— G&G 核心 USP，Mobile Extraction Shooter 独家机制", { x: 0.5, y: 1.85, w: 9, h: 0.45, fontSize: 12, color: C.muted, fontFace: "Arial", align: "center" });

  const cardW = 4.3;
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: cardW, h: 1.5, fill: { color: C.card }, shadow: shadow() });
  sl.addText("产品定位", { x: 0.7, y: 2.75, w: cardW - 0.4, h: 0.35, fontSize: 13, bold: true, color: C.gold });
  sl.addText([
    { text: "中世纪地牢 Extraction RPG", options: { bullet: true, breakLine: true } },
    { text: "5–15分钟快节奏单局", options: { bullet: true, breakLine: true } },
    { text: "赛季制 + 英雄收集", options: { bullet: true, breakLine: true } },
    { text: "Mobile 端独家 Extraction Shooter", options: { bullet: true } }
  ], { x: 0.7, y: 3.15, w: cardW - 0.4, h: 1.0, fontSize: 12, color: C.cream, fontFace: "Arial", valign: "top" });

  sl.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.6, w: cardW, h: 1.5, fill: { color: C.card }, shadow: shadow() });
  sl.addText("当前状态", { x: 5.4, y: 2.75, w: cardW - 0.4, h: 0.35, fontSize: 13, bold: true, color: C.gold });
  sl.addText([
    { text: "Google Play 评分：3.7 ⚠️  → 7月前目标 4.0", options: { bullet: true, breakLine: true } },
    { text: "已测试：墨西哥、哥伦比亚", options: { bullet: true, breakLine: true } },
    { text: "服务器：4–6月停服维护", options: { bullet: true, breakLine: true } },
    { text: "7月大版本发布在即（测试阶段，非正式上线）", options: { bullet: true } }
  ], { x: 5.4, y: 3.15, w: cardW - 0.4, h: 1.0, fontSize: 12, color: C.cream, fontFace: "Arial", valign: "top" });

  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.35, w: 9, h: 0.9, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("⚠️ 测试阶段，预算有限。OM为主 + 精准买量，不走大水漫灌", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.5, fontSize: 13, color: C.lightGold, fontFace: "Arial", align: "center", valign: "middle"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 3: 三大内容支柱
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("7月大版本 — 三大内容支柱", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 30, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("按营销价值排序（来自 ua-campaign 素材转化框架）", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.muted });

  const items = [
    { rank: "1", title: "🏟️ 竞技场 Arena", tag: "最高价值", stars: 5, desc: "PVP核心玩法，天梯/排名，可做大量内容素材", angles: "天梯冲分 / 以弱胜强 / 公平竞技" },
    { rank: "2", title: "🗺️ PVE 模式", tag: "留存利器", stars: 4, desc: "降低门槛，留存友好，适合新手叙事", angles: "新手友好 / 通关成就感 / 组队副本" },
    { rank: "3", title: "🎮 3C 核心升级", tag: "核心质变", stars: 4, desc: "Control + Camera + Character 整体升级", angles: "易用性 · 操作性 · 打击感 · 策略性" },
  ];

  items.forEach((item, i) => {
    const y = 1.25 + i * 1.35;
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.2, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.2, fill: { color: C.gold } });
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: y + 0.1, w: 0.4, h: 0.4, fill: { color: C.gold } });
    sl.addText("#" + item.rank, { x: 0.65, y: y + 0.1, w: 0.4, h: 0.4, fontSize: 11, bold: true, color: C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle" });
    sl.addText("★".repeat(item.stars) + "☆".repeat(5 - item.stars), { x: 1.2, y: y + 0.08, w: 2, h: 0.3, fontSize: 12, color: C.gold });
    sl.addText(item.title, { x: 1.2, y: y + 0.38, w: 5, h: 0.35, fontSize: 15, bold: true, color: C.cream });
    sl.addText(item.desc, { x: 1.2, y: y + 0.72, w: 5.5, h: 0.22, fontSize: 10, color: C.muted });
    sl.addText(item.angles, { x: 1.2, y: y + 0.94, w: 6.5, h: 0.2, fontSize: 9, color: C.lightGold });
    sl.addShape(pres.shapes.RECTANGLE, { x: 7.8, y: y + 0.38, w: 1.5, h: 0.38, fill: { color: C.gold } });
    sl.addText(item.tag, { x: 7.8, y: y + 0.38, w: 1.5, h: 0.38, fontSize: 9, bold: true, color: C.darkBg, fontFace: "Arial", align: "center", valign: "middle" });
  });

  sl.addText("※ 素材方向：Arena实况 > PVE体验 > 3C对比（按转化率排列）", {
    x: 0.5, y: 5.3, w: 9, h: 0.25, fontSize: 10, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 4: 区域差异化宣传策略
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("区域差异化宣传策略", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 30, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("亚洲 · 拉美（北部/南部） · 巴西 — 三大市场，三套叙事（来自 intl-expansion 框架）", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.lightGold });

  const regions = [
    { name: "🌏 亚洲", sub: "印尼 / 越南", color: "2563EB", nature: "版本更新", narrative: "7月大版本上线，所有人一起回归", audience: "新玩家：上手容易 | 老玩家：内容更新", kol: "按需，OM为主" },
    { name: "🌎 拉美全面", sub: "CO / MX / AR / CL", color: "16A34A", nature: "南北部同时开放", narrative: "北部+南部同步开放，回应南部玩家抱怨", audience: "北部回归玩家 + 南部新玩家", kol: "按需，OM为主" },
    { name: "🇧🇷 巴西", sub: "时隔1年首次开服", color: "DC2626", nature: "服务器回归", narrative: "服务器回来了，欢迎回来 + 欢迎新玩家", audience: "老玩家召回为主，新玩家补充", kol: "老玩家召回侧重，预算允许可做" },
  ];

  regions.forEach((r, i) => {
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.25, w: 2.95, h: 4.1, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.25, w: 2.95, h: 0.65, fill: { color: r.color } });
    sl.addText(r.name, { x, y: 1.25, w: 2.95, h: 0.4, fontSize: 13, bold: true, color: C.white, fontFace: "Arial Black", align: "center", valign: "bottom" });
    sl.addText(r.sub, { x, y: 1.6, w: 2.95, h: 0.3, fontSize: 9, color: "E0E0E0", fontFace: "Arial", align: "center", valign: "top" });

    const rows = [
      ["性质", r.nature],
      ["核心口径", r.narrative],
      ["受众", r.audience],
      ["KOL策略", r.kol],
    ];
    rows.forEach(([label, val], j) => {
      const ry = 2.0 + j * 0.7;
      sl.addText(label, { x: x + 0.12, y: ry, w: 2.7, h: 0.2, fontSize: 8, bold: true, color: C.gold });
      sl.addText(val, { x: x + 0.12, y: ry + 0.2, w: 2.7, h: 0.48, fontSize: 9, color: C.cream });
    });
  });

  sl.addText("※ 非正式上线（测试阶段），预算有限。OM为主，KOL/KOC按区域单独评估后决策", {
    x: 0.5, y: 5.4, w: 9, h: 0.2, fontSize: 8, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 5: UA 买量策略总览
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("UA 买量策略总览", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("基于 ua-campaign skill 框架 | 测试阶段预算有限，精准投放", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.lightGold });

  // Budget allocation
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.5, h: 2.4, fill: { color: C.card }, shadow: shadow() });
  sl.addText("预算分配（月度）", { x: 0.65, y: 1.3, w: 4.2, h: 0.35, fontSize: 13, bold: true, color: C.gold });

  const budgetItems = [
    ["OM（有机内容）", "50%", "CPM ≈ $0"],
    ["TikTok 付费", "25%", "CPM $0.5-1"],
    ["YouTube 付费", "10%", "CPM $0.29"],
    ["KOL合作", "10%", "CPM $10-15"],
    ["机动/测试", "5%", ""],
  ];
  budgetItems.forEach(([name, pct, cpm], i) => {
    const ry = 1.72 + i * 0.36;
    sl.addText(name, { x: 0.65, y: ry, w: 2.2, h: 0.3, fontSize: 10, color: C.cream });
    sl.addText(pct, { x: 2.85, y: ry, w: 0.7, h: 0.3, fontSize: 10, bold: true, color: C.gold, align: "center" });
    sl.addText(cpm, { x: 3.55, y: ry, w: 1.4, h: 0.3, fontSize: 9, color: C.muted });
  });

  // Channel comparison
  sl.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.2, w: 4.3, h: 2.4, fill: { color: C.card }, shadow: shadow() });
  sl.addText("渠道CPI参考（来自G&G印尼数据）", { x: 5.35, y: 1.3, w: 4.0, h: 0.35, fontSize: 12, bold: true, color: C.gold });
  const channels = [
    ["Apple Search Ads", "$1–3", "高意向用户"],
    ["Google UAC", "$0.5–2", "Android broad"],
    ["TikTok", "$0.5–3", "年轻用户"],
    ["Meta (FB/IG)", "$1–4", "触达面广"],
  ];
  channels.forEach(([ch, cpi, note], i) => {
    const ry = 1.72 + i * 0.44;
    sl.addText(ch, { x: 5.35, y: ry, w: 2.0, h: 0.28, fontSize: 10, bold: true, color: C.cream });
    sl.addText(cpi, { x: 7.35, y: ry, w: 1.0, h: 0.28, fontSize: 10, bold: true, color: C.gold, align: "center" });
    sl.addText(note, { x: 8.35, y: ry, w: 1.1, h: 0.28, fontSize: 9, color: C.muted });
  });

  // Funnel metrics
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.75, w: 9, h: 1.65, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("转化漏斗 & 目标指标（ua-campaign 框架）", { x: 0.65, y: 3.85, w: 8.7, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const funnelItems = [
    ["Impressions → Taps", "CTR > 3% (TikTok) / > 1% (Meta)", "控制无效曝光"],
    ["Taps → Installs", "CVR > 20% (TikTok) / > 15% (Meta)", "优化落地页"],
    ["Installs → Activations", "CPI < $3 (SEA)", "优先目标市场"],
    ["D7 Retention", "> 30%", "验证用户质量"],
  ];
  funnelItems.forEach(([stage, target, note], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const rx = 0.65 + col * 4.5;
    const ry2 = 4.22 + row * 0.5;
    sl.addText(stage, { x: rx, y: ry2, w: 1.8, h: 0.25, fontSize: 9, bold: true, color: C.lightGold });
    sl.addText(target, { x: rx + 1.8, y: ry2, w: 1.8, h: 0.25, fontSize: 9, color: C.cream });
    sl.addText(note, { x: rx + 3.6, y: ry2, w: 1.8, h: 0.25, fontSize: 9, color: C.muted });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 6: TikTok UA 投放策略
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("TikTok UA 投放策略", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("主力渠道 · CPM $0.5-1 · 印尼市场验证效率最高", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.lightGold });

  // Campaign structure
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.5, h: 2.0, fill: { color: C.card }, shadow: shadow() });
  sl.addText("Campaign 结构", { x: 0.65, y: 1.3, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const tiktokStruct = [
    "Campaign 1: CBO — 宽定向，预算集中",
    "Ad Set 1: 印尼 18-24 男性，兴趣：游戏",
    "Ad Set 2: 印尼 18-30，兴趣：BR/竞技",
    "Ad Set 3: 越南/巴西 18-30",
    "Creative Test: 视频A/B/C 各3个",
  ];
  tiktokStruct.forEach((s, i) => {
    sl.addText("→ " + s, { x: 0.65, y: 1.65 + i * 0.28, w: 4.2, h: 0.28, fontSize: 9, color: C.cream });
  });

  // Bidding
  sl.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.2, w: 4.3, h: 2.0, fill: { color: C.card }, shadow: shadow() });
  sl.addText("出价策略", { x: 5.35, y: 1.3, w: 4.0, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const bidItems = [
    ["测试期（首2周）", "自动出价，积累数据"],
    ["稳定期", "Target CPI $2-3"],
    ["扩量期", "CBO优先，保留表现好的Ad Set"],
    ["负向排除", "排除已安装用户"],
  ];
  bidItems.forEach(([label, val], i) => {
    sl.addText(label + "：", { x: 5.35, y: 1.68 + i * 0.35, w: 1.6, h: 0.28, fontSize: 9, bold: true, color: C.lightGold });
    sl.addText(val, { x: 6.95, y: 1.68 + i * 0.35, w: 2.5, h: 0.28, fontSize: 9, color: C.cream });
  });

  // Creative guidelines
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.35, w: 9, h: 2.0, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("TikTok 创意规范（来自 G&G 历史数据验证）", { x: 0.65, y: 3.45, w: 8.7, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const creativeTips = [
    "Hook 前3秒：地牢开门 / 装备展示 / PVP击杀特效",
    "格式：9:16 竖屏，15-30秒，Mute-first（无声也能理解）",
    "CTA：App Store badge + \"免费下载\"",
    "避免：太宣传腔；优选：真实游戏片段 + 素人反应",
    "A/B测试：实况类 vs 迷因类 vs 情感召回类",
  ];
  creativeTips.forEach((t, i) => {
    sl.addText("• " + t, { x: 0.65, y: 3.82 + i * 0.3, w: 8.7, h: 0.3, fontSize: 10, color: C.cream });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 7: YouTube / Meta / Google UAC 策略
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("YouTube / Meta / Google UAC 策略", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: C.gold, fontFace: "Arial Black" });

  const channelDetails = [
    {
      name: "📺 YouTube", cpm: "$0.29", color: "FF0000",
      points: ["预热视频（30秒）：Arena预告 / PVE实录", "Target CPI：$1.5-3", "格式：Non-skippable + TrueView", "地区：印尼/越南/巴西/拉美"]
    },
    {
      name: "📱 Meta (FB/IG)", cpm: "$2-3", color: "1877F2",
      points: ["Lookalike受众（1%相似），重定向", "素材：竖屏视频 / 轮播", "CBO结构，测试兴趣定向", "Instagram Stories + Reels"]
    },
    {
      name: "🎯 Google UAC", cpm: "$0.5-2", color: "4285F4",
      points: ["全渠道覆盖：Search + Display + YouTube + Play", "资产：4套文案 + 20张图 + 5视频", "Target CPA：$3-5", "自动化优先，人工微调"]
    },
  ];

  channelDetails.forEach((ch, i) => {
    const x = 0.5 + i * 3.1;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 2.95, h: 4.35, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 2.95, h: 0.08, fill: { color: ch.color } });
    sl.addText(ch.name, { x, y: 1.15, w: 2.95, h: 0.4, fontSize: 13, bold: true, color: C.cream, fontFace: "Arial Black", align: "center" });
    sl.addText("CPM参考: " + ch.cpm, { x, y: 1.55, w: 2.95, h: 0.25, fontSize: 10, bold: true, color: ch.color, align: "center" });
    ch.points.forEach((p, j) => {
      sl.addText("→ " + p, { x: x + 0.12, y: 1.9 + j * 0.5, w: 2.7, h: 0.45, fontSize: 9.5, color: C.cream });
    });
  });

  sl.addText("※ Google UAC 自动化强，适合预算有限阶段；Meta 适合精准再营销", {
    x: 0.5, y: 5.4, w: 9, h: 0.2, fontSize: 8.5, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 8: KOL 矩阵（含 CPM）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("KOL 矩阵（分层 × CPM）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("类型：泛游戏主播（General Gaming）| OM为主，KOL按需决策 | 不采用纯垂类/Vtuber", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 10, color: C.lightGold });

  const kolTypes = [
    { tier: "Macro KOL", fans: "100万+", markets: "巴西/墨西哥", platform: "YouTube", cpm: "$10-15", angle: "品牌背书 + 泛用户破圈", pillar: "Pillar 1+2", note: "头部泛游戏，BR/LATAM为主" },
    { tier: "Mid KOL", fans: "10-100万", markets: "印尼/越南/巴西/墨西哥", platform: "TikTok+YT", cpm: "$8-12", angle: "深度实况 + Arena/PVE体验", pillar: "全部", note: "泛游戏实况，TikTok原生" },
    { tier: "Micro KOL", fans: "1-10万", markets: "印尼/越南/巴西/墨西哥", platform: "TikTok", cpm: "$5-8", angle: "素人口碑 + 真实反应 + Meme", pillar: "Pillar 2+3", note: "本地语言，TikTok原生竖屏" },
    { tier: "Nano KOL", fans: "1万以下", markets: "全部5国", platform: "TikTok+Discord", cpm: "$2-5", angle: "UGC扩散 + 种子用户", pillar: "Pillar 2+4", note: "Star Cultivation Program" },
  ];

  kolTypes.forEach((k, i) => {
    const x = 0.5 + i * 2.35;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.2, h: 4.15, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.2, h: 0.6, fill: { color: C.gold } });
    sl.addText(k.tier, { x, y: 1.2, w: 2.2, h: 0.6, fontSize: 11, bold: true, color: C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle" });

    const rows = [
      ["粉丝量", k.fans],
      ["市场", k.markets],
      ["平台", k.platform],
      ["CPM", k.cpm],
      ["宣传点", k.pillar],
      ["切入角度", k.angle],
    ];
    rows.forEach(([label, val], j) => {
      const ry = 1.9 + j * 0.48;
      const isCPM = label === "CPM";
      sl.addText(label, { x: x + 0.1, y: ry, w: 2.0, h: 0.2, fontSize: 7.5, bold: true, color: isCPM ? C.lightGold : C.gold });
      sl.addText(val, { x: x + 0.1, y: ry + 0.2, w: 2.0, h: 0.26, fontSize: isCPM ? 10 : 8.5, color: isCPM ? C.gold : C.cream, bold: isCPM });
    });
    sl.addText(k.note, { x: x + 0.1, y: 4.85, w: 2.0, h: 0.4, fontSize: 7.5, color: C.muted });
  });

  sl.addText("CPM数据来源：G&G印尼历史数据（TikTok官方$0.56、YouTube官方$0.29、KOL合作$10-20）；实际CPM因市场/季节浮动", {
    x: 0.5, y: 5.4, w: 9, h: 0.2, fontSize: 8, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 9: 素材细化（按渠道/格式/受众）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("素材细化（渠道 × 格式 × 受众）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: C.gold, fontFace: "Arial Black" });

  const headers = ["素材类型", "目标用户", "切入角度", "格式", "渠道"];
  const colW = [2.0, 1.5, 2.4, 1.5, 1.4];
  let xPos = 0.5;
  headers.forEach((h, i) => {
    sl.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.0, w: colW[i], h: 0.38, fill: { color: C.gold } });
    sl.addText(h, { x: xPos, y: 1.0, w: colW[i], h: 0.38, fontSize: 9, bold: true, color: C.darkBg, fontFace: "Arial", align: "center", valign: "middle" });
    xPos += colW[i];
  });

  const materials = [
    ["Arena实况", "竞技型玩家", "天梯冲分 / 以弱胜强", "15s竖屏×3版", "TikTok/YT Reels"],
    ["Arena真人反应", "泛用户", "开黑翻车集锦", "竖屏×2版", "TikTok"],
    ["PVE实录", "新手玩家", "新手友好 / 通关成就感", "15-30s版", "YT/TikTok"],
    ["3C对比（旧vs新）", "所有用户", "视觉冲击 / 打击感", "并排对比视频", "YT/FB/买量"],
    ["巴西情感召回", "老玩家回归", "服务器回来了，欢迎回来", "15-30s情感", "TikTok"],
    ["拉美开放公告", "拉美南部新用户", "南北全面开放", "15s公告", "TikTok"],
    ["迷因向短剪", "泛用户/MZ世代", "地牢翻车搞笑集锦", "5-10s梗视频", "TikTok"],
    ["新英雄展示", "核心用户", "技能展示 / 强度分析", "10s技能+立绘", "YT/KOL"],
  ];

  materials.forEach((row, ri) => {
    const y = 1.38 + ri * 0.5;
    let xP = 0.5;
    const fillColor = ri % 2 === 0 ? C.card : "1A2640";
    row.forEach((cell, ci) => {
      sl.addShape(pres.shapes.RECTANGLE, { x: xP, y, w: colW[ci], h: 0.5, fill: { color: fillColor } });
      const cellColor = ci === 0 ? C.cream : (ci === 2 ? C.lightGold : C.muted);
      sl.addText(cell, { x: xP + 0.08, y, w: colW[ci] - 0.16, h: 0.5, fontSize: 8.5, color: cellColor, valign: "middle" });
      xP += colW[ci];
    });
  });

  sl.addText("※ 预计素材总量：各市场约 100-200 个组合，优先测试 Arena + 拉美情感召回类素材", {
    x: 0.5, y: 5.35, w: 9, h: 0.25, fontSize: 8.5, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 10: 推广时间轴（关键节点）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("推广时间轴（关键节点）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });

  const phases = [
    { month: "4–5月", label: "停服维护", sub: "素材储备+KOL接触", color: C.card, active: false },
    { month: "6月", label: "预热期", sub: "官宣+预约开放", color: C.gold, active: true },
    { month: "7月", label: "大版本爆发", sub: "全力OM+买量", color: "C00000", active: true },
    { month: "8月+", label: "长尾运营", sub: "赛季+内容", color: C.card, active: false },
  ];

  const boxW = 2.1;
  phases.forEach((p, i) => {
    const x = 0.5 + i * 2.35;
    const isHighlight = p.active;
    if (i < phases.length - 1) {
      sl.addShape(pres.shapes.LINE, { x: x + boxW + 0.05, y: 1.9, w: 0.2, h: 0, line: { color: C.gold, width: 2 } });
    }
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.5, w: boxW, h: 0.95, fill: { color: p.color }, shadow: isHighlight ? shadow({ opacity: 0.35 }) : shadow() });
    sl.addText(p.month, { x, y: 1.53, w: boxW, h: 0.32, fontSize: 12, bold: true, color: isHighlight ? C.gold : C.cream, fontFace: "Arial Black", align: "center" });
    sl.addText(p.label, { x, y: 1.85, w: boxW, h: 0.26, fontSize: 10, bold: true, color: isHighlight ? C.white : C.cream, fontFace: "Arial", align: "center" });
    sl.addText(p.sub, { x, y: 2.11, w: boxW, h: 0.26, fontSize: 9, color: isHighlight ? C.lightGold : C.muted, fontFace: "Arial", align: "center" });
  });

  // Execution details
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.7, w: 9, h: 2.7, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("各阶段关键执行动作", { x: 0.65, y: 2.8, w: 8.7, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const execDetails = [
    ["停服维护 4-5月", "素材真机录制；KOL名单确认（泛游戏主播）；Nano/Micro KOL 预接触；预约页面准备"],
    ["预热期 6月", "06/01官方预告→06/15 Nano KOL前瞻→06/20 Mid KOL实况→06/25预约开放+商店截图更新"],
    ["爆发期 7月", "T-3:预告片上线→T日:TikTok爆发+YouTube预热→T+7:全渠道买量加投→T+14:BP发售"],
    ["长尾期 8月+", "每6-8周新赛季+新英雄；持续攻略内容；UGC二创激励；流失用户召回"],
  ];
  execDetails.forEach(([title, detail], i) => {
    sl.addText(title + "：", { x: 0.65, y: 3.18 + i * 0.55, w: 1.5, h: 0.25, fontSize: 9, bold: true, color: C.lightGold });
    sl.addText(detail, { x: 2.15, y: 3.18 + i * 0.55, w: 7.3, h: 0.5, fontSize: 9, color: C.cream });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 11: OM 有机内容策略
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("OM 有机内容策略（主力）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("测试阶段预算有限，OM效率最高（CPM接近$0）", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.lightGold });

  // Content pillars
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.5, h: 2.4, fill: { color: C.card }, shadow: shadow() });
  sl.addText("内容支柱（来自 G&G 历史数据）", { x: 0.65, y: 1.3, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const pillars = [
    ["支柱1 — 游戏时刻", "地牢翻车 / 天梯高光 / 极限翻盘"],
    ["支柱2 — 攻略教学", "英雄出装 / 天梯攻略 / 地牢机制"],
    ["支柱3 — 社群互动", "战队招募 / 问答 / 投票"],
    ["支柱4 — 品牌内容", "开发日志 / 版本预告 / 活动公告"],
  ];
  pillars.forEach(([title, desc], i) => {
    sl.addText("◆ " + title, { x: 0.65, y: 1.68 + i * 0.48, w: 4.2, h: 0.25, fontSize: 10, bold: true, color: C.lightGold });
    sl.addText(desc, { x: 0.65, y: 1.93 + i * 0.48, w: 4.2, h: 0.25, fontSize: 9, color: C.cream });
  });

  // Star Cultivation
  sl.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.2, w: 4.3, h: 2.4, fill: { color: C.card }, shadow: shadow() });
  sl.addText("Star Cultivation Program（参考历史数据）", { x: 5.35, y: 1.3, w: 4.0, h: 0.3, fontSize: 11, bold: true, color: C.gold });
  const starItems = [
    ["主题", '"Easy Play, Easy Win"'],
    ["内容方向", "教程 / 出装攻略 / 生存技巧"],
    ["激励", "5K Gold/视频，最多4视频/周期"],
    ["Top 10", "官方社媒推广 + $50 ad boost"],
    ["节奏", "每周performance检查，下滑给special mission"],
  ];
  starItems.forEach(([label, val], i) => {
    sl.addText(label + "：", { x: 5.35, y: 1.68 + i * 0.38, w: 1.4, h: 0.3, fontSize: 9, bold: true, color: C.lightGold });
    sl.addText(val, { x: 6.75, y: 1.68 + i * 0.38, w: 2.7, h: 0.35, fontSize: 9, color: C.cream });
  });

  // Social media performance targets
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.75, w: 9, h: 1.65, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("各平台目标（来自 G&G 印尼历史数据参考）", { x: 0.65, y: 3.85, w: 8.7, h: 0.3, fontSize: 12, bold: true, color: C.gold });
  const platformTargets = [
    ["平台", "内容数", "目标Views", "目标Engagement"],
    ["TikTok", "每周5-10条", "50万+/月", "1万+"],
    ["YouTube", "每周2-3条", "30万+/月", "5000+"],
    ["Instagram", "每周3-5条", "40万+/月", "3000+"],
    ["Facebook", "每周2-3条", "20万+/月", "1000+"],
  ];
  platformTargets.forEach((row, ri) => {
    const isHeader = ri === 0;
    const y = 4.22 + ri * 0.3;
    row.forEach((cell, ci) => {
      const x = 0.65 + ci * 2.15;
      sl.addText(cell, { x, y, w: 2.0, h: 0.28, fontSize: 9, bold: isHeader, color: isHeader ? C.gold : C.cream });
    });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 12: 社群运营策略（分阶段）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("社群运营策略（分阶段）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 30, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("预热期 · 爆发期 · 长尾期 — 各阶段不同的社群目标与动作", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.lightGold });

  const phases = [
    {
      phase: "预热期", period: "4–6月", color: C.gold, active: false,
      goal: "建立社群基础，积累种子用户",
      actions: [
        "Discord 服务器搭建：规则/频道/机器人",
        "Discord 公告频道 + 预约通知",
        "公会/战队招募帖（印尼/越南/巴西/拉美）",
        "Nano/Micro KOL Discord 社群渗透",
        "社群内容储备：每周2-3条社群贴文",
        "线下社区聚会（小规模，$9.7K预算参考）",
      ],
      kpi: "Discord成员 500+，社群活跃10%"
    },
    {
      phase: "爆发期", period: "7月", color: "C00000", active: true,
      goal: "激活社群，引导UGC传播",
      actions: [
        "官方发布日Discord直播/语音活动",
        "UGC激励：发布游戏片段即有机会获官方推广",
        "实时社群活动：天梯冲分赛 / 地牢速通赛",
        "KOL社群联动：KOL在自己的粉丝群推广",
        "玩家社群翻车集锦征集（可病毒传播）",
        "积极回复每一条玩家反馈（体现重视）",
      ],
      kpi: "Discord成员 2000+，UGC内容 100+条"
    },
    {
      phase: "长尾期", period: "8月+", color: C.muted, active: false,
      goal: "留存驱动，建立社群归属感",
      actions: [
        "每赛季战队赛 / 公会战活动",
        "玩家英雄/公会名人堂展示",
        "社区内容官推：每周优秀UGC",
        "玩家访谈/社群故事（增强归属）",
        "学校/公会渗透项目（参考历史数据）",
        "流失用户召回定向推送",
      ],
      kpi: "D7留存率 > 30%，D30留存 > 15%"
    },
  ];

  phases.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.95, h: 4.15, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.95, h: 0.65, fill: { color: p.color } });
    sl.addText(p.phase, { x, y: 1.2, w: 2.95, h: 0.4, fontSize: 13, bold: true, color: p.color === C.muted ? C.darkBg : C.darkBg, fontFace: "Arial Black", align: "center", valign: "bottom" });
    sl.addText(p.period, { x, y: 1.55, w: 2.95, h: 0.3, fontSize: 10, color: "E0E0E0", fontFace: "Arial", align: "center", valign: "top" });

    sl.addText("目标", { x: x + 0.12, y: 1.95, w: 2.7, h: 0.2, fontSize: 8, bold: true, color: C.gold });
    sl.addText(p.goal, { x: x + 0.12, y: 2.15, w: 2.7, h: 0.38, fontSize: 9, color: C.cream });

    sl.addText("动作", { x: x + 0.12, y: 2.55, w: 2.7, h: 0.2, fontSize: 8, bold: true, color: C.lightGold });
    p.actions.forEach((action, j) => {
      sl.addText("→ " + action, { x: x + 0.12, y: 2.75 + j * 0.4, w: 2.7, h: 0.38, fontSize: 8.5, color: C.cream });
    });

    sl.addShape(pres.shapes.RECTANGLE, { x: x + 0.12, y: 4.85, w: 2.7, h: 0.02, fill: { color: p.color } });
    sl.addText("KPI: " + p.kpi, { x: x + 0.12, y: 4.9, w: 2.7, h: 0.35, fontSize: 7.5, color: p.color === C.gold ? C.lightGold : C.muted });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 13: 立即行动项 & 下一步
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("立即行动项（4–6月准备期）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 30, bold: true, color: C.gold, fontFace: "Arial Black" });

  const priorities = [
    {
      level: "P0 — 最高优先", color: "C00000", items: [
        "评分改善（3.7→3.8，目标4.0）",
        "印尼/越南/巴西本地化（6月中前）",
        "KOL名单确认：泛游戏主播（5月底前）",
        "广告素材制作（6月中前）：Arena实况×3版 / PVE实录 / 3C对比",
      ]
    },
    {
      level: "P1 — 重要", color: C.gold, items: [
        "预约页面开放（6月中）",
        "TikTok官方频道内容储备（每周5-10条）",
        "Star Cultivation Program 启动",
        "巴西情感召回素材制作",
      ]
    },
    {
      level: "P2 — 跟进", color: C.muted, items: [
        "拉美西语本地化（AR/CL/CO/MX）",
        "YouTube预热视频制作",
        "Google UAC资产包准备",
        "美国市场评估（Q3决策）",
      ]
    },
  ];

  priorities.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 2.95, h: 4.35, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 2.95, h: 0.5, fill: { color: p.color } });
    sl.addText(p.level, { x, y: 1.0, w: 2.95, h: 0.5, fontSize: 11, bold: true, color: p.color === C.muted ? C.darkBg : C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle" });

    p.items.forEach((item, j) => {
      sl.addText("→", { x: x + 0.12, y: 1.65 + j * 0.75, w: 0.25, h: 0.55, fontSize: 11, color: p.color, valign: "top" });
      sl.addText(item, { x: x + 0.38, y: 1.65 + j * 0.75, w: 2.5, h: 0.65, fontSize: 10, color: C.cream });
    });
  });
}

pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GoldAndGlory_完整发行策略.pptx" })
  .then(() => console.log("✅ PPT 生成成功！"))
  .catch(e => { console.error("❌ Error:", e.message); process.exit(1); });
