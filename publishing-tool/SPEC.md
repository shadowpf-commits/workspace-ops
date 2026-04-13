# 游戏发行方案生成器 - SPEC.md

## 1. Concept & Vision

一个专业、高效的游戏发行策划工具 + 发行运营追踪系统。界面风格偏向游戏行业的产品文档感——暗色系、科技感、有质感。像一个内部策划工具，而不是一个普通的表单页面。

核心定位：**输入游戏信息 → 生成发行方案（PPT） → 项目存档 → 录入执行数据 → 持续优化发行逻辑**

## 2. Design Language

- **Aesthetic**: 暗色科技风，深蓝/近黑背景，霓虹蓝紫色渐变点缀。游戏行业气质。
- **Color Palette**:
  - Background: `#0d1117` (近黑)
  - Surface: `#161b22` (卡片背景)
  - Surface-2: `#1c2128` (输入框/次级背景)
  - Border: `#30363d` (边框)
  - Primary: `#58a6ff` (霓虹蓝)
  - Accent: `#bc8cff` (紫色渐变点缀)
  - Success: `#3fb950` (成功/正向指标)
  - Warning: `#d29922` (警告)
  - Text: `#e6edf3` (主文字)
  - Muted: `#8b949e` (次要文字)
- **Typography**: `Outfit` (标题), `DM Sans` (正文) — Google Fonts
- **Motion**: 按钮 hover 有发光效果；tab 切换有 slide 动画；下拉框展开有 fade+scale
- **Icons**: Native emoji (无外部CDN依赖)

## 3. Layout & Structure

### Tab 导航
- 两个大 Tab：**「📋 生成方案」** 和 **「🚀 项目追踪」**
- Tab bar 在顶部，active tab 有底部发光指示器

### 生成方案页 (Tab 1)
```
[Header: 标题 + 副标题]

[配置卡片]
  ├── 游戏类型 [下拉选择]
  ├── 视角 [下拉选择]
  ├── 参考竞品 [下拉选择 / 输入]
  └── 发行阶段 [下拉选择]

[对话输入区]
  └── 多行 textarea

[按钮组]
  ├── ⚡ 生成预览方案 (mock 模式)
  ├── ✨ 使用 AI Skill 分析 (生成 prompt，复制到 Discord)
  └── 📥 下载 PPTX (将方案转为 .pptx 文件下载)
```

### 项目追踪页 (Tab 2)
```
[Header: 我的项目 + 新建按钮]

[追踪卡片列表]
  ├── 项目名 + 状态标签
  ├── 方案版本信息
  └── 下个版本步骤进度

[详情面板 - 子 Tab]
  ├── 📋 方案 (原始 Markdown 方案内容)
  ├── 📊 OM 成效 (CPR, R2, R7, 渠道分布)
  ├── 💬 社区 (粉丝数, 点赞, 评论, 各平台互动率)
  ├── 🔍 调研 (各市场认知度, 下载意向, 障碍)
  └── ⭐ 评价 (用户评论, 星级, 来源)
```

## 4. Features & Interactions

### 按钮组
- **⚡ 生成预览方案**：1.8s mock 生成，展示在 output 区域
- **✨ 使用 AI Skill 分析**：生成结构化 prompt → 显示「复制 Prompt」按钮 → 提示粘贴到 Discord
- **📥 下载 PPTX**：点击后调用 pptxgenjs CDN 生成 .pptx 并下载（仅在有方案内容时可用）

### PPTX 生成
- 库：pptxgenjs via CDN (`https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs@3.12.0/dist/pptxgen.bundle.js`)
- 包含 5 slides：封面、游戏配置、核心策略、市场与预算、发行节奏
- 暗色主题，与 UI 风格统一
- 文件名 = 项目名.pptx

### AI Skill 集成
- 新增「✨ 使用 AI Skill 分析」按钮
- 点击后构建标准化 prompt，包含游戏类型/视角/竞品/阶段/补充说明
- 显示「📋 复制 Prompt」按钮 + 使用说明
- 用户复制 → 粘贴到 Discord #ops → AI 执行 skill → 返回完整方案
- prompt 结构遵循 game-publishing-analysis skill 标准格式

### 项目追踪 - 执行数据 Tabs
- **OM 成效**：总花费、注册用户、CPR、D2/D7 留存、自然占比、渠道分布表格
- **社区**：总粉丝/点赞/评论、各平台（IG/TikTok/Discord/FB）明细表格 + 互动率
- **调研**：各市场品牌认知度、下载意向、主要障碍（表格）
- **用户评价**：星级评分 + 评论内容 + 来源地区 + 日期

### 追踪页面
- 左侧项目列表可切换
- 每个项目卡片显示：当前版本、已完成的方案、反馈时间线、下步计划
- 数据存储在 localStorage，持久化
- 支持删除项目

### 空状态
- 追踪页无项目时显示引导创建提示

## 5. Component Inventory

### Dropdown (下拉选择器)
- States: default, hover, open, selected, disabled
- 每个选项 hover 有浅色背景

### Textarea (对话输入)
- States: default, focus (蓝色发光边框), filled

### Button (生成按钮)
- States: default (渐变背景), hover (发光增强), active (scale down), loading (spinner)
- 渐变: `linear-gradient(135deg, #58a6ff, #bc8cff)`
- AI 模式: `linear-gradient(135deg, #3fb950, #58a6ff)`
- PPTX 下载: `linear-gradient(135deg, #f0883e, #bc8cff)`

### Tab (主 Tab)
- States: inactive (muted text), active (primary text + bottom glow bar)
- 切换有 0.3s ease 过渡

### Sub Tab (详情页子 Tab)
- 横向滚动式按钮组，带 4px 间距和圆角
- States: inactive, active (surface-2 背景 + border)

### Tracking Card
- Surface 背景，白色边框分隔
- 状态标签: planned(蓝), in-progress(紫), completed(绿)

### Metric Card (执行数据指标卡片)
- 3列网格布局
- Surface-2 背景，内边距 14px，文字居中
- 数字用大号粗体 + 主色/绿色/橙色

## 6. Technical Approach

- **单 HTML 文件**，内嵌 CSS + JS
- **无框架**，原生 HTML/CSS/JS
- **localStorage** 存储追踪数据（projects 数组）
- **CSS 变量**管理主题色
- **pptxgenjs CDN** 生成 PPTX（前端无服务端依赖）
- **mock 数据**：执行数据 tabs 使用预设假数据，可后续替换为真实数据录入

## 7. 数据结构

```javascript
// localStorage key: 'publishing_projects'
{
  id: Number,
  name: String,
  status: 'planned' | 'in-progress' | 'completed',
  config: { type, perspective, competitor, stage },
  plan: String, // Markdown 方案文本
  feedback: [{ time, text }],
  steps: [{ label, done }],
  createdAt: ISO8601
}
```

## 8. 工作流程

```
[填写表单] → [点 AI Skill 分析] → [复制 Prompt 到 Discord]
                                         ↓
                              [AI 执行 skill 生成方案]
                                         ↓
                              [粘贴方案到 Discord]
                                         ↓
                              [存入项目追踪] ← [后续补充执行数据]
                                         ↓
                              [下载 PPTX 方案文件]
                                         ↓
                         [发行执行 → 录入 OM/社区/调研数据]
                                         ↓
                              [持续优化后续发行策略]
```
