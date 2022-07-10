const nav = require ('./navConfig.js')
const sidebarConfig = require ('./sidebarConfig')
const pluginConfig = require ('./pluginConfig')
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "学习笔记",
      description: '',
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  markdown: {
    lineNumbers: true,  // 代码显示行号
  },
  plugins: pluginConfig,
  // 主题配置
  themeConfig: {
    logo: '/favicon.svg',
    searchMaxSuggestoins: 10,
    lastUpdated: '最后更新时间',
    // 导航配置
    nav: nav,
    sidebar: sidebarConfig
  }
}