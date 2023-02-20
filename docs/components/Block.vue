<script setup lang="ts">
withDefaults(defineProps<{
    title: string
    details: string
    variant: 'warning' | 'primary'
}>(), {
    variant: 'primary'
})
</script>

<template>
    <div :class="[
        { 'bg-yellow-500/10 border border-yellow-400 text-yellow-400': variant === 'warning' },
        { 'bg-stone-500/10 border border-stone-400 text-stone-400': variant === 'primary' },
    ]" class="rounded-md flex flex-col gap-y-3 p-3">
        <span class="uppercase text-sm font-bold">
            {{ title }}
        </span>
        <span class="text-sm" v-html="details" />
    </div>
</template>