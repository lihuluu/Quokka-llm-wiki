---
title: "Schema 规范"
date: 2026-04-17
type: meta
tags: ["system", "schema"]
---

# Schema 规范

本文件定义知识库的结构规范、元数据标准和维护协议。

---

## 1. 目录结构（三层架构）

```
quokka-llm-wiki/
├── purpose.md          # Wiki 的灵魂：目标、关键问题、研究范围
├── schema.md           # 本文件：结构规范与元数据定义
├── index.md            # 内容目录与 LLM 导航入口
├── log.md              # 时序操作记录
├── overview.md         # 全局摘要
├── agents.md           # AI 操作规范
├── README.md           # 项目说明
├── concepts/           # 概念与方法论
├── entities/           # 品牌、产品、人物、组织
├── sources/            # 来源摘要（对 raw/ 的结构化凝练）
├── queries/            # 保存的问答结晶
├── synthesis/          # 综合分析与流水线
├── comparisons/        # 对比分析
└── raw/
    ├── sources/        # 原始来源素材（不可变）
    └── assets/         # 本地图片资源
```

**Critical rule**: 页面按类型统一存放，**NOT** 按主题/角色拆分。包装案例和品牌案例都存在同一个 `entities/` 下，角色通过 frontmatter 标签区分。

---

## 2. Frontmatter 规范

每个 wiki 页面必须包含标准化 frontmatter：

```yaml
---
title: "页面标题"
date: 2026-04-17
type: concept          # 必填：concept | entity | source | query | synthesis | comparison
role: [packaging]      # 必填：pm | packaging | branding | soft-skills，支持多标签
tags: ["标签1", "标签2"]
sources: ["raw/sources/xxx.md"]   # 关联的原始来源（可选）
related: ["concepts/yyy.md"]      # 关联的 wiki 页面（可选）
---
```

### 角色标签（role）

| 标签 | 含义 | 内容范围 |
|---|---|---|
| `pm` | 产品经理 | 用户需求、数据分析、策略、项目管理 |
| `packaging` | 包装设计 | 包装材料、结构、工艺、趋势、案例 |
| `branding` | 品牌设计 | 品牌视觉、VI、Logo、重塑、趋势 |
| `soft-skills` | 软技能 | 习惯、思维、沟通、成长、系统 |

### 页面类型（type）

| 类型 | 位置 | 功能 |
|---|---|---|
| `concept` | `concepts/` | 解释某个概念、方法论、设计原则 |
| `entity` | `entities/` | 记录某个品牌、产品、人物、组织的关键信息 |
| `source` | `sources/` | 对原始材料的结构化摘要，带关键论点提取 |
| `query` | `queries/` | 将高质量问答回收为可复用的知识片段 |
| `synthesis` | `synthesis/` | 多来源综合分析、流水线总结 |
| `comparison` | `comparisons/` | 对比分析、A/B 框架、趋势对照 |

---

## 3. 命名与链接规范

- 文件名：小写英文，用连字符连接，无空格
- 交叉引用：使用 Obsidian wikilink `[[page-name]]`
- 每个页面至少包含 2 个出站 `[[wikilinks]]` 链接
- 来源页面必须链接到其原始 raw 文件

---

## 4. 三个核心操作

| 操作 | 功能 | 输出 |
|---|---|---|
| **Ingest** | 向知识库添加新来源，提取并编译 | raw/ + sources/ + entities/ + concepts/ + index更新 |
| **Query** | 基于已编译知识回答问题 | 回答文本 + 可回收为 queries/ 页面 |
| **Lint** | 检查知识库健康状态 | 孤儿页面、断链、缺少 frontmatter 报告 |

---

## 5. 维护协议

1. 每次 ingest 必须记录 log.md
2. 每周运行 lint 检查
3. 优先更新已有页面，避免创建孤儿页面
4. 重复内容归入 synthesis/，不在 concepts/ 重叠
5. 不删除 .git 历史，重构以正常 commit 序列进行
