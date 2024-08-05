<template>
  <div ref="map" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";

  export default defineComponent({
    name: "GoogleMap",
    setup() {
      const map = ref<HTMLDivElement | null>(null);

      onMounted(() => {
        if (map.value) {
          const google = (window as any).google;
          const mapInstance = new google.maps.Map(map.value, {
            center: { lat: 53.9212774, lng: 27.52713 },
            zoom: 15,
            mapTypeControl: false,
            streetViewControl: false
          });

          new google.maps.Marker({
            position: { lat: 53.9212774, lng: 27.52713 },
            map: mapInstance
          });
        }
      });

      return {
        map
      };
    }
  });
</script>
