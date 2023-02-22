
<h1 align="center">VueColdToast (WIP)</h1>
<p align="center">Beautiful toasts for Vue</p>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/vue-cold-toast"><img src="https://img.shields.io/npm/v/vue-cold-toast?color=1099A2&amp;label=" alt="NPM version"></a></p>
<p align="center">
<a href="https://vue-cold-toast.vercel.app/">Documentation</a>
</p>

## Usage
```bash
// NPM
npm install vue-cold-toast
// YARN
yarn add vue-cold-toast
// PNPM
pnpm add vue-cold-toast
```
Add `vue-cold-toast` in your root component.

```ts
// App.vue
<script setup lang="ts">
import { Toaster } from 'vue-cold-toast'
</script>

<template>
	<Toaster />
	// ...
</template>
```

Import `styles` in your main script.
```ts
// main.ts
import 'vue-cold-toast/dist/vue-cold-toast.css'
// ...
```
## Credits

[timolins/react-hot-toast](https://github.com/timolins/react-hot-toast)
[@vueuse](https://github.com/vueuse/vueuse)