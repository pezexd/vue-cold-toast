<script setup lang="ts">
import { Toast, ToastPosition } from '../core/types';
import { computed, toRefs } from 'vue';
import { useState } from '../core/state'
import ToastBar from './ToastBar.vue';
import type { CSSProperties } from 'vue'
import type { MotionState } from 'motion/types'

const props = withDefaults(defineProps<{
    position?: ToastPosition
    jelly?: string
}>(), {
    position: 'top-center',
    jelly: '8px'
})

const { position } = toRefs(props)
const { toasts } = useState()

const defaultOffset = '16px'

const wrapperOffset = computed((): CSSProperties => {
    const top = position.value.includes('top')
    const calculateY = top ? { top: 0 } : { bottom: 0 }
    const calculateX = position.value.includes('center')
        ? { alignItems: 'center' }
        : position.value.includes('right')
            ? { alignItems: 'flex-end' }
            : { alignItems: 'flex-start' }

    return {
        flexDirection: top ? 'column' : 'column-reverse',
        ...calculateX,
        ...calculateY
    }
})

const tPosition = (t: Toast) => t.position || position.value
</script>

<template>
    <div class="container">
        <div class="wrapper" :style="{ ...wrapperOffset }">
            <template v-for="t in toasts" :key="t.id">
                <ToastBar :toast="t" :position="tPosition(t)" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    left: v-bind(defaultOffset);
    top: v-bind(defaultOffset);
    right: v-bind(defaultOffset);
    bottom: v-bind(defaultOffset);
}

.wrapper {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    row-gap: v-bind(jelly);
}
</style>