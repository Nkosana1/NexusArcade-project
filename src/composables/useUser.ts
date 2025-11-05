import { ref, computed } from 'vue'
import type { User } from '@/types/User'

export const useUser = () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => user.value !== null)
  const loading = ref(false)

  const login = async (email: string, password: string) => {
    loading.value = true
    try {
      // TODO: Replace with actual API call
      // const response = await api.post('/auth/login', { email, password })
      // user.value = response.data.user
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    user.value = null
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user.value) return
    loading.value = true
    try {
      // TODO: Replace with actual API call
      // const response = await api.put(`/users/${user.value.id}`, updates)
      // user.value = { ...user.value, ...response.data }
    } catch (error) {
      console.error('Update failed:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    updateProfile,
  }
}

