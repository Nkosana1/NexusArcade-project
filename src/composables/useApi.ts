import { ref } from 'vue'
import type { ApiResponse, ApiError } from '@/types/Api'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export const useApi = () => {
  const loading = ref(false)
  const error = ref<ApiError | null>(null)

  const request = async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (err) {
      error.value = {
        message: err instanceof Error ? err.message : 'An error occurred',
        code: 'FETCH_ERROR',
        status: 0,
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  const get = <T>(endpoint: string): Promise<ApiResponse<T>> => {
    return request<T>(endpoint, { method: 'GET' })
  }

  const post = <T>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
    return request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  const put = <T>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
    return request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  const del = <T>(endpoint: string): Promise<ApiResponse<T>> => {
    return request<T>(endpoint, { method: 'DELETE' })
  }

  return {
    loading,
    error,
    get,
    post,
    put,
    delete: del,
  }
}

