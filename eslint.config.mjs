import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS / TS / React files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      next: pluginNext,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // JS recommended
  js.configs.recommended,

  // TypeScript recommended
  ...tseslint.configs.recommended,

  // React recommended
  pluginReact.configs.flat.recommended,

  // React JSX runtime (React 17+)
  pluginReact.configs.flat["jsx-runtime"],

  // React Hooks recommended
  pluginReactHooks.configs.recommended,

  // Next.js core web vitals
  pluginNext.configs.flat.recommended,
  pluginNext.configs.flat["core-web-vitals"],
]);
