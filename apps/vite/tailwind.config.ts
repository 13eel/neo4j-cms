import type { Config } from "tailwindcss";

import UIConfig from "@acme/ui/tailwindConfig";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...UIConfig.content, "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [UIConfig],
  theme: {
    extend: {},
  },
} satisfies Config;
