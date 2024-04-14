import { resolve } from "path";
import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite(), react()],
  resolve: {
    alias: {
      "@ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
