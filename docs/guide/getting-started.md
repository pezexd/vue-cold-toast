---
title: Getting Started
layout: docs
---

# Getting Started
This section will help you to install VueColdToast in your Vue project.

::: warning
This component is currently in <code>alpha</code> status and will have breaking changes.
:::

## Step 1: Install VueColdToast
Add VueColdToast as dependency for the project.

::: code-group

```sh [npm]
$ npm install vue-cold-toast
```

```sh [yarn]
$ yarn add vue-cold-toast
```

```sh [pnpm]
$ pnpm add vue-cold-toast
```

:::

## Step 2: Boot up in the App

::: code-group

```vue [App.vue]
<script setup lang="ts">
import { Toaster } from 'vue-cold-toast';
</script>

<template>
  <Toaster />
  //...
</template>
```
:::

## Step 3: Make your first Toast

::: code-group

```vue [Foo.vue]
<script setup lang="ts">
import { useToaster } from 'vue-cold-toast';

const { toast } = useToaster();
</script>

<template>
  <button @click="toast.success('Toast burned!')">Make me a Toast</button>
</template>

```
:::
## What's next?
By now, you have a basic functionality with VueColdToast, then you can test and setting up custom styles and use <code>The Best Toast in Town</code> for Vue.