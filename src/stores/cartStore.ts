import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Game } from '@/types/Game'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Game[]>([])

  const totalItems = computed(() => items.value.length)

  const addItem = (game: Game) => {
    if (!items.value.find(item => item.id === game.id)) {
      items.value.push(game)
    }
  }

  const removeItem = (gameId: number) => {
    items.value = items.value.filter(item => item.id !== gameId)
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    addItem,
    removeItem,
    clearCart,
  }
})

