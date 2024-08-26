<template>
  <div class="container">
    <v-card class="v-card" color="light-green">
      <v-container>
        <v-row>
          <v-col cols="7">
            <div class="map-wrapper">
              <MainOfficeMap />
            </div>
          </v-col>
          <v-col cols="5">
            <div>
              <strong>{{ capitalizeFirstLetter($t("address")) }}:</strong>
              {{ capitalizeFirstLetter($t("address_name")) }}
            </div>
            <v-divider class="my-4"></v-divider>
            <div>
              <strong>{{ capitalizeFirstLetter($t("city")) }}:</strong> +375 (17) 2701987
            </div>
            <div>
              <strong>{{ capitalizeFirstLetter($t("mobile")) }}:</strong> +375 (29) 1570050
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 70px;
    opacity: 0.8;
  }

  .map-wrapper {
    width: 100%;
    height: 400px;
  }

  strong {
    font-weight: bold;
  }

  .my-4 {
    margin: 16px 0;
  }
</style>
