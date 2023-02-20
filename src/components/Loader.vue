<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { Motion as MotionType } from 'motion/vue'

</script>

<template>
    <Motion :initial="{ rotate: 0 }" :animate="{ rotate: 360 }"
        :transition="{ duration: 1, easing: 'linear', repeat: Infinity }">
        <div class="w-5 h-5 box-border border-[3px] rounded-full border-stone-200 border-r-stone-600" />
    </Motion>
</template>