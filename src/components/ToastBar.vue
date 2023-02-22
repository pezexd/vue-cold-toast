<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { prefersReducedMotion } from '../core/utils'
import { Presence, Motion } from 'motion/vue'
import { useTimeout } from '@vueuse/core'
import { Toast, ToastPosition, useToaster } from '../core';
import ToastIcon from './ToastIcon.vue';
import ToastMessage from './ToastMessage.vue';
import type { MotionState } from 'motion/types'

const { toast: instance } = useToaster()

const props = defineProps<{
    toast: Toast
    position: ToastPosition
}>()

const { toast, position } = toRefs(props)

const animations = computed(() => {
    const motion = prefersReducedMotion
    const top = position.value.includes('top')
    const yPercent = top ? '-200%' : '200%'

    if (motion.value) {
        return {
            initial: { opacity: 0.5 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
        }
    }
    else {
        return {
            initial: { opacity: 0.5, transform: `translate3d(0, ${yPercent}, 0) scale(0.6)` },
            enter: { opacity: 1, transform: [`translate3d(0, ${yPercent}, 0) scale(0.6)`, 'translate3d(0, 0, 0) scale(1)'] },
            exit: { opacity: 0, transform: `translate3d(0, ${yPercent}, 0) scale(0.6)`, transition: { duration: 0.25, easing: 'cubic-bezier(.06, .71, .55, 1)', forwards: true } }
        }
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
        <Motion v-if="toast.visible" :key="toast.id" :initial="animations.initial" :animate="animations.enter"
            :exit="animations.exit">
            <div class="toast-bar" :id="toast.id" @mouseenter="startPause" @mouseleave="endPause">
                <ToastIcon :toast="toast" />
                <ToastMessage :toast="toast" />
            </div>
        </Motion>
    </Presence>
</template>

<style scoped>
.toast-bar {
    display: flex;
    align-items: center;
    column-gap: 8px;
    line-height: 1.5rem;
    max-width: 24rem;
    pointer-events: auto;
    will-change: transform;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    border-radius: 4px;
    padding: 12px 10px;
    background-color: #FFF;
    color: rgb(28, 25, 23);
}
</style>