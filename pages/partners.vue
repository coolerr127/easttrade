<template>
  <div class="container">
    <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const slides = ref(["First", "Second", "Third", "Fourth"]);
  const colors = ref(["red", "blue", "green", "purple"]);
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
