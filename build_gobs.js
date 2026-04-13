const pptxgen = require("pptxgenjs");

// Light Professional Style
const C = {
  blue: "3B82F6",
  blueLight: "60A5FA",
  blueDark: "1D4ED8",
  cyan: "06B6D4",
  teal: "14B8A6",
  purple: "8B5CF6",
  green: "10B981",
  greenLight: "34D399",
  yellow: "F59E0B",
  orange: "F97316",
  red: "EF4444",
  gray: "374151",
  grayLight: "9CA3AF",
  grayLighter: "F3F4F6",
  white: "FFFFFF",
  bg: "F8FAFC",
};

async function build() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Gobs功能Pipeline汇报";
  pres.author = "Ops Team";

  // ===== Slide 1: Title =====
  let s1 = pres.addSlide();
  s1.background = { color: C.white };
  
  // Top accent bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: C.blue } });
  
  // Left accent
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.8, w: 0.08, h: 2.0, fill: { color: C.blue } });
  
  // Title
  s1.addText("Gobs 功能 Pipeline", { x: 0.8, y: 1.8, w: 8.5, h: 0.8, fontSize: 40, fontFace: "Arial", color: C.gray, bold: true });
  s1.addText("AI 发行内容制作平台", { x: 0.8, y: 2.6, w: 8.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: C.grayLight });
  
  // Subtitle
  s1.addText("30天 + 60天 路线图", { x: 0.8, y: 3.3, w: 8.5, h: 0.4, fontSize: 16, fontFace: "Arial", color: C.blue });
  
  // Date
  s1.addText("2026年4月", { x: 0.8, y: 4.2, w: 8.5, h: 0.3, fontSize: 12, fontFace: "Arial", color: C.grayLight });
  
  // Bottom bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.475, w: 10, h: 0.15, fill: { color: C.blue } });

  // ===== Slide 2: 整体架构 =====
  let s2 = pres.addSlide();
  s2.background = { color: C.white };
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.blue } });
  s2.addText("整体架构", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });

  // 3 main branches as cards
  const branches = [
    { name: "数据洞察", icon: "📊", color: C.blue,
      items: ["游戏声量（接Crawly）", "游戏舆情监控", "OM获客（暂无）"], x: 0.5 },
    { name: "Campaign", icon: "📋", color: C.purple,
      items: ["主动式 Agent", "发行方案生成", "方案传导到 Action"], x: 3.55 },
    { name: "Action", icon: "⚡", color: C.green,
      items: ["素材生成与分发", "水军运营", "Live Ops 相关"], x: 6.6 },
  ];

  for (const b of branches) {
    s2.addShape(pres.shapes.RECTANGLE, { x: b.x, y: 1.1, w: 2.9, h: 3.2, fill: { color: C.bg }, line: { color: b.color, width: 2 } });
    s2.addShape(pres.shapes.RECTANGLE, { x: b.x, y: 1.1, w: 2.9, h: 0.6, fill: { color: b.color } });
    s2.addText(b.icon + " " + b.name, { x: b.x, y: 1.1, w: 2.9, h: 0.6, fontSize: 16, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s2.addText(b.items.map((item, idx) => ({ text: "• " + item, options: { breakLine: idx < b.items.length - 1 } })), { x: b.x + 0.2, y: 1.85, w: 2.5, h: 2.3, fontSize: 12, fontFace: "Arial", color: C.gray, lineSpacingMultiple: 1.5, margin: 0 });
  }

  // Arrow between branches
  s2.addText("→", { x: 3.3, y: 2.3, w: 0.4, h: 0.4, fontSize: 24, color: C.grayLight, align: "center" });
  s2.addText("→", { x: 6.35, y: 2.3, w: 0.4, h: 0.4, fontSize: 24, color: C.grayLight, align: "center" });

  // Note at bottom
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.8, fill: { color: C.yellow, transparency: 90 }, line: { color: C.yellow, width: 1 } });
  s2.addText("💡 前提：进来需要先绑定游戏 | 知识库基于 Andrej Karpathy 工作流", { x: 0.7, y: 4.5, w: 8.6, h: 0.8, fontSize: 12, fontFace: "Arial", color: C.gray, valign: "middle", margin: 0 });

  // ===== Slide 3: 时间轴 Overview =====
  let s3 = pres.addSlide();
  s3.background = { color: C.white };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.blue } });
  s3.addText("路线图总览", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });

  // Timeline
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.5, w: 9, h: 0.08, fill: { color: C.grayLighter } });
  
  // Phase 1: 当前阶段 (Day 0-30)
  s3.addShape(pres.shapes.OVAL, { x: 1.5, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.green } });
  s3.addText("现在", { x: 1.0, y: 1.8, w: 1.5, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.green, bold: true, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.0, w: 2.9, h: 2.2, fill: { color: C.green, transparency: 92 }, line: { color: C.green, width: 2 } });
  s3.addText("Day 0-30", { x: 0.8, y: 3.1, w: 2.9, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.green, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "• 素材生成与分发", options: { breakLine: true } },
    { text: "• 水军运营", options: { breakLine: true } },
    { text: "• 视频生成粗剪", options: { breakLine: true } },
    { text: "• 基础架构搭建", options: {} }
  ], { x: 1.0, y: 3.5, w: 2.5, h: 1.6, fontSize: 11, fontFace: "Arial", color: C.gray, margin: 0 });

  // Phase 2: Day 30-60
  s3.addShape(pres.shapes.OVAL, { x: 4.75, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.blue } });
  s3.addText("Day 30", { x: 4.25, y: 1.8, w: 1.5, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.blue, bold: true, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 3.55, y: 3.0, w: 2.9, h: 2.2, fill: { color: C.blue, transparency: 92 }, line: { color: C.blue, width: 2 } });
  s3.addText("Day 30-60", { x: 3.55, y: 3.1, w: 2.9, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.blue, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "• 数据洞察完善", options: { breakLine: true } },
    { text: "• 主动式 Agent", options: { breakLine: true } },
    { text: "• 舆情监控", options: { breakLine: true } },
    { text: "• 发行方案生成", options: {} }
  ], { x: 3.75, y: 3.5, w: 2.5, h: 1.6, fontSize: 11, fontFace: "Arial", color: C.gray, margin: 0 });

  // Phase 3: Day 60-90
  s3.addShape(pres.shapes.OVAL, { x: 8.0, y: 2.3, w: 0.5, h: 0.5, fill: { color: C.purple } });
  s3.addText("Day 60", { x: 7.5, y: 1.8, w: 1.5, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.purple, bold: true, align: "center" });
  s3.addShape(pres.shapes.RECTANGLE, { x: 6.3, y: 3.0, w: 2.9, h: 2.2, fill: { color: C.purple, transparency: 92 }, line: { color: C.purple, width: 2 } });
  s3.addText("Day 60-90", { x: 6.3, y: 3.1, w: 2.9, h: 0.4, fontSize: 14, fontFace: "Arial", color: C.purple, bold: true, align: "center", margin: 0 });
  s3.addText([
    { text: "• 完整闭环", options: { breakLine: true } },
    { text: "• 一键多内容生成", options: { breakLine: true } },
    { text: "• 自动化运营", options: { breakLine: true } },
    { text: "• 甩脱泰国团队依赖", options: {} }
  ], { x: 6.5, y: 3.5, w: 2.5, h: 1.6, fontSize: 11, fontFace: "Arial", color: C.gray, margin: 0 });

  // ===== Slide 4: Day 0-30 详细计划 =====
  let s4 = pres.addSlide();
  s4.background = { color: C.white };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.green } });
  s4.addText("Day 0-30：当前阶段（建设中）", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });
  
  // Current badge
  s4.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0.2, w: 2, h: 0.5, fill: { color: C.green } });
  s4.addText("当前阶段", { x: 7.5, y: 0.2, w: 2, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });

  const day30Items = [
    { cat: "素材生成与分发", color: C.green, tasks: ["视频内容分析", "AI 粗剪", "背景音乐匹配", "多平台分发"] },
    { cat: "水军运营", color: C.teal, tasks: ["社区自动互动", "游戏论坛舆情", "多账号分发"] },
    { cat: "视频生成", color: C.blue, tasks: ["角色/场景一致性", "Prompt 优化", "FFmpeg 预处理"] },
    { cat: "基础设施", color: C.purple, tasks: ["用户资产隔离", "系统稳定性", "5-10用户测试"] },
  ];

  for (let i = 0; i < day30Items.length; i++) {
    const item = day30Items[i];
    const x = 0.5 + (i % 2) * 4.75;
    const y = 1.1 + Math.floor(i / 2) * 2.2;
    
    s4.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.55, h: 2.0, fill: { color: C.bg }, line: { color: item.color, width: 2 } });
    s4.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 0.06, h: 2.0, fill: { color: item.color } });
    s4.addText(item.cat, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 14, fontFace: "Arial", color: item.color, bold: true, margin: 0 });
    s4.addText(item.tasks.map((t, idx) => ({ text: "☐ " + t, options: { breakLine: idx < item.tasks.length - 1 } })), { x: x + 0.2, y: y + 0.55, w: 4, h: 1.4, fontSize: 12, fontFace: "Arial", color: C.gray, lineSpacingMultiple: 1.4, margin: 0 });
  }

  // ===== Slide 5: Day 30-60 详细计划 =====
  let s5 = pres.addSlide();
  s5.background = { color: C.white };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.blue } });
  s5.addText("Day 30-60：数据与主动式运营", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });

  const day60Items = [
    { cat: "数据洞察", color: C.blue, tasks: ["接 Crawly 数据", "游戏声量分析", "竞品素材监控", "分渠道舆情"] },
    { cat: "主动式 Agent", color: C.purple, tasks: ["发行方案生成", "Agent 决策链路", "执行与监控"] },
    { cat: "舆情监控", color: C.teal, tasks: ["官方 Post 产出", "水军策略优化", "细分主题分析"] },
    { cat: "素材升级", color: C.orange, tasks: ["角色一致性标准", "场景库建立", "BGM 自动匹配"] },
  ];

  for (let i = 0; i < day60Items.length; i++) {
    const item = day60Items[i];
    const x = 0.5 + (i % 2) * 4.75;
    const y = 1.1 + Math.floor(i / 2) * 2.2;
    
    s5.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.55, h: 2.0, fill: { color: C.bg }, line: { color: item.color, width: 2 } });
    s5.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 0.06, h: 2.0, fill: { color: item.color } });
    s5.addText(item.cat, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 14, fontFace: "Arial", color: item.color, bold: true, margin: 0 });
    s5.addText(item.tasks.map((t, idx) => ({ text: "☐ " + t, options: { breakLine: idx < item.tasks.length - 1 } })), { x: x + 0.2, y: y + 0.55, w: 4, h: 1.4, fontSize: 12, fontFace: "Arial", color: C.gray, lineSpacingMultiple: 1.4, margin: 0 });
  }

  // ===== Slide 6: Day 60-90 详细计划 =====
  let s6 = pres.addSlide();
  s6.background = { color: C.white };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s6.addText("Day 60-90：自动化与规模化", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });

  const day90Items = [
    { cat: "完整闭环", color: C.purple, tasks: ["数据→方案→执行全链路", "一键多内容生成", "多平台自动分发"] },
    { cat: "甩脱依赖", color: C.orange, tasks: ["知识库自主化", "泰国团队工作流内化", "独立运营能力"] },
    { cat: "AI 增强", color: C.blue, tasks: ["智能客服", "问题自动归类", "用户调研自动化"] },
    { cat: "扩展 Agent", color: C.green, tasks: ["更多 OPS Agent", "核心工作流全覆盖", "自动化运营体系"] },
  ];

  for (let i = 0; i < day90Items.length; i++) {
    const item = day90Items[i];
    const x = 0.5 + (i % 2) * 4.75;
    const y = 1.1 + Math.floor(i / 2) * 2.2;
    
    s6.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.55, h: 2.0, fill: { color: C.bg }, line: { color: item.color, width: 2 } });
    s6.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 0.06, h: 2.0, fill: { color: item.color } });
    s6.addText(item.cat, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 14, fontFace: "Arial", color: item.color, bold: true, margin: 0 });
    s6.addText(item.tasks.map((t, idx) => ({ text: "☐ " + t, options: { breakLine: idx < item.tasks.length - 1 } })), { x: x + 0.2, y: y + 0.55, w: 4, h: 1.4, fontSize: 12, fontFace: "Arial", color: C.gray, lineSpacingMultiple: 1.4, margin: 0 });
  }

  // ===== Slide 7: 技术栈 =====
  let s7 = pres.addSlide();
  s7.background = { color: C.white };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.blue } });
  s7.addText("技术栈", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });

  const techItems = [
    { cat: "AI 模型", items: ["Gemini（多模态分析）", "Lyria（音乐生成）"], color: C.blue },
    { cat: "工具", items: ["FFmpeg（视频处理）", "Crawly（爬虫）", "Discord API", "Jira"], color: C.teal },
    { cat: "系统", items: ["Linux 云服务器", "Windows 本地"], color: C.gray },
    { cat: "Skills", items: ["Storyboard Studio", "Video Editor", "Risk Analyst", "Action Agent"], color: C.purple },
  ];

  for (let i = 0; i < techItems.length; i++) {
    const t = techItems[i];
    const x = 0.5 + (i % 2) * 4.75;
    const y = 1.1 + Math.floor(i / 2) * 2.2;
    
    s7.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.55, h: 2.0, fill: { color: C.bg }, line: { color: t.color, width: 1 } });
    s7.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.55, h: 0.5, fill: { color: t.color, transparency: 85 } });
    s7.addText(t.cat, { x: x + 0.2, y: y + 0.05, w: 4, h: 0.4, fontSize: 14, fontFace: "Arial", color: t.color, bold: true, margin: 0 });
    s7.addText(t.items.map((item, idx) => ({ text: "• " + item, options: { breakLine: idx < t.items.length - 1 } })), { x: x + 0.2, y: y + 0.6, w: 4, h: 1.3, fontSize: 12, fontFace: "Arial", color: C.gray, margin: 0 });
  }

  // ===== Slide 8: 下一步 =====
  let s8 = pres.addSlide();
  s8.background = { color: C.white };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.bg } });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.green } });
  s8.addText("立即行动项", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });

  const actions = [
    { priority: "P0", text: "素材生成与分发链路完善", color: C.red },
    { priority: "P0", text: "水军策略 Agent 训练", color: C.red },
    { priority: "P1", text: "接 Crawly 数据源", color: C.orange },
    { priority: "P1", text: "舆情监控分渠道配置", color: C.orange },
    { priority: "P2", text: "视频生成标准化", color: C.yellow },
    { priority: "P2", text: "用户空间权限隔离", color: C.yellow },
  ];

  for (let i = 0; i < actions.length; i++) {
    const a = actions[i];
    const y = 1.1 + i * 0.72;
    
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.65, fill: { color: C.bg } });
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.06, h: 0.65, fill: { color: a.color } });
    s8.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: y + 0.15, w: 0.6, h: 0.35, fill: { color: a.color } });
    s8.addText(a.priority, { x: 0.7, y: y + 0.15, w: 0.6, h: 0.35, fontSize: 11, fontFace: "Arial", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s8.addText(a.text, { x: 1.5, y: y, w: 7.8, h: 0.65, fontSize: 14, fontFace: "Arial", color: C.gray, valign: "middle", margin: 0 });
  }

  // Goal box
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.5, fill: { color: C.green, transparency: 90 }, line: { color: C.green, width: 1 } });
  s8.addText("🎯 30天内实现素材自动化生产，60天内数据洞察闭环，90天内完全甩脱外部依赖", { x: 0.7, y: 5.0, w: 8.6, h: 0.5, fontSize: 12, fontFace: "Arial", color: C.green, bold: true, valign: "middle", margin: 0 });

  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/Gobs_Pipeline_汇报.pptx" });
  console.log("✅ Done! Gobs_Pipeline_汇报.pptx");
}

build().catch(console.error);
