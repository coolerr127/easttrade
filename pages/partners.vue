<template>
  <div class="carousel-container">
    <v-carousel class="carousel" show-arrows="hover" interval="5000" cycle hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="light-green" height="100%">
          <div class="carousel__content d-flex fill-height justify-space-evenly align-center">
            <div class="carousel__photo-container">
              <img
                v-for="(photo, index) in slide.photos"
                :src="photo"
                :key="index"
                :alt="'Slide image ' + (index + 1)"
                class="carousel__photo"
              />
            </div>
            <div class="carousel__text-container">
              <div class="carousel__title text-h3" v-html="$t(slide.title)" />
              <div class="carousel__description" v-html="$t(slide.description)" />
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const slides = ref([
    {
      title: "The Kansar Khazar",
      description: "kansar_khazar_company_description",
      photos: ["/partners/kkh1.gif", "/partners/kkh2.gif", "/partners/kkh3.gif"]
    },
    {
      title: "HT Trucks and Parts",
      description: "hp_trucks_and_parts_company_description",
      photos: ["/partners/ht-trucks-1.gif", "/partners/ht-trucks-2.gif", "/partners/ht-trucks-3.gif"]
    },
    {
      title: "Belsolod",
      description: "belsolod_company_description",
      photos: ["/partners/belsolod-1.jpg", "/partners/belsolod-2.jpg", "/partners/belsolod-3.jpg"]
    }
  ]);
</script>

<style scoped>
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .carousel {
    max-width: 1200px;
    border-radius: 4px;
    opacity: 0.8;
    height: 70vh !important;
    box-shadow:
      0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1440px) {
    .carousel {
      max-width: 900px;
    }
  }

  @media (max-width: 960px) {
    .carousel {
      max-width: 700px;
      height: 50vh !important;
    }
  }

  .carousel__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .carousel__photo-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    padding: 10px;
  }

  @media (max-width: 960px) {
    .carousel__photo-container {
      display: none;
    }
  }

  .carousel__photo {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .carousel__text-container {
    width: 50%;
  }

  @media (max-width: 960px) {
    .carousel__text-container {
      width: 100%;
    }
  }

  .carousel__title {
    font-size: 2.1rem !important;
    margin-bottom: 16px;
  }

  .carousel__description {
    font-size: 1.3rem;
  }

  @media (max-width: 1440px) {
    .carousel__description {
      font-size: 1rem;
    }
  }

  @media (max-width: 1280px) {
    .carousel__description {
      font-size: 1rem;
    }
  }
</style>
