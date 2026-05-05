import{_ as s,o as n,c as e,ag as i}from"./chunks/framework.GolXoAlY.js";const u=JSON.parse('{"title":"Quokka LLM Wiki","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1776444206000}'),l={name:"README.md"};function p(t,a,r,o,c,d){return n(),e("div",null,[...a[0]||(a[0]=[i(`<h1 id="quokka-llm-wiki" tabindex="-1">Quokka LLM Wiki <a class="header-anchor" href="#quokka-llm-wiki" aria-label="Permalink to &quot;Quokka LLM Wiki&quot;">​</a></h1><p>面向包装设计师的四角色职业知识库。</p><h2 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h2><p>基于 <a href="https://github.com/nashsu/llm_wiki" target="_blank" rel="noreferrer">nashsu/llm_wiki</a> 实现，遵循 Karpathy 的 LLM Wiki 模式：</p><ul><li><strong>三层架构</strong>：Raw Sources → Wiki → Schema</li><li><strong>三个核心操作</strong>：Ingest / Query / Lint</li><li><strong>四角色标签</strong>：包装设计 / 品牌设计 / 产品经理 / 软技能</li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├── purpose.md       # Wiki 的灵魂</span></span>
<span class="line"><span>├── schema.md        # 结构规范</span></span>
<span class="line"><span>├── index.md         # 内容目录</span></span>
<span class="line"><span>├── log.md           # 操作记录</span></span>
<span class="line"><span>├── overview.md      # 全局摘要</span></span>
<span class="line"><span>├── agents.md        # AI 操作规范</span></span>
<span class="line"><span>├── concepts/        # 概念与方法论</span></span>
<span class="line"><span>├── entities/        # 品牌、产品、人物</span></span>
<span class="line"><span>├── sources/         # 来源摘要</span></span>
<span class="line"><span>├── queries/         # 问答结晶</span></span>
<span class="line"><span>├── synthesis/       # 综合分析</span></span>
<span class="line"><span>├── comparisons/     # 对比分析</span></span>
<span class="line"><span>└── raw/</span></span>
<span class="line"><span>    ├── sources/     # 原始素材</span></span>
<span class="line"><span>    └── assets/      # 图片资源</span></span></code></pre></div><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>VitePress 静态站点，通过 GitHub Actions 部署到 GitHub Pages。</p><h2 id="同步" tabindex="-1">同步 <a class="header-anchor" href="#同步" aria-label="Permalink to &quot;同步&quot;">​</a></h2><ul><li>Obsidian + Dropbox — 设备间实时同步</li><li>定时 Git 备份 — 每小时自动提交</li><li>每日 09:00 CST 自动部署</li></ul>`,11)])])}const k=s(l,[["render",p]]);export{u as __pageData,k as default};
