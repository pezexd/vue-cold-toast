<script setup lang="ts">
import { Motion } from 'motion/vue'
import type { MotionState } from 'motion/types'
</script>

<template>
    <Motion :initial="{ opacity: 0, transform: 'scale(0) rotate(0deg)' }"
        :animate="{ opacity: 1, transform: ['scale(0) rotate(0deg)', 'scale(1) '] }"
        :transition="{ duration: 0.3, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', forwards: true, animationDelay: '100ms' }">
        <div class="circle">
            <Motion :initial="{ opacity: 0, width: '0px', heigth: '0px', transform: 'scale(0) rotate(0)' }"
                :animate="{ opacity: 1, width: ['0px', '6px'], heigth: ['0px', '10px'], transform: ['scale(0) rotate(45deg)', 'scale(1) rotate(45deg)'] }"
                :transition="{ duration: 0.25, easing: 'ease-in', forwards: true, animationDelay: '200ms' }"
                class="checkmark" />
        </div>
    </Motion>
</template>

<style scoped>
.circle {
    background-color: rgb(34 197 94);
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    position: relative;
}

.checkmark {
    position: relative;
    box-sizing: border-box;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: #fff;
    top: 4px;
    left: 7px;
    width: 6px;
    height: 10px;
}
</style>