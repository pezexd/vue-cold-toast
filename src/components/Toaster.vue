<script setup lang="ts">
import { useState } from '../core/state'
import ToastBar from './ToastBar.vue';

const { toasts } = useState()

const defaultOffset = '16px'
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <template v-for="t in toasts" :key="t.id">
                <ToastBar :toast="t" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.container {
    @apply fixed z-[9999] pointer-events-none;
    left: v-bind(defaultOffset);
    top: v-bind(defaultOffset);
    right: v-bind(defaultOffset);
    bottom: v-bind(defaultOffset);
}
.wrapper {
    @apply flex flex-col space-y-2 absolute left-0 right-0 top-0 items-center pointer-events-none;
}
</style>