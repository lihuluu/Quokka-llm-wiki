import { defineConfig } from 'vitepress'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'

export default defineConfig({
  title: 'Quokka Wiki',
  description: 'Ethan Li 的个人知识库 — 产品经理 × 包装设计师 × 品牌设计师 × 软技能',
  lang: 'zh-CN',

  base: '/Quokka-llm-wiki/',
  appearance: 'dark',
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '🦘',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'Schema', link: '/schema' },
      { text: 'Agents', link: '/agents' },
      { text: 'GitHub', link: 'https://github.com/lihuluu/Quokka-llm-wiki' }
    ],

    sidebar: {
      '/wiki/': [
        { text: 'Wiki 概览', link: '/wiki/' },
        { text: '操作日志', link: '/wiki/log' },
        {
          text: '概念',
          collapsed: false,
          items: [
            { text: '单一材料设计', link: '/wiki/concepts/mono-material-design' },
            { text: '可持续包装', link: '/wiki/concepts/sustainable-packaging' },
            { text: '瓦楞厚度', link: '/wiki/concepts/corrugated-flute-types' },
            { text: 'AI 品牌设计', link: '/wiki/concepts/ai-branding' },
            { text: '21 天挑战', link: '/wiki/concepts/designer-21-day-challenge' },
            { text: '无可阻挡的 21 天', link: '/wiki/concepts/unstoppable-21-day-challenge' },
            { text: '反愿景', link: '/wiki/concepts/anti-vision' },
            { text: '控制论智能', link: '/wiki/concepts/cybernetics-intelligence' },
            { text: 'Human 3.0', link: '/wiki/concepts/human-3-0-model' },
            { text: '身份驱动改变', link: '/wiki/concepts/identity-driven-change' },
            { text: '僧侣模式', link: '/wiki/concepts/monk-mode' },
            { text: '生命熵', link: '/wiki/concepts/entropy-in-life' },
          ]
        },
        {
          text: '实体',
          collapsed: false,
          items: [
            { text: 'MUJI', link: '/wiki/entities/muji/design-system-report' },
            { text: 'Perplexity', link: '/wiki/entities/perplexity' },
            { text: 'Puma', link: '/wiki/entities/puma' },
            { text: 'Smith & Diction', link: '/wiki/entities/smith-and-diction' },
          ]
        },
        {
          text: '原始资料',
          collapsed: true,
          items: [
            { text: '可持续包装趋势 2025', link: '/raw/sources/sustainable-packaging-trends-2025' },
            { text: 'MUJI 设计系统报告', link: '/raw/sources/muji-design-system-report-sources' },
            { text: '瓦楞厚度指南', link: '/raw/sources/corrugated-flute-types-guide' },
            { text: 'Perplexity 品牌重设计', link: '/raw/sources/perplexity-brand-redesign-uisdc' },
            { text: '无可阻挡的 21 天摘要', link: '/raw/sources/unstoppable-21-day-challenge-summary' },
            { text: '如何在一天内修复人生', link: '/raw/sources/how-to-fix-your-life-in-one-day' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lihuluu' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Ethan Li'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    editLink: {
      pattern: 'https://github.com/lihuluu/Quokka-llm-wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    }
  },

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks())
    }
  }
})
