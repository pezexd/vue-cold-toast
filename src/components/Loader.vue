<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { Motion as MotionType } from 'motion/vue'
</script>

<template>
    <Motion :initial="{ rotate: 0 }" :animate="{ rotate: 360 }"
        :transition="{ duration: 1, easing: 'linear', repeat: Infinity }">
        <div class="loader" />
    </Motion>
</template>

<style scoped>
.loader {
    @apply w-5 h-5 box-border border-[3px] rounded-full border-stone-200 border-r-stone-600;
}
</style>