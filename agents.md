---
title: "Agent 操作规范"
date: 2026-04-17
type: meta
tags: ["system", "agents"]
---

# Agent 操作规范

本文件定义 AI 助手在操作 Quokka Wiki 时必须遵循的行为准则。

---

## 核心原则

1. **停止重新推导，开始编译** — 每次操作都应让知识库更富
2. **先更新已有，后创建新页** — 避免孤儿页面
3. **每次操作必须记录 log** — 时间戳、动作类型、变更摘要
4. **严格遵守 schema.md 中的目录结构** — 页面按类型存放，角色通过 frontmatter 标签

---

## 标准工作流

### 1. Ingest（两步式）

**第一步（分析）**：LLM 阅读来源 → 结构化分析
- 关键实体、概念、论点
- 与现有 wiki 内容的关联
- 与现有知识的矛盾和张力
- 建议的 wiki 结构

**第二步（生成）**：基于分析 → 生成 wiki 文件
1. 保存原始来源到 `raw/sources/` （不可变）
2. 创建 `sources/` 摘要页（带 frontmatter，type: source）
3. 创建/更新 `entities/` 和 `concepts/` 页面（带交叉引用）
4. 更新 `index.md` — 添加新页面到目录
5. 重生 `overview.md` — 摘要当前知识库状态
6. 追加 `log.md` — 记录本次 ingest 详情
7. Git commit + push

### 2. Query（回答问题）

- 先搜索 wiki 页面，再搜索 raw 来源
- 结合多个页面信息组织答案
- 高质量答案可回收为 `queries/` 下的新页面

### 3. Lint（健康检查）

- 检查孤儿页面（无入度链接）
- 检查断链
- 检查过时内容
- 检查缺少 frontmatter 的页面
- 在 `log.md` 中记录 lint 结果

---

## 四角色分配指南

| 来源特征               | 分配到              |
| ------------------ | ---------------- |
| 包装材料、结构、工艺、趋势、案例   | `packaging` 标签   |
| 品牌视觉、VI、Logo、重塑、趋势 | `branding` 标签    |
| 用户需求、数据分析、策略、项目管理  | `pm` 标签          |
| 习惯、思维、沟通、成长、系统     | `soft-skills` 标签 |

**跨角色来源**：判断核心论点在哪个角色，主页面放在该角色下，在 frontmatter 中用 `role: [packaging, branding]` 标注。
