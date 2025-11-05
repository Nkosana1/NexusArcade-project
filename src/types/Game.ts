export interface Game {
  id: number
  title: string
  genre: string
  description: string
  image: string
  rating: number
  players: string
  releaseDate: string
  featured: boolean
  price?: number
  tags?: string[]
  developer?: string
  publisher?: string
  platforms?: string[]
}

export interface GameCategory {
  id: string
  name: string
  icon: string
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

