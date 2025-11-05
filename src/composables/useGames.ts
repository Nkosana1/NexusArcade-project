import { ref, computed } from 'vue'
import { useApi } from './useApi'
import type { Game, GameFilters, GameListResponse } from '@/types/Game'

export const useGames = () => {
  const games = ref<Game[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedCategory = ref<string>('all')
  const searchQuery = ref<string>('')
  const currentFilters = ref<GameFilters>({})
  const totalGames = ref(0)

  const { get } = useApi()

  // Computed properties
  const featuredGames = computed(() => 
    games.value.filter(game => game.featured)
  )

  const filteredGames = computed(() => {
    let result = games.value.filter(game => !game.featured)

    // Apply category filter
    if (selectedCategory.value !== 'all') {
      result = result.filter(
        game => game.genre.toLowerCase() === selectedCategory.value
      )
    }

    // Apply search filter
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(
        game => 
          game.title.toLowerCase().includes(query) ||
          game.description.toLowerCase().includes(query) ||
          game.genre.toLowerCase().includes(query) ||
          game.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return result
  })

  /**
   * Fetch games from API with optional filters
   * @param filters - Game filters object
   */
  const fetchGames = async (filters: GameFilters = {}) => {
    loading.value = true
    error.value = null
    currentFilters.value = filters

    try {
      // Build query parameters
      const params = new URLSearchParams()
      
      if (filters.category) params.append('category', filters.category)
      if (filters.search) params.append('search', filters.search)
      if (filters.minRating !== undefined) params.append('minRating', filters.minRating.toString())
      if (filters.maxRating !== undefined) params.append('maxRating', filters.maxRating.toString())
      if (filters.sortBy) params.append('sortBy', filters.sortBy)
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder)
      if (filters.featured !== undefined) params.append('featured', filters.featured.toString())
      if (filters.limit) params.append('limit', filters.limit.toString())
      if (filters.offset) params.append('offset', filters.offset.toString())

      const queryString = params.toString()
      const endpoint = `/games${queryString ? `?${queryString}` : ''}`

      // Make API call
      const response = await get<GameListResponse>(endpoint)

      if (response.success && response.data) {
        games.value = response.data.games || []
        totalGames.value = response.data.total || 0
      } else {
        throw new Error(response.message || 'Failed to fetch games')
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch games'
      console.error('Error fetching games:', err)
      
      // Fallback to mock data for development
      if (import.meta.env.DEV) {
        console.warn('Using mock data as fallback')
        games.value = getMockGames()
      }
    } finally {
      loading.value = false
    }
  }

  /**
   * Fetch a single game by ID
   * @param id - Game ID
   */
  const fetchGameById = async (id: number): Promise<Game | null> => {
    loading.value = true
    error.value = null

    try {
      const response = await get<Game>(`/games/${id}`)

      if (response.success && response.data) {
        // Update game in list if it exists
        const index = games.value.findIndex(g => g.id === id)
        if (index !== -1) {
          games.value[index] = response.data
        }
        return response.data
      }
      return null
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch game'
      console.error('Error fetching game:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  /**
   * Get game by ID from current games list
   * @param id - Game ID
   */
  const getGameById = (id: number): Game | undefined => {
    return games.value.find(game => game.id === id)
  }

  /**
   * Set category filter
   * @param category - Category to filter by
   */
  const setCategory = (category: string) => {
    selectedCategory.value = category
  }

  /**
   * Set search query
   * @param query - Search query string
   */
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  /**
   * Clear all filters
   */
  const clearFilters = () => {
    selectedCategory.value = 'all'
    searchQuery.value = ''
    currentFilters.value = {}
  }

  /**
   * Refresh games list with current filters
   */
  const refreshGames = async () => {
    await fetchGames(currentFilters.value)
  }

  // Mock data for development/fallback
  const getMockGames = (): Game[] => {
    return [
      {
        id: 1,
        title: 'Cyber Legends',
        genre: 'Action',
        description: 'Fight through neon-lit streets in this fast-paced action adventure.',
        image: '',
        rating: 4.9,
        players: '1M+',
        releaseDate: '2024',
        featured: true,
        tags: ['action', 'cyberpunk', 'adventure'],
      },
      {
        id: 2,
        title: 'Stellar Conquest',
        genre: 'Strategy',
        description: 'Build your empire across galaxies and dominate the cosmos.',
        image: '',
        rating: 4.8,
        players: '850K+',
        releaseDate: '2024',
        featured: true,
        tags: ['strategy', 'space', 'empire'],
      },
      {
        id: 3,
        title: 'Velocity Drift',
        genre: 'Racing',
        description: 'Experience hyper-realistic racing with cutting-edge physics.',
        image: '',
        rating: 4.7,
        players: '1.2M+',
        releaseDate: '2023',
        featured: true,
        tags: ['racing', 'cars', 'multiplayer'],
      },
    ]
  }

  return {
    // State
    games,
    loading,
    error,
    selectedCategory,
    searchQuery,
    currentFilters,
    totalGames,
    
    // Computed
    featuredGames,
    filteredGames,
    
    // Methods
    fetchGames,
    fetchGameById,
    getGameById,
    setCategory,
    setSearchQuery,
    clearFilters,
    refreshGames,
  }
}

