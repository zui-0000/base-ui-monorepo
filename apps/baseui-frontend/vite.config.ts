import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@packages/ui": resolve(__dirname, "../../packages/ui/src"),
      "@ui": resolve(__dirname, "../../packages/ui/src"),
      "@": resolve(__dirname, "./src"),
      "~": resolve(__dirname, "./src"),
    },
  },
});
