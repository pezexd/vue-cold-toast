<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    as: string
    variant: 'primary' | 'secondary'
}>(), {
    as: 'button',
    variant: 'primary'
})

const classes = computed(() => {
    const primary = 'rounded-xl bg-emerald-400/20 text-emerald-400 px-3 py-2 text-sm transition hover:bg-emerald-400/30'
    const secondary = 'rounded-xl bg-stone-400/20 text-stone-200 px-3 py-2 text-sm transition hover:bg-stone-400/30'
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