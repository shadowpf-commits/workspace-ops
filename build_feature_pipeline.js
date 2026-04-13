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
  pres.title = "功能 Pipeline 汇报";
  pres.author = "Ops Team";

  // ===== Slide 1: Title =====
  let s1 = pres.addSlide();
  s1.background = { color: C.darkBg };
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.12, fill: { color: C.purple } });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 0.08, h: 2.2, fill: { color: C.gold } });
  s1.addShape(pres.shapes.OVAL, { x: 0.7, y: 1.8, w: 0.5, h: 0.5, fill: { color: C.purple } });
  s1.addShape(pres.shapes.OVAL, { x: 0.85, y: 1.95, w: 0.2, h: 0.2, fill: { color: C.cyan } });
  s1.addText("功能 Pipeline", { x: 1.3, y: 1.5, w: 8, h: 0.9, fontSize: 44, fontFace: "Arial Black", color: C.gold, charSpacing: 4 });
  s1.addText("AI 视频生成与社交媒体自动化平台", { x: 1.3, y: 2.4, w: 8, h: 0.6, fontSize: 22, fontFace: "Arial", color: C.text, bold: true });
  s1.addText("老板汇报材料", { x: 1.3, y: 3.1, w: 8, h: 0.5, fontSize: 15, fontFace: "Arial", color: C.purpleLight });
  s1.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 3.8, w: 2.5, h: 0.03, fill: { color: C.purple } });
  s1.addText("2026年4月  |  Internal Use Only", { x: 1.3, y: 4.0, w: 8, h: 0.4, fontSize: 11, fontFace: "Arial", color: C.textMuted });
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.505, w: 10, h: 0.12, fill: { color: C.cyan } });

  // ===== Slide 2: 30天计划总览 =====
  let s2 = pres.addSlide();
  s2.background = { color: C.darkBg };
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s2.addText("30天计划总览", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  // Goal box
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.8, fill: { color: C.cardBg } });
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 0.06, h: 0.8, fill: { color: C.cyan } });
  s2.addText("🎯 目标：确保视频生成和 AI 粗剪功能可用、基础水军能力、系统稳定运行（5-10用户）", { x: 0.75, y: 1.05, w: 8.5, h: 0.8, fontSize: 14, fontFace: "Arial", color: C.cyan, valign: "middle", margin: 0 });

  // 4 Modules
  const modules = [
    { name: "视频生成", icon: "🎬", color: C.purple,
      done: ["标准化预处理流程", "角色/场景一致性标准", "Prompt 优化规范"],
      next: "视频元素拆分与一致性优化" },
    { name: "视频剪辑", icon: "✂️", color: C.cyan,
      done: ["视频内容分析", "AI 粗剪", "背景音乐匹配"],
      next: "Gemini 多模态分析接入" },
    { name: "水军", icon: "🤖", color: C.pink,
      done: ["社区自动互动", "游戏论坛舆情分析", "多账号分发逻辑"],
      next: "策略 Agent 训练优化" },
    { name: "个人空间", icon: "📁", color: C.gold,
      done: ["用户资产隔离", "生成内容管理"],
      next: "权限与存储优化" },
  ];

  for (let i = 0; i < modules.length; i++) {
    const m = modules[i];
    const x = 0.5 + (i % 2) * 4.55;
    const y = 2.0 + Math.floor(i / 2) * 1.7;
    
    s2.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.45, h: 1.55, fill: { color: C.cardBg } });
    s2.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 0.06, h: 1.55, fill: { color: m.color } });
    s2.addText(m.icon + " " + m.name, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 16, fontFace: "Arial", color: m.color, bold: true, margin: 0 });
    s2.addText("已完成：" + m.done.join("、"), { x: x + 0.2, y: y + 0.5, w: 4, h: 0.45, fontSize: 10, fontFace: "Arial", color: C.text, margin: 0 });
    s2.addText("下一步：" + m.next, { x: x + 0.2, y: y + 0.95, w: 4, h: 0.45, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
  }

  // ===== Slide 3: 耗时分析 =====
  let s3 = pres.addSlide();
  s3.background = { color: C.darkBg };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s3.addText("耗时占比分析", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  // Time consumption bars
  const timeItems = [
    { name: "部署与 Bug 修改", pct: "45%", desc: "跨平台兼容性（Linux/Windows 环境变量）、大文件处理", color: C.danger },
    { name: "视频生成", pct: "25%", desc: "技术线探索、API 集成测试", color: C.purple },
    { name: "水军", pct: "20%", desc: "策略 Agent 逻辑、多账号分发", color: C.cyan },
    { name: "视频剪辑", pct: "10%", desc: "AI 粗剪算法、BGM 匹配", color: C.success },
  ];

  for (let i = 0; i < timeItems.length; i++) {
    const t = timeItems[i];
    const y = 1.2 + i * 1.05;
    const barW = parseInt(t.pct) / 100 * 5.5;
    
    s3.addText(t.name, { x: 0.5, y: y, w: 2, h: 0.5, fontSize: 14, fontFace: "Arial", color: C.text, bold: true, valign: "middle", margin: 0 });
    s3.addShape(pres.shapes.RECTANGLE, { x: 2.6, y: y + 0.1, w: 5.5, h: 0.35, fill: { color: C.slate } });
    s3.addShape(pres.shapes.RECTANGLE, { x: 2.6, y: y + 0.1, w: barW, h: 0.35, fill: { color: t.color } });
    s3.addShape(pres.shapes.OVAL, { x: 8.2, y: y + 0.05, w: 0.45, h: 0.45, fill: { color: t.color } });
    s3.addText(t.pct, { x: 8.2, y: y + 0.05, w: 0.45, h: 0.45, fontSize: 11, fontFace: "Arial", color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0 });
    s3.addText(t.desc, { x: 0.5, y: y + 0.5, w: 9, h: 0.4, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
  }

  // Insight
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.1, w: 9, h: 0.45, fill: { color: C.danger, transparency: 85 } });
  s3.addText("⚠️ 重点优化方向：部署流程自动化，减少跨平台兼容性问题", { x: 0.6, y: 5.1, w: 8.8, h: 0.45, fontSize: 12, fontFace: "Arial", color: C.danger, bold: true, valign: "middle", margin: 0 });

  // ===== Slide 4: 90天计划 =====
  let s4 = pres.addSlide();
  s4.background = { color: C.darkBg };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s4.addText("90天计划", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.7, fill: { color: C.cardBg } });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 0.06, h: 0.7, fill: { color: C.gold } });
  s4.addText("🎯 目标：摆脱对泰国团队依赖，实现自动化内容生产，一键多内容生成", { x: 0.75, y: 1.05, w: 8.5, h: 0.7, fontSize: 14, fontFace: "Arial", color: C.gold, valign: "middle", margin: 0 });

  // 3 key initiatives
  const initiatives = [
    { icon: "📚", title: "结构化项目知识库", desc: "基于 Andrej Karpathy 工作流构建", color: C.purple },
    { icon: "🤖", title: "更多 Action Agent", desc: "决策、执行、监控 Agent 链路", color: C.cyan },
    { icon: "🔗", title: "Agent List 扩展", desc: "扩展核心工作流覆盖", color: C.pink },
  ];

  for (let i = 0; i < initiatives.length; i++) {
    const init = initiatives[i];
    const y = 1.95 + i * 1.15;
    
    s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 1.0, fill: { color: C.cardBg } });
    s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.06, h: 1.0, fill: { color: init.color } });
    s4.addText(init.icon, { x: 0.7, y: y + 0.15, w: 0.6, h: 0.6, fontSize: 28, align: "center", valign: "middle" });
    s4.addText(init.title, { x: 1.4, y: y + 0.15, w: 7.5, h: 0.45, fontSize: 16, fontFace: "Arial", color: init.color, bold: true, margin: 0 });
    s4.addText(init.desc, { x: 1.4, y: y + 0.55, w: 7.5, h: 0.35, fontSize: 12, fontFace: "Arial", color: C.textMuted, margin: 0 });
  }

  // ===== Slide 5: 技术栈 =====
  let s5 = pres.addSlide();
  s5.background = { color: C.darkBg };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.cardBg } });
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.88, w: 10, h: 0.04, fill: { color: C.purple } });
  s5.addText("技术栈", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, fontFace: "Arial", color: C.text, bold: true, margin: 0 });

  const techItems = [
    { cat: "AI 模型", items: ["Gemini（多模态分析）", "Lyria（音乐生成）"], color: C.purple },
    { cat: "工具", items: ["FFmpeg（视频处理）", "Discord API"], color: C.cyan },
    { cat: "系统", items: ["Linux 云服务器", "Windows 本地环境"], color: C.success },
    { cat: "Skills", items: ["Storyboard Studio", "Video Editor", "Risk Analyst"], color: C.pink },
  ];

  for (let i = 0; i < techItems.length; i++) {
    const t = techItems[i];
    const x = 0.5 + (i % 2) * 4.55;
    const y = 1.1 + Math.floor(i / 2) * 2.15;
    
    s5.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.45, h: 2.0, fill: { color: C.cardBg } });
    s5.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.45, h: 0.5, fill: { color: t.color, transparency: 70 } });
    s5.addText(t.cat, { x: x + 0.2, y: y + 0.05, w: 4, h: 0.4, fontSize: 14, fontFace: "Arial", color: t.color, bold: true, margin: 0 });
    s5.addText(t.items.map((item, idx) => ({ text: "• " + item, options: { breakLine: idx < t.items.length - 1 } })), { x: x + 0.2, y: y + 0.6, w: 4, h: 1.3, fontSize: 12, fontFace: "Arial", color: C.text, margin: 0 });
  }

  // ===== Slide 6: 下一步 =====
  let s6 = pres.addSlide();
  s6.background = { color: C.darkBg };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.12, fill: { color: C.purple } });
  s6.addText("下一步计划", { x: 0.5, y: 1.0, w: 9, h: 0.8, fontSize: 40, fontFace: "Arial Black", color: C.cyan, align: "center", charSpacing: 8, margin: 0 });

  const nextSteps = [
    { icon: "🎯", text: "视频生成：角色/场景一致性标准落地", color: C.purple },
    { icon: "🤖", text: "水军：策略 Agent 逻辑优化与训练", color: C.cyan },
    { icon: "📊", text: "部署：自动化流程搭建", color: C.pink },
    { icon: "🌐", text: "Agent List：扩展更多核心工作流", color: C.success },
  ];

  for (let i = 0; i < nextSteps.length; i++) {
    const n = nextSteps[i];
    const y = 2.0 + i * 0.7;
    s6.addShape(pres.shapes.OVAL, { x: 2.0, y: y, w: 0.45, h: 0.45, fill: { color: n.color } });
    s6.addText(n.icon, { x: 2.0, y: y, w: 0.45, h: 0.45, fontSize: 16, align: "center", valign: "middle" });
    s6.addText(n.text, { x: 2.65, y: y, w: 5.5, h: 0.45, fontSize: 16, fontFace: "Arial", color: C.text, valign: "middle", margin: 0 });
  }

  s6.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: 4.6, w: 6.4, h: 0.6, fill: { color: C.cardBg } });
  s6.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: 4.6, w: 0.08, h: 0.6, fill: { color: C.gold } });
  s6.addText("🎯 目标：30天内实现完整视频自动化生产链路", { x: 2.0, y: 4.6, w: 6.1, h: 0.6, fontSize: 14, fontFace: "Arial", color: C.gold, bold: true, valign: "middle", margin: 0 });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.505, w: 10, h: 0.12, fill: { color: C.cyan } });

  await pres.writeFile({ fileName: "/Users/shadow/.openclaw/workspace/Feature_Pipeline_汇报.pptx" });
  console.log("✅ Done! Feature_Pipeline_汇报.pptx");
}

build().catch(console.error);
