<template>
  <div class="container">
    <v-carousel
      class="carousel"
      height="70vh"
      show-arrows="hover"
      interval="5000"
      cycle
      hide-delimiter-background
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="light-green" height="100%">
          <div class="d-flex fill-height justify-space-evenly align-center">
            <div class="photo-container">
              <img
                v-for="(photo, index) in slide.photos"
                :src="photo"
                :key="index"
                :alt="'Slide image ' + (index + 1)"
                class="slide-photo"
              />
            </div>
            <div class="text-container">
              <div class="text-h3" v-html="$t(slide.title)" />
              <div v-html="$t(slide.description)" />
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .carousel {
    max-width: 1200px;
    border-radius: 4px;
    opacity: 0.8;
    box-shadow:
      0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }

  .photo-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    padding: 10px;
  }

  .slide-photo {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .text-container {
    width: 50%;
    font-size: 1.5rem;
  }
</style>
