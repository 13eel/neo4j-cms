import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import UIConfig from "@acme/ui/tailwindConfig";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...UIConfig.content, "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [UIConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
