import type { App } from 'vue';
import { HelloWorld, Toaster } from "@/components";

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('Toaster', Toaster);
  }
};

export * from '@/components'
export * from '@/core'