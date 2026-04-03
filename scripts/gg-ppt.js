const pptxgen = require("pptxgenjs");

// ─── Palette: Medieval Gold & Dark Royal ───────────────────────────
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

// ─── Helpers ───────────────────────────────────────────────────────
function shadow(opt = {}) {
  return {
    type: "outer", color: "000000", blur: 8, offset: 3, angle: 135,
    opacity: 0.25, ...opt
  };
}

// ─── Presentation Setup ───────────────────────────────────────────
let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Game Publishing AI";
pres.title = "Gold and Glory — 7月大版本发行策略";

// ════════════════════════════════════════════════════════════════════
// SLIDE 1: Title
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.darkBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.gold } });
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.gold } });
  sl.addText("GOLD AND GLORY", {
    x: 0.5, y: 1.6, w: 9, h: 0.9,
    fontSize: 52, bold: true, color: C.gold, fontFace: "Arial Black",
    align: "center", charSpacing: 8
  });
  sl.addText("7月大版本发行策略", {
    x: 0.5, y: 2.6, w: 9, h: 0.6,
    fontSize: 28, color: C.cream, fontFace: "Arial", align: "center"
  });
  sl.addShape(pres.shapes.RECTANGLE, { x: 4, y: 3.4, w: 2, h: 0.04, fill: { color: C.gold } });
  sl.addText("Arena · PVE · 3C核心升级  |  2026年4月", {
    x: 0.5, y: 3.7, w: 9, h: 0.4,
    fontSize: 14, color: C.muted, fontFace: "Arial", align: "center"
  });
  sl.addText("Confidential — Internal Use Only", {
    x: 0, y: 5.1, w: 10, h: 0.3,
    fontSize: 10, color: C.muted, fontFace: "Arial", align: "center"
  });
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
  sl.addText('"进去抢，活着出来就是你的"', {
    x: 0.5, y: 1.1, w: 9, h: 0.8,
    fontSize: 22, italic: true, color: C.lightGold, fontFace: "Georgia",
    align: "center", valign: "middle"
  });
  sl.addText("— G&G 核心 USP，Mobile Extraction Shooter 独家机制", {
    x: 0.5, y: 1.85, w: 9, h: 0.45,
    fontSize: 12, color: C.muted, fontFace: "Arial", align: "center"
  });

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
    { text: "Google Play 评分：3.7 ⚠️", options: { bullet: true, breakLine: true } },
    { text: "已测试：墨西哥、哥伦比亚", options: { bullet: true, breakLine: true } },
    { text: "服务器：4–6月停服维护", options: { bullet: true, breakLine: true } },
    { text: "7月大版本发布在即", options: { bullet: true } }
  ], { x: 5.4, y: 3.15, w: cardW - 0.4, h: 1.0, fontSize: 12, color: C.cream, fontFace: "Arial", valign: "top" });

  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.35, w: 9, h: 0.9, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("⚠️ 3.7分是市场进入门槛，7月前必须改善至 3.8，目标 4.0", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.5,
    fontSize: 13, color: C.lightGold, fontFace: "Arial", align: "center", valign: "middle"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 3: 7月大版本核心内容（宣传点分级）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("7月大版本核心内容", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("三大营销素材支柱（按重要度排序）", { x: 0.4, y: 0.85, w: 9, h: 0.35, fontSize: 14, color: C.muted });

  const items = [
    {
      rank: "1", title: "🏟️ 竞技场 Arena",
      stars: 5, tag: "最高营销价值",
      desc: "PVP核心玩法，天梯/排名，可做大量内容素材",
      angles: "天梯冲分 / 以弱胜强 / 公平竞技 / 新手逆袭"
    },
    {
      rank: "2", title: "🗺️ PVE 模式",
      stars: 4, tag: "留存利器",
      desc: "降低门槛，留存友好，适合「新手友好」叙事",
      angles: "新手友好 / 通关成就感 / 剧情体验 / 组队副本"
    },
    {
      rank: "3", title: "🎮 3C 核心升级",
      stars: 4, tag: "核心玩法质变",
      desc: "Control + Camera + Character 整体升级",
      angles: "易用性（视野） · 操作性（精准度） · 打击感（反馈） · 策略性（观察）"
    },
  ];

  items.forEach((item, i) => {
    const y = 1.35 + i * 1.35;
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.22, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.22, fill: { color: C.gold } });

    // Rank badge
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: y + 0.08, w: 0.4, h: 0.4, fill: { color: C.gold } });
    sl.addText("#" + item.rank, {
      x: 0.65, y: y + 0.08, w: 0.4, h: 0.4,
      fontSize: 11, bold: true, color: C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle"
    });

    sl.addText("★".repeat(item.stars) + "☆".repeat(5 - item.stars), {
      x: 1.2, y: y + 0.08, w: 2, h: 0.3,
      fontSize: 12, color: C.gold
    });
    sl.addText(item.title, { x: 1.2, y: y + 0.38, w: 5, h: 0.35, fontSize: 15, bold: true, color: C.cream });
    sl.addText(item.desc, { x: 1.2, y: y + 0.72, w: 5.5, h: 0.22, fontSize: 10, color: C.muted });
    sl.addText(item.angles, { x: 1.2, y: y + 0.94, w: 6.5, h: 0.22, fontSize: 9, color: C.lightGold });

    // Tag
    sl.addShape(pres.shapes.RECTANGLE, { x: 7.8, y: y + 0.38, w: 1.5, h: 0.38, fill: { color: C.gold } });
    sl.addText(item.tag, { x: 7.8, y: y + 0.38, w: 1.5, h: 0.38, fontSize: 9, bold: true, color: C.darkBg, fontFace: "Arial", align: "center", valign: "middle" });
  });

  sl.addText("三个内容支柱构成7月营销的核心素材库，所有广告素材、KOL合作均围绕这三个展开。", {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fontSize: 10, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 4: 宣传讯息层级（参考洛克方案的行销讯息框架）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("宣传讯息层级", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("核心USP：进去抢，活着出来就是你的（Extraction Shooter独家机制）", { x: 0.4, y: 0.85, w: 9, h: 0.35, fontSize: 12, color: C.lightGold });

  const pillars = [
    {
      title: "Pillar 1 — 竞技刺激",
      angle: "Arena天梯 / 以弱胜强 / 公平竞技",
      ta: "竞技型玩家 / BR玩家",
      content: "地牢风险回报 / 装备驱动 / 死后全失"
    },
    {
      title: "Pillar 2 — 社交组队",
      angle: "和朋友下地牢 / 组队开黑",
      ta: "社交型玩家 / 东南亚/拉美",
      content: "10-15分钟快节奏 / 碎片时间友好"
    },
    {
      title: "Pillar 3 — 新手友好",
      angle: "PVE降门槛 / 3C升级上手更容易",
      ta: "泛用户 / 女性用户",
      content: "3C升级后视野更广 / 操作更精准"
    },
    {
      title: "Pillar 4 — 视觉冲击",
      angle: "3C对比 / 打击感展示",
      ta: "所有用户 / 视觉型玩家",
      content: "Camera变更前后对比 / 战斗特效"
    },
  ];

  pillars.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.3 + row * 2.05;

    sl.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.9, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 0.08, fill: { color: C.gold } });
    sl.addText(p.title, { x: x + 0.15, y: y + 0.15, w: 4.2, h: 0.3, fontSize: 13, bold: true, color: C.gold });
    sl.addText("切入角度：" + p.angle, { x: x + 0.15, y: y + 0.5, w: 4.2, h: 0.35, fontSize: 11, color: C.cream });
    sl.addText("目标用户：" + p.ta, { x: x + 0.15, y: y + 0.88, w: 4.2, h: 0.35, fontSize: 10, color: C.muted });
    sl.addText("内容：" + p.content, { x: x + 0.15, y: y + 1.25, w: 4.2, h: 0.55, fontSize: 10, color: C.lightGold });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 5: 区域差异化宣传策略
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("区域差异化宣传策略", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 30, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("亚洲 · 拉美（北部/南部） · 巴西 — 三大市场，三套叙事", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 12, color: C.lightGold });

  const regions = [
    {
      name: "🌏 亚洲（印尼/越南）",
      color: "2563EB",
      nature: "版本更新",
      narrative: "7月大版本上线，所有人一起回归",
      audience: "新玩家：上手容易 | 老玩家：内容更新",
      kol: "按需，OM为主",
      keyMsg: "版本回来了，内容更多"
    },
    {
      name: "🌎 拉美（CO/MX/AR/CL）",
      color: "16A34A",
      nature: "南北部全面开放",
      narrative: "北部（CO/MX）+ 南部（AR/CL）同步开放，回应南部玩家之前的抱怨",
      audience: "北部回归玩家 + 南部新玩家",
      kol: "按需，OM为主",
      keyMsg: "终于等到你！南北全面开放"
    },
    {
      name: "🇧🇷 巴西",
      color: "DC2626",
      nature: "时隔1年首次开服",
      narrative: "服务器回来了，欢迎老玩家回归，新玩家加入",
      audience: "老玩家召回为主，新玩家补充",
      kol: "老玩家召回侧重点，预算允许下可做",
      keyMsg: "服务器回来了，你还在吗？"
    },
  ];

  regions.forEach((r, i) => {
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.95, h: 4.05, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.95, h: 0.55, fill: { color: r.color } });
    sl.addText(r.name, { x, y: 1.3, w: 2.95, h: 0.55, fontSize: 11, bold: true, color: C.white, fontFace: "Arial Black", align: "center", valign: "middle" });

    const rows = [
      ["性质", r.nature],
      ["核心口径", r.narrative],
      ["受众", r.audience],
      ["KOL/KOC", r.kol],
      ["核心信息", r.keyMsg],
    ];
    rows.forEach(([label, val], j) => {
      const ry = 1.95 + j * 0.62;
      sl.addText(label, { x: x + 0.12, y: ry, w: 2.7, h: 0.2, fontSize: 8, bold: true, color: C.gold });
      sl.addText(val, { x: x + 0.12, y: ry + 0.2, w: 2.7, h: 0.4, fontSize: 8.5, color: C.cream });
    });
  });

  sl.addText("※ 非正式上线（测试阶段），预算有限。OM为主，KOL/KOC按区域单独评估", {
    x: 0.5, y: 5.4, w: 9, h: 0.2, fontSize: 8, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 6: 素材细化（参考洛克方案的素材规划框架）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("素材细化（按渠道/格式/受众）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 30, bold: true, color: C.gold, fontFace: "Arial Black" });

  // Table header
  const headers = ["素材类型", "目标用户", "切入角度", "格式", "渠道"];
  const colW = [2.0, 1.5, 2.4, 1.5, 1.4];
  let xPos = 0.5;
  headers.forEach((h, i) => {
    sl.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.0, w: colW[i], h: 0.38, fill: { color: C.gold } });
    sl.addText(h, { x: xPos, y: 1.0, w: colW[i], h: 0.38, fontSize: 10, bold: true, color: C.darkBg, fontFace: "Arial", align: "center", valign: "middle" });
    xPos += colW[i];
  });

  const materials = [
    ["Arena实况", "竞技型玩家", "天梯冲分 / 以弱胜强", "15s竖屏×3版", "TikTok/YT Reels"],
    ["Arena真人反应", "泛用户", "开黑翻车集锦", "竖屏×2版", "TikTok"],
    ["PVE实录", "新手玩家", "新手友好 / 通关成就感", "15-30s版", "YT/TikTok"],
    ["3C对比（旧vs新）", "所有用户", "视觉冲击 / 打击感", "并排对比视频", "YT/FB/买量"],
    ["新英雄展示", "核心用户", "技能展示 / 强度分析", "10s技能+立绘", "YT/KOL"],
    ["组队开黑片段", "社交型玩家", "和朋友一起玩的乐趣", "竖屏/横版", "TikTok/FB"],
    ["迷因向短剪", "泛用户/MZ世代", "地牢翻车搞笑集锦", "5-10s梗视频", "TikTok"],
    ["玩家UGC二创", "所有用户", "官方转发激励扩散", "UGC", "社媒矩阵"],
  ];

  materials.forEach((row, ri) => {
    const y = 1.38 + ri * 0.5;
    let xP = 0.5;
    const fillColor = ri % 2 === 0 ? C.card : "1A2640";
    row.forEach((cell, ci) => {
      sl.addShape(pres.shapes.RECTANGLE, { x: xP, y, w: colW[ci], h: 0.5, fill: { color: fillColor } });
      const cellColor = ci === 0 ? C.cream : (ci === 2 ? C.lightGold : C.muted);
      sl.addText(cell, { x: xP + 0.08, y, w: colW[ci] - 0.16, h: 0.5, fontSize: 9, color: cellColor, valign: "middle" });
      xP += colW[ci];
    });
  });

  sl.addText("※ 预计素材总量：各市场约 100-200 个组合，优先测试 Arena + 组队类素材", {
    x: 0.5, y: 5.35, w: 9, h: 0.25,
    fontSize: 9, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 7: KOL矩阵（分层 × 宣传点 × CPM）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("KOL矩阵（分层 × 宣传点 × CPM）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("类型：泛游戏主播为主，不采用纯垂类/Vtuber | OM为主，KOL按需决策", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 11, color: C.lightGold });

  const kolTypes = [
    {
      tier: "Macro KOL", fans: "100万+", markets: "巴西/墨西哥/哥伦比亚",
      platform: "YouTube",
      angle: "品牌背书 + 泛用户破圈",
      pillar: "Pillar 1+2",
      cpm: "$10–15",
      note: "头部泛游戏主播，BR/LATAM为主"
    },
    {
      tier: "Mid KOL", fans: "10–100万", markets: "印尼/越南/巴西/墨西哥",
      platform: "TikTok + YouTube",
      angle: "深度实况 + Arena/PVE体验",
      pillar: "全部",
      cpm: "$8–12",
      note: "泛游戏实况主，TikTok原生内容"
    },
    {
      tier: "Micro KOL", fans: "1–10万", markets: "印尼/越南/巴西/墨西哥",
      platform: "TikTok",
      angle: "素人口碑 + 真实反应 + Meme",
      pillar: "Pillar 2+3",
      cpm: "$5–8",
      note: "本地语言，TikTok原生竖屏内容"
    },
    {
      tier: "Nano KOL", fans: "1万以下", markets: "全部5国",
      platform: "TikTok + Discord",
      angle: "UGC扩散 + 种子用户",
      pillar: "Pillar 2+4",
      cpm: "$2–5",
      note: "Star Cultivation Program，5K Gold/视频激励"
    },
  ];

  kolTypes.forEach((k, i) => {
    const x = 0.5 + i * 2.35;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.2, h: 4.15, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.2, h: 0.65, fill: { color: C.gold } });
    sl.addText(k.tier, { x, y: 1.2, w: 2.2, h: 0.65, fontSize: 11, bold: true, color: C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle" });

    const rows = [
      ["粉丝量", k.fans],
      ["市场", k.markets],
      ["平台", k.platform],
      ["CPM", k.cpm],
      ["对应宣传点", k.pillar],
      ["切入角度", k.angle],
    ];
    rows.forEach(([label, val], j) => {
      const ry = 1.95 + j * 0.48;
      const isCPM = label === "CPM";
      sl.addText(label, { x: x + 0.1, y: ry, w: 2.0, h: 0.2, fontSize: 8, bold: true, color: isCPM ? C.lightGold : C.gold });
      sl.addText(val, { x: x + 0.1, y: ry + 0.2, w: 2.0, h: 0.26, fontSize: isCPM ? 11 : 9, color: isCPM ? C.gold : C.cream, bold: isCPM });
    });

    // Note at bottom
    sl.addText(k.note, { x: x + 0.1, y: 4.85, w: 2.0, h: 0.4, fontSize: 7.5, color: C.muted });
  });

  sl.addText("CPM数据来源：G&G印尼历史数据验证（TikTok官方$0.56、YouTube官方$0.29、KOL合作$10-20）；实际CPM因市场/季节浮动", {
    x: 0.5, y: 5.35, w: 9, h: 0.25,
    fontSize: 8, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 7: 目标市场分层
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("目标市场分层", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });

  const tiers = [
    {
      tier: "全部目标市场 — 7月同步上线", color: "C00000",
      markets: ["🇮🇩 印尼", "🇻🇳 越南", "🇲🇽 墨西哥", "🇧🇷 巴西", "🇨🇴 哥伦比亚", "🇦🇷 阿根廷", "🇨🇱 智利", "🇺🇸 美国"],
      reason: "亚洲+拉美+美国同步发行，非分批上线"
    },
  ];

  tiers.forEach((t, i) => {
    const y = 1.1 + i * 1.45;
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.3, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.08, h: 1.3, fill: { color: t.color } });
    sl.addText(t.tier, { x: 0.75, y: y + 0.1, w: 4, h: 0.35, fontSize: 13, bold: true, color: t.color });
    sl.addText(t.markets.join("   "), { x: 0.75, y: y + 0.5, w: 5.5, h: 0.4, fontSize: 13, color: C.cream });
    sl.addText(t.reason, { x: 0.75, y: y + 0.92, w: 8.5, h: 0.3, fontSize: 10, color: C.muted });
    sl.addShape(pres.shapes.RECTANGLE, { x: 8.5, y: y + 0.1, w: 0.8, h: 0.8, fill: { color: t.color } });
    sl.addText(String(t.markets.length), {
      x: 8.5, y: y + 0.1, w: 0.8, h: 0.8,
      fontSize: 22, bold: true, color: C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle"
    });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 8: 推广时间轴（细化到具体执行）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("推广时间轴（关键节点）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });

  const phases = [
    { month: "3月", label: "准备期", sub: "评分+本地化", color: C.card, active: false },
    { month: "4–5月", label: "停服维护", sub: "素材储备+KOL接触", color: C.card, active: false },
    { month: "6月", label: "预热期", sub: "官宣+预约开放", color: C.gold, active: true },
    { month: "7月", label: "大版本爆发", sub: "全力投放", color: "C00000", active: true },
    { month: "8月+", label: "长尾运营", sub: "赛季+内容", color: C.card, active: false },
  ];

  const boxW = 1.7;
  const startX = 0.5;
  phases.forEach((p, i) => {
    const x = startX + i * 1.85;
    const isHighlight = p.active;
    if (i < phases.length - 1) {
      sl.addShape(pres.shapes.LINE, {
        x: x + boxW + 0.05, y: 1.9, w: 0.1, h: 0,
        line: { color: C.gold, width: 2 }
      });
    }
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.5, w: boxW, h: 0.95, fill: { color: p.color }, shadow: isHighlight ? shadow({ opacity: 0.35 }) : shadow() });
    sl.addText(p.month, { x, y: 1.53, w: boxW, h: 0.32, fontSize: 12, bold: true, color: isHighlight ? C.gold : C.cream, fontFace: "Arial Black", align: "center" });
    sl.addText(p.label, { x, y: 1.85, w: boxW, h: 0.26, fontSize: 10, bold: true, color: isHighlight ? C.white : C.cream, fontFace: "Arial", align: "center" });
    sl.addText(p.sub, { x, y: 2.11, w: boxW, h: 0.26, fontSize: 9, color: isHighlight ? C.lightGold : C.muted, fontFace: "Arial", align: "center" });
  });

  // Key execution details
  sl.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.7, w: 9, h: 2.7, fill: { color: C.darkBg }, shadow: shadow() });
  sl.addText("各阶段关键执行动作", { x: 0.65, y: 2.8, w: 8.7, h: 0.3, fontSize: 13, bold: true, color: C.gold });

  const execDetails = [
    ["准备期 3月", "评分改善（3.7→3.8）；本地化完成；KOL名单确认；广告素材制作（初版）"],
    ["停服维护 4–5月", "素材真机录制；Nano/Micro KOL 预接触；买量素材制作；预约页面准备"],
    ["预热期 6月", "06/01官方预告→06/15 Nano KOL前瞻→06/20 Mid KOL实况→06/25预约开放+商店截图更新"],
    ["爆发期 7月", "T-3:预告片上线→T日:Mid/Macro KOL同步爆发→T+7:全渠道买量加投→T+14:BP发售+限量皮肤"],
    ["长尾期 8月+", "每6–8周新赛季+新英雄；持续攻略内容；UGC二创激励；流失用户召回"],
  ];
  execDetails.forEach(([title, detail], i) => {
    const col = i < 3 ? 0 : 1;
    const row = i < 3 ? i : i - 3;
    const dx = col === 0 ? 0.65 : 5.1;
    const dy = 3.18 + row * 0.58;
    sl.addText(title + "：", { x: dx, y: dy, w: 1.3, h: 0.25, fontSize: 9, bold: true, color: C.lightGold });
    sl.addText(detail, { x: dx + 1.3, y: dy, w: 3.5, h: 0.55, fontSize: 9, color: C.cream });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 9: 预算分配
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("预算分配建议", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });

  sl.addChart(pres.charts.DOUGHNUT, [{
    name: "区域预算",
    labels: ["印尼25%", "巴西20%", "越南15%", "墨西哥15%", "哥伦比亚10%", "智利/阿根廷8%", "美国5%", "日本2%"],
    values: [25, 20, 15, 15, 10, 8, 5, 2]
  }], {
    x: 0.3, y: 1.0, w: 4.5, h: 3.2,
    chartColors: ["D4AF37","E6B84A","F0D060","C09020","A07820","808040","607080","404060"],
    showPercent: true, showLegend: true,
    legendPos: "b",
    holeSize: 50
  });

  sl.addText("渠道预算权重", { x: 5.2, y: 1.0, w: 4.5, h: 0.4, fontSize: 14, bold: true, color: C.gold });

  const channels = [
    ["TikTok Ads", "35%", "年轻用户主力平台 · CPM $0.5-1"],
    ["Meta Ads", "25%", "触达面广 · CPM $2-3"],
    ["Google UAC", "20%", "Search + Play双覆盖 · CPM $3-5"],
    ["KOL合作", "15%", "泛游戏主播为主 · CPM $10-15"],
    ["PR / ASO", "5%", "里程碑传播"],
  ];

  channels.forEach(([name, pct, note], i) => {
    const y = 1.5 + i * 0.72;
    sl.addShape(pres.shapes.RECTANGLE, { x: 5.2, y, w: 4.3, h: 0.62, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x: 5.2, y, w: 0.7, h: 0.62, fill: { color: C.gold } });
    sl.addText(pct, { x: 5.2, y, w: 0.7, h: 0.62, fontSize: 12, bold: true, color: C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle" });
    sl.addText(name, { x: 6.0, y: y + 0.05, w: 3.3, h: 0.3, fontSize: 12, bold: true, color: C.cream });
    sl.addText(note, { x: 6.0, y: y + 0.33, w: 3.3, h: 0.25, fontSize: 9.5, color: C.muted });
  });

  sl.addText("CPM数据来源：G&G印尼历史数据（TikTok官方$0.56、YouTube官方$0.29、KOL $10-20）", {
    x: 0.5, y: 4.9, w: 9, h: 0.4, fontSize: 9, color: C.muted, fontFace: "Arial", align: "center"
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 10: 立即行动项（P0–P2）
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.midBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold } });
  sl.addText("立即行动项（4–6月）", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, bold: true, color: C.gold, fontFace: "Arial Black" });
  sl.addText("停服维护期 · 准备冲刺阶段", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 13, color: C.muted });

  const priorities = [
    {
      level: "P0 — 最高优先", color: "C00000", items: [
        "评分改善（3.7→3.8，目标4.0）",
        "印尼/越南/巴西本地化（6月中前）",
        "KOL名单确认（5月底前）",
        "广告素材制作（6月中前）：Arena实况×3版 / PVE实录 / 3C对比",
      ]
    },
    {
      level: "P1 — 重要", color: C.gold, items: [
        "预约页面开放（6月中）",
        "Discord社区激活（持续）",
        "买量素材制作（TikTok竖屏各2版）",
      ]
    },
    {
      level: "P2 — 跟进", color: C.muted, items: [
        "智利/阿根廷/美国本地化（7月前）",
        "日本市场评估（Q3决策）",
        "KOL正式合作谈判（6月前）",
      ]
    },
  ];

  priorities.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.95, h: 3.95, fill: { color: C.card }, shadow: shadow() });
    sl.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.95, h: 0.5, fill: { color: p.color } });
    sl.addText(p.level, { x, y: 1.3, w: 2.95, h: 0.5, fontSize: 12, bold: true, color: p.color === C.muted ? C.darkBg : C.darkBg, fontFace: "Arial Black", align: "center", valign: "middle" });

    p.items.forEach((item, j) => {
      const ry = 1.95 + j * 0.78;
      sl.addText("→", { x: x + 0.12, y: ry, w: 0.25, h: 0.55, fontSize: 12, color: p.color, valign: "top" });
      sl.addText(item, { x: x + 0.38, y: ry, w: 2.5, h: 0.65, fontSize: 10, color: C.cream });
    });
  });
}

// ════════════════════════════════════════════════════════════════════
// SLIDE 11: 结语
// ════════════════════════════════════════════════════════════════════
{
  let sl = pres.addSlide();
  sl.background = { color: C.darkBg };
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.gold } });
  sl.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.gold } });

  sl.addText("下一步", { x: 0.5, y: 1.5, w: 9, h: 0.7, fontSize: 36, bold: true, color: C.gold, fontFace: "Arial Black", align: "center" });
  sl.addShape(pres.shapes.RECTANGLE, { x: 4, y: 2.3, w: 2, h: 0.04, fill: { color: C.gold } });

  const nextSteps = [
    "确认7月大版本最终上线日期",
    "启动印尼/越南/巴西本地化工作",
    "接触首批 Nano + Micro KOL",
    "制作 Arena 真机实况素材（第一批）",
  ];

  nextSteps.forEach((step, i) => {
    sl.addText((i + 1) + ".  " + step, {
      x: 2.5, y: 2.6 + i * 0.52, w: 5, h: 0.45,
      fontSize: 16, color: C.cream, fontFace: "Arial"
    });
  });

  sl.addText("目标：7月爆发期全力冲击下载 + 榜单", {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fontSize: 14, italic: true, color: C.lightGold, fontFace: "Georgia", align: "center"
  });
}

// ─── Write File ───────────────────────────────────────────────────
pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GoldAndGlory_七月发行策略.pptx" })
  .then(() => console.log("✅ PPT 生成成功！"))
  .catch(e => { console.error("❌ Error:", e.message); process.exit(1); });
