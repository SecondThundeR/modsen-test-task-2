/** @type {import("prettier").Options} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  bracketSpacing: true,
  importOrder: [
    "^@/assets/(.*)$",
    "^@/components/(.*)$",
    "^@/constants/(.*)$",
    "^@/hooks/(.*)$",
    "^@/pages/(.*)$",
    "^@/router/(.*)$",
    "^@/schemas/(.*)$",
    "^@/services/(.*)$",
    "^@/store/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

module.exports = config;
