<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { MotionState } from 'motion/types'
</script>

<template>
    <Motion :initial="{ opacity: 0, transform: 'scale(0)' }" :animate="{ opacity: 1, transform: ['scale(0)', 'scale(1)'] }"
        :transition="{ duration: 0.3, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', forwards: true }">
        <div class="error">
            <Motion :initial="{ opacity: 0, transform: 'scale(0) rotate(0)' }"
                :animate="{ opacity: 1, transform: ['scale(0) rotate(0)', 'scale(1) rotate(45deg)'] }"
                :transition="{ duration: 0.25, easing: 'ease-in', forwards: true }"
                class="first-line" />
            <Motion :initial="{ opacity: 0, transform: 'scale(0) rotate(0)' }"
                :animate="{ opacity: 1, transform: ['scale(0) rotate(0)', 'scale(1) rotate(-45deg)'] }"
                :transition="{ duration: 0.35, easing: 'ease-out', forwards: true }"
                class="second-line" />
        </div>
    </Motion>
</template>

<style scoped>
.error {
    background-color: rgb(239 68 68);
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    position: relative;
}
.first-line {
    position: relative;
    top: 4px;
    left: 9px;
    background-color: #fff;
    width: 2px;
    height: 12px;
    transform: rotate(45deg);
}
.second-line {
    position: relative;
    bottom: 8px;
    left: 9px;
    background-color: #fff;
    width: 2px;
    height: 12px;
    transform: rotate(45deg);
}
</style>