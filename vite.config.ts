import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import typescript2 from 'rollup-plugin-typescript2';
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    // typescript2({
    //   check: false,
    //   include: [
    //     "src/components/**/*.vue",
    //   ],
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       outDir: "dist",
    //       sourceMap: true,
    //       declaration: true,
    //       declarationMap: true,
    //     },
    //   },
    //   exclude: ["vite.config.ts"]
    // })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [
        "src/components/main.ts",
      ],
      name: 'vueWithToast',
      formats: ["es", "cjs", "umd"],
      fileName: format => `vue-cold-toast.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: resolve(__dirname, "src/components/main.ts"),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'vue-cold-toast.css';
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
