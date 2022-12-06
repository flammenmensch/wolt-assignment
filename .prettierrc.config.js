module.exports = {
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  quoteProps: "consistent",
  bracketSameLine: false,
  proseWrap: "always",
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      options: {
        printWidth: 80,
      },
    },
    {
      files: ["*.json"],
      options: {
        printWidth: 80,
        tabWidth: 2,
      },
    },
  ],
};
