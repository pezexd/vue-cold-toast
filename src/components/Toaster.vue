<script setup lang="ts">
import { computed, ref } from 'vue';
import { twMerge } from 'tailwind-merge'
import { useState } from '../core/state'
import ToastBar from './ToastBar.vue';
import useToaster from '../core/useToaster'

const { toasts } = useState()
const { toast } = useToaster()

const defaultOffset = 16

const offset = computed(() => ({
    left: `${defaultOffset}px`,
    top: `${defaultOffset}px`,
    right: `${defaultOffset}px`,
    bottom: `${defaultOffset}px`
}))

const container = computed(() => twMerge(['fixed z-[9999] pointer-events-none']))

const show = ref(true)
</script>

<template>
    <div :class="container" :style="{ ...offset }">
        <div :class="['flex flex-col space-y-2 absolute left-0 right-0 top-0 items-center pointer-events-none']">
            <template v-for="t in toasts" :key="t.id">
                <ToastBar :toast="t" />
            </template>
        </div>
    </div>
</template>