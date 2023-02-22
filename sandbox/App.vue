<script setup lang="ts">
import { Toaster } from '../src/components'
import { useToaster } from '../src/core'

const { toast } = useToaster()

</script>

<template>
  <Toaster position="top-center" />
  <div>
    <button @click="toast.success(`Toast burned!`, { parseHTML: false })">
      Get a toast
    </button>
  </div>
</template>
<style scoped>
</style>
