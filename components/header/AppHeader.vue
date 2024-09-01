<template>
  <div class="app-header bg-light-green">
    <div class="app-header__content-container">
      <div class="app-header__center-container">
        <v-img :src="logo" alt="Logo" :width="200" aspect-ratio="1/1" class="app-header__logo" cover />
      </div>
      <HeaderNavigate />
      <div class="app-header__center-container">
        <div class="app-header__phone-numbers">
          <div> +375 (17) 2701987 </div>
          <div> +375 (29) 1570050 </div>
        </div>
        <div class="app-header__language-switch">
          <HeaderLanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import logo from "assets/logo.png";
</script>

<style scoped>
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 1000;
    display: flex;
    justify-content: center;
  }

  .app-header__content-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 70vw;
    padding: 0 20px;
  }

  .app-header__center-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .app-header__phone-numbers {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  }

  @media (max-width: 960px) {
    .app-header__phone-numbers {
      display: none;
    }
  }

  @media (max-width: 1919px) {
    .app-header__content-container {
      width: 90vw;
    }
  }

  @media (max-width: 1200px) {
    .app-header__content-container {
      width: 100vw;
    }
  }

  @media (max-width: 780px) {
    .app-header__language-switch {
      display: none;
    }
  }
</style>
