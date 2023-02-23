import DefaultTheme from 'vitepress/theme'
import Toaster from 'vue-cold-toast'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('Toaster', Toaster)
    }
}