<script setup lang="ts">
import { toRefs } from 'vue';
import { Toast } from '../core';

const props = defineProps<{
    toast: Toast
}>()

const { message, parseHTML } = toRefs(props.toast)

</script>

<template>
    <template v-if="parseHTML">
        <span v-html="message" />
    </template>
    <template v-else>
        {{ message }}
    </template>
</template>