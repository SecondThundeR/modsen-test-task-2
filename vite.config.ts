import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/schemas": path.resolve(__dirname, "./src/schemas"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  esbuild: {
    legalComments: "none",
  },
  build: {
    chunkSizeWarningLimit: 800,
  },
});
