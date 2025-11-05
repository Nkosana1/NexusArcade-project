<template>
  <div class="app">
    <NavigationBar />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
import SiteFooter from '@/components/layout/Footer/SiteFooter.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--space-black);
}
</style>
