import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  define: {
    // Import.meta.env.VITE_APP_ENV の代わりに __APP_ENV__ を使用する
    __APP_ENV__: JSON.stringify(mode),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@packages/ui": resolve(__dirname, "../../packages/ui/src"),
      "@ui": resolve(__dirname, "../../packages/ui/src"),
      "~": resolve(__dirname, "./src"),
    },
  },
}));
