module.exports = [
    { text: '首页', link: '/' },
    {
        text: '学习', ariaLabel: '学习', items: [
            { text: 'JAVA技术', link: '/JAVA技术/基础部分/Java基础（上）' },
        ]
    },
    // {
    //     text: '工作中的问题', ariaLabel: '工作中的问题', items: [
    //         {text: '数据操作',link: '/工作中的问题/2023/数据操作'},
    //         {text: 'Linux',link: '/工作中的问题/2023/Linux'},
    //         {text: '其他',link: '/工作中的问题/2023/其他'}
    //     ]
    // },
    {
        text: '软件下载',
        ariaLabel: '软件下载',
        items: [
            { text: 'JDK', link: '/软件下载/02JDK', target: '_blank', rel: '' },
            { text: 'Nginx', link: '/软件下载/01Nginx', target: '_blank', rel: '' },
            { text: 'Mysql', link: '/软件下载/03Mysql', target: '_blank', rel: '' },
        ]
        // { text: '漏洞', link: '/漏洞解决/2022/07月'} 
    },
    {
        text: '个人资源',
        ariaLabel: '个人资源',
        items: [
            { text: '博客园', link: 'https://www.cnblogs.com/tangsc/', target: '_blank', rel: '' },
            { text: 'Github', link: 'https://github.com/tang458730548/', target: '_blank', rel: '' },
        ]
    }
]