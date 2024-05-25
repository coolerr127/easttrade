import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  build: {
    transpile: ["vuetify"]
  },

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
  }
});
