<template>
  <GoogleMap :center="{ lat: 51.093048, lng: 6.84212 }" :zoom="7" style="width: 100vw; height: 400px">
    <Marker :options="{ position: { lat: 51.093048, lng: 6.84212 } }" />
  </GoogleMap>
</template>

<script setup>
  import { ref } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";

  const center = ref({ lat: 51.093048, lng: 6.84212 });
</script>
