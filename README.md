
# Vue Cold Toast

## Getting started

This section will help you to install VueColdToast in your Vue project.
**Warning**
This component is currently in <code>alpha</code> status and will have breaking changes.

## Step 1: Install VueColdToast

Add VueColdToast as dependency for the project.

NPM
```

$ npm install vue-cold-toast

```
YARN
  

```sh [yarn]

$ yarn add vue-cold-toast

```
PNPM
  

```sh [pnpm]

$ pnpm add vue-cold-toast

```

## Step 2: Boot up in the App
```

<script  setup  lang="ts">

import  {  Toaster  }  from  'vue-cold-toast';

</script>

  

<template>

<Toaster />

//...

</template>

```
## Step 3: Make your first Toast
```
<script  setup  lang="ts">

import  {  useToaster  }  from  'vue-cold-toast';

  

const {  toast  } = useToaster();

</script>

<template>

<button  @click="toast.success('Toast burned!')">Make me a Toast</button>

</template>
```
## What's next?
By now, you have a basic functionality with VueColdToast, then you can test and setting up custom styles and use <code>The Best Toast in Town</code> for Vue.