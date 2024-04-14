/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        project: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  rules: {},
};

module.exports = config;
