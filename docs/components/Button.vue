<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    as?: string
    variant?: 'primary' | 'secondary'
}>(), {
    as: 'button',
    variant: 'primary'
})

const classes = computed(() => {
    const primary = 'rounded-xl bg-[#1099A2]/20 text-[#1099A2] px-3 py-2 text-sm transition hover:bg-[#1099A2]/30'
    const secondary = 'rounded-xl bg-stone-400/20 text-[var(--vp-c-text-1)] px-3 py-2 text-sm transition hover:bg-stone-400/30'
    if (props.variant === 'primary') {
        return primary
    }
    else {
        return secondary
    }
})

</script>

<template>
    <component :is="as" :class="classes" v-bind="$attrs">
        <slot />
    </component>
</template>