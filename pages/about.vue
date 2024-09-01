<template>
  <div class="container">
    <v-card class="card" color="light-green">
      <v-card-text class="card__text">
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

  .card {
    max-width: 1200px;
    margin: auto;
    padding: 50px;
    opacity: 0.8;
  }

  @media (max-width: 1440px) {
    .card {
      padding: 50px;
    }
  }

  @media (max-width: 960px) {
    .card {
      max-width: 700px;
      padding: 0;
    }
  }

  .card__text {
    font-size: 1.4rem;
  }

  @media (max-width: 1440px) {
    .card__text {
      font-size: 1.1rem;
    }
  }
</style>
