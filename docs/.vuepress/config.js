module.exports = {
  // head左侧标题
  title: '温宏杰的个人分享',
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
          { text: '前端优化', link: '/learn/optimize/' }
        ]
      },
      { text: 'Code Guide', link: '/codeguide/' },
      { text: 'About', link: '/about/' },
      { text: 'Resource', link: '/resource/' },
      { text: 'GitHub', link: 'https://github.com/wenhongjie' },
    ],
    sidebar: {
      // 导航栏学习模块
      '/learn/optimize/': [
        '', // learn/readme 
      ],
      // 导航栏代码规范模块
      '/codeguide/': [
        '',
        'css'
      ],
      // 关于
      '/about/': [
        ''
      ],
      // 资源
      '/resource/': [
        ''
      ],
      // 
      // '/': [
      //   // '',
      //   // 'learn',
      //   // 'codeguide',
      //   // 'about'
      // ],
    },

    lastUpdated: '最后更新于',
  }
}