import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Responsive breakpoints matching CSS variables
 */
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
  ultraWide: 1920,
} as const

/**
 * Composable to track current viewport width
 */
export const useViewport = () => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const updateSize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
  })

  const isMobile = computed(() => width.value <= BREAKPOINTS.mobile)
  const isTablet = computed(() => 
    width.value > BREAKPOINTS.mobile && width.value <= BREAKPOINTS.tablet
  )
  const isDesktop = computed(() => 
    width.value > BREAKPOINTS.tablet && width.value <= BREAKPOINTS.desktop
  )
  const isUltraWide = computed(() => width.value > BREAKPOINTS.ultraWide)

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isUltraWide,
  }
}

/**
 * Get responsive grid columns based on viewport width
 */
export const getGridColumns = (width: number): number => {
  if (width <= BREAKPOINTS.mobile) return 1
  if (width <= BREAKPOINTS.tablet) return 2
  if (width <= BREAKPOINTS.desktop) return 3
  return 4
}

/**
 * Check if media query matches
 */
export const matchesBreakpoint = (breakpoint: keyof typeof BREAKPOINTS): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= BREAKPOINTS[breakpoint]
}

