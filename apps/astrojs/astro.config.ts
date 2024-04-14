import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import MillionCompiler from "@million/lint";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [MillionCompiler.vite(), tailwind({ nesting: true }), react()],
});
