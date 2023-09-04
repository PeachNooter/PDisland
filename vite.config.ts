import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 5500,
  },
  build: {
    rollupOptions: {
      input: {
        scene: resolve(__dirname, "public/Scene.js"),
      },
    },
  },
});
