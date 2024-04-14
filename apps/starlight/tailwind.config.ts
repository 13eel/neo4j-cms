import type { Config } from "tailwindcss";
import starlightPlugin from "@astrojs/starlight-tailwind";

import UIConfig from "@acme/ui/tailwindConfig";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...UIConfig.content,
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  presets: [UIConfig],
  theme: {
    extend: {},
  },
  plugins: [starlightPlugin()],
} satisfies Config;
