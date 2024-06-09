<template>
  <nav>
    <v-btn-toggle v-model="currentRoute" rounded="0" group>
      <ul class="nav-list">
        <li>
          <NuxtLink to="/" exact class="nav-list__nav-link">
            <v-btn class="nav-list__nav-item bg-light-green" height="56" value="/">{{ $t("home") }}</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" exact class="nav-list__nav-link">
            <v-btn class="nav-list__nav-item bg-light-green" height="56" value="/about">{{ $t("about") }}</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/partners" exact class="nav-list__nav-link">
            <v-btn class="nav-list__nav-item bg-light-green" height="56" value="/partners">{{ $t("partners") }}</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/certifications" exact class="nav-list__nav-link">
            <v-btn class="nav-list__nav-item bg-light-green" height="56" value="/certifications">{{
              $t("certifications")
            }}</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts" exact class="nav-list__nav-link">
            <v-btn class="nav-list__nav-item bg-light-green" height="56" value="/contacts">{{ $t("contacts") }}</v-btn>
          </NuxtLink>
        </li>
      </ul>
    </v-btn-toggle>
  </nav>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";

  const currentRoute = ref("");
  const router = useRouter();
  const route = useRoute();

  const updateCurrentRoute = () => {
    currentRoute.value = route.path;
  };

  onMounted(() => {
    updateCurrentRoute();
    router.afterEach(() => {
      updateCurrentRoute();
    });
  });
</script>

<style scoped>
  .nav-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin-left: 15px;
  }

  .nav-list__nav-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .nav-list__nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
  }
</style>
