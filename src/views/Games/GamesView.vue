<template>
  <div class="games-view">
    <div class="container">
      <h1>All Games</h1>
      <GameGrid :games="filteredGames" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'
import GameGrid from '@/components/games/GameGrid/GameGrid.vue'

const gameStore = useGameStore()
const filteredGames = computed(() => gameStore.filteredGames)
</script>

