import { defineConfig } from "vite";
import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "#",
        replacement: resolve(__dirname, "types"),
      },
    ],
  },
});