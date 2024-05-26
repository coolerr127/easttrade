<template>
  <div class="language-switcher">
    <button
      v-for="locale in locales"
      :key="locale"
      :class="{ 'active-locale': locale === currentLocale }"
      @click="switchLocale(locale)"
    >
      {{ locale }}
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useI18n } from "vue-i18n";
  import { useRoute, useRouter } from "vue-router";

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

  .language-switcher button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .language-switcher button.active-locale {
    background-color: #007bff;
    color: white;
  }
</style>
