import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            lightGreenDarken4: "#33691E"
          }
        }
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
