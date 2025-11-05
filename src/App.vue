<template>
  <div class="app">
    <NavigationBar />
    <RouterView v-slot="{ Component, route }">
      <Transition 
        :name="getTransitionName(route)" 
        mode="out-in"
      >
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
import SiteFooter from '@/components/layout/Footer/SiteFooter.vue'

const route = useRoute()

const getTransitionName = (route: any): string => {
  // Different transitions based on route
  const transitionMap: Record<string, string> = {
    '/': 'page-slide',
    '/games': 'page-slide',
    '/community': 'page-fade',
    '/profile': 'page-slide',
    '/about': 'page-fade',
  }
  
  return transitionMap[route.path] || 'page-slide'
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--space-black);
}

/* Page Slide Transition */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: all 0.3s ease;
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Page Fade Transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Page Scale Transition */
.page-scale-enter-active,
.page-scale-leave-active {
  transition: all 0.3s ease;
}

.page-scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.page-scale-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
