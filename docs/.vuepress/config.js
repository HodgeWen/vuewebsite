module.exports = {
  // head左侧标题
  title: '温宏杰的Github页',
  description: '你好啊旅行者, 今天有学到什么吗',

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
    displayAllHeaders: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'About', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/wenhongjie' },
    ],
    sidebar: {
      // 导航栏代码规范模块
      '/guide/': [
        '',
        'guidecss',
        'guidejs',
        'guidedesign'
      ],
      // 关于
      '/about/': [
        ''
      ]
    },
    lastUpdated: '最后更新于',
  }
}