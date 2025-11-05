export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  level: number
  experience: number
  gamesOwned: number[]
  achievements: string[]
  createdAt: string
}

export interface UserProfile extends User {
  bio?: string
  favoriteGenres: string[]
  playtime: number
  friends: string[]
}

