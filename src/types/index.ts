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
}

export interface GameCategory {
  id: string
  name: string
  icon: string
}

