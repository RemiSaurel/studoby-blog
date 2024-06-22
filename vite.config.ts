import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  base: "/studoby-web/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
