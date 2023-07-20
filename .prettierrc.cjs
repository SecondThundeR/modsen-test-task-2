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
    "^@/routes/(.*)$",
    "^@/schemas/(.*)$",
    "^@/services/(.*)$",
    "^@/store/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
};

module.exports = config;
