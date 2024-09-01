<template>
  <div class="contact-page">
    <v-card class="card" color="light-green">
      <!--      <v-container>-->
      <v-row>
        <v-col cols="7">
          <div class="card__map">
            <MainOfficeMap />
          </div>
        </v-col>
        <v-col cols="5" class="card__info">
          <div class="card__info-item">
            <strong class="card__info-title">{{ capitalizeFirstLetter($t("address")) }}:</strong>
            {{ capitalizeFirstLetter($t("address_name")) }}
          </div>
          <v-divider class="card__divider"></v-divider>
          <div class="card__info-item">
            <strong class="card__info-title">{{ capitalizeFirstLetter($t("city")) }}:</strong> +375 (17)
            2701987
          </div>
          <div class="card__info-item">
            <strong class="card__info-title">{{ capitalizeFirstLetter($t("mobile")) }}:</strong>
            +375 (29) 1570050
          </div>
        </v-col>
      </v-row>
      <!--      </v-container>-->
    </v-card>
  </div>
</template>

<style scoped>
  .contact-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 40px;
    opacity: 0.8;
  }

  @media (max-width: 1440px) {
    .card {
      max-width: 1000px;
      padding: 50px;
    }
  }

  @media (max-width: 960px) {
    .card {
      padding: 10px;
      max-width: 700px;
    }
  }

  .card__map {
    height: 400px;
  }

  @media (max-width: 1440px) {
    .card__map {
      height: 300px;
    }
  }

  @media (max-width: 960px) {
    .card__map {
      height: 200px;
    }
  }

  .card__info {
    font-size: 1rem;
  }

  .card__info-title {
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media (max-width: 1440px) {
    .card__info-title {
      font-size: 1.1rem;
    }
  }

  .card__divider {
    margin: 16px 0;
  }

  .card__info-item {
    margin-bottom: 8px;
  }
</style>
