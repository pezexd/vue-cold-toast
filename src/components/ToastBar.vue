<script setup lang="ts">
import { Toast } from '../core/types';
import useToaster from '../core/useToaster';
import { Presence, Motion } from 'motion/vue'
import { twMerge } from 'tailwind-merge';
import { computed, toRefs } from 'vue';
import { usePreferredReducedMotion, useTimeout } from '@vueuse/core';
import ToastIcon from './ToastIcon.vue';
import type { ReducedMotionType, UseTimeoutOptions } from '@vueuse/core'

const motion = usePreferredReducedMotion()
const { toast: instance } = useToaster()

const base = computed(() => twMerge(['flex items-center bg-white text-stone-900 leading-6 will-change-transform shadow max-w-sm pointer-events-auto px-3 py-2.5 gap-x-2 rounded']))

const props = defineProps<{
    toast: Toast
}>()

const { toast } = toRefs(props)

const initial = computed(() => {
    if (motion.value == 'reduce') {
        return { opacity: 0.5 }
    }
    else {
        return { opacity: 0.5, transform: 'translate3d(0, -200%, 0) scale(0.6)' }
    }
})

const enter = computed(() => {
    if (motion.value == 'reduce') {
        return { opacity: 1 }
    }
    else {
        return { opacity: 1, transform: ['translate3d(0, -200%, 0) scale(0.6)', 'translate3d(0, 0, 0) scale(1)'] }
    }
})

const exit = computed(() => {
    if (motion.value == 'reduce') {
        return { opacity: 0 }
    }
    else {
        return { opacity: 0, transform: 'translate3d(0, -150%, 0) scale(0.6)', transition: { duration: 0.4, easing: 'cubic-bezier(.06, .71, .55, 1)', forwards: true } }
    }
})

const { stop: startPause, start: endPause } = useTimeout(toast.value.duration, {
    callback: () => {
        instance.dismiss(toast.value.id)
    },
    immediate: true,
    controls: true
})
</script>

<template>
    <Presence>
        <Motion v-if="toast.visible" :key="toast.id" :initial="initial" :animate="enter" :exit="exit">
            <div :class="[base]" :id="toast.id" @mouseenter="startPause" @mouseleave="endPause">
                <ToastIcon :toast="toast" />
                {{ toast.message }}
            </div>
        </Motion>
    </Presence>
</template>