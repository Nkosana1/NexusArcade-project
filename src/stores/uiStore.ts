import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ModalState } from '@/types/UI'

export const useUIStore = defineStore('ui', () => {
  const modal = ref<ModalState>({ isOpen: false })
  const sidebarOpen = ref(false)
  const theme = ref<'dark' | 'light'>('dark')

  const openModal = (component: string, props?: Record<string, any>) => {
    modal.value = {
      isOpen: true,
      component,
      props,
    }
  }

  const closeModal = () => {
    modal.value = { isOpen: false }
  }

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const setTheme = (newTheme: 'dark' | 'light') => {
    theme.value = newTheme
  }

  return {
    modal,
    sidebarOpen,
    theme,
    openModal,
    closeModal,
    toggleSidebar,
    setTheme,
  }
})

