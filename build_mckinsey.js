const pptxgen = require("pptxgenjs");

// McKinsey-style: Clean, minimal, professional
const C = {
  // McKinsey blue palette
  navy: "1B365D",
  navyLight: "2C4A7C",
  blue: "4472C4",
  blueLight: "5B8BD4",
  // Neutrals
  darkGray: "2D3748",
  midGray: "718096",
  lightGray: "E2E8F0",
  lighterGray: "F7FAFC",
  white: "FFFFFF",
  // Accent
  accent: "C53030", // McKinsey red for emphasis
  green: "276749",
};

async function build() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gobs功能Pipeline";
  pres.author = "Ops Team";

  // ===== Slide 1: Title =====
  let s1 = pres.addSlide();
  s1.background = { color: C.white };
  
  // Navy header bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.8, fill: { color: C.navy } });
  
  // Title on navy
  s1.addText("Gobs 功能 Pipeline", { x: 0.6, y: 0.5, w: 8.8, h: 0.9, fontSize: 36, fontFace: "Arial", color: C.white, bold: true });
  s1.addText("AI 发行内容制作平台", { x: 0.6, y: 1.3, w: 8.8, h: 0.4, fontSize: 18, fontFace: "Arial", color: C.blueLight });
  
  // Key message box
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.3, w: 8.8, h: 1.2, fill: { color: C.lighterGray } });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.3, w: 0.08, h: 1.2, fill: { color: C.blue } });
  s1.addText("核心目标：30天实现素材自动化 → 60天数据洞察闭环 → 年底完整独立发行", { x: 0.9, y: 2.3, w: 8.3, h: 1.2, fontSize: 16, fontFace: "Arial", color: C.darkGray, valign: "middle", margin: 0 });

  // Date
  s1.addText("2026年4月", { x: 0.6, y: 3.8, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Arial", color: C.midGray });

  // Footer
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.35, w: 10, h: 0.25, fill: { color: C.navy } });
  s1.addText("CONFIDENTIAL — Internal Use Only", { x: 0.6, y: 5.35, w: 8.8, h: 0.25, fontSize: 8, fontFace: "Arial", color: C.white, valign: "middle", margin: 0 });

  // ===== Slide 2a: 终极愿景 =====
  let s2a = pres.addSlide();
  s2a.background = { color: C.white };
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s2a.addText("我们最终成为什么", { x: 0.6, y: 0.25, w: 9, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Vision statement
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.2, w: 8.8, h: 1.0, fill: { color: C.navy } });
  s2a.addText("一个基于 AI 的自动化发行平台：输入知识库，输出一键可执行的完整发行方案", { x: 0.8, y: 1.2, w: 8.4, h: 1.0, fontSize: 18, fontFace: "Arial", color: C.white, valign: "middle", margin: 0 });

  // 3 pillars
  const pillars = [
    { num: "01", title: "结构化知识库", desc: "基于 Karpathy 工作流\n项目材料 → 冷启动\n知识积累", x: 0.6 },
    { num: "02", title: "Agent 网络", desc: "决策 / 执行 / 监控\n多类型 Agent 协同\n自动化工作流", x: 3.55 },
    { num: "03", title: "一键输出", desc: "Community Plan\nBudget/Event Plan\nKOC 建设计划", x: 6.55 },
  ];

  for (const p of pillars) {
    s2a.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.5, w: 2.75, h: 2.6, fill: { color: C.white }, line: { color: C.lightGray, width: 1 } });
    s2a.addText(p.num, { x: p.x + 0.15, y: 2.6, w: 0.6, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.blue, bold: true, margin: 0 });
    s2a.addText(p.title, { x: p.x + 0.15, y: 3.1, w: 2.45, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.navy, bold: true, margin: 0 });
    s2a.addShape(pres.shapes.RECTANGLE, { x: p.x + 0.15, y: 3.5, w: 2.0, h: 0.03, fill: { color: C.blue } });
    s2a.addText(p.desc, { x: p.x + 0.15, y: 3.65, w: 2.45, h: 1.3, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });
  }

  // ===== Slide 2b: 当前阶段 =====
  let s2b = pres.addSlide();
  s2b.background = { color: C.white };
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s2b.addText("我们目前在哪", { x: 0.6, y: 0.25, w: 7, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 8.3, y: 0.25, w: 1.2, h: 0.4, fill: { color: C.blue } });
  s2b.addText("建设中", { x: 8.3, y: 0.25, w: 1.2, h: 0.4, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // 3 columns
  // Left: 输入
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 2.75, h: 2.8, fill: { color: C.white }, line: { color: C.midGray, width: 1 } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 2.75, h: 0.5, fill: { color: C.midGray } });
  s2b.addText("输入 INPUT", { x: 0.6, y: 1.15, w: 2.75, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText("数据洞察", { x: 0.6, y: 1.15, w: 2.75, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText([
    { text: "• 游戏声量（爬虫）", options: { breakLine: true } },
    { text: "• 游戏舆情", options: { breakLine: true } },
    { text: "• Ingame数据", options: { breakLine: true } },
    { text: "• OM获客（暂无）", options: {} }
  ], { x: 0.75, y: 1.8, w: 2.45, h: 2.0, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.6, margin: 0 });

  // Center: Platform
  s2b.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.15, w: 2.8, h: 2.8, fill: { color: C.navy } });
  s2b.addText("Gobs", { x: 3.6, y: 1.8, w: 2.8, h: 0.6, fontSize: 28, fontFace: "Arial", color: C.white, bold: true, align: "center", margin: 0 });
  s2b.addText("平台", { x: 3.6, y: 2.4, w: 2.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.blueLight, align: "center", margin: 0 });
  s2b.addText("Campaign（规划中）", { x: 3.6, y: 3.0, w: 2.8, h: 0.4, fontSize: 11, fontFace: "Arial", color: C.lightGray, align: "center", margin: 0 });

  // Arrows
  s2b.addText("→", { x: 3.35, y: 2.1, w: 0.3, h: 0.5, fontSize: 24, color: C.midGray, align: "center" });
  s2b.addText("→", { x: 6.35, y: 2.1, w: 0.3, h: 0.5, fontSize: 24, color: C.green, bold: true, align: "center" });

  // Right: 输出
  s2b.addShape(pres.shapes.RECTANGLE, { x: 6.65, y: 1.15, w: 2.75, h: 2.8, fill: { color: C.white }, line: { color: C.green, width: 2 } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 6.65, y: 1.15, w: 2.75, h: 0.5, fill: { color: C.green } });
  s2b.addText("输出 OUTPUT", { x: 6.65, y: 1.15, w: 2.75, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText([
    { text: "✓ 素材生成与分发", options: { breakLine: true } },
    { text: "✓ 水军运营", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "→ Community Plan", options: { breakLine: true } },
    { text: "→ Budget Plan", options: { breakLine: true } },
    { text: "→ Event Plan", options: { breakLine: true } },
    { text: "→ KOC建设计划", options: {} }
  ], { x: 6.8, y: 1.8, w: 2.45, h: 2.0, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });

  // Note
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.15, w: 8.8, h: 0.6, fill: { color: C.lighterGray } });
  s2b.addText("前提：进来需先绑定游戏 | 知识库基于 Andrej Karpathy 工作流", { x: 0.8, y: 4.15, w: 8.4, h: 0.6, fontSize: 11, fontFace: "Arial", color: C.midGray, valign: "middle", margin: 0 });

  // ===== Slide 3: 路线图 =====
  let s3 = pres.addSlide();
  s3.background = { color: C.white };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s3.addText("路线图", { x: 0.6, y: 0.25, w: 9, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Timeline
  const phases = [
    { label: "现在", date: "4月底", verify: "AOV验证\n水军投入使用", items: ["素材生成", "水军运营", "视频粗剪"], color: C.midGray, x: 0.6 },
    { label: "4月底", date: "6月底", verify: "GNG泰国\n独立发行", items: ["数据洞察", "主动式Agent", "舆情监控"], color: C.blue, x: 3.55 },
    { label: "6月底", date: "年底", verify: "孵化项目\n全流程验证", items: ["完整闭环", "一键生成", "甩脱依赖"], color: C.navy, x: 6.55 },
  ];

  // Timeline line
  s3.addShape(pres.shapes.LINE, { x: 1.3, y: 1.5, w: 7.4, h: 0, line: { color: C.lightGray, width: 3 } });

  for (let i = 0; i < phases.length; i++) {
    const p = phases[i];
    
    // Dot
    s3.addShape(pres.shapes.OVAL, { x: p.x + 1.1, y: 1.3, w: 0.4, h: 0.4, fill: { color: p.color } });
    
    // Label above
    s3.addText(p.label, { x: p.x, y: 1.0, w: 2.75, h: 0.3, fontSize: 11, fontFace: "Arial", color: p.color, bold: true, align: "center" });
    
    // Card below
    s3.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.85, w: 2.75, h: 3.3, fill: { color: C.white }, line: { color: p.color, width: 2 } });
    s3.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.85, w: 2.75, h: 0.45, fill: { color: p.color } });
    s3.addText(p.date, { x: p.x, y: 1.85, w: 2.75, h: 0.45, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    
    // Verify
    s3.addText("验证：" + p.verify, { x: p.x + 0.1, y: 2.4, w: 2.55, h: 0.8, fontSize: 10, fontFace: "Arial", color: C.darkGray, margin: 0 });
    
    // Items
    s3.addText(p.items.map((item, idx) => ({ text: "• " + item, options: { breakLine: idx < p.items.length - 1 } })), { x: p.x + 0.1, y: 3.2, w: 2.55, h: 1.8, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.5, margin: 0 });
  }

  // Arrows between phases
  s3.addText("▶", { x: 3.35, y: 1.25, w: 0.3, h: 0.3, fontSize: 10, color: C.lightGray, align: "center" });
  s3.addText("▶", { x: 6.3, y: 1.25, w: 0.3, h: 0.3, fontSize: 10, color: C.lightGray, align: "center" });

  // ===== Slide 4: Day 0-30 =====
  let s4 = pres.addSlide();
  s4.background = { color: C.white };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s4.addText("Day 0-30：当前阶段进度（4月底目标）", { x: 0.6, y: 0.25, w: 9, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Two columns
  // Left: 已完成
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 4.25, h: 4.0, fill: { color: C.white }, line: { color: C.green, width: 2 } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 4.25, h: 0.5, fill: { color: C.green } });
  s4.addText("已完成 — 前20天", { x: 0.6, y: 1.15, w: 4.25, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const completed = ["视频内容分析", "AI 粗剪流程", "背景音乐匹配", "素材分发基础框架", "水军运营策略设计", "用户资产隔离"];
  for (let i = 0; i < completed.length; i++) {
    const y = 1.85 + i * 0.52;
    s4.addText("✓", { x: 0.8, y: y, w: 0.3, h: 0.4, fontSize: 14, color: C.green, bold: true });
    s4.addText(completed[i], { x: 1.15, y: y, w: 3.5, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.darkGray, valign: "middle", margin: 0 });
  }

  // Right: 进行中
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.15, y: 1.15, w: 4.25, h: 4.0, fill: { color: C.white }, line: { color: C.blue, width: 2 } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.15, y: 1.15, w: 4.25, h: 0.5, fill: { color: C.blue } });
  s4.addText("进行中 — 到4月底", { x: 5.15, y: 1.15, w: 4.25, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const remaining = ["视频生成标准化", "角色/场景一致性", "水军 Agent 上线", "系统稳定性测试", "FFmpeg 预处理优化"];
  for (let i = 0; i < remaining.length; i++) {
    const y = 1.85 + i * 0.52;
    s4.addText("□", { x: 5.35, y: y, w: 0.3, h: 0.4, fontSize: 14, color: C.blue });
    s4.addText(remaining[i], { x: 5.7, y: y, w: 3.5, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.darkGray, valign: "middle", margin: 0 });
  }

  // ===== Slide 5: Day 30-60 =====
  let s5 = pres.addSlide();
  s5.background = { color: C.white };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s5.addText("Day 30-60：6月底目标", { x: 0.6, y: 0.25, w: 7, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });
  s5.addShape(pres.shapes.RECTANGLE, { x: 8.0, y: 0.25, w: 1.5, h: 0.4, fill: { color: C.blue } });
  s5.addText("本期重点", { x: 8.0, y: 0.25, w: 1.5, h: 0.4, fontSize: 11, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // 3 parts with highlights
  const d60Parts = [
    { title: "数据洞察", items: ["爬虫接入", "声量分析", "舆情监控", "ST API数据"], highlight: true, x: 0.6 },
    { title: "主动式 Agent", items: ["发行方案生成", "决策链路", "执行与监控"], highlight: true, x: 3.55 },
    { title: "输出能力", items: ["Community Plan", "Budget Plan", "Event Plan", "KOC建设"], highlight: true, x: 6.55 },
  ];

  for (const p of d60Parts) {
    const borderColor = p.highlight ? C.blue : C.lightGray;
    const headerColor = p.highlight ? C.blue : C.midGray;
    s5.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.15, w: 2.75, h: 2.5, fill: { color: C.white }, line: { color: borderColor, width: 2 } });
    s5.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.15, w: 2.75, h: 0.5, fill: { color: headerColor } });
    s5.addText(p.title, { x: p.x, y: 1.15, w: 2.75, h: 0.5, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s5.addText(p.items.map((item, idx) => ({ text: "• " + item, options: { breakLine: idx < p.items.length - 1 } })), { x: p.x + 0.15, y: 1.8, w: 2.45, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.5, margin: 0 });
  }

  // Not in scope
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.85, w: 8.8, h: 0.6, fill: { color: C.lighterGray } });
  s5.addText("本期不重点：视频产出、水军运营（已上线，持续运行）", { x: 0.8, y: 3.85, w: 8.4, h: 0.6, fontSize: 12, fontFace: "Arial", color: C.midGray, valign: "middle", margin: 0 });

  // ===== Slide 6: 一年计划 =====
  let s6 = pres.addSlide();
  s6.background = { color: C.white };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s6.addText("一年计划：90天详细路线（到6月底）", { x: 0.6, y: 0.25, w: 9, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  const yearPlan = [
    { num: "01", title: "结构化知识库", desc: "Karpathy工作流\nGNG材料冷启动", status: "进行中", color: C.blue, x: 0.6 },
    { num: "02", title: "GNG发行知识库", desc: "OM创意/预算\nCommunity/Influencer\n方案质量≥80%人工", status: "规划中", color: C.navyLight, x: 3.55 },
    { num: "03", title: "更多Action Agent", desc: "Community Post Agent\n日报/周报Agent\nLatte/社交/ST API", status: "规划中", color: C.navyLight, x: 6.55 },
  ];

  for (const p of yearPlan) {
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.15, w: 2.75, h: 2.7, fill: { color: C.white }, line: { color: p.color, width: 2 } });
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.15, w: 2.75, h: 0.5, fill: { color: p.color } });
    s6.addText(p.num + " " + p.title, { x: p.x, y: 1.15, w: 2.75, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s6.addText(p.desc, { x: p.x + 0.15, y: 1.8, w: 2.45, h: 1.5, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });
    s6.addText(p.status, { x: p.x + 0.15, y: 3.45, w: 2.45, h: 0.3, fontSize: 10, fontFace: "Arial", color: p.color, bold: true, margin: 0 });
  }

  // Arrow
  s6.addText("→", { x: 3.3, y: 2.2, w: 0.3, h: 0.4, fontSize: 20, color: C.lightGray, align: "center" });
  s6.addText("→", { x: 6.25, y: 2.2, w: 0.3, h: 0.4, fontSize: 20, color: C.lightGray, align: "center" });

  // Agent list note
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.05, w: 8.8, h: 0.5, fill: { color: C.lighterGray } });
  s6.addText("Agent List 扩展：覆盖规划/决策/执行/监控关键节点", { x: 0.8, y: 4.05, w: 8.4, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.midGray, valign: "middle", margin: 0 });

  // ===== Slide 7: 年底目标 =====
  let s7 = pres.addSlide();
  s7.background = { color: C.white };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s7.addText("年底目标", { x: 0.6, y: 0.25, w: 9, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Two pillars
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 4.25, h: 2.3, fill: { color: C.white }, line: { color: C.navy, width: 2 } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.15, w: 4.25, h: 0.5, fill: { color: C.navy } });
  s7.addText("功能完成", { x: 0.6, y: 1.15, w: 4.25, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s7.addText([
    { text: "• 完成 P1/P2 功能", options: { breakLine: true } },
    { text: "• 发行能力更健壮", options: { breakLine: true } },
    { text: "• Skills + MD 复用到更多产品", options: {} }
  ], { x: 0.8, y: 1.8, w: 3.85, h: 1.5, fontSize: 13, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.6, margin: 0 });

  s7.addShape(pres.shapes.RECTANGLE, { x: 5.15, y: 1.15, w: 4.25, h: 2.3, fill: { color: C.white }, line: { color: C.midGray, width: 1 } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 5.15, y: 1.15, w: 4.25, h: 0.5, fill: { color: C.midGray } });
  s7.addText("AI 优化思考", { x: 5.15, y: 1.15, w: 4.25, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s7.addText([
    { text: "• 用户离研发更近：智能客服", options: { breakLine: true } },
    { text: "• 研发离用户更近", options: { breakLine: true } },
    { text: "  Agent 美化问题收集反馈", options: {} }
  ], { x: 5.35, y: 1.8, w: 3.85, h: 1.5, fontSize: 13, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.6, margin: 0 });

  // 孵化项目
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.65, w: 8.8, h: 0.8, fill: { color: C.navy } });
  s7.addText("孵化项目：一个产品全流程独立发行验证", { x: 0.8, y: 3.65, w: 8.4, h: 0.8, fontSize: 16, fontFace: "Arial", color: C.white, bold: true, valign: "middle", margin: 0 });

  // ===== Slide 8: 行动项 =====
  let s8 = pres.addSlide();
  s8.background = { color: C.white };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.navy } });
  s8.addText("立即行动项", { x: 0.6, y: 0.25, w: 9, h: 0.5, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  const actions = [
    { priority: "P0", text: "视频生成标准化 + 角色一致性", color: C.accent },
    { priority: "P0", text: "水军 Agent 训练 + 上线", color: C.accent },
    { priority: "P1", text: "爬虫接入 + 声量分析", color: C.blue },
    { priority: "P1", text: "舆情监控分渠道配置", color: C.blue },
    { priority: "P2", text: "系统稳定性测试（5-10用户）", color: C.midGray },
    { priority: "P2", text: "用户空间权限隔离", color: C.midGray },
  ];

  for (let i = 0; i < actions.length; i++) {
    const a = actions[i];
    const y = 1.15 + i * 0.62;
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: y, w: 1.0, h: 0.5, fill: { color: a.color } });
    s8.addText(a.priority, { x: 0.6, y: y, w: 1.0, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s8.addText(a.text, { x: 1.8, y: y, w: 7.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.darkGray, valign: "middle", margin: 0 });
  }

  // Goal
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.95, w: 8.8, h: 0.55, fill: { color: C.navy } });
  s8.addText("4月底 AOV验证 → 6月底 GNG泰国独立发行 → 年底 完整独立发行", { x: 0.8, y: 4.95, w: 8.4, h: 0.55, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, valign: "middle", margin: 0 });

  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/Gobs_Pipeline_McKinsey.pptx" });
  console.log("✅ Done! Gobs_Pipeline_McKinsey.pptx");
}

build().catch(console.error);
