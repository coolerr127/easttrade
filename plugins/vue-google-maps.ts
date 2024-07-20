import { defineNuxtPlugin } from "#app";
import { GoogleMap } from "vue3-google-map";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GoogleMap as any, {
    load: {
      key: "AIzaSyD9sLPHpOwwSmj4xMtvZft0WXBir-gb8iY"
    }
  });
});
