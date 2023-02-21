<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { Presence, Motion } from 'motion/vue'
import { Toast } from '../core/types';
import ToastIcon from './ToastIcon.vue';
import useToaster from '../core/useToaster';
import { prefersReducedMotion } from '../core/utils';
import { useTimeout } from '../core/utils'
import type { MotionState } from 'motion/types'

const { toast: instance } = useToaster()

const props = defineProps<{
    toast: Toast
}>()

const { toast } = toRefs(props)

const animations = computed(() => {
    const motion = prefersReducedMotion

    if (motion.value) {
        return {
            initial: { opacity: 0.5 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
        }
    }
    else {
        return {
            initial: { opacity: 0.5, transform: 'translate3d(0, -200%, 0) scale(0.6)' },
            enter: { opacity: 1, transform: ['translate3d(0, -200%, 0) scale(0.6)', 'translate3d(0, 0, 0) scale(1)'] },
            exit: { opacity: 0, transform: 'translate3d(0, -150%, 0) scale(0.6)', transition: { duration: 0.4, easing: 'cubic-bezier(.06, .71, .55, 1)', forwards: true } }
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
            <div class="base" :id="toast.id" @mouseenter="startPause" @mouseleave="endPause">
                <ToastIcon :toast="toast" />
                {{ toast.message }}
            </div>
        </Motion>
    </Presence>
</template>

<style scoped>
.base {
    @apply shadow;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    color: rgb(28 25 23);
    column-gap: 8px;
    display: flex;
    line-height: 1.5rem;
    max-width: 24rem;
    padding: 12px 10px;
    pointer-events: auto;
    will-change: transform;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
</style>