<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { MotionState } from 'motion/types'
</script>

<template>
    <Motion :initial="{ rotate: 0 }" :animate="{ rotate: 360 }"
        :transition="{ duration: 1, easing: 'linear', repeat: Infinity }">
        <div class="loader" />
    </Motion>
</template>

<style scoped>
.loader {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 3px solid rgb(231 229 228);
    border-right-color: rgb(87 83 78);
    border-radius: 9999px;
}
</style>