<template class="app-header">
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <NuxtLink to="/"><v-tab value="1">Home</v-tab></NuxtLink>
      <NuxtLink to="/about"><v-tab value="2">About</v-tab></NuxtLink>
      <!--      <NuxtLink to="/test"><v-tab value="3">test</v-tab></NuxtLink>-->
    </v-tabs>

    <!--    <v-card-text>-->
    <!--      <v-tabs-window v-model="tab">-->
    <!--        <v-tabs-window-item value="one"> One </v-tabs-window-item>-->

    <!--        <v-tabs-window-item value="two"> Two </v-tabs-window-item>-->

    <!--        <v-tabs-window-item value="three"> Three </v-tabs-window-item>-->
    <!--      </v-tabs-window>-->
    <!--    </v-card-text>-->
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);
</script>

<style scoped>
.app-header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
