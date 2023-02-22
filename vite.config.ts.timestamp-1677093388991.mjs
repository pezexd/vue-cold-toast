// vite.config.ts
import { defineConfig } from "file:///D:/Develop/vue-cold-toast/node_modules/.pnpm/vite@4.1.1_@types+node@18.13.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Develop/vue-cold-toast/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.1.1+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import dts from "file:///D:/Develop/vue-cold-toast/node_modules/.pnpm/vite-plugin-dts@1.7.2_rgy4fnry75xg7rw6lgswyd3x2m/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Develop\\vue-cold-toast";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
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
        "src/components/main.ts"
      ],
      name: "vueColdToast",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue-cold-toast.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: resolve(__vite_injected_original_dirname, "src/components/main.ts")
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css")
            return "vue-cold-toast.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXZlbG9wXFxcXHZ1ZS1jb2xkLXRvYXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEZXZlbG9wXFxcXHZ1ZS1jb2xkLXRvYXN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXZlbG9wL3Z1ZS1jb2xkLXRvYXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB0eXBlc2NyaXB0MiBmcm9tICdyb2xsdXAtcGx1Z2luLXR5cGVzY3JpcHQyJztcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICAgIC8vIHR5cGVzY3JpcHQyKHtcbiAgICAvLyAgIGNoZWNrOiBmYWxzZSxcbiAgICAvLyAgIGluY2x1ZGU6IFtcbiAgICAvLyAgICAgXCJzcmMvY29tcG9uZW50cy8qKi8qLnZ1ZVwiLFxuICAgIC8vICAgXSxcbiAgICAvLyAgIHRzY29uZmlnT3ZlcnJpZGU6IHtcbiAgICAvLyAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgLy8gICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAvLyAgICAgICBzb3VyY2VNYXA6IHRydWUsXG4gICAgLy8gICAgICAgZGVjbGFyYXRpb246IHRydWUsXG4gICAgLy8gICAgICAgZGVjbGFyYXRpb25NYXA6IHRydWUsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vICAgZXhjbHVkZTogW1widml0ZS5jb25maWcudHNcIl1cbiAgICAvLyB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IFtcbiAgICAgICAgXCJzcmMvY29tcG9uZW50cy9tYWluLnRzXCIsXG4gICAgICBdLFxuICAgICAgbmFtZTogJ3Z1ZUNvbGRUb2FzdCcsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiLCBcInVtZFwiXSxcbiAgICAgIGZpbGVOYW1lOiBmb3JtYXQgPT4gYHZ1ZS1jb2xkLXRvYXN0LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZCBub3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzL21haW4udHNcIiksXG4gICAgICB9LFxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdtYWluLmNzcycpIHJldHVybiAndnVlLWNvbGQtdG9hc3QuY3NzJztcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUSxTQUFTLG9CQUFvQjtBQUNoUyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBRXhCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFnQkg7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUNkLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTztBQUFBLFFBQ0w7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxPQUFPLEtBQUs7QUFBQSxNQUM1QixVQUFVLFlBQVUsa0JBQWtCO0FBQUEsSUFDeEM7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsTUFDbkQ7QUFBQSxNQUNBLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUztBQUFZLG1CQUFPO0FBQzFDLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
