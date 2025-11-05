<template>
  <div class="games-grid">
    <GameCard 
      v-for="game in games" 
      :key="game.id"
      :game="game"
    />
  </div>
</template>

<script setup lang="ts">
import type { Game } from '@/types/Game'
import GameCard from '../GameCard/GameCard.vue'

interface Props {
  games: Game[]
}

defineProps<Props>()
</script>

<style scoped>
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}
</style>

