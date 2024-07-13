<template>
  <div>
    <div class="container">
      <v-card class="v-card" color="light-green">
        <MainOfficeMap />
      </v-card>
    </div>
  </div>
</template>

<script setup></script>

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
  }
</style>
