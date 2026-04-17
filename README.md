# Quokka LLM Wiki

面向包装设计师的四角色职业知识库。

## 架构

基于 [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) 实现，遵循 Karpathy 的 LLM Wiki 模式：

- **三层架构**：Raw Sources → Wiki → Schema
- **三个核心操作**：Ingest / Query / Lint
- **四角色标签**：包装设计 / 品牌设计 / 产品经理 / 软技能

## 目录

```
├── purpose.md       # Wiki 的灵魂
├── schema.md        # 结构规范
├── index.md         # 内容目录
├── log.md           # 操作记录
├── overview.md      # 全局摘要
├── agents.md        # AI 操作规范
├── concepts/        # 概念与方法论
├── entities/        # 品牌、产品、人物
├── sources/         # 来源摘要
├── queries/         # 问答结晶
├── synthesis/       # 综合分析
├── comparisons/     # 对比分析
└── raw/
    ├── sources/     # 原始素材
    └── assets/      # 图片资源
```

## 部署

VitePress 静态站点，通过 GitHub Actions 部署到 GitHub Pages。

## 同步

- Obsidian + Dropbox — 设备间实时同步
- 定时 Git 备份 — 每小时自动提交
- 每日 09:00 CST 自动部署
