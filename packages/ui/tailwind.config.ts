import type { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";
import { zIndex } from "./src/styles/z-index";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      zIndex,
    },
  },
} satisfies Config;
