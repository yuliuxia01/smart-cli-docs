/**
 * @file
 * @description 小程序开发工具
 */

module.exports = {
    // host: '127.0.0.1',
    // port: 8080,
    title: 'smart-cli-docs',
    base: '/smart-cli-docs/',
    description: '针对小程序的开发工具',
    themeConfig: {
        nav: [
            {text: '开始', link: '/introduce'},
            {text: '指南', link: '/guide/install'}
        ],
        sidebar: [
            {
                title: '背景介绍',
                path: '/introduce'
            },
            {
                title: '适用场景',
                path: '/applicable'
            },
            {
                title: '指南',
                path: '/guide/install',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    {
                        title: '快速开始',
                        path: '/guide/install'
                    },
                    {
                        title: '目录结构',
                        path: '/guide/menu'
                    },
                    {
                        title: '功能',
                        path: '/guide/start'
                    },
                    {
                        title: '配置',
                        path: '/guide/global'
                    },
                    {
                        title: '插件',
                        path: '/guide/plugin'
                    }
                ]
            },
            {
                title: '常见问题',
                path: '/question'
            },
            {
                title: '支持',
                path: '/support'
            },
            {
                title: '更新日志',
                path: '/update'
            },
            {
                title: '技术团队',
                path: '/standard'
            }
        ]
    }
};
