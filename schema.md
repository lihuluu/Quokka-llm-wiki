# 知识库规范（Schema）

## 三层架构

本知识库严格遵循 **LLM Wiki 三层架构**：

1. **Raw Sources** (`raw/sources/`) — 原始来源，未加工的剪藏、文章、报告
2. **Wiki Pages** (`wiki/`) — 加工后的知识页面，按类型组织
3. **Schema** (`schema.md`, `agents.md`, `purpose.md`) — 定义知识结构和 AI 操作规范

## 目录结构

```
quokka-llm-wiki/
├── purpose.md          # Wiki 的存在意义与关键问题
├── schema.md           # 本文件：知识库结构规范
├── agents.md           # AI 操作规范
├── overview.md         # 全局摘要（每次 ingest 后更新）
├── raw/
│   ├── sources/        # 原始来源（不可变）
│   └── assets/         # 本地图片等资源
└── wiki/
    ├── index.md          # 内容目录
    ├── log.md            # 操作日志
    ├── entities/         # 具体实体（品牌、产品、人物、项目）
    ├── concepts/         # 概念、方法、原则
    ├── sources/          # 来源摘要页（每篇 raw 的浓缩版）
    ├── queries/          # 问答归档
    ├── synthesis/        # 跨来源分析
    └── comparisons/      # 对比页
```

## 页面类型

| 类型 | 说明 | 位置 |
|---|---|---|
| `entity` | 具体实体：品牌、产品、人物、项目 | `wiki/entities/` |
| `concept` | 抽象概念：方法、理论、原则 | `wiki/concepts/` |
| `source` | 来源摘要：每篇 raw 的浓缩概述 | `wiki/sources/` |
| `query` | 问答归档：高质量的问答结晶 | `wiki/queries/` |
| `synthesis` | 跨来源分析：多篇来源的综合分析 | `wiki/synthesis/` |
| `comparison` | 对比页：并排分析 | `wiki/comparisons/` |

## Frontmatter 格式

```yaml
---
title: 页面标题
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: concept | entity | source | query | synthesis | comparison
tags: [标签1, 标签2]
role: packaging | branding | pm | soft-skills
sources: [raw/sources/来源名称.md]
---
```

## 四角色标签体系

**跨角色通用**：`case-study`, `tutorial`, `comparison`, `summary`, `insight`

**包装设计**：`material`, `structural-design`, `sustainable-packaging`, `mono-material`, `corrugated-board`, `printing`, `finishing`, `shelf-impact`, `unboxing`, `luxury-packaging`

**品牌设计**：`brand-identity`, `visual-system`, `rebrand`, `typography`, `color-theory`, `ai-branding`

**产品经理**：`user-research`, `requirement-analysis`, `product-strategy`, `growth`, `ux`, `data-driven`

**软技能**：`self-improvement`, `productivity`, `focus`, `systems-thinking`, `communication`, `identity`, `cybernetics`, `mental-energy`

## 页面创建阈值

- **创建页面**：当一个实体/概念出现在 2+ 个来源中，或是某篇来源的核心主题
- **添加到现有页面**：当来源提及已涵盖的内容时
- **不创建页面**：仅被简单提及的内容、次要细节

## 冲突解决策略

当新信息与现有内容冲突时：
1. 检查日期 — 较新的来源通常优先
2. 如果存在矛盾，注明两种观点及其日期和来源
3. 在 frontmatter 中标记：`contradictions: [页面名称]`
4. 在 log.md 中记录待审核事项
