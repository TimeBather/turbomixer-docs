import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "TurboMixer",
    description: "Universal visual programming IDE",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {
                text: '使用', items: []
            },
            {
                text: '开发', items: [
                    {text: '开发指南', link: '/development/'}
                ]
            }
        ],

        sidebar: {
          '/development/':[
            {'text':'引言','link':'/development/'},
            {'text':'环境搭建','link':'/development/environment'}
          ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/turbomixer/turbomixer'}
        ]
    },
    ignoreDeadLinks:true // @todo:Temporary solution,remove when the document ready
})
