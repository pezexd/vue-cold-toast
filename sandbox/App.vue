<script setup lang="ts">
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
</template>
<style scoped>
</style>
