<template>
  <div 
    class="game-card" 
    :class="{ 'featured': game.featured }"
    @mouseenter="handleHover"
    @mouseleave="handleLeave"
  >
      <div class="game-card-image">
      <div class="game-placeholder" :style="{ background: getGradient(game.id) }">
        <div class="game-icon">{{ getGenreIcon(game.categories[0]?.name || game.genre || '') }}</div>
      </div>
      <div class="game-overlay">
        <div class="game-rating">
          <span class="star">⭐</span>
          <span>{{ game.rating }}</span>
        </div>
        <div class="game-players">{{ game.players }}</div>
      </div>
    </div>
    <div class="game-card-content">
      <div class="game-genre">
        {{ game.categories.map(cat => cat.name).join(', ') || game.genre }}
      </div>
      <h3 class="game-title">{{ game.title }}</h3>
      <p class="game-description">{{ game.description || `${game.title} by ${game.developer}` }}</p>
      <div class="game-footer">
        <div class="game-info">
          <span class="game-date">{{ formatDate(game.releaseDate) }}</span>
          <span class="game-price">${{ game.price.toFixed(2) }}</span>
        </div>
        <button class="btn-play" @click="playGame">
          <span>Play Now</span>
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
    <div class="game-card-glow" ref="glowRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Game } from '@/types/Game'
import { formatDate } from '@/utils/formatters'

interface Props {
  game: Game
}

const props = defineProps<Props>()
const glowRef = ref<HTMLElement | null>(null)

const getGradient = (id: string): string => {
  // Convert string ID to number for gradient selection
  const numericId = parseInt(id) || id.charCodeAt(0)
  const gradients = [
    'linear-gradient(135deg, #00f3ff 0%, #b967ff 100%)',
    'linear-gradient(135deg, #ff2a6d 0%, #b967ff 100%)',
    'linear-gradient(135deg, #00ff9d 0%, #00f3ff 100%)',
    'linear-gradient(135deg, #b967ff 0%, #ff2a6d 100%)',
    'linear-gradient(135deg, #00f3ff 0%, #00ff9d 100%)',
  ]
  return gradients[numericId % gradients.length]
}

const getGenreIcon = (genre: string): string => {
  const icons: Record<string, string> = {
    'Action': '⚔️',
    'RPG': '🗡️',
    'Racing': '🏎️',
    'Strategy': '🎯',
    'Sports': '⚽',
    'Adventure': '🗺️',
    'FPS': '🔫',
    'Puzzle': '🧩',
  }
  return icons[genre] || '🎮'
}

const handleHover = (event: MouseEvent) => {
  if (glowRef.value) {
    const card = event.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    glowRef.value.style.left = `${x}px`
    glowRef.value.style.top = `${y}px`
    glowRef.value.style.opacity = '1'
  }
}

const handleLeave = () => {
  if (glowRef.value) {
    glowRef.value.style.opacity = '0'
  }
}

const playGame = () => {
  console.log(`Playing ${props.game.title}`)
  // Add game launch logic here
}
</script>

<style scoped>
.game-card {
  position: relative;
  background: var(--gradient-card);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  border: 1px solid rgba(185, 103, 255, 0.2);
}

.game-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--neon-purple);
  box-shadow: 0 20px 60px rgba(185, 103, 255, 0.4),
              0 0 40px rgba(0, 243, 255, 0.2);
}

.game-card.featured {
  border: 2px solid var(--neon-blue);
  box-shadow: 0 0 30px rgba(0, 243, 255, 0.5);
}

.game-card-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.game-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.game-icon {
  font-size: 4rem;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(10, 10, 15, 0.8) 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.game-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--neon-green);
  font-weight: 700;
}

.star {
  font-size: 1.2rem;
}

.game-players {
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--neon-blue);
  font-weight: 700;
}

.game-card-content {
  padding: 1.5rem;
}

.game-genre {
  font-size: 0.85rem;
  font-family: var(--font-accent);
  color: var(--neon-purple);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.game-title {
  font-size: 1.5rem;
  color: var(--stellar-white);
  margin-bottom: 0.75rem;
  font-family: var(--font-primary);
  font-weight: 700;
}

.game-description {
  font-size: 0.95rem;
  font-family: var(--font-secondary);
  color: var(--meteor-dust);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.game-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.game-date {
  font-size: 0.85rem;
  color: var(--nebula-gray);
}

.game-price {
  font-size: 1.1rem;
  color: var(--neon-green);
  font-weight: 700;
  font-family: var(--font-accent);
}

.btn-play {
  background: var(--gradient-button);
  color: var(--stellar-white);
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-family: var(--font-accent);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-play:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 42, 109, 0.8);
}

.arrow {
  transition: transform 0.3s ease;
}

.btn-play:hover .arrow {
  transform: translateX(5px);
}

.game-card-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 243, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.game-card:hover .game-card-glow {
  opacity: 1;
}
</style>

