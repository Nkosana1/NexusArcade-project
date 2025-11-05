export interface FilterOption {
  id: string
  label: string
  value: string | number
  icon?: string
}

export interface Tab {
  id: string
  label: string
  icon?: string
  component?: string
}

export interface ModalState {
  isOpen: boolean
  component?: string
  props?: Record<string, any>
}

