# Vue Transition Components Guide

## Overview

NexusArcade includes a comprehensive set of Vue transition components for smooth page transitions and UI animations.

## Page Transitions

### Basic Usage in App.vue

The main App.vue already includes router-view transitions:

```vue
<template>
  <RouterView v-slot="{ Component, route }">
    <Transition 
      :name="getTransitionName(route)" 
      mode="out-in"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
```

### Available Transition Types

#### 1. Page Slide (Default)
Horizontal slide transition - most common for page navigation.

```vue
<Transition name="page-slide" mode="out-in">
  <router-view />
</Transition>
```

**CSS Classes:**
- `.page-slide-enter-active`
- `.page-slide-leave-active`
- `.page-slide-enter-from`
- `.page-slide-leave-to`

#### 2. Page Fade
Simple opacity fade transition.

```vue
<Transition name="page-fade" mode="out-in">
  <router-view />
</Transition>
```

#### 3. Page Scale
Scale in/out transition with opacity.

```vue
<Transition name="page-scale" mode="out-in">
  <router-view />
</Transition>
```

#### 4. Page Slide Up
Vertical slide transition from bottom.

```vue
<Transition name="page-slide-up" mode="out-in">
  <router-view />
</Transition>
```

## Transition Components

### PageTransitions Component

Wrapper component with multiple transition options:

```vue
<template>
  <PageTransitions transition-name="page-slide">
    <YourComponent />
  </PageTransitions>
</template>
```

**Props:**
- `transitionName`: 'page-slide' | 'page-fade' | 'page-scale' | 'page-slide-up'

### FadeTransition Component

Simple fade transition:

```vue
<template>
  <FadeTransition>
    <div v-if="show">Content</div>
  </FadeTransition>
</template>
```

### SlideTransition Component

Directional slide transitions:

```vue
<template>
  <SlideTransition direction="slide-left">
    <div v-if="show">Content</div>
  </SlideTransition>
</template>
```

**Props:**
- `direction`: 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'

### ScaleTransition Component

Scale in/out transition:

```vue
<template>
  <ScaleTransition>
    <div v-if="show">Content</div>
  </ScaleTransition>
</template>
```

### GlowTransition Component

Neon glow effect transition:

```vue
<template>
  <GlowTransition>
    <div v-if="show">Glowing Content</div>
  </GlowTransition>
</template>
```

## Transition Modes

### `mode="out-in"` (Recommended)
Old element exits first, then new element enters.

```vue
<Transition name="page-slide" mode="out-in">
  <component :is="Component" />
</Transition>
```

### `mode="in-out"`
New element enters first, then old element exits.

```vue
<Transition name="page-slide" mode="in-out">
  <component :is="Component" />
</Transition>
```

### No Mode (Default)
Both elements transition simultaneously.

```vue
<Transition name="page-slide">
  <component :is="Component" />
</Transition>
```

## Usage Examples

### Conditional Rendering with Transition

```vue
<template>
  <FadeTransition>
    <div v-if="isVisible" class="content">
      <h2>Animated Content</h2>
    </div>
  </FadeTransition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FadeTransition from '@/components/animations/FadeTransition.vue'

const isVisible = ref(false)

setTimeout(() => {
  isVisible.value = true
}, 100)
</script>
```

### List Transitions

```vue
<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.3s ease;
}
</style>
```

### Dynamic Transitions Based on Route

```vue
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const getTransitionName = (route: any): string => {
  const transitionMap: Record<string, string> = {
    '/': 'page-slide',
    '/games': 'page-slide',
    '/community': 'page-fade',
    '/profile': 'page-scale',
  }
  
  return transitionMap[route.path] || 'page-fade'
}
</script>
```

### Game Card Hover Transition

```vue
<template>
  <Transition name="card-hover">
    <div 
      v-if="showCard"
      class="game-card"
      @mouseenter="showCard = true"
    >
      Card Content
    </div>
  </Transition>
</template>

<style scoped>
.card-hover-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-hover-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.card-hover-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
```

## Performance Tips

1. **Use `transform` and `opacity`** - These are GPU-accelerated
2. **Avoid animating layout properties** - Don't animate `width`, `height`, `top`, `left`
3. **Use `will-change` sparingly** - Only for elements that will definitely animate
4. **Limit transition duration** - Keep transitions under 0.5s for UI elements
5. **Use `mode="out-in"`** - Prevents layout shifts during transitions

## Transition Hooks

Vue provides JavaScript hooks for transitions:

```vue
<template>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled"
  >
    <div v-if="show">Content</div>
  </Transition>
</template>

<script setup lang="ts">
const onBeforeEnter = (el: Element) => {
  console.log('Before enter')
}

const onEnter = (el: Element, done: () => void) => {
  // Animation logic
  setTimeout(done, 300)
}
</script>
```

## Custom Transition Classes

You can customize transition classes:

```vue
<Transition
  name="custom"
  enter-active-class="custom-enter-active"
  enter-from-class="custom-enter-from"
  enter-to-class="custom-enter-to"
  leave-active-class="custom-leave-active"
  leave-from-class="custom-leave-from"
  leave-to-class="custom-leave-to"
>
  <div v-if="show">Content</div>
</Transition>
```

## Best Practices

1. **Consistent timing** - Use consistent durations across similar transitions
2. **Easing functions** - Use appropriate easing (ease, ease-in, ease-out, cubic-bezier)
3. **Accessibility** - Respect `prefers-reduced-motion` media query
4. **Testing** - Test transitions on different devices and browsers
5. **Performance** - Monitor FPS during transitions, especially on mobile

