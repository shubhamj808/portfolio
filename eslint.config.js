import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

// Remove leading/trailing whitespace from global keys
function trimGlobals(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.trim(), v])
  );
}

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}", "constants/**/*.{js,jsx,ts,tsx}", "hoc/**/*.{js,jsx,ts,tsx}"],
    plugins: { react },
    languageOptions: {
      globals: {
        ...trimGlobals(globals.browser),
        ...trimGlobals(globals.node),
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
