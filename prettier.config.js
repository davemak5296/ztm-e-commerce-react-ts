module.exports = {
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  bracketSpacing: true,
  singleAttributePerLine: false,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-packagejson"),
  ],
};
