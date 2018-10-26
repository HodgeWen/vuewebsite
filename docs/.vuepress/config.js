module.exports = {
  // head左侧标题
  title: 'Web开发',
  description: '每天学到一点',

  markdown: {
    lineNumbers: true // 为代码块增加行号
  },

  head: [
    ['link', {
      rel: 'icon',
      href: '/images/logo.ico'
    }]
  ],
  themeConfig: {
    nav: [
      { text: 'Learn', 
        items: [
          { text: '前端优化', link: '/optimize/' }
        ]
      },
      { text: 'Code Guide', link: '/codeguide/' },
      { text: 'About', link: '/about/' },
      { text: 'Resource', link: '/resource/' },
      { text: 'GitHub', link: 'https://github.com/wenhongjie' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/learn/': [
        '',
        'hi'
      ],
      '/codeguide/': [
        ''
      ],
      '/about/': [
        ''
      ],
      '/': [
        '',
        'learn',
        'codeguide',
        'about'
      ],
    },

    lastUpdated: '最后更新于',
  }
}