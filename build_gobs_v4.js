const pptxgen = require("pptxgenjs");

// Black Background Style with visual elements
const C = {
  black: "0A0A0A",
  darkGray: "1A1A1A",
  midGray: "444444",
  lightGray: "888888",
  lighterGray: "BBBBBB",
  lightestGray: "E0E0E0",
  white: "FFFFFF",
  accent: "3B82F6",  // Blue accent
  accentLight: "60A5FA",
};

async function build() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gobs功能Pipeline汇报";
  pres.author = "Ops Team";

  // ===== Slide 1: Title =====
  let s1 = pres.addSlide();
  s1.background = { color: C.black };
  
  // Decorative lines
  s1.addShape(pres.shapes.LINE, { x: 0, y: 1.5, w: 3, h: 0, line: { color: C.midGray, width: 1 } });
  s1.addShape(pres.shapes.LINE, { x: 7, y: 1.5, w: 3, h: 0, line: { color: C.midGray, width: 1 } });
  s1.addShape(pres.shapes.LINE, { x: 0, y: 4.2, w: 2, h: 0, line: { color: C.midGray, width: 1 } });
  s1.addShape(pres.shapes.LINE, { x: 8, y: 4.2, w: 2, h: 0, line: { color: C.midGray, width: 1 } });

  // Accent bar top
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  
  // Left accent
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.8, w: 0.06, h: 2.0, fill: { color: C.accent } });
  
  // Title
  s1.addText("Gobs 功能 Pipeline", { x: 0.8, y: 1.8, w: 8.5, h: 0.8, fontSize: 42, fontFace: "Arial", color: C.white, bold: true });
  s1.addText("AI 发行内容制作平台", { x: 0.8, y: 2.65, w: 8.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: C.lightGray });
  
  // Timeline badge
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.3, w: 2.2, h: 0.4, fill: { color: C.accent } });
  s1.addText("30天 + 60天 路线图", { x: 0.8, y: 3.3, w: 2.2, h: 0.4, fontSize: 11, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  
  // Date
  s1.addText("2026年4月", { x: 0.8, y: 4.2, w: 8.5, h: 0.3, fontSize: 12, fontFace: "Arial", color: C.lightGray });
  
  // Bottom bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.525, w: 10, h: 0.08, fill: { color: C.accent } });

  // ===== Slide 2a: 终极目标 =====
  let s2a = pres.addSlide();
  s2a.background = { color: C.black };
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s2a.addText("我们最终成为什么", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Vision box
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 1.1, fill: { color: C.darkGray }, line: { color: C.accent, width: 2 } });
  s2a.addText("🎯 愿景：一个基于 AI 的自动化发行平台，输入知识库，输出一键可执行的完整发行方案", { x: 0.7, y: 1.05, w: 8.6, h: 1.1, fontSize: 16, fontFace: "Arial", color: C.white, valign: "middle", margin: 0 });

  // 3 Pillars with icons
  const pillars = [
    { icon: "📚", title: "结构化知识库", desc: "基于 Karpathy 工作流\n项目材料 → 冷启动\n知识积累", x: 0.5, color: C.accent },
    { icon: "🤖", title: "Agent 网络", desc: "决策 / 执行 / 监控\n多类型 Agent 协同\n自动化工作流", x: 3.55, color: "10B981" },
    { icon: "⚡", title: "一键输出", desc: "Community Plan\nBudget/Event Plan\nKOC 建设计划", x: 6.6, color: "F59E0B" },
  ];

  for (const p of pillars) {
    // Glow effect
    s2a.addShape(pres.shapes.OVAL, { x: p.x + 0.7, y: 2.4, w: 1.5, h: 1.5, fill: { color: p.color, transparency: 85 } });
    s2a.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.5, w: 2.9, h: 2.6, fill: { color: C.darkGray }, line: { color: p.color, width: 2 } });
    s2a.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.5, w: 2.9, h: 0.6, fill: { color: p.color } });
    s2a.addText(p.icon + " " + p.title, { x: p.x, y: 2.5, w: 2.9, h: 0.6, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s2a.addText(p.desc, { x: p.x + 0.15, y: 3.25, w: 2.6, h: 1.7, fontSize: 12, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.4, margin: 0 });
  }

  // Arrows
  s2a.addText("→", { x: 3.3, y: 3.4, w: 0.4, h: 0.4, fontSize: 28, color: C.accent, align: "center" });
  s2a.addText("→", { x: 6.35, y: 3.4, w: 0.4, h: 0.4, fontSize: 28, color: "10B981", align: "center" });

  // ===== Slide 2b: 当前阶段 =====
  let s2b = pres.addSlide();
  s2b.background = { color: C.black };
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s2b.addText("我们目前在哪", { x: 0.5, y: 0.2, w: 7, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.white, bold: true, margin: 0 });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 8.0, y: 0.2, w: 1.5, h: 0.5, fill: { color: C.accent } });
  s2b.addText("建设中", { x: 8.0, y: 0.2, w: 1.5, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Left: 数据洞察 (Input)
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 2.7, h: 3.2, fill: { color: C.darkGray }, line: { color: C.midGray, width: 1 } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 2.7, h: 0.55, fill: { color: C.midGray } });
  s2b.addText("📥 数据洞察", { x: 0.4, y: 1.15, w: 2.7, h: 0.55, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText([
    { text: "• 游戏声量（爬虫）", options: { breakLine: true } },
    { text: "• 游戏舆情", options: { breakLine: true } },
    { text: "• Ingame数据", options: { breakLine: true } },
    { text: "• OM获客（暂无）", options: {} }
  ], { x: 0.55, y: 1.85, w: 2.4, h: 2.4, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.6, margin: 0 });

  // Arrow in
  s2b.addShape(pres.shapes.OVAL, { x: 3.2, y: 2.4, w: 0.5, h: 0.5, fill: { color: C.accent } });
  s2b.addText("→", { x: 3.0, y: 2.35, w: 0.9, h: 0.6, fontSize: 26, color: C.accent, align: "center" });

  // Center: Gobs
  s2b.addShape(pres.shapes.OVAL, { x: 3.9, y: 1.8, w: 2.2, h: 2.2, fill: { color: C.accent } });
  s2b.addShape(pres.shapes.OVAL, { x: 4.1, y: 2.0, w: 1.8, h: 1.8, fill: { color: C.darkGray } });
  s2b.addText("Gobs", { x: 3.9, y: 1.8, w: 2.2, h: 2.2, fontSize: 22, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Arrow out
  s2b.addText("→", { x: 6.1, y: 2.35, w: 0.9, h: 0.6, fontSize: 26, color: "10B981", align: "center" });
  s2b.addShape(pres.shapes.OVAL, { x: 6.4, y: 2.4, w: 0.5, h: 0.5, fill: { color: "10B981" } });

  // Right: Action (Output)
  s2b.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 1.15, w: 2.7, h: 3.2, fill: { color: C.darkGray }, line: { color: "10B981", width: 2 } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 1.15, w: 2.7, h: 0.55, fill: { color: "10B981" } });
  s2b.addText("📤 Action", { x: 6.9, y: 1.15, w: 2.7, h: 0.55, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText([
    { text: "✓ 素材生成与分发", options: { breakLine: true } },
    { text: "✓ 水军运营", options: { breakLine: true } },
    { text: "→ Community Plan", options: { breakLine: true } },
    { text: "→ Budget Plan", options: { breakLine: true } },
    { text: "→ Event Plan", options: { breakLine: true } },
    { text: "→ KOC建设计划", options: {} }
  ], { x: 7.05, y: 1.85, w: 2.4, h: 2.4, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.45, margin: 0 });

  // Campaign top
  s2b.addShape(pres.shapes.RECTANGLE, { x: 3.3, y: 0.95, w: 3.4, h: 0.65, fill: { color: C.midGray }, line: { color: C.lightGray, width: 1 } });
  s2b.addText("📋 Campaign（规划中）", { x: 3.3, y: 0.95, w: 3.4, h: 0.65, fontSize: 12, fontFace: "Arial", color: C.lightGray, align: "center", valign: "middle", margin: 0 });

  // Note
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.55, w: 9, h: 0.7, fill: { color: C.darkGray } });
  s2b.addText("📌 当前重点：素材生成与分发 + 水军运营（已投入使用）| 进来需先绑定游戏", { x: 0.7, y: 4.55, w: 8.6, h: 0.7, fontSize: 12, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });

  // ===== Slide 3: 时间轴 Overview =====
  let s3 = pres.addSlide();
  s3.background = { color: C.black };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s3.addText("路线图总览", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Timeline
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.5, w: 9, h: 0.06, fill: { color: C.midGray } });

  // Timeline connector lines
  s3.addShape(pres.shapes.LINE, { x: 1.8, y: 2.55, w: 2.95, h: 0, line: { color: C.lightGray, width: 2 } });
  s3.addShape(pres.shapes.LINE, { x: 5.25, y: 2.55, w: 2.95, h: 0, line: { color: C.lightGray, width: 2 } });

  // Arrow heads
  s3.addText("▶", { x: 4.65, y: 2.4, w: 0.4, h: 0.3, fontSize: 12, color: C.lightGray, align: "center" });
  s3.addText("▶", { x: 8.1, y: 2.4, w: 0.4, h: 0.3, fontSize: 12, color: C.lightGray, align: "center" });

  // Phase 1
  s3.addShape(pres.shapes.OVAL, { x: 1.3, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.white } });
  s3.addText("现在", { x: 0.6, y: 1.75, w: 1.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.0, w: 2.6, h: 2.3, fill: { color: C.darkGray }, line: { color: C.white, width: 1 } });
  s3.addText("4月底", { x: 0.5, y: 3.1, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "验证：AOV", options: { breakLine: true } },
    { text: "水军投入使用", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• 素材生成", options: { breakLine: true } },
    { text: "• 水军运营", options: { breakLine: true } },
    { text: "• 视频粗剪", options: {} }
  ], { x: 0.6, y: 3.5, w: 2.4, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.3, margin: 0 });

  // Phase 2
  s3.addShape(pres.shapes.OVAL, { x: 4.75, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.accent } });
  s3.addText("4月底", { x: 4.05, y: 1.75, w: 1.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.lightGray, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 3.7, y: 3.0, w: 2.6, h: 2.3, fill: { color: C.darkGray }, line: { color: C.accent, width: 2 } });
  s3.addText("6月底", { x: 3.7, y: 3.1, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.accent, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "验证：GNG泰国", options: { breakLine: true } },
    { text: "独立发行", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• 数据洞察", options: { breakLine: true } },
    { text: "• 主动式Agent", options: { breakLine: true } },
    { text: "• 舆情监控", options: {} }
  ], { x: 3.8, y: 3.5, w: 2.4, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.3, margin: 0 });

  // Phase 3
  s3.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.midGray } });
  s3.addText("6月底", { x: 7.5, y: 1.75, w: 1.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.lightGray, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 3.0, w: 2.6, h: 2.3, fill: { color: C.darkGray }, line: { color: C.midGray, width: 1 } });
  s3.addText("年底", { x: 6.9, y: 3.1, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.lightGray, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "验证：孵化项目", options: { breakLine: true } },
    { text: "全流程独立发行", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• 完整闭环", options: { breakLine: true } },
    { text: "• 一键生成", options: { breakLine: true } },
    { text: "• 甩脱依赖", options: {} }
  ], { x: 7.0, y: 3.5, w: 2.4, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.3, margin: 0 });

  // ===== Slide 4: Day 0-30 =====
  let s4 = pres.addSlide();
  s4.background = { color: C.black };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s4.addText("Day 0-30：当前阶段进度（4月底目标）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Left: 已完成
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 4.4, h: 4.2, fill: { color: C.darkGray }, line: { color: "10B981", width: 2 } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 4.4, h: 0.55, fill: { color: "10B981" } });
  s4.addText("✅ 前20天：已完成", { x: 0.5, y: 1.05, w: 4.4, h: 0.55, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const completed = ["视频内容分析", "AI 粗剪流程", "背景音乐匹配", "素材分发基础框架", "水军运营策略设计", "用户资产隔离"];
  for (let i = 0; i < completed.length; i++) {
    const y = 1.75 + i * 0.55;
    s4.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.1, w: 0.25, h: 0.25, fill: { color: "10B981" } });
    s4.addText("✓", { x: 0.7, y: y + 0.05, w: 0.25, h: 0.3, fontSize: 12, color: C.white, align: "center" });
    s4.addText(completed[i], { x: 1.1, y: y, w: 3.6, h: 0.45, fontSize: 13, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });
  }

  // Right: 进行中
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.05, w: 4.4, h: 4.2, fill: { color: C.darkGray }, line: { color: C.accent, width: 2 } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.05, w: 4.4, h: 0.55, fill: { color: C.accent } });
  s4.addText("🔄 后10天：到4月底", { x: 5.1, y: 1.05, w: 4.4, h: 0.55, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const remaining = ["视频生成标准化", "角色/场景一致性", "水军 Agent 上线", "系统稳定性测试", "FFmpeg 预处理优化"];
  for (let i = 0; i < remaining.length; i++) {
    const y = 1.75 + i * 0.55;
    s4.addShape(pres.shapes.OVAL, { x: 5.3, y: y + 0.1, w: 0.25, h: 0.25, fill: { color: C.midGray } });
    s4.addText("☐", { x: 5.3, y: y + 0.05, w: 0.25, h: 0.3, fontSize: 12, color: C.lightGray, align: "center" });
    s4.addText(remaining[i], { x: 5.7, y: y, w: 3.6, h: 0.45, fontSize: 13, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });
  }

  // ===== Slide 5: Day 30-60 =====
  let s5 = pres.addSlide();
  s5.background = { color: C.black };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s5.addText("Day 30-60：6月底目标", { x: 0.5, y: 0.2, w: 7, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });
  s5.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0.2, w: 2, h: 0.5, fill: { color: C.accent } });
  s5.addText("高亮=本期完成", { x: 7.5, y: 0.2, w: 2, h: 0.5, fontSize: 11, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Left: 数据洞察 (highlighted)
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 2.7, h: 2.5, fill: { color: C.darkGray }, line: { color: C.accent, width: 3 } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 2.7, h: 0.5, fill: { color: C.accent } });
  s5.addText("📥 数据洞察", { x: 0.4, y: 1.15, w: 2.7, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s5.addText([
    { text: "• 爬虫接入 ✓", options: { breakLine: true } },
    { text: "• 声量分析", options: { breakLine: true } },
    { text: "• 舆情监控", options: { breakLine: true } },
    { text: "• 分渠道配置", options: {} }
  ], { x: 0.55, y: 1.75, w: 2.4, h: 1.8, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.5, margin: 0 });

  // Center: Agent
  s5.addShape(pres.shapes.OVAL, { x: 3.9, y: 1.5, w: 2.2, h: 2.2, fill: { color: C.accent } });
  s5.addShape(pres.shapes.OVAL, { x: 4.1, y: 1.7, w: 1.8, h: 1.8, fill: { color: C.darkGray } });
  s5.addText("Agent", { x: 3.9, y: 1.5, w: 2.2, h: 2.2, fontSize: 18, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Arrows
  s5.addText("→", { x: 3.1, y: 2.2, w: 0.8, h: 0.5, fontSize: 22, color: C.accent, align: "center" });
  s5.addText("→", { x: 6.1, y: 2.2, w: 0.8, h: 0.5, fontSize: 22, color: C.accent, align: "center" });

  // Right: Output
  s5.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 1.15, w: 2.7, h: 2.5, fill: { color: C.darkGray }, line: { color: C.accent, width: 2 } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 1.15, w: 2.7, h: 0.5, fill: { color: C.accent } });
  s5.addText("📤 输出", { x: 6.9, y: 1.15, w: 2.7, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s5.addText([
    { text: "→ Community Plan", options: { breakLine: true } },
    { text: "→ Budget Plan", options: { breakLine: true } },
    { text: "→ Event Plan", options: { breakLine: true } },
    { text: "→ KOC建设", options: {} }
  ], { x: 7.05, y: 1.75, w: 2.4, h: 1.8, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.5, margin: 0 });

  // Note
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.85, w: 9, h: 0.6, fill: { color: C.darkGray } });
  s5.addText("⏭ 本期不重点：视频产出、水军运营（已上线，持续运行）", { x: 0.7, y: 3.85, w: 8.6, h: 0.6, fontSize: 12, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });

  // Tasks
  const d60tasks = [
    { cat: "数据洞察", items: "爬虫/声量/舆情/ST API" },
    { cat: "主动式Agent", items: "发行方案/决策/执行" },
    { cat: "Community", items: "Post计划/KOL/KOC" },
  ];
  for (let i = 0; i < d60tasks.length; i++) {
    const x = 0.5 + i * 3.1;
    s5.addShape(pres.shapes.RECTANGLE, { x: x, y: 4.6, w: 2.95, h: 0.75, fill: { color: C.darkGray }, line: { color: C.midGray, width: 1 } });
    s5.addText(d60tasks[i].cat + "：" + d60tasks[i].items, { x: x + 0.1, y: 4.6, w: 2.75, h: 0.75, fontSize: 10, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });
  }

  // ===== Slide 6: 一年计划 =====
  let s6 = pres.addSlide();
  s6.background = { color: C.black };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s6.addText("一年计划：90天详细路线（到6月底）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  const yearPlan = [
    { icon: "📚", title: "结构化知识库", desc: "Karpathy工作流\nGNG材料冷启动", status: "进行中", color: C.accent, x: 0.5 },
    { icon: "🧠", title: "GNG发行知识库", desc: "OM创意/预算\nCommunity/Influencer\n方案质量≥80%人工", status: "规划中", color: "8B5CF6", x: 3.55 },
    { icon: "⚡", title: "更多Action Agent", desc: "Community Post Agent\n日报/周报Agent\nLatte/社交/ST API", status: "规划中", color: "10B981", x: 6.6 },
  ];

  for (const p of yearPlan) {
    // Glow
    s6.addShape(pres.shapes.OVAL, { x: p.x + 0.7, y: 2.2, w: 1.5, h: 1.2, fill: { color: p.color, transparency: 85 } });
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.3, w: 2.9, h: 2.6, fill: { color: C.darkGray }, line: { color: p.color, width: 2 } });
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.3, w: 2.9, h: 0.55, fill: { color: p.color } });
    s6.addText(p.icon + " " + p.title, { x: p.x, y: 2.3, w: 2.9, h: 0.55, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s6.addText(p.desc, { x: p.x + 0.15, y: 2.95, w: 2.6, h: 1.3, fontSize: 11, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.4, margin: 0 });
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x + 0.15, y: 4.55, w: 2.6, h: 0.28, fill: { color: p.color, transparency: 80 } });
    s6.addText(p.status, { x: p.x + 0.15, y: 4.55, w: 2.6, h: 0.28, fontSize: 10, fontFace: "Arial", color: p.color, align: "center", valign: "middle", margin: 0 });
  }

  s6.addText("→", { x: 3.3, y: 3.2, w: 0.4, h: 0.4, fontSize: 20, color: C.midGray, align: "center" });
  s6.addText("→", { x: 6.35, y: 3.2, w: 0.4, h: 0.4, fontSize: 20, color: C.midGray, align: "center" });

  // Agent list note
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.5, fill: { color: C.darkGray } });
  s6.addText("🔗 Agent List 扩展：覆盖规划/决策/执行/监控关键节点", { x: 0.7, y: 5.0, w: 8.6, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });

  // ===== Slide 7: 年底目标 =====
  let s7 = pres.addSlide();
  s7.background = { color: C.black };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s7.addText("年底目标", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  // Two pillars
  const yearEnd = [
    { icon: "🛠", title: "功能完成", desc: "完成 P1/P2 功能\n发行能力更健壮\nSkills + MD 复用", x: 0.5, color: C.white },
    { icon: "💡", title: "AI 优化思考", desc: "用户离研发更近：智能客服\n研发离用户更近\nAgent 美化问题收集反馈", x: 5.1, color: C.lightGray },
  ];

  for (const y of yearEnd) {
    s7.addShape(pres.shapes.RECTANGLE, { x: y.x, y: 1.1, w: 4.4, h: 2.6, fill: { color: C.darkGray }, line: { color: y.color, width: 2 } });
    s7.addShape(pres.shapes.RECTANGLE, { x: y.x, y: 1.1, w: 4.4, h: 0.6, fill: { color: y.color } });
    s7.addText(y.icon + " " + y.title, { x: y.x, y: 1.1, w: 4.4, h: 0.6, fontSize: 15, fontFace: "Arial", color: C.black, bold: true, align: "center", valign: "middle", margin: 0 });
    s7.addText(y.desc, { x: y.x + 0.2, y: 1.85, w: 4.0, h: 1.7, fontSize: 13, fontFace: "Arial", color: C.lightGray, lineSpacingMultiple: 1.5, margin: 0 });
  }

  // 孵化项目
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.95, w: 9, h: 0.8, fill: { color: C.accent }, line: { color: C.accentLight, width: 2 } });
  s7.addText("🚀 孵化项目：一个产品全流程独立发行验证", { x: 0.7, y: 3.95, w: 8.6, h: 0.8, fontSize: 16, fontFace: "Arial", color: C.white, bold: true, valign: "middle", margin: 0 });

  // ===== Slide 8: 立即行动项 =====
  let s8 = pres.addSlide();
  s8.background = { color: C.black };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.darkGray } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s8.addText("立即行动项", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.white, bold: true, margin: 0 });

  const actions = [
    { priority: "P0", text: "视频生成标准化 + 角色一致性", color: C.white },
    { priority: "P0", text: "水军 Agent 训练 + 上线", color: C.white },
    { priority: "P1", text: "爬虫接入 + 声量分析", color: C.lightGray },
    { priority: "P1", text: "舆情监控分渠道配置", color: C.lightGray },
    { priority: "P2", text: "系统稳定性测试（5-10用户）", color: C.midGray },
    { priority: "P2", text: "用户空间权限隔离", color: C.midGray },
  ];

  for (let i = 0; i < actions.length; i++) {
    const a = actions[i];
    const y = 1.1 + i * 0.7;
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.6, fill: { color: C.darkGray } });
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.06, h: 0.6, fill: { color: a.color } });
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: y + 0.12, w: 0.6, h: 0.35, fill: { color: a.color } });
    s8.addText(a.priority, { x: 0.7, y: y + 0.12, w: 0.6, h: 0.35, fontSize: 11, fontFace: "Arial", color: C.black, bold: true, align: "center", valign: "middle", margin: 0 });
    s8.addText(a.text, { x: 1.5, y: y, w: 7.8, h: 0.6, fontSize: 14, fontFace: "Arial", color: C.lightGray, valign: "middle", margin: 0 });
  }

  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.5, fill: { color: C.accent } });
  s8.addText("🎯 4月底AOV验证 → 6月底GNG泰国独立发行 → 年底完整独立发行", { x: 0.7, y: 5.0, w: 8.6, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, valign: "middle", margin: 0 });

  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/Gobs_Pipeline_v4.pptx" });
  console.log("✅ Done! Gobs_Pipeline_v4.pptx");
}

build().catch(console.error);
