import { colors, zIndex } from "@packages/ui/styles";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      zIndex,
    },
  },
} satisfies Config;
