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
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            { text: 'Changelog', link: 'https://github.com/...' }
        ]
    },
})