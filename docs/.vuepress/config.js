module.exports = {
  // head左侧标题
  title: '温宏杰的前端笔记',
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
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'About', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/wenhongjie' },
    ],

    sidebar: [
      '/',
      '/list1/'
    ],

    lastUpdated: '最后更新于',
  }
}