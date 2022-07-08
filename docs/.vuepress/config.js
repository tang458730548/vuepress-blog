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
  plugins: [
    ['@vuepress/back-to-top'],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    ['@vuepress/plugin-nprogress'],
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    [
      'copyright',
      {
        authorName: 'tangsc', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],
    // [
    //   "vuepress-plugin-nuggets-style-copy",
    //   {
    //     copyText: "复制代码",
    //     tip: {
    //       content: "复制成功",
    //     },
    //   },
    // ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        welcome: '欢迎来到...',
        home: '心里的花，我想要带你回家。',
        close: '你知道我喜欢吃什么吗？痴痴地望着你。',
        theme: ['koharu', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          //网络歌曲
          {
            //名字
            name: "LOSER",
            //作者
            artist: "米津玄師",
            //地址
            url: "https://www.ytmp3.cn/down/73654.mp3",
            //封面图片
            cover:
              "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "30px", "z-index": "999999" },
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    logo: '/favicon.svg',
    searchMaxSuggestoins: 10,
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习', ariaLabel: '学习', items: [
          { text: 'JAVA', link: '/Java/基础部分/01、JAVA基础' },
          { text: '前端技术', link: '/Java/基础部分/01、JAVA基础2' },
          { text: '生活感悟', link: '/生活感悟/2022-7-7' }
        ]
      },
      {
        text: '个人资源',
        ariaLabel: '个人资源',
        items: [
          { text: '博客园', link: 'https://www.cnblogs.com/tangsc/', target: '_blank', rel: '' },
          { text: 'Github', link: 'https://github.com/tang458730548/', target: '_blank', rel: '' }
        ]
      }
    ],
    sidebar: {
      '/Java/': [
        {
          title: 'JAVA技术',
          children: [
            {
              title: '基础部分',
              children: [
                {
                  title: '01、JAVA基础',
                  path: '/Java/基础部分/01、JAVA基础'
                }
              ]
            },
            {
              title: 'Spring部分',
              children: [
                {
                  title: '01、Spring1',
                  path: '/Java/Spring部分/01、Spring1'
                },
                {
                  title: '01、Spring2',
                  path: '/Java/Spring部分/01、Spring2'
                }
              ]
            },
          ]
        },
      ],

      '/前端技术/': [
        {
          title: '前端技术',
          children: [
            {
            }
          ]
        }
      ],

      '/生活感悟/': [
        {
          title: '生活感悟',
          children: [
            {
              title: '2022-7-7',
              path: '/生活感悟/2022-7-7'
            }
          ]
        }
      ]
    }
  }
}