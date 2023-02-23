---
title: Options
layout: docs
---
<script setup>
    import { useToaster } from 'vue-cold-toast'
    import 'vue-cold-toast/dist/vue-cold-toast.css'
    import Button from '../components/Button.vue'
    const { toast } = useToaster()
</script>

<Toaster />

# Options
VueColdToast have multiple options that works to-one and to-many, in the next sections we'll the usage of thems.

## icon
Use a personalized icon (some like a emoji) on the Toast

```vue
<template>
    <button
        @click="toast('Heated Cookie', { icon: '🍪' })">
        Make me a Cookie
    </button>
</template>
```

<div align="center">
    <Button
        variant="secondary"
        @click="toast('Heated Cookie', { icon: '🍪' })">
        Make me a Cookie
    </Button>
</div>

## duration
Personalized timing to the Toast

```vue
<template>
    <button
        @click="toast('Toast of 5 seconds', { icon: '⌛', duration: 5000 })">
        Make me a Toast
    </button>
</template>
```
<div align="center">
    <Button
        variant="secondary"
        @click="toast('Toast of 5 seconds', { icon: '⌛', duration: 5000 })">
        Make me a Toast
    </Button>
</div>

## parseHTML
Allows Toast message to be displayed as HTML

```vue
<template>
    <button
        @click="toast.success(`
            <span class='font-bold'>Heated heavy Toast</span>
        `, { parseHTML: true })">
        Make me a heavy Toast
    </button>
</template>
```
<div align="center">
    <Button
        variant="secondary"
        @click="toast.success(`
        <span class='font-bold'>Heated heavy Toast</span>
        `, { parseHTML: true })">
        Make me a heavy Toast
    </Button>
</div>