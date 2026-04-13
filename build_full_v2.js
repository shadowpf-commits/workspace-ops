const pptxgen = require("pptxgenjs");

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

async function build() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gold and Glory - 7月大版本发行方案 v2";
  pres.author = "Ops Team";

  // ===== Slide 1: Title =====
  let s1 = pres.addSlide();
  s1.background = { color: C.darkBg };
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.12, fill: { color: C.purple } });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 0.08, h: 2.2, fill: { color: C.gold } });
  s1.addShape(pres.shapes.OVAL, { x: 0.7, y: 1.8, w: 0.5, h: 0.5, fill: { color: C.purple } });
  s1.addShape(pres.shapes.OVAL, { x: 0.85, y: 1.95, w: 0.2, h: 0.2, fill: { color: C.cyan } });
  s1.addText("GOLD AND GLORY", { x: 1.3, y: 1.5, w: 8, h: 0.9, fontSize: 48, fontFace: "Arial Black", color: C.gold, charSpacing: 4 });
  s1.addText("7月大版本发行方案 v2", { x: 1.3, y: 2.4, w: 8, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true });
  s1.addText("Arena  ·  PVE  ·  3C升级  ·  留存为核心", { x: 1.3, y: 3.1, w: 8, h: 0.5, fontSize: 15, fontFace: "Arial", color: C.purpleLight });
  s1.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 3.8, w: 2.5, h: 0.03, fill: { color: C.purple } });
  s1.addText("2026年4月  |  Confidential — Internal Use Only", { x: 1.3, y: 4.0, w: 8, h: 0.4, fontSize: 11, fontFace: "Arial", color: C.textMuted });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.505, w: 10, h: 0.12, fill: { color: C.cyan } });

  // ===== Slide 2: 区域差异化宣传策略 =====
  let s2 = pres.addSlide();
  s2.background = { color: C.darkBg };
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s2.addText("区域差异化宣传策略", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  const regions = [
    { flag: "🌏", name: "亚洲（印尼/越南）", nature: "老市场版本更新",
      口径: "7月大版本上线，所有人一起回归",
      受众: "新玩家：上手容易 | 老玩家：内容更新",
      kol: "按需，OM为主",
      coreMsg: "版本回来了，内容更多", color: C.purple },
    { flag: "🌎", name: "拉美（CO/MX）", nature: "新市场开放",
      口径: "北部（CO/MX）+ 南部（AR/CL）同步开放",
      受众: "北部回归玩家 + 南部新玩家",
      kol: "按需，OM为主",
      coreMsg: "终于等到你！南北全面开放", color: C.cyan },
    { flag: "🇧🇷", name: "巴西", nature: "时隔1年首次开服",
      口径: "服务器回来了，欢迎老玩家回归，新玩家加入",
      受众: "老玩家召回为主，新玩家补充",
      kol: "老玩家召回侧重点，预算允许下可做",
      coreMsg: "服务器回来了，你还在吗？", color: C.gold },
  ];

  for (let i = 0; i < regions.length; i++) {
    const r = regions[i];
    const x = 0.5 + i * 3.1;
    s2.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 4.2, fill: { color: C.cardBg } });
    s2.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 0.6, fill: { color: C.cardElevated } });
    s2.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.68, w: 2.9, h: 0.04, fill: { color: r.color } });
    s2.addText(r.flag + " " + r.name, { x: x + 0.15, y: 1.15, w: 2.6, h: 0.5, fontSize: 13, fontFace: "Arial", color: C.text, bold: true, valign: "middle", margin: 0 });
    
    const rows = [
      { label: "性质", value: r.nature },
      { label: "核心口径", value: r.口径 },
      { label: "受众", value: r.受众 },
      { label: "KOL/KOC", value: r.kol },
      { label: "核心信息", value: r.coreMsg },
    ];
    for (let j = 0; j < rows.length; j++) {
      const row = rows[j];
      const y = 1.85 + j * 0.65;
      s2.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.06, w: 0.12, h: 0.12, fill: { color: r.color } });
      s2.addText(row.label, { x: x + 0.35, y: y, w: 0.9, h: 0.22, fontSize: 9, fontFace: "Arial", color: r.color, bold: true, margin: 0 });
      s2.addText(row.value, { x: x + 0.15, y: y + 0.22, w: 2.6, h: 0.38, fontSize: 10, fontFace: "Arial", color: C.text, margin: 0 });
    }
  }
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.35, w: 9, h: 0.22, fill: { color: C.warning, transparency: 85 } });
  s2.addText("※ 非正式上线（测试阶段），预算有限。OM为主，KOL/KOC按区域单独评估", { x: 0.6, y: 5.35, w: 8.8, h: 0.22, fontSize: 9, fontFace: "Arial", color: C.warning, valign: "middle", margin: 0 });

  // ===== Slide 3: 推广时间轴 =====
  let s3 = pres.addSlide();
  s3.background = { color: C.darkBg };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s3.addText("推广时间轴", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });
  s3.addText("全部目标市场7月同步上线（ID/VN/MX + AR/BR/CL）", { x: 0.5, y: 0.95, w: 9, h: 0.3, fontSize: 12, fontFace: "Arial", color: C.purpleLight });

  const phases = [
    { month: "4月", name: "停服维护", action: "服务器维护，素材储备", color: C.warning },
    { month: "5月", name: "本地化冲刺", action: "完成 ID/VN/BR 本地化", color: C.purple },
    { month: "6月", name: "预热期", action: "官宣 + 预约开放", color: C.purpleLight },
    { month: "7月", name: "大版本爆发", action: "全力投放 + KOL爆发", color: C.cyan },
    { month: "8月+", name: "长尾运营", action: "赛季内容更新", color: C.textMuted },
  ];

  s3.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.35, w: 8.8, h: 0.1, fill: { color: C.slate } });
  for (let i = 0; i < phases.length; i++) {
    const p = phases[i];
    const x = 0.6 + i * 1.8;
    s3.addShape(pres.shapes.OVAL, { x: x + 0.55, y: 2.15, w: 0.5, h: 0.5, fill: { color: p.color } });
    s3.addText(p.month, { x: x, y: 1.65, w: 1.6, h: 0.4, fontSize: 12, fontFace: "Arial", color: p.color, bold: true, align: "center", margin: 0 });
    s3.addText(p.name, { x: x, y: 2.7, w: 1.6, h: 0.35, fontSize: 12, fontFace: "Arial", color: C.text, bold: true, align: "center", margin: 0 });
    s3.addText(p.action, { x: x, y: 3.0, w: 1.6, h: 0.3, fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0 });
  }

  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.5, w: 4.4, h: 1.8, fill: { color: C.cardBg } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.5, w: 0.06, h: 1.8, fill: { color: C.purple } });
  s3.addText("准备期（4-6月）", { x: 0.7, y: 3.55, w: 4, h: 0.35, fontSize: 13, fontFace: "Arial", color: C.purple, bold: true, margin: 0 });
  s3.addText([
    { text: "• 评分改善（3.7→3.8，目标4.0）", options: { breakLine: true } },
    { text: "• 本地化完成（ID/VN/BR）", options: { breakLine: true } },
    { text: "• KOL名单确认", options: { breakLine: true } },
    { text: "• 广告素材制作完成", options: {} }
  ], { x: 0.7, y: 3.9, w: 4, h: 1.3, fontSize: 11, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.3, margin: 0 });

  s3.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 3.5, w: 4.4, h: 1.8, fill: { color: C.cardBg } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 3.5, w: 0.06, h: 1.8, fill: { color: C.cyan } });
  s3.addText("爆发期（7月）", { x: 5.3, y: 3.55, w: 4, h: 0.35, fontSize: 13, fontFace: "Arial", color: C.cyan, bold: true, margin: 0 });
  s3.addText([
    { text: "• T-3: 预告片上线", options: { breakLine: true } },
    { text: "• T日: Mid/Macro KOL同步爆发", options: { breakLine: true } },
    { text: "• T+7: 全渠道买量加投", options: { breakLine: true } },
    { text: "• T+14: BP发售+限量皮肤", options: {} }
  ], { x: 5.3, y: 3.9, w: 4, h: 1.3, fontSize: 11, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.3, margin: 0 });

  // ===== Slide 4: 目标市场分层 =====
  let s4 = pres.addSlide();
  s4.background = { color: C.darkBg };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s4.addText("目标市场分层", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  s4.addShape(pres.shapes.OVAL, { x: 3.8, y: 1.6, w: 2.4, h: 2.4, fill: { color: C.purple } });
  s4.addShape(pres.shapes.OVAL, { x: 3.95, y: 1.75, w: 2.1, h: 2.1, fill: { color: C.cardBg } });
  s4.addText("全部目标市场\n7月同步上线", { x: 3.8, y: 2.15, w: 2.4, h: 1.3, fontSize: 14, fontFace: "Arial", color: C.purple, bold: true, align: "center", valign: "middle", margin: 0 });

  const countries = [
    { flag: "🇮🇩", name: "印尼", x: 1.3, y: 1.4, color: C.purple },
    { flag: "🇻🇳", name: "越南", x: 6.8, y: 1.4, color: C.cyan },
    { flag: "🇲🇽", name: "墨西哥", x: 0.6, y: 2.9, color: C.success },
    { flag: "🇧🇷", name: "巴西", x: 7.6, y: 2.9, color: C.gold },
    { flag: "🇨🇴", name: "哥伦比亚", x: 1.0, y: 4.3, color: C.pink },
    { flag: "🇦🇷", name: "阿根廷", x: 4.0, y: 4.8, color: C.purple },
    { flag: "🇨🇱", name: "智利", x: 5.9, y: 4.3, color: C.cyan },
    { flag: "🇺🇸", name: "美国", x: 8.1, y: 3.8, color: C.success },
  ];

  for (const c of countries) {
    s4.addShape(pres.shapes.RECTANGLE, { x: c.x, y: c.y, w: 1.35, h: 0.65, fill: { color: C.cardBg } });
    s4.addShape(pres.shapes.RECTANGLE, { x: c.x, y: c.y, w: 0.05, h: 0.65, fill: { color: c.color } });
    s4.addText(c.flag + " " + c.name, { x: c.x + 0.1, y: c.y, w: 1.15, h: 0.65, fontSize: 11, fontFace: "Arial", color: C.text, align: "center", valign: "middle", margin: 0 });
  }

  // ===== Slide 5: 产品核心定位 =====
  let s5 = pres.addSlide();
  s5.background = { color: C.darkBg };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s5.addText("产品核心定位", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 1.0, fill: { color: C.cardBg } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 0.06, h: 1.0, fill: { color: C.cyan } });
  s5.addText("\u201C进去抢，活着出来就是你的\u201D", { x: 0.8, y: 1.1, w: 8.5, h: 0.55, fontSize: 22, fontFace: "Georgia", color: C.gold, italic: true, align: "center" });
  s5.addText("— G&G 核心 USP，Mobile Extraction Shooter 独家机制", { x: 0.8, y: 1.6, w: 8.5, h: 0.35, fontSize: 11, fontFace: "Arial", color: C.textMuted, align: "center" });

  const cards5 = [
    { title: "产品定位", content: "中世纪地牢 Extraction RPG\n5–15分钟快节奏单局\n赛季制 + 英雄收集", x: 0.5, y: 2.2, color: C.purple, icon: "⚔" },
    { title: "核心特色", content: "Mobile 端独家 Extraction Shooter\n风险回报机制\n死后全失的刺激感", x: 5.05, y: 2.2, color: C.cyan, icon: "🛡" },
    { title: "当前状态", content: "Google Play 评分：3.7 ⚠\n已测试：墨西哥、哥伦比亚\n服务器：4–6月停服维护", x: 0.5, y: 3.85, color: C.warning, icon: "⚠" },
    { title: "7月目标", content: "7月大版本发布在即\n⚠ 3.7分是市场门槛\n目标：7月前改善至 3.8–4.0", x: 5.05, y: 3.85, color: C.success, icon: "🎯" },
  ];

  for (const c of cards5) {
    s5.addShape(pres.shapes.RECTANGLE, { x: c.x, y: c.y, w: 4.45, h: 1.45, fill: { color: C.cardBg } });
    s5.addShape(pres.shapes.RECTANGLE, { x: c.x, y: c.y, w: 0.06, h: 1.45, fill: { color: c.color } });
    s5.addText(c.icon, { x: c.x + 0.2, y: c.y + 0.15, w: 0.5, h: 0.5, fontSize: 22, align: "center", valign: "middle" });
    s5.addText(c.title, { x: c.x + 0.75, y: c.y + 0.18, w: 3.5, h: 0.4, fontSize: 15, fontFace: "Arial", color: c.color, bold: true, margin: 0 });
    s5.addText(c.content, { x: c.x + 0.2, y: c.y + 0.65, w: 4.1, h: 0.75, fontSize: 12, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.25, margin: 0 });
  }

  // ===== Slide 6: 7月大版本核心内容 =====
  let s6 = pres.addSlide();
  s6.background = { color: C.darkBg };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s6.addText("7月大版本核心内容", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });
  s6.addText("三大营销素材支柱（按重要度排序）", { x: 0.5, y: 0.95, w: 9, h: 0.3, fontSize: 13, fontFace: "Arial", color: C.purpleLight });

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
    s6.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.4, w: 2.9, h: 3.8, fill: { color: C.cardBg } });
    s6.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.4, w: 2.9, h: 0.08, fill: { color: p.color } });
    s6.addText(p.rank, { x: x + 0.15, y: 1.55, w: 0.7, h: 0.5, fontSize: 26, fontFace: "Arial Black", color: p.color, bold: true, margin: 0 });
    s6.addShape(pres.shapes.OVAL, { x: x + 0.9, y: 2.15, w: 1.1, h: 1.1, fill: { color: p.color, transparency: 70 } });
    s6.addText(p.icon, { x: x + 0.9, y: 2.15, w: 1.1, h: 1.1, fontSize: 38, align: "center", valign: "middle" });
    s6.addText(p.title, { x: x + 0.1, y: 3.35, w: 2.7, h: 0.4, fontSize: 15, fontFace: "Arial", color: C.text, bold: true, align: "center", margin: 0 });
    s6.addText(p.tags, { x: x + 0.1, y: 3.75, w: 2.7, h: 0.5, fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0 });
    s6.addText(p.points.map((pt, idx) => ({ text: "• " + pt, options: { breakLine: idx < p.points.length - 1 } })), { x: x + 0.15, y: 4.25, w: 2.6, h: 0.65, fontSize: 9, fontFace: "Arial", color: C.text, margin: 0 });
    s6.addShape(pres.shapes.RECTANGLE, { x: x + 0.35, y: 4.95, w: 2.2, h: 0.26, fill: { color: p.color, transparency: 80 } });
    s6.addText(p.badge, { x: x + 0.35, y: 4.95, w: 2.2, h: 0.26, fontSize: 9, fontFace: "Arial", color: p.color, bold: true, align: "center", valign: "middle", margin: 0 });
  }
  s6.addText("三个内容支柱构成7月营销的核心素材库，所有广告素材、KOL合作均围绕这三个展开。", { x: 0.5, y: 5.3, w: 9, h: 0.25, fontSize: 10, fontFace: "Arial", color: C.textMuted, italic: true, align: "center" });

  // ===== Slide 7: 宣传讯息层级 =====
  let s7 = pres.addSlide();
  s7.background = { color: C.darkBg };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s7.addText("宣传讯息层级", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.7, fill: { color: C.cardBg } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 0.06, h: 0.7, fill: { color: C.gold } });
  s7.addText("核心USP：进去抢，活着出来就是你的（Extraction Shooter独家机制）", { x: 0.75, y: 1.05, w: 8.5, h: 0.7, fontSize: 15, fontFace: "Arial", color: C.gold, valign: "middle", margin: 0 });

  const pillars7 = [
    { num: "1", title: "Pillar 1 — 竞技刺激", angle: "Arena天梯 / 以弱胜强 / 公平竞技", users: "竞技型玩家 / BR玩家", content: "地牢风险回报 / 装备驱动 / 死后全失", color: C.purple },
    { num: "2", title: "Pillar 2 — 社交组队", angle: "和朋友下地牢 / 组队开黑", users: "社交型玩家 / 东南亚/拉美", content: "10-15分钟快节奏 / 碎片时间友好", color: C.cyan },
    { num: "3", title: "Pillar 3 — 新手友好", angle: "PVE降门槛 / 3C升级上手更容易", users: "泛用户 / 女性用户", content: "3C升级后视野更广 / 操作更精准", color: C.success },
    { num: "4", title: "Pillar 4 — 视觉冲击", angle: "3C对比 / 打击感展示", users: "所有用户 / 视觉型玩家", content: "Camera变更前后对比 / 战斗特效", color: C.pink },
  ];

  for (let i = 0; i < pillars7.length; i++) {
    const p = pillars7[i];
    const y = 1.9 + i * 0.88;
    s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.8, fill: { color: C.cardBg } });
    s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.06, h: 0.8, fill: { color: p.color } });
    s7.addShape(pres.shapes.OVAL, { x: 0.72, y: y + 0.15, w: 0.5, h: 0.5, fill: { color: p.color } });
    s7.addText(p.num, { x: 0.72, y: y + 0.15, w: 0.5, h: 0.5, fontSize: 15, fontFace: "Arial", color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0 });
    s7.addText(p.title, { x: 1.4, y: y + 0.1, w: 2.3, h: 0.35, fontSize: 13, fontFace: "Arial", color: p.color, bold: true, margin: 0 });
    s7.addText("切入角度：" + p.angle, { x: 1.4, y: y + 0.42, w: 2.7, h: 0.32, fontSize: 9, fontFace: "Arial", color: C.text, margin: 0 });
    s7.addText("目标用户：" + p.users, { x: 4.2, y: y + 0.1, w: 2.4, h: 0.32, fontSize: 10, fontFace: "Arial", color: C.purpleLight, margin: 0 });
    s7.addText("内容：" + p.content, { x: 4.2, y: y + 0.42, w: 5.1, h: 0.32, fontSize: 9, fontFace: "Arial", color: C.textMuted, margin: 0 });
  }

  // ===== Slide 8: 素材细化 =====
  let s8 = pres.addSlide();
  s8.background = { color: C.darkBg };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s8.addText("素材细化（按渠道/格式/受众）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  const colX = [0.5, 2.1, 3.7, 5.2, 6.7];
  const colW = [1.5, 1.5, 1.4, 1.4, 3.2];
  const headers = ["素材类型", "目标用户", "切入角度", "格式", "渠道"];
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 0.45, fill: { color: C.cardElevated } });
  for (let i = 0; i < headers.length; i++) {
    s8.addText(headers[i], { x: colX[i], y: 1.0, w: colW[i], h: 0.45, fontSize: 11, fontFace: "Arial", color: C.purpleLight, bold: true, align: "center", valign: "middle", margin: 0 });
  }

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
    const y = 1.45 + i * 0.48;
    const bgColor = i % 2 === 0 ? C.cardBg : C.cardElevated;
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.48, fill: { color: bgColor } });
    const vals = [m.type, m.users, m.angle, m.format, m.channel];
    for (let j = 0; j < vals.length; j++) {
      s8.addText(vals[j], { x: colX[j], y: y, w: colW[j], h: 0.48, fontSize: 10, fontFace: "Arial", color: j === 0 ? C.cyan : C.text, align: "center", valign: "middle", margin: 0 });
    }
  }
  s8.addText("※ 预计素材总量：各市场约 100-200 个组合，优先测试 Arena + 组队类素材", { x: 0.5, y: 5.4, w: 9, h: 0.2, fontSize: 10, fontFace: "Arial", color: C.textMuted, italic: true });

  // ===== Slide 9: KOL矩阵 =====
  let s9 = pres.addSlide();
  s9.background = { color: C.darkBg };
  s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s9.addText("KOL矩阵（分层 × 宣传点 × CPM）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });
  s9.addText("类型：泛游戏主播为主，不采用纯垂类/Vtuber | OM为主，KOL按需决策", { x: 0.5, y: 0.95, w: 9, h: 0.25, fontSize: 10, fontFace: "Arial", color: C.textMuted });

  const kolHeaders = ["类型", "粉丝量", "市场", "平台", "CPM", "对应宣传点", "切入角度"];
  const kolColX = [0.5, 1.35, 2.15, 3.55, 4.65, 5.55, 6.65];
  const kolColW = [0.8, 0.75, 1.35, 1.05, 0.85, 1.05, 3.0];
  s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.28, w: 9, h: 0.45, fill: { color: C.cardElevated } });
  for (let i = 0; i < kolHeaders.length; i++) {
    s9.addText(kolHeaders[i], { x: kolColX[i], y: 1.28, w: kolColW[i], h: 0.45, fontSize: 10, fontFace: "Arial", color: C.purpleLight, bold: true, align: "center", valign: "middle", margin: 0 });
  }

  const kolTiers = [
    { name: "Macro KOL", fans: "100万+", market: "巴西/墨西哥/哥伦比亚", platform: "YouTube", cpm: "$10–15", pillar: "Pillar 1+2", angle: "品牌背书 + 泛用户破圈" },
    { name: "Mid KOL", fans: "10–100万", market: "印尼/越南/巴西/墨西哥", platform: "TikTok + YouTube", cpm: "$8–12", pillar: "全部", angle: "深度实况 + Arena/PVE体验" },
    { name: "Micro KOL", fans: "1–10万", market: "印尼/越南/巴西/墨西哥", platform: "TikTok", cpm: "$5–8", pillar: "Pillar 2+3", angle: "素人口碑 + 真实反应 + Meme" },
    { name: "Nano KOL", fans: "1万以下", market: "全部5国", platform: "TikTok + Discord", cpm: "$2–5", pillar: "Pillar 2+4", angle: "UGC扩散 + 种子用户" },
  ];
  const tierColors = [C.purple, C.cyan, C.success, C.pink];

  for (let i = 0; i < kolTiers.length; i++) {
    const k = kolTiers[i];
    const y = 1.73 + i * 0.7;
    const bgColor = i % 2 === 0 ? C.cardBg : C.cardElevated;
    s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.7, fill: { color: bgColor } });
    s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.05, h: 0.7, fill: { color: tierColors[i] } });
    const vals = [k.name, k.fans, k.market, k.platform, k.cpm, k.pillar, k.angle];
    for (let j = 0; j < vals.length; j++) {
      s9.addText(vals[j], { x: kolColX[j], y: y, w: kolColW[j], h: 0.7, fontSize: j === 0 ? 12 : 10, fontFace: "Arial", color: j === 0 ? tierColors[i] : (j === 5 ? C.purpleLight : C.text), bold: j === 0, align: "center", valign: "middle", margin: 0 });
    }
  }
  s9.addText("CPM数据来源：G&G印尼历史数据验证（TikTok官方$0.56、YouTube官方$0.29、KOL合作$10-20）；实际CPM因市场/季节浮动", { x: 0.5, y: 5.35, w: 9, h: 0.25, fontSize: 9, fontFace: "Arial", color: C.textMuted, italic: true });

  // ===== Slide 10: 预算分配建议 =====
  let s10 = pres.addSlide();
  s10.background = { color: C.darkBg };
  s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s10.addText("预算分配建议", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  const budgets = [
    { name: "TikTok Ads", pct: "35%", desc: "年轻用户主力平台 · CPM $0.5-1", color: C.purple },
    { name: "Meta Ads", pct: "25%", desc: "触达面广 · CPM $2-3", color: C.purpleLight },
    { name: "Google UAC", pct: "20%", desc: "Search + Play双覆盖 · CPM $3-5", color: C.cyan },
    { name: "KOL合作", pct: "15%", desc: "泛游戏主播为主 · CPM $10-15", color: C.pink },
    { name: "PR / ASO", pct: "5%", desc: "里程碑传播", color: C.textMuted },
  ];

  for (let i = 0; i < budgets.length; i++) {
    const b = budgets[i];
    const y = 1.1 + i * 0.85;
    const barW = parseInt(b.pct) / 100 * 5.5;
    s10.addText(b.name, { x: 0.5, y: y, w: 1.5, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.text, bold: true, valign: "middle", margin: 0 });
    s10.addShape(pres.shapes.RECTANGLE, { x: 2.1, y: y + 0.12, w: 5.5, h: 0.32, fill: { color: C.slate } });
    s10.addShape(pres.shapes.RECTANGLE, { x: 2.1, y: y + 0.12, w: barW, h: 0.32, fill: { color: b.color } });
    s10.addShape(pres.shapes.OVAL, { x: 7.7, y: y + 0.05, w: 0.45, h: 0.45, fill: { color: b.color } });
    s10.addText(b.pct, { x: 7.7, y: y + 0.05, w: 0.45, h: 0.45, fontSize: 11, fontFace: "Arial", color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0 });
    s10.addText(b.desc, { x: 0.5, y: y + 0.42, w: 8, h: 0.35, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
  }
  s10.addText("CPM数据来源：G&G印尼历史数据（TikTok官方$0.56、YouTube官方$0.29、KOL $10-20）", { x: 0.5, y: 5.4, w: 9, h: 0.2, fontSize: 9, fontFace: "Arial", color: C.textMuted, italic: true });

  // ===== Slide 11: 立即行动项 =====
  let s11 = pres.addSlide();
  s11.background = { color: C.darkBg };
  s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s11.addText("立即行动项（4–6月）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });
  s11.addText("停服维护期 · 准备冲刺阶段", { x: 0.5, y: 0.95, w: 9, h: 0.3, fontSize: 12, fontFace: "Arial", color: C.purpleLight });

  const priorities = [
    { label: "P0 — 最高优先", color: C.danger, items: ["评分改善（3.7→3.8，目标4.0）", "印尼/越南/巴西本地化（6月中前）", "KOL名单确认（5月底前）", "广告素材制作（6月中前）：Arena实况×3版 / PVE实录 / 3C对比"] },
    { label: "P1 — 重要", color: C.warning, items: ["预约页面开放（6月中）", "Discord社区激活（持续）", "买量素材制作（TikTok竖屏各2版）"] },
    { label: "P2 — 跟进", color: C.textMuted, items: ["智利/阿根廷/美国本地化（7月前）", "日本市场评估（Q3决策）", "KOL正式合作谈判（6月前）"] },
  ];

  for (let i = 0; i < priorities.length; i++) {
    const p = priorities[i];
    const y = 1.4 + i * 1.35;
    s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 1.25, fill: { color: C.cardBg } });
    s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 1.25, fill: { color: p.color } });
    s11.addShape(pres.shapes.RECTANGLE, { x: 0.75, y: y + 0.12, w: 1.5, h: 0.32, fill: { color: p.color, transparency: 75 } });
    s11.addText(p.label, { x: 0.75, y: y + 0.12, w: 1.5, h: 0.32, fontSize: 11, fontFace: "Arial", color: p.color, bold: true, align: "center", valign: "middle", margin: 0 });
    s11.addText("→", { x: 2.35, y: y + 0.05, w: 0.3, h: 0.4, fontSize: 18, fontFace: "Arial", color: C.cyan, margin: 0 });
    s11.addText(p.items.map((item, idx) => ({ text: "• " + item, options: { breakLine: idx < p.items.length - 1 } })), { x: 2.7, y: y + 0.1, w: 6.6, h: 1.1, fontSize: 11, fontFace: "Arial", color: C.text, lineSpacingMultiple: 1.3, margin: 0 });
  }

  // ===== Slide 12: 下一步 =====
  let s12 = pres.addSlide();
  s12.background = { color: C.darkBg };
  s12.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.12, fill: { color: C.purple } });
  s12.addText("下一步", { x: 0.5, y: 1.0, w: 9, h: 0.8, fontSize: 40, fontFace: "Arial Black", color: C.cyan, align: "center", charSpacing: 8, margin: 0 });

  const nextSteps = ["确认7月大版本最终上线日期", "启动印尼/越南/巴西本地化工作", "接触首批 Nano + Micro KOL", "制作 Arena 真机实况素材（第一批）"];
  const stepColors = [C.purple, C.cyan, C.success, C.pink];

  for (let i = 0; i < nextSteps.length; i++) {
    const y = 2.0 + i * 0.6;
    s12.addShape(pres.shapes.OVAL, { x: 2.0, y: y, w: 0.45, h: 0.45, fill: { color: stepColors[i] } });
    s12.addText(String(i + 1), { x: 2.0, y: y, w: 0.45, h: 0.45, fontSize: 16, fontFace: "Arial", color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0 });
    s12.addText(nextSteps[i], { x: 2.65, y: y, w: 5.5, h: 0.45, fontSize: 17, fontFace: "Arial", color: C.text, valign: "middle", margin: 0 });
  }

  s12.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: 4.6, w: 6.4, h: 0.6, fill: { color: C.cardBg } });
  s12.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: 4.6, w: 0.08, h: 0.6, fill: { color: C.pink } });
  s12.addText("🎯 目标：7月爆发期全力冲击下载 + 榜单", { x: 2.0, y: 4.6, w: 6.1, h: 0.6, fontSize: 16, fontFace: "Arial", color: C.pink, bold: true, valign: "middle", margin: 0 });
  s12.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.505, w: 10, h: 0.12, fill: { color: C.cyan } });

  // ===== Slide 13: Thank You =====
  let s13 = pres.addSlide();
  s13.background = { color: C.darkBg };
  s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.12, fill: { color: C.purple } });
  s13.addShape(pres.shapes.OVAL, { x: 4.5, y: 1.8, w: 1, h: 1, fill: { color: C.purple } });
  s13.addShape(pres.shapes.OVAL, { x: 4.65, y: 1.95, w: 0.7, h: 0.7, fill: { color: C.cyan } });
  s13.addText("谢谢", { x: 0.5, y: 2.9, w: 9, h: 0.9, fontSize: 44, fontFace: "Arial Black", color: C.gold, align: "center", charSpacing: 6, margin: 0 });
  s13.addText("Questions? Let's discuss!", { x: 0.5, y: 3.9, w: 9, h: 0.5, fontSize: 18, fontFace: "Arial", color: C.purpleLight, align: "center", margin: 0 });
  s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.505, w: 10, h: 0.12, fill: { color: C.cyan } });

  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/GoldAndGlory_v2_beautified.pptx" });
  console.log("✅ Done! GoldAndGlory_v2_beautified.pptx (13 slides)");
}

build().catch(console.error);
