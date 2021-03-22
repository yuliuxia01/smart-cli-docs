/**
 * @file
 * @description 小程序开发工具
 */

module.exports = {
    // host: '127.0.0.1',
    // port: 8080,
    title: 'Smart CLI',
    base: '/smart-cli-docs/',
    dest: './docs',
    description: '针对百度原生小程序的开发脚手架工具',
    themeConfig: {
        nav: [
            {text: '介绍', link: '/introduce'},
            {text: '快速开始', link: '/guide/install'},
            {text: '配置', link: '/config'}
        ],
        sidebar: [
            {
                title: '介绍',
                path: '/introduce'
            },
            {
                title: '快速开始',
                path: '/guide/install'
            },
            // {
            //     title: '命令行',
            //     path: '/guide/start'
            // },
            {
                title: '配置',
                path: '/config'
            },
            {
                title: '模板',
                path: '/menu/menu',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    {
                        title: '目录',
                        path: '/menu/menu'
                    },
                    {
                        title: '编译Build',
                        path: '/menu/build'
                    },
                    {
                        title: 'Mock',
                        path: '/menu/mock'
                    },
                    {
                        title: 'CSS相关',
                        path: '/menu/style'
                    }
                    // ,
                    // {
                    //     title: '小程序相关',
                    //     path: '/menu/swan'
                    // }
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
                title: '加入我们',
                path: '/standard'
            }
        ]
    },
    markdown: {
        lineNumbers: false
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': './asserts/img'
            }
        }
    }
};
