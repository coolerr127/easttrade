<template>
  <div class="app">
    <HeaderAppHeader />
    <div class="app__main">
      <slot />
    </div>
  </div>
</template>

<style>
  .app {
    max-width: 100vw;
    margin: 0 auto;
    height: 100vh;
  }

  .app__main {
    width: 70vw;
    margin: 0 auto;
  }
</style>
