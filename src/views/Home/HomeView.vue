<template>
  <div class="home-view">
    <HeroSection />
    <!-- Featured Games Section -->
    <section id="games" class="games-section">
      <div class="container">
        <h2 class="section-title">
          <span class="title-glow">FEATURED GAMES</span>
        </h2>
        <GameGrid :games="featuredGames" />
      </div>
    </section>
    <!-- Features Section -->
    <section id="features" class="features-section">
      <div class="container">
        <h2 class="section-title">
          <span class="title-glow">PLATFORM FEATURES</span>
        </h2>
        <!-- Features will be added here -->
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'
import HeroSection from '@/components/layout/HeroSection/HeroSection.vue'
import GameGrid from '@/components/games/GameGrid/GameGrid.vue'

const gameStore = useGameStore()
const featuredGames = computed(() => gameStore.featuredGames)
</script>

<style scoped>
.games-section {
  padding: 6rem 0;
  background: var(--cosmic-purple);
}

.features-section {
  padding: 6rem 0;
  background: var(--void-blue);
}
</style>

