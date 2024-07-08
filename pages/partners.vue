<template>
  <div class="container">
    <v-carousel class="carousel" height="70vh" show-arrows="hover" interval="5000" cycle hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="light-green" height="100%">
          <div class="d-flex fill-height justify-space-evenly align-center">
            <div class="photo-container">
              <img v-for="(photo, index) in slide.photos" :src="photo" :key="index" class="slide-photo" />
            </div>
            <div class="text-container text-h2">{{ slide.description }}</div>
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
      description: "First Slide",
      photos: ["/partners/kkh1.gif", "/partners/kkh2.gif", "/partners/kkh3.gif"]
    },
    {
      description: "Second Slide",
      photos: ["/partners/ht-trucks-1.gif", "/partners/ht-trucks-2.gif", "/partners/ht-trucks-3.gif"]
    },
    {
      description: "Third Slide",
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
    margin-left: 20px;
  }
</style>
