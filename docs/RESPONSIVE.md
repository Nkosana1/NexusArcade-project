# Responsive Design System

## Gaming-First Breakpoints

NexusArcade uses a gaming-first responsive design approach optimized for all devices from mobile phones to ultra-wide gaming monitors.

### Breakpoint Variables

```css
--mobile: 768px;      /* Handheld devices */
--tablet: 1024px;     /* Tablets and small laptops */
--desktop: 1200px;    /* Standard desktops */
--ultra-wide: 1920px; /* Gaming monitors */
```

## Breakpoint Usage

### CSS Media Queries

```css
/* Mobile first approach */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Tablet styles */
}

/* Desktop */
@media (max-width: 1200px) {
  /* Desktop styles */
}

/* Ultra-wide */
@media (min-width: 1920px) {
  /* Ultra-wide gaming monitor styles */
}
```

### JavaScript/TypeScript Usage

```typescript
import { useViewport, BREAKPOINTS } from '@/utils/responsive'

const { width, isMobile, isTablet, isDesktop, isUltraWide } = useViewport()

// Conditional rendering
if (isMobile.value) {
  // Mobile-specific logic
}
```

## Responsive Utilities

### useViewport Composable

Track viewport dimensions and breakpoint states:

```vue
<script setup lang="ts">
import { useViewport } from '@/utils/responsive'

const { width, height, isMobile, isTablet, isDesktop, isUltraWide } = useViewport()

// Reactive values
console.log(width.value)      // Current width
console.log(isMobile.value)   // true if <= 768px
console.log(isTablet.value)   // true if 769px - 1024px
console.log(isDesktop.value)  // true if 1025px - 1200px
console.log(isUltraWide.value) // true if > 1920px
</script>
```

### Grid Columns Helper

```typescript
import { getGridColumns } from '@/utils/responsive'

const columns = getGridColumns(window.innerWidth)
// Returns: 1 (mobile), 2 (tablet), 3 (desktop), or 4 (ultra-wide)
```

## Component Patterns

### Responsive Grid

```vue
<template>
  <div 
    class="games-grid"
    :style="{ 
      gridTemplateColumns: `repeat(${gridColumns}, 1fr)` 
    }"
  >
    <!-- Grid items -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useViewport, getGridColumns } from '@/utils/responsive'

const { width } = useViewport()
const gridColumns = computed(() => getGridColumns(width.value))
</script>
```

### Conditional Rendering

```vue
<template>
  <div>
    <MobileNav v-if="isMobile" />
    <DesktopNav v-else />
  </div>
</template>

<script setup lang="ts">
import { useViewport } from '@/utils/responsive'

const { isMobile } = useViewport()
</script>
```

### Responsive Images

```vue
<template>
  <picture>
    <source 
      media="(min-width: 1920px)" 
      :srcset="image.ultraWide" 
    />
    <source 
      media="(min-width: 1200px)" 
      :srcset="image.desktop" 
    />
    <source 
      media="(min-width: 1024px)" 
      :srcset="image.tablet" 
    />
    <img 
      :src="image.mobile" 
      :alt="alt"
      loading="lazy"
    />
  </picture>
</template>
```

## Typography Scaling

Typography uses `clamp()` for fluid scaling:

```css
h1 {
  font-size: clamp(2rem, 8vw, 5rem);
  /* Min: 2rem, Preferred: 8vw, Max: 5rem */
}
```

### Breakpoint-Specific Typography

- **Mobile (≤768px)**: `clamp(2rem, 8vw, 3rem)`
- **Tablet (≤1024px)**: `clamp(2rem, 7vw, 4rem)`
- **Desktop (≤1200px)**: `clamp(2.5rem, 8vw, 5rem)`
- **Ultra-wide (>1920px)**: `clamp(3rem, 6vw, 6rem)`

## Layout Patterns

### Container Padding

```css
/* Ultra-wide */
.container {
  padding: 0 3rem;
}

/* Desktop */
@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
```

### Grid Layouts

```css
/* Desktop - 4 columns */
.games-grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

/* Tablet - 2-3 columns */
@media (max-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* Mobile - 1 column */
@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: 1fr;
  }
}
```

## Navigation Patterns

### Mobile Navigation

```vue
<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">NexusArcade</div>
      
      <!-- Desktop Navigation -->
      <ul class="nav-links" v-if="!isMobile">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/games">Games</router-link></li>
      </ul>
      
      <!-- Mobile Hamburger Menu -->
      <button 
        v-if="isMobile" 
        class="mobile-menu-btn"
        @click="toggleMenu"
      >
        ☰
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="isMobile && menuOpen" class="mobile-menu">
      <!-- Mobile menu items -->
    </div>
  </nav>
</template>
```

## Performance Considerations

### Image Optimization

- Use responsive images with `srcset`
- Implement lazy loading for below-the-fold images
- Consider WebP format for modern browsers

### Layout Shifts

- Use `aspect-ratio` CSS property
- Reserve space for dynamic content
- Avoid fixed heights that cause shifts

### Touch Targets

```css
/* Minimum touch target size (44x44px) */
@media (max-width: 768px) {
  .btn,
  .nav-link,
  .interactive-element {
    min-height: 44px;
    min-width: 44px;
  }
}
```

## Testing Checklist

- [ ] Test on mobile devices (320px - 768px)
- [ ] Test on tablets (768px - 1024px)
- [ ] Test on desktops (1024px - 1920px)
- [ ] Test on ultra-wide monitors (1920px+)
- [ ] Test landscape orientation on mobile
- [ ] Verify touch targets are adequate
- [ ] Check image loading performance
- [ ] Test navigation on all screen sizes
- [ ] Verify typography scales correctly
- [ ] Check grid layouts at all breakpoints

## Browser Support

All responsive features are supported in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices

1. **Mobile First**: Design for mobile, enhance for larger screens
2. **Fluid Typography**: Use `clamp()` for responsive text
3. **Flexible Grids**: Use CSS Grid with `auto-fill` and `minmax()`
4. **Touch Friendly**: Ensure adequate touch target sizes
5. **Performance**: Optimize images and lazy load content
6. **Testing**: Test on real devices, not just browser dev tools

