import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'VueColdToast',
    description: 'Just playing around.',
    cleanUrls: true,
    head: [
        ['script', { src: 'https://cdn.tailwindcss.com' }]
    ],
    themeConfig: {
        siteTitle: 'Vue Cold Toast',
        nav: [
            { text: 'Guide', link: '/guide/getting-started' },
            // {
            //     text: 'Dropdown Menu',
            //     items: [
            //         { text: 'Item A', link: '/item-1' },
            //         { text: 'Item B', link: '/item-2' },
            //         { text: 'Item C', link: '/item-3' }
            //     ]
            // },
            { text: 'Changelog', link: 'https://github.com/...' }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Getting started', link: '/guide/getting-started' },
                    { text: 'Options', link: '/guide/options' },
                ]
            },
        ],
        footer: {
            message: `
                Inspired in <a href="https://react-hot-toast.com">react-hot-toast</a>
                <br>
                Thanks to <a href="https://vueuse.org">VueUse</a> and <a href="https://motion.dev">MotionOne</a>
            `,
            copyright: `© ${new Date().getFullYear()} VueColdToast - Built by <a href="https://github.com/pezexd">Pezedev</a>`
        },
    },
})