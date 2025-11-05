export interface SystemRequirements {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

export interface GameCategory {
  id: string
  name: string
  icon: string
}

export interface Game {
  id: string
  title: string
  developer: string
  publisher: string
  releaseDate: Date
  price: number
  rating: number
  categories: GameCategory[]
  images: string[]
  videos: string[]
  requirements: SystemRequirements
  // Optional legacy fields for backward compatibility
  genre?: string
  description?: string
  image?: string
  players?: string
  featured?: boolean
  tags?: string[]
  platforms?: string[]
}

export interface GameFilters {
  category?: string
  search?: string
  minRating?: number
  maxRating?: number
  sortBy?: 'rating' | 'releaseDate' | 'title' | 'players'
  sortOrder?: 'asc' | 'desc'
  featured?: boolean
  limit?: number
  offset?: number
}

export interface GameListResponse {
  games: Game[]
  total: number
  page: number
  limit: number
}

