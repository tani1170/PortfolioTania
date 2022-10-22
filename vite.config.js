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
        main: resolve(
          __dirname,
          "src/index.html"
        ),
        about: resolve(
          __dirname,
          "src/about.html"
        ),
        project: resolve(
          __dirname,
          "src/project.html"
        ),
        insight: resolve(
          __dirname,
          "src/insight.html"
        ),
        contact: resolve(
          __dirname,
          "src/contact.html"
        ),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
