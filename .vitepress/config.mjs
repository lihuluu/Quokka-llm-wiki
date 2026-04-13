import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Quokka Wiki',
  description: '包装设计知识库',
  lang: 'zh-CN',
  
  // 部署到 GitHub Pages
  base: '/Quokka-llm-wiki/',
  
  // 现代主题配置
  appearance: 'dark',
  
  // 最后更新时间
  lastUpdated: true,
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 支持 Obsidian 风格的内部链接 [[链接]]
      md.inline.ruler.after('link', 'obsidian-link', (state) => {
        const regex = /\[\[([^\]]+)\]\]/g
        let match
        while ((match = regex.exec(state.src)) !== null) {
          const token = new state.Token('link_open', 'a', 1)
          token.attrs = [['href', `./${match[1].replace(/\s+/g, '-').toLowerCase()}`]]
          state.tokens.push(token)
          
          const textToken = new state.Token('text', '', 0)
          textToken.content = match[1]
          state.tokens.push(textToken)
          
          state.tokens.push(new state.Token('link_close', 'a', -1))
        }
      })
    }
  },
  
  // 主题配置
  themeConfig: {
    // Logo
    logo: '🦘',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '实体', link: '/entities/perplexity' },
      { text: '概念', link: '/concepts/ai-branding' },
      { text: 'GitHub', link: 'https://github.com/lihuluu/Quokka-llm-wiki' }
    ],
    
    // 侧边栏
    sidebar: {
      '/': [
        {
          text: '实体',
          collapsed: false,
          items: [
            { text: 'Perplexity', link: '/entities/perplexity' },
            { text: 'Puma', link: '/entities/puma' },
            { text: 'Smith & Diction', link: '/entities/smith-and-diction' }
          ]
        },
        {
          text: '概念',
          collapsed: false,
          items: [
            { text: 'AI 品牌设计', link: '/concepts/ai-branding' },
            { text: '单一材料设计', link: '/concepts/mono-material-design' },
            { text: '可持续包装', link: '/concepts/sustainable-packaging' }
          ]
        },
        {
          text: '原始资料',
          collapsed: true,
          items: [
            { text: 'Perplexity 品牌案例', link: '/raw/articles/perplexity-brand-redesign-uisdc' },
            { text: '可持续包装趋势', link: '/raw/articles/sustainable-packaging-trends-2025' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lihuluu' }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Ethan Li'
    },
    
    // 搜索配置
    search: {
      provider: 'local'
    },
    
    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/lihuluu/Quokka-llm-wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 大纲配置
    outline: {
      label: '页面导航'
    },
    
    // 最后更新时间文本
    lastUpdated: {
      text: '最后更新于'
    }
  },
  
  // 自定义 CSS
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ]
})
