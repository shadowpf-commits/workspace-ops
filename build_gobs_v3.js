const pptxgen = require("pptxgenjs");

// Black & White Professional Style
const C = {
  black: "1A1A1A",
  darkGray: "333333",
  midGray: "666666",
  lightGray: "AAAAAA",
  lighterGray: "E5E5E5",
  lightestGray: "F5F5F5",
  white: "FFFFFF",
  accent: "2563EB", // blue accent for highlights
};

async function build() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gobs功能Pipeline汇报";
  pres.author = "Ops Team";

  // ===== Slide 1: Title =====
  let s1 = pres.addSlide();
  s1.background = { color: C.white };
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.black } });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.8, w: 0.06, h: 2.0, fill: { color: C.black } });
  s1.addText("Gobs 功能 Pipeline", { x: 0.8, y: 1.8, w: 8.5, h: 0.8, fontSize: 40, fontFace: "Arial", color: C.black, bold: true });
  s1.addText("AI 发行内容制作平台", { x: 0.8, y: 2.6, w: 8.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: C.midGray });
  s1.addText("30天 + 60天 路线图", { x: 0.8, y: 3.3, w: 8.5, h: 0.4, fontSize: 16, fontFace: "Arial", color: C.accent });
  s1.addText("2026年4月", { x: 0.8, y: 4.2, w: 8.5, h: 0.3, fontSize: 12, fontFace: "Arial", color: C.lightGray });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.5, w: 10, h: 0.1, fill: { color: C.black } });

  // ===== Slide 2a: 终极目标 =====
  let s2a = pres.addSlide();
  s2a.background = { color: C.white };
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s2a.addText("我们最终成为什么", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.black, bold: true, margin: 0 });

  // Vision statement
  s2a.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 1.2, fill: { color: C.lightestGray }, line: { color: C.black, width: 2 } });
  s2a.addText("🎯 愿景", { x: 0.7, y: 1.15, w: 2, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.black, bold: true, margin: 0 });
  s2a.addText("一个基于 AI 的自动化发行平台：输入知识库，输出一键可执行的完整发行方案", { x: 0.7, y: 1.55, w: 8.6, h: 0.6, fontSize: 16, fontFace: "Arial", color: C.darkGray, margin: 0 });

  // 3 Pillars
  const pillars = [
    { icon: "📚", title: "结构化知识库", desc: "基于 Andrej Karpathy 工作流\n项目材料 → 冷启动 → 知识积累", x: 0.5 },
    { icon: "🤖", title: "Agent 网络", desc: "决策 / 执行 / 监控\n多类型 Agent 协同工作", x: 3.55 },
    { icon: "⚡", title: "一键输出", desc: "Community Plan\nBudget Plan / Event Plan\nKOC 建设计划等", x: 6.6 },
  ];

  for (const p of pillars) {
    s2a.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.5, w: 2.9, h: 2.8, fill: { color: C.white }, line: { color: C.black, width: 1 } });
    s2a.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.5, w: 2.9, h: 0.6, fill: { color: C.black } });
    s2a.addText(p.icon + " " + p.title, { x: p.x, y: 2.5, w: 2.9, h: 0.6, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s2a.addText(p.desc, { x: p.x + 0.15, y: 3.25, w: 2.6, h: 1.9, fontSize: 12, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });
  }

  // Flow arrows
  s2a.addText("→", { x: 3.3, y: 3.5, w: 0.4, h: 0.4, fontSize: 24, color: C.lightGray, align: "center" });
  s2a.addText("→", { x: 6.35, y: 3.5, w: 0.4, h: 0.4, fontSize: 24, color: C.lightGray, align: "center" });

  // ===== Slide 2b: 当前阶段 =====
  let s2b = pres.addSlide();
  s2b.background = { color: C.white };
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s2b.addText("我们目前在哪", { x: 0.5, y: 0.2, w: 7, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.black, bold: true, margin: 0 });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 8.0, y: 0.2, w: 1.5, h: 0.5, fill: { color: C.accent } });
  s2b.addText("建设中", { x: 8.0, y: 0.2, w: 1.5, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Center: Gobs
  s2b.addShape(pres.shapes.OVAL, { x: 4.2, y: 2.0, w: 1.6, h: 1.6, fill: { color: C.black } });
  s2b.addText("Gobs", { x: 4.2, y: 2.0, w: 1.6, h: 1.6, fontSize: 18, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Left: 数据洞察 (Input)
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.3, w: 2.8, h: 3.0, fill: { color: C.white }, line: { color: C.midGray, width: 1 } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.3, w: 2.8, h: 0.55, fill: { color: C.midGray } });
  s2b.addText("📥 数据洞察", { x: 0.4, y: 1.3, w: 2.8, h: 0.55, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText([
    { text: "• 游戏声量（爬虫）", options: { breakLine: true } },
    { text: "• 游戏舆情", options: { breakLine: true } },
    { text: "• Ingame数据", options: { breakLine: true } },
    { text: "• OM获客（暂无）", options: {} }
  ], { x: 0.55, y: 2.0, w: 2.5, h: 2.2, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.5, margin: 0 });

  // Arrow in
  s2b.addText("→", { x: 3.2, y: 2.4, w: 1.0, h: 0.5, fontSize: 28, color: C.black, align: "center" });

  // Right: Action (Output)
  s2b.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 1.3, w: 2.8, h: 3.0, fill: { color: C.white }, line: { color: C.black, width: 2 } });
  s2b.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 1.3, w: 2.8, h: 0.55, fill: { color: C.black } });
  s2b.addText("📤 Action", { x: 6.8, y: 1.3, w: 2.8, h: 0.55, fontSize: 13, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s2b.addText([
    { text: "✓ 素材生成与分发", options: { breakLine: true } },
    { text: "✓ 水军运营", options: { breakLine: true } },
    { text: "→ Community Plan", options: { breakLine: true } },
    { text: "→ Budget Plan", options: { breakLine: true } },
    { text: "→ Event Plan", options: { breakLine: true } },
    { text: "→ KOC建设计划", options: {} }
  ], { x: 6.95, y: 2.0, w: 2.5, h: 2.2, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.35, margin: 0 });

  // Arrow out
  s2b.addText("→", { x: 5.8, y: 2.4, w: 1.0, h: 0.5, fontSize: 28, color: C.black, align: "center" });

  // Campaign top
  s2b.addShape(pres.shapes.RECTANGLE, { x: 3.3, y: 0.95, w: 3.4, h: 0.65, fill: { color: C.lightestGray }, line: { color: C.midGray, width: 1 } });
  s2b.addText("📋 Campaign（规划中）", { x: 3.3, y: 0.95, w: 3.4, h: 0.65, fontSize: 12, fontFace: "Arial", color: C.midGray, align: "center", valign: "middle", margin: 0 });

  // Note bottom
  s2b.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.8, fill: { color: C.lightestGray } });
  s2b.addText("📌 当前重点：素材生成与分发 + 水军运营（已投入使用）| 进来需先绑定游戏", { x: 0.7, y: 4.5, w: 8.6, h: 0.8, fontSize: 12, fontFace: "Arial", color: C.midGray, valign: "middle", margin: 0 });

  // ===== Slide 3: 时间轴 Overview =====
  let s3 = pres.addSlide();
  s3.background = { color: C.white };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s3.addText("路线图总览", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.black, bold: true, margin: 0 });

  // Timeline line
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.5, w: 9, h: 0.06, fill: { color: C.lighterGray } });

  // Phase 1: 4月底
  s3.addShape(pres.shapes.OVAL, { x: 1.3, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.black } });
  s3.addText("现在", { x: 0.6, y: 1.75, w: 1.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.black, bold: true, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.0, w: 2.6, h: 2.3, fill: { color: C.lightestGray }, line: { color: C.black, width: 1 } });
  s3.addText("4月底", { x: 0.5, y: 3.1, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.black, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "验证：AOV", options: { breakLine: true } },
    { text: "水军投入使用", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• 素材生成与分发", options: { breakLine: true } },
    { text: "• 水军运营上线", options: { breakLine: true } },
    { text: "• 视频粗剪完成", options: {} }
  ], { x: 0.6, y: 3.5, w: 2.4, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.3, margin: 0 });

  // Phase 2: 6月底
  s3.addShape(pres.shapes.OVAL, { x: 4.75, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.accent } });
  s3.addText("4月底", { x: 4.05, y: 1.75, w: 1.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.midGray, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 3.7, y: 3.0, w: 2.6, h: 2.3, fill: { color: C.lightestGray }, line: { color: C.accent, width: 2 } });
  s3.addText("6月底", { x: 3.7, y: 3.1, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.accent, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "验证：GNG泰国", options: { breakLine: true } },
    { text: "独立发行", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• 数据洞察完善", options: { breakLine: true } },
    { text: "• 主动式Agent", options: { breakLine: true } },
    { text: "• 舆情监控", options: {} }
  ], { x: 3.8, y: 3.5, w: 2.4, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.3, margin: 0 });

  // Phase 3: 年底
  s3.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.midGray } });
  s3.addText("6月底", { x: 7.5, y: 1.75, w: 1.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: C.midGray, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 6.9, y: 3.0, w: 2.6, h: 2.3, fill: { color: C.lightestGray }, line: { color: C.midGray, width: 1 } });
  s3.addText("年底", { x: 6.9, y: 3.1, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.midGray, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "验证：孵化项目", options: { breakLine: true } },
    { text: "全流程独立发行", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• 完整闭环", options: { breakLine: true } },
    { text: "• 一键多内容生成", options: { breakLine: true } },
    { text: "• 甩脱依赖", options: {} }
  ], { x: 7.0, y: 3.5, w: 2.4, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.3, margin: 0 });

  // ===== Slide 4: Day 0-30 详细（前20天 + 后10天）=====
  let s4 = pres.addSlide();
  s4.background = { color: C.white };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s4.addText("Day 0-30：当前阶段进度（4月底目标）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.black, bold: true, margin: 0 });

  // Phase 1: 前20天
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 4.4, h: 4.2, fill: { color: C.lightestGray } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 4.4, h: 0.5, fill: { color: C.darkGray } });
  s4.addText("✅ 前20天：已完成", { x: 0.5, y: 1.05, w: 4.4, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const completed = [
    "视频内容分析",
    "AI 粗剪流程",
    "背景音乐匹配",
    "素材分发基础框架",
    "水军运营策略设计",
    "用户资产隔离",
  ];
  s4.addText(completed.map((c, i) => ({ text: "✓ " + c, options: { breakLine: i < completed.length - 1 } })), { x: 0.7, y: 1.7, w: 4.0, h: 3.4, fontSize: 13, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.6, margin: 0 });

  // Phase 2: 后10天
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.05, w: 4.4, h: 4.2, fill: { color: C.white }, line: { color: C.accent, width: 2 } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.05, w: 4.4, h: 0.5, fill: { color: C.accent } });
  s4.addText("🔄 后10天：到4月底", { x: 5.1, y: 1.05, w: 4.4, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const remaining = [
    "视频生成标准化",
    "角色/场景一致性",
    "水军 Agent 上线",
    "系统稳定性测试",
    "FFmpeg 预处理优化",
  ];
  s4.addText(remaining.map((r, i) => ({ text: "☐ " + r, options: { breakLine: i < remaining.length - 1 } })), { x: 5.3, y: 1.7, w: 4.0, h: 3.4, fontSize: 13, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.6, margin: 0 });

  // ===== Slide 5: Day 30-60（复用架构图，高亮）=====
  let s5 = pres.addSlide();
  s5.background = { color: C.white };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.accent } });
  s5.addText("Day 30-60：6月底目标", { x: 0.5, y: 0.2, w: 7, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.black, bold: true, margin: 0 });
  s5.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0.2, w: 2, h: 0.5, fill: { color: C.accent } });
  s5.addText("高亮=本期完成", { x: 7.5, y: 0.2, w: 2, h: 0.5, fontSize: 11, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Simplified architecture - highlight what's being built
  // Left: 数据洞察 (highlighted)
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.2, w: 2.8, h: 2.4, fill: { color: C.white }, line: { color: C.accent, width: 3 } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.2, w: 2.8, h: 0.5, fill: { color: C.accent } });
  s5.addText("📥 数据洞察", { x: 0.4, y: 1.2, w: 2.8, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s5.addText([
    { text: "• 爬虫接入 ✓", options: { breakLine: true } },
    { text: "• 声量分析", options: { breakLine: true } },
    { text: "• 舆情监控", options: { breakLine: true } },
    { text: "• 分渠道配置", options: {} }
  ], { x: 0.55, y: 1.8, w: 2.5, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });

  // Arrow
  s5.addText("→", { x: 3.2, y: 2.0, w: 0.8, h: 0.5, fontSize: 24, color: C.accent, align: "center" });

  // Center: Gobs (highlighted)
  s5.addShape(pres.shapes.OVAL, { x: 4.0, y: 1.5, w: 2.0, h: 2.0, fill: { color: C.accent } });
  s5.addText("Gobs\nAgent", { x: 4.0, y: 1.5, w: 2.0, h: 2.0, fontSize: 16, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  // Arrow
  s5.addText("→", { x: 6.0, y: 2.0, w: 0.8, h: 0.5, fontSize: 24, color: C.accent, align: "center" });

  // Right: Campaign + Action (partially highlighted)
  s5.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 1.2, w: 2.8, h: 2.4, fill: { color: C.white }, line: { color: C.midGray, width: 1 } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 1.2, w: 2.8, h: 0.5, fill: { color: C.darkGray } });
  s5.addText("📤 输出", { x: 6.8, y: 1.2, w: 2.8, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  s5.addText([
    { text: "→ Community Plan", options: { breakLine: true } },
    { text: "→ Budget Plan", options: { breakLine: true } },
    { text: "→ Event Plan", options: { breakLine: true } },
    { text: "→ KOC建设", options: {} }
  ], { x: 6.95, y: 1.8, w: 2.5, h: 1.7, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });

  // Note: what's NOT in this phase
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.85, w: 9, h: 0.7, fill: { color: C.lightestGray } });
  s5.addText("⏭ 本期不重点：视频产出、水军运营（已上线，持续运行）", { x: 0.7, y: 3.85, w: 8.6, h: 0.7, fontSize: 12, fontFace: "Arial", color: C.midGray, valign: "middle", margin: 0 });

  // Key tasks
  const d60tasks = [
    { cat: "数据洞察", items: ["爬虫数据接入", "声量/舆情分析", "ST API数据"] },
    { cat: "主动式Agent", items: ["发行方案生成", "决策链路", "执行监控"] },
    { cat: "Community", items: ["Post计划", "内容需求", "KOL/KOC"] },
  ];

  for (let i = 0; i < d60tasks.length; i++) {
    const t = d60tasks[i];
    const x = 0.5 + i * 3.1;
    s5.addShape(pres.shapes.RECTANGLE, { x: x, y: 4.7, w: 2.95, h: 0.8, fill: { color: C.lightestGray } });
    s5.addText(t.cat + "：" + t.items.join(" / "), { x: x + 0.1, y: 4.7, w: 2.75, h: 0.8, fontSize: 10, fontFace: "Arial", color: C.darkGray, valign: "middle", margin: 0 });
  }

  // ===== Slide 6: 一年计划 - 90天 =====
  let s6 = pres.addSlide();
  s6.background = { color: C.white };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s6.addText("一年计划：90天详细路线（到6月底）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.black, bold: true, margin: 0 });

  const yearPlan = [
    { phase: "结构化知识库", desc: "Karpathy工作流 · GNG材料冷启动", status: "进行中", color: C.accent, x: 0.5 },
    { phase: "GNG发行知识库", desc: "OM创意/预算/出价 · Community计划\nInfluencer(KOL/KOC) · 方案质量≥80%人工标准", status: "规划中", color: C.midGray, x: 3.55 },
    { phase: "更多Action Agent", desc: "Community内容Post Agent\n日报/周报Agent（含Latte/社交/ST API数据）", status: "规划中", color: C.midGray, x: 6.6 },
  ];

  for (const p of yearPlan) {
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.1, w: 2.9, h: 2.8, fill: { color: C.white }, line: { color: p.color, width: 2 } });
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.1, w: 2.9, h: 0.55, fill: { color: p.color } });
    s6.addText(p.phase, { x: p.x, y: 1.1, w: 2.9, h: 0.55, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s6.addText(p.desc, { x: p.x + 0.15, y: 1.75, w: 2.6, h: 1.5, fontSize: 11, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.4, margin: 0 });
    s6.addShape(pres.shapes.RECTANGLE, { x: p.x + 0.15, y: 3.5, w: 2.6, h: 0.3, fill: { color: p.color, transparency: 85 } });
    s6.addText(p.status, { x: p.x + 0.15, y: 3.5, w: 2.6, h: 0.3, fontSize: 10, fontFace: "Arial", color: p.color, align: "center", valign: "middle", margin: 0 });
  }

  s6.addText("→", { x: 3.3, y: 2.2, w: 0.4, h: 0.4, fontSize: 20, color: C.lightGray, align: "center" });
  s6.addText("→", { x: 6.35, y: 2.2, w: 0.4, h: 0.4, fontSize: 20, color: C.lightGray, align: "center" });

  // Agent list note
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.1, w: 9, h: 0.5, fill: { color: C.lightestGray } });
  s6.addText("🔗 Agent List 扩展：覆盖规划/决策/执行/监控关键节点", { x: 0.7, y: 4.1, w: 8.6, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.midGray, valign: "middle", margin: 0 });

  // ===== Slide 7: 年底目标 =====
  let s7 = pres.addSlide();
  s7.background = { color: C.white };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s7.addText("年底目标", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.black, bold: true, margin: 0 });

  // Two pillars
  const yearEnd = [
    { icon: "🛠", title: "功能完成", desc: "完成 P1/P2 功能\n发行能力更健壮\n利用 Skills + MD 复用到更多产品", x: 0.5, color: C.black },
    { icon: "💡", title: "AI 优化思考", desc: "用户离研发更近：智能客服\n研发离用户更近：Agent美化问题\n→ 分发给不同用户群收集反馈", x: 5.1, color: C.midGray },
  ];

  for (const y of yearEnd) {
    s7.addShape(pres.shapes.RECTANGLE, { x: y.x, y: 1.1, w: 4.4, h: 2.5, fill: { color: C.white }, line: { color: y.color, width: 2 } });
    s7.addShape(pres.shapes.RECTANGLE, { x: y.x, y: 1.1, w: 4.4, h: 0.6, fill: { color: y.color } });
    s7.addText(y.icon + " " + y.title, { x: y.x, y: 1.1, w: 4.4, h: 0.6, fontSize: 15, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s7.addText(y.desc, { x: y.x + 0.2, y: 1.85, w: 4.0, h: 1.6, fontSize: 13, fontFace: "Arial", color: C.darkGray, lineSpacingMultiple: 1.5, margin: 0 });
  }

  //孵化项目 note
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.85, w: 9, h: 0.8, fill: { color: C.lightestGray }, line: { color: C.accent, width: 1 } });
  s7.addText("🚀 孵化项目：一个产品全流程独立发行验证", { x: 0.7, y: 3.85, w: 8.6, h: 0.8, fontSize: 14, fontFace: "Arial", color: C.accent, bold: true, valign: "middle", margin: 0 });

  // ===== Slide 8: 立即行动项 =====
  let s8 = pres.addSlide();
  s8.background = { color: C.white };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.lightestGray } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.03, fill: { color: C.black } });
  s8.addText("立即行动项", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.black, bold: true, margin: 0 });

  const actions = [
    { priority: "P0", text: "视频生成标准化 + 角色一致性", color: C.black },
    { priority: "P0", text: "水军 Agent 训练 + 上线", color: C.black },
    { priority: "P1", text: "爬虫接入 + 声量分析", color: C.midGray },
    { priority: "P1", text: "舆情监控分渠道配置", color: C.midGray },
    { priority: "P2", text: "系统稳定性测试（5-10用户）", color: C.lightGray },
    { priority: "P2", text: "用户空间权限隔离", color: C.lightGray },
  ];

  for (let i = 0; i < actions.length; i++) {
    const a = actions[i];
    const y = 1.1 + i * 0.7;
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.6, fill: { color: C.lightestGray } });
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.06, h: 0.6, fill: { color: a.color } });
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: y + 0.12, w: 0.6, h: 0.35, fill: { color: a.color } });
    s8.addText(a.priority, { x: 0.7, y: y + 0.12, w: 0.6, h: 0.35, fontSize: 11, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s8.addText(a.text, { x: 1.5, y: y, w: 7.8, h: 0.6, fontSize: 14, fontFace: "Arial", color: C.darkGray, valign: "middle", margin: 0 });
  }

  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.5, fill: { color: C.black } });
  s8.addText("🎯 4月底AOV验证 → 6月底GNG泰国独立发行 → 年底完整独立发行", { x: 0.7, y: 5.0, w: 8.6, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.white, bold: true, valign: "middle", margin: 0 });

  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/Gobs_Pipeline_v3.pptx" });
  console.log("✅ Done! Gobs_Pipeline_v3.pptx");
}

build().catch(console.error);
