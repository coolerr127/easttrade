import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },

  generate: {
    routes: ["/", "/about", "/partners", "/contacts"]
  },

  typescript: {
    typeCheck: true
  },

  css: ["~/assets/styles/global.css"],

  build: {
    transpile: ["vuetify"]
  },

  plugins: ["~/plugins/google-maps.ts"],

  modules: [
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error: vuetify plugin has no TypeScript definitions
        config.plugins.push(vuetify({ autoImport: true }));
      });
    }
  ],

  i18n: {
    vueI18n: "./i18n.config.ts"
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  compatibilityDate: "2024-08-03"
});
