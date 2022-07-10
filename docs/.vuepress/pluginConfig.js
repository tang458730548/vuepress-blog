module.exports = [
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
                    artist: "",
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
]