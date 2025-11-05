import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Game } from '@/types/Game'

export const useGameStore = defineStore('game', () => {
  // Initialize with mock data for development
  const games = ref<Game[]>([
    {
      id: '1',
      title: 'Cyber Legends',
      developer: 'Neon Studios',
      publisher: 'Arcade Games Inc.',
      releaseDate: new Date('2024-01-15'),
      price: 29.99,
      rating: 4.9,
      categories: [
        { id: 'action', name: 'Action', icon: '⚔️' },
        { id: 'adventure', name: 'Adventure', icon: '🗺️' },
      ],
      images: [],
      videos: [],
      requirements: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060',
        storage: '50 GB',
      },
      featured: true,
    },
    {
      id: '2',
      title: 'Stellar Conquest',
      developer: 'Cosmic Games',
      publisher: 'Galaxy Entertainment',
      releaseDate: new Date('2024-03-20'),
      price: 39.99,
      rating: 4.8,
      categories: [
        { id: 'strategy', name: 'Strategy', icon: '🎯' },
      ],
      images: [],
      videos: [],
      requirements: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-8700',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1070',
        storage: '60 GB',
      },
      featured: true,
    },
  ])
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
        game => 
          game.categories.some(cat => 
            cat.id.toLowerCase() === selectedCategory.value ||
            cat.name.toLowerCase() === selectedCategory.value
          ) ||
          game.genre?.toLowerCase() === selectedCategory.value
      )
    }

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(
        game => 
          game.title.toLowerCase().includes(query) ||
          game.developer.toLowerCase().includes(query) ||
          game.publisher.toLowerCase().includes(query) ||
          game.description?.toLowerCase().includes(query) ||
          game.genre?.toLowerCase().includes(query) ||
          game.categories.some(cat => 
            cat.name.toLowerCase().includes(query)
          )
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

