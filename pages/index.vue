<template>
  <div class="container">
    <v-card class="v-card">
      <v-card-title class="text-h6"> О компании EastTrade </v-card-title>
      <v-card-text class="text-body-1">
        EastTrade - интегратор различных бизнес-решений. Мы работаем с множеством партнеров по всему миру, предоставляя
        инновационные и надежные услуги для различных отраслей бизнеса.
      </v-card-text>
      <v-card-text>
        EastTrade is an integrator of various business solutions. We collaborate with numerous partners worldwide,
        providing innovative and reliable services for various industries.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="goToAboutPage">Узнать больше</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
  function goToAboutPage() {
    // предполагается, что маршрут страницы "о нас" настроен как '/about'
    navigateTo("/about");
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
  }

  .v-card {
    max-width: 800px;
    margin: auto;
    padding: 50px;
  }
</style>
