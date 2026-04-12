# Wiki Schema

## Domain
包装设计知识库 — 涵盖设计理论、工艺技术、材料科学、市场趋势、品牌策略

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `offset-printing.md`)
- Every wiki page starts with YAML frontmatter
- Use `[[wikilinks]]` to link between pages (minimum 2 outbound links per page)
- When updating a page, always bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md`

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
---
```

## Tag Taxonomy

### 设计理论
- design-theory, visual-hierarchy, typography, color-theory, minimalism, maximalism

### 材料与结构
- material, paper, plastic, glass, metal, sustainable-packaging, structural-design

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

### 元标签
- comparison, case-study, tutorial, glossary, prediction

## Page Thresholds
- **Create a page** when an entity/concept appears in 2+ sources OR is central to one source
- **Add to existing page** when a source mentions something already covered
- **DON'T create a page** for passing mentions, minor details
- **Split a page** when it exceeds ~200 lines
- **Archive a page** when content is fully superseded

## Entity Pages
One page per notable实体. Include:
- Overview / what it is
- Key facts and dates
- Relationships to other entities ([[wikilinks]])
- Source references

## Concept Pages
One page per concept. Include:
- Definition / explanation
- Current state of knowledge
- Open questions or debates
- Related concepts ([[wikilinks]])

## Comparison Pages
Side-by-side analyses. Include:
- What is being compared and why
- Dimensions of comparison (table format)
- Verdict or synthesis
- Sources

## Update Policy
When new information conflicts with existing content:
1. Check dates — newer sources generally supersede older ones
2. If genuinely contradictory, note both positions with dates and sources
3. Mark contradiction in frontmatter: `contradictions: [page-name]`
4. Flag for user review in lint report
