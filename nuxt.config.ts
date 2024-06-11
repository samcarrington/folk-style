// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxthq/studio",
  ],
  typescript: {
    shim: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    prerender: {
      routes: ["/rss.xml", "/sitemap.xml", "/api/changelog.md"],
    },
  },
  runtimeConfig: {
    public: {
      appVersion: process.env.npm_package_version,
    },
  },
  /* module options */
  content: {
    documentDriven: true,
    navigation: {
      fields: ["navTitle"],
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: "github-dark",
      preload: ["py", "css", "scss", "ts", "json", "js", "jsx"],
    },
  },
});
