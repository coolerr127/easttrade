<template>
  <GoogleMap class="map" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script setup>
  import { GoogleMap, Marker } from "vue3-google-map";

  const center = { lat: 53.921716, lng: 27.52686 };
</script>

<style scoped>
  .map {
    width: 100%;
    height: 100%;
  }
</style>
