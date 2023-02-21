<script setup lang="ts">
import { Motion } from 'motion/vue'
import { Toast } from '../core/types'
import { toRefs } from 'vue';
import Checkmark from './Checkmark.vue';
import Error from './Error.vue';
import Loader from './Loader.vue';
import type { MotionState } from 'motion/types'

const props = defineProps<{
    toast: Toast
}>()

const { type, icon } = toRefs(props.toast)
</script>

<template>
    <div>
        <template v-if="icon !== undefined">
            <template v-if="typeof icon === 'string'">
                <Motion :initial="{ opacity: 0.4, transform: 'scale(0.6)' }"
                    :animate="{ opacity: 1, transform: ['scale(0.6)', 'scale(1)'] }"
                    :transition="{ duration: 0.3, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', forwards: true, animationDelay: 0.12 }">
                    {{ icon }}
                </Motion>
            </template>
        </template>
        <template v-else>
            <template v-if="type === 'blank'" />
            <template v-else>
                <template v-if="type === 'loading'">
                    <Loader />
                </template>
                <template v-else-if="type === 'error'">
                    <Error />
                </template>
                <template v-else>
                    <Checkmark />
                </template>
            </template>
        </template>
    </div>
</template>