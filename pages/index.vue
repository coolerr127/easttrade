<template>
  <div class="container">
    <v-card class="card" color="light-green">
      <v-card-title class="text-h1 card__title">{{ capitalizeFirstLetter($t("about_the_company")) }}</v-card-title>
      <v-card-text class="text-body-1 card__text">
        {{ capitalizeFirstLetter($t("company_short_description")) }}
      </v-card-text>
      <v-card-actions>
        <v-btn variant="tonal" @click="goToAboutPage">{{ $t("learn_more") }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
  function goToAboutPage() {
    navigateTo("/about");
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    max-width: 1000px;
    margin: auto;
    padding: 70px;
    opacity: 0.8;

    .card__title {
      font-size: 3rem !important;
    }

    .card__text {
      font-size: 1.2rem !important;
    }
  }
</style>
