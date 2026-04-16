# 知识库规范（Schema）

## 领域范围

包装设计知识库 — 涵盖设计理论、工艺技术、材料科学、市场趋势、品牌策略

## 文件命名规范

- 文件名：小写字母、连字符、无空格（例如：`offset-printing.md`）
- 每个页面必须以 YAML frontmatter 开头
- 使用 `[wikilinks](/wikilinks)` 在页面间建立链接（每页至少 2 个出站链接）
- 更新页面时，必须更新 `updated` 日期
- 每个新页面必须添加到 `index.md` 的正确分类下
- 所有操作必须追加到 `log.md`

## Frontmatter 格式

```yaml
---
title: 页面标题
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [来自下方标签体系的标签]
sources: [raw/articles/来源名称.md]
---
```

## 标签体系

### 设计理论
- design-theory, visual-hierarchy, typography, color-theory, minimalism, maximalism

### 材料与结构
- material, paper, plastic, glass, metal, corrugated-board, sustainable-packaging, structural-design

### 印刷工艺
- printing, offset, digital-printing, screen-printing, flexography, gravure

### 后加工工艺
- finishing, foil-stamping, embossing, debossing, uv-coating, lamination, die-cutting

### 品牌与营销
- branding, brand-identity, shelf-impact, unboxing-experience, luxury-packaging

### 行业与市场
- market-trend, consumer-behavior, regulation, sustainability, e-commerce-packaging

### 技术工具
- software, ai-design, 3d-rendering, prototyping, dieline

### 个人系统与认知
- self-improvement, productivity, mental-energy, systems-thinking, focus, identity, cybernetics, flow, gamification, psychology

### 元标签
- comparison, case-study, tutorial, glossary, prediction

## 页面创建阈值

- **创建页面**：当一个实体/概念出现在 2+ 个来源中，或是某篇来源的核心主题
- **添加到现有页面**：当来源提及已涵盖的内容时
- **不要创建页面**：仅被简单提及的内容、次要细节
- **拆分页面**：当页面超过约 200 行时
- **归档页面**：当内容完全被替代时

## 实体页面（Entity）

每个值得记录的实体对应一个页面。包含：
- 概述/定义
- 关键事实与日期
- 与其他实体的关系（[wikilinks](/wikilinks)）
- 来源引用

## 概念页面（Concept）

每个概念对应一个页面。包含：
- 定义/解释
- 当前知识状态
- 开放问题或争议
- 相关概念（[wikilinks](/wikilinks)）

## 对比页面（Comparison）

并排分析。包含：
- 对比对象及原因
- 对比维度（表格形式）
- 结论或综合
- 来源

## 更新策略

当新信息与现有内容冲突时：
1. 检查日期 — 较新的来源通常优先于较旧的来源
2. 如果确实存在矛盾，注明两种观点及其日期和来源
3. 在 frontmatter 中标记：`contradictions: [页面名称]`
4. 在 lint 报告中标记待用户审核
