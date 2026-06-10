import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    rules: {
      // TypeScript covers prop validation — no need for runtime prop-types checks
      "react/prop-types": "off",
      // Unescaped entities are a style preference — TypeScript/React handles these safely
      "react/no-unescaped-entities": "off",
      // Downgrade img/link warnings to warn (they're performance hints, not bugs)
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "warn",
    },
  },
];
