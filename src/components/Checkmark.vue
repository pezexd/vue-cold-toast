<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { Motion as MotionType } from 'motion/vue'
</script>

<template>
    <Motion :initial="{ opacity: 0, transform: 'scale(0) rotate(0deg)' }"
        :animate="{ opacity: 1, transform: ['scale(0) rotate(0deg)', 'scale(1) rotate(45deg)'] }"
        :transition="{ duration: 0.3, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', forwards: true, animationDelay: '100ms' }">
        <div class="checkbox" />
    </Motion>
</template>

<style scoped>
.checkbox {
    @apply bg-green-500 w-5 h-5 rounded-full relative after:box-border after:absolute after:border-r-2 after:border-b-2 after:border-white after:bottom-1.5 after:left-1.5 after:h-2.5 after:w-1.5 after:opacity-0 after:animate-[checkmark_.2s_ease-out_forwards_200ms];
}

@keyframes checkmark {
    0% {
        height: 0;
        opacity: 0;
        width: 0;
    }
    40% {
        height: 0;
        opacity: 1;
        width: 6px;
    }
    100% {
        height: 10px;
        opacity: 1;
    }
}
</style>