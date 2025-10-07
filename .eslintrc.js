module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "tailwindcss"],
  rules: {
    "@next/next/no-img-element": "off"
  },
};
