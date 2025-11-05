import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types/User'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => user.value !== null)

  const setUser = (userData: User | null) => {
    user.value = userData
  }

  const logout = () => {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    setUser,
    logout,
  }
})

