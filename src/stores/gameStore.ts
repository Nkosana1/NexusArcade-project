import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Game } from '@/types/Game'

export const useGameStore = defineStore('game', () => {
  const games = ref<Game[]>([])
  const loading = ref(false)
  const selectedCategory = ref<string>('all')
  const searchQuery = ref('')

  const featuredGames = computed(() => 
    games.value.filter(game => game.featured)
  )

  const filteredGames = computed(() => {
    let result = games.value.filter(game => !game.featured)

    if (selectedCategory.value !== 'all') {
      result = result.filter(
        game => game.genre.toLowerCase() === selectedCategory.value
      )
    }

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(
        game => 
          game.title.toLowerCase().includes(query) ||
          game.description.toLowerCase().includes(query) ||
          game.genre.toLowerCase().includes(query)
      )
    }

    return result
  })

  const setGames = (newGames: Game[]) => {
    games.value = newGames
  }

  const setCategory = (category: string) => {
    selectedCategory.value = category
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  return {
    games,
    loading,
    selectedCategory,
    searchQuery,
    featuredGames,
    filteredGames,
    setGames,
    setCategory,
    setSearchQuery,
  }
})

