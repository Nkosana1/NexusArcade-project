import { ref, onMounted, onUnmounted } from 'vue'

export const useAnimation = () => {
  const isVisible = ref(false)
  const animationRef = ref<HTMLElement | null>(null)

  const observeElement = () => {
    if (!animationRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(animationRef.value)

    return () => {
      if (animationRef.value) {
        observer.unobserve(animationRef.value)
      }
    }
  }

  onMounted(() => {
    observeElement()
  })

  return {
    isVisible,
    animationRef,
  }
}

export const useHoverGlow = () => {
  const glowPosition = ref({ x: 0, y: 0 })
  const glowOpacity = ref(0)

  const handleMouseMove = (event: MouseEvent, element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    glowPosition.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
    glowOpacity.value = 1
  }

  const handleMouseLeave = () => {
    glowOpacity.value = 0
  }

  return {
    glowPosition,
    glowOpacity,
    handleMouseMove,
    handleMouseLeave,
  }
}

