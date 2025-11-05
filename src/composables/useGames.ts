import { ref, computed } from 'vue'
import type { Game } from '@/types/Game'

export const useGames = () => {
  const games = ref<Game[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedCategory = ref<string>('all')

  const featuredGames = computed(() => 
    games.value.filter(game => game.featured)
  )

  const filteredGames = computed(() => {
    if (selectedCategory.value === 'all') {
      return games.value.filter(game => !game.featured)
    }
    return games.value.filter(
      game => !game.featured && 
      game.genre.toLowerCase() === selectedCategory.value
    )
  })

  const fetchGames = async () => {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      // const response = await api.get('/games')
      // games.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch games'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const getGameById = (id: number): Game | undefined => {
    return games.value.find(game => game.id === id)
  }

  const setCategory = (category: string) => {
    selectedCategory.value = category
  }

  return {
    games,
    loading,
    error,
    featuredGames,
    filteredGames,
    selectedCategory,
    fetchGames,
    getGameById,
    setCategory,
  }
}

