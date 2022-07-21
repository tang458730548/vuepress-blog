module.exports = [
    { text: '首页', link: '/' },
    {
        text: '学习', ariaLabel: '学习', items: [
            { text: 'JAVA技术', link: '/JAVA技术/基础部分/前言' },
            { text: '前端技术', link: '/前端技术/前言' },
            { text: '生活感悟', link: '/生活感悟/2022-7-7' }
        ]
    },
    {
        text: '软件下载',
        ariaLabel: '软件下载',
        items: [
            { text: 'JDK', link: '/软件下载/02JDK', target: '_blank', rel: '' },
            { text: 'Nginx', link: '/软件下载/01Nginx', target: '_blank', rel: '' },
            { text: '漏洞', link: '/漏洞解决/2022/07月'} 
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
]