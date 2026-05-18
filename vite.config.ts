import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

/**
 * Configuración de Vite para el proyecto Loopra Landing
 *
 * @remarks
 * - `base: '/'` configura la ruta base del dominio para las rutas relativas,
 *   asegurando que todos los assets se carguen correctamente desde la raíz del dominio.
 *   Esto es esencial para GitHub Pages y otros hosting que sirven desde la raíz.
 * - El alias `@` permite imports absolutos desde el directorio `src/`.
 * - TypeScript está habilitado con tipos estrictos en el proyecto.
 * - El servidor de desarrollo se ejecuta en puerto 3000 con acceso desde cualquier host.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()], // React + Tailwind CSS con @tailwindcss/vite
  
  /**
   * Ruta base para el despliegue
   * @see https://vitejs.dev/config/shared-options.html#base
   */
  base: "/",

  resolve: {
    alias: {
      /**
       * Alias para imports absolutos
       * Permite usar: import { Component } from "@/components/..."
       */
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
  },
});
