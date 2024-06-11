module.exports = {
  root: true,
  plugins: ["vuejs-accessibility"],
  extends: [
    "eslint-config-prettier",
    "@nuxtjs/eslint-config-typescript",
    "plugin:vuejs-accessibility/recommended",
    ],
  rules: {
    "no-extra-semi": "off"
  },
  ignorePatterns: ["**/.nuxt/*", "**/dist/*"]
};
