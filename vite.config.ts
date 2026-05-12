import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()], // Quitamos jsxLocPlugin para ganar velocidad
  base: '/Loopra/',
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  root: path.resolve(import.meta.dirname),
  server: {
    port: 3000,
    host: true,
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
});
