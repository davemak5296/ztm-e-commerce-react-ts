module.exports = {
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: true,
  singleAttributePerLine: false,
  // proseWrap: always,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-packagejson"),
  ],
};
