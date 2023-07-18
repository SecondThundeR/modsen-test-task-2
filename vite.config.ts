import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/features": path.resolve(__dirname, "./src/features"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/schemas": path.resolve(__dirname, "./src/schemas"),
      "@/services": path.resolve(__dirname, "./src/services"),
    },
  },
});
