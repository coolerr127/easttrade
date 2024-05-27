<template>
  <div class="app-header bg-light-green">
    <v-img :src="logo" alt="Logo" :width="180" aspect-ratio="1/1" class="app-header__logo" cover />
    <HeaderNavigate />
  </div>
</template>

<script setup lang="ts">
  import logo from "~/assets/logo.png";
</script>

<style scoped>
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    z-index: 1000;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .app-header__logo {
    position: absolute;
    top: 5px;
    left: 15vw;
  }
</style>
