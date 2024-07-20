<template>
  <div class="language-switcher">
    <v-btn
      v-for="locale in locales"
      :key="locale"
      :class="{ 'active-locale': locale === currentLocale }"
      outlined
      class="locale-btn font-weight-regular"
      size="small"
      variant="text"
      @click="switchLocale(locale)"
    >
      {{ locale }}
    </v-btn>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    setup() {
      const { availableLocales, locale } = useI18n();
      const router = useRouter();
      const route = useRoute();

      const switchLocale = (code: string) => {
        locale.value = code;
        router.push({ path: route.fullPath, query: { lang: code } });
      };

      return {
        locales: availableLocales,
        switchLocale,
        currentLocale: locale
      };
    }
  });
</script>

<style scoped>
  .language-switcher {
    display: flex;
    gap: 10px;
  }

  .locale-btn {
    padding: 5px 10px;
    transition: background-color 0.3s ease;
  }

  .locale-btn.active-locale {
    background-color: #7cb342;
  }
</style>
