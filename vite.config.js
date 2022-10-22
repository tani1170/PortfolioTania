// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        main: resolve(__dirname, "src/about.html"),
        main: resolve(__dirname, "src/project.html"),
        main: resolve(__dirname, "src/insight.html"),
        main: resolve(__dirname, "src/contact.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
