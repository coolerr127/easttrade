<template>
  <footer class="app-footer bg-light-green">
    <div class="footer-content">
      <p>&copy; 2024 Easttrade FPTUE. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "AppFooter"
  };
</script>

<style scoped>
  .app-footer {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    position: absolute;
    bottom: 0;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
