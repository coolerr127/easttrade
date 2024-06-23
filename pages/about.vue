<template>
  <div class="container">
    <v-card class="v-card" color="light-green">
      <v-card-text class="text-body-1 card__text">
        {{ $t("company_description") }}
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .v-card {
    max-width: 1000px;
    margin: auto;
    padding: 70px;
    opacity: 0.8;

    .card__text {
      font-size: 1.3rem !important;
    }
  }
</style>
