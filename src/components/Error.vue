<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { Motion as MotionType } from 'motion/vue'

</script>

<template>
    <Motion :initial="{ opacity: 0, transform: 'scale(0)' }" :animate="{ opacity: 1, transform: ['scale(0)', 'scale(1)'] }"
        :transition="{ duration: 0.3, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', forwards: true }">
        <div class="bg-red-500 w-5 h-5 rounded-full relative">
            <Motion :initial="{ opacity: 0, transform: 'scale(0) rotate(0)' }"
                :animate="{ opacity: 1, transform: ['scale(0) rotate(0)', 'scale(1) rotate(45deg)'] }"
                :transition="{ duration: 0.25, easing: 'ease-in', forwards: true }"
                class="relative top-1 left-[9px] bg-white w-0.5 h-3 rotate-45" />
            <Motion :initial="{ opacity: 0, transform: 'scale(0) rotate(0)' }"
                :animate="{ opacity: 1, transform: ['scale(0) rotate(0)', 'scale(1) rotate(-45deg)'] }"
                :transition="{ duration: 0.35, easing: 'ease-out', forwards: true }"
                class="absolute top-1 left-[9px] bg-white w-0.5 h-3 -rotate-45" />
        </div>
    </Motion>
</template>