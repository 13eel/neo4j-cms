import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import UIConfig from "@acme/ui/tailwindConfig";

export default {
  content: [...UIConfig.content, "./src/**/*.tsx"],
  presets: [UIConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
