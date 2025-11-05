export const GAME_GENRES = [
  { id: 'all', name: 'All Games', icon: '🎮' },
  { id: 'action', name: 'Action', icon: '⚔️' },
  { id: 'rpg', name: 'RPG', icon: '🗡️' },
  { id: 'racing', name: 'Racing', icon: '🏎️' },
  { id: 'strategy', name: 'Strategy', icon: '🎯' },
  { id: 'fps', name: 'FPS', icon: '🔫' },
  { id: 'adventure', name: 'Adventure', icon: '🗺️' },
  { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
] as const

export const ROUTES = {
  HOME: '/',
  GAMES: '/games',
  COMMUNITY: '/community',
  PROFILE: '/profile',
  ABOUT: '/about',
} as const

export const API_ENDPOINTS = {
  GAMES: '/api/games',
  USERS: '/api/users',
  ACHIEVEMENTS: '/api/achievements',
  LEADERBOARD: '/api/leaderboard',
} as const

