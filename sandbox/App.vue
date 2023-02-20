<script setup lang="ts">
import HelloWorld from '../src/components/HelloWorld.vue'
import Toaster from '@/components/Toaster.vue';
import useToaster from '@/core/useToaster'

const { toast } = useToaster()

</script>

<template>
  <Toaster />
  <div>
    <button @click="toast.success('Hola desde index')">
      Get a toast
    </button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
<style scoped>
</style>
