module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [
    {
      files: ["*.html", ".tsx"],
      parser: "@html-eslint/parser",
      estends: ["plugin:@html-eslint/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {},
};
