import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/questions": {
        target: "https://api.yeatwork.ru",
        changeOrigin: true,
        secure: false,
      },
      "/specializations": {
        target: "https://api.yeatwork.ru",
        changeOrigin: true,
        secure: false,
      },
      "/skills": {
        target: "https://api.yeatwork.ru",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
