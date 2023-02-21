import { computed } from "vue"

const prefersReducedMotion = computed(() => {
    let shouldReduceMotion: boolean | undefined = undefined

    if (shouldReduceMotion === undefined && typeof window !== 'undefined') {
        const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
        shouldReduceMotion = !mediaQuery || mediaQuery.matches
    }

    return shouldReduceMotion
})

export default prefersReducedMotion