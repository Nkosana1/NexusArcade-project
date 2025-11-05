import { ref } from 'vue'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const storedValue = localStorage.getItem(key)
  const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue

  const value = ref<T>(initialValue)

  const setValue = (newValue: T) => {
    value.value = newValue
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  const removeValue = () => {
    localStorage.removeItem(key)
    value.value = defaultValue
  }

  return {
    value,
    setValue,
    removeValue,
  }
}

