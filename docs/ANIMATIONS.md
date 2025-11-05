# CSS Animations Guide

## Available Animations

### Keyframe Animations

#### `@keyframes glow`
Creates a pulsing neon glow effect using box-shadow.

```css
.element {
  animation: glow 2s ease-in-out infinite;
}
```

**Usage:**
- Apply to buttons, cards, or interactive elements
- Creates a breathing neon effect

#### `@keyframes float`
Smooth vertical floating motion (-10px).

```css
.element {
  animation: float 3s ease-in-out infinite;
}
```

**Usage:**
- Hero section elements
- Background decorations
- Floating UI elements

#### `@keyframes text-shimmer`
Animated gradient text effect with moving background.

```css
.text-shimmer {
  background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--neon-pink));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 3s linear infinite;
}
```

**Usage:**
- Headings and titles
- Special text highlights
- Call-to-action text

### Utility Classes

#### `.glow-animation`
Applies the glow animation to any element.

```html
<div class="glow-animation">Glowing element</div>
```

#### `.float-animation`
Applies the float animation (small movement).

```html
<div class="float-animation">Floating element</div>
```

#### `.float-large`
Larger float animation (-20px movement).

```html
<div class="float-large">Large floating element</div>
```

#### `.pulse-glow`
Pulsing scale and opacity effect.

```html
<div class="pulse-glow">Pulsing element</div>
```

#### `.text-shimmer`
Animated gradient text effect.

```html
<h1 class="text-shimmer">Shimmering Title</h1>
```

#### `.slide-in`
Slide in from bottom animation.

```html
<div class="slide-in">Sliding content</div>
```

## Usage Examples

### Button with Glow

```vue
<template>
  <button class="btn btn-primary glow-animation">
    Click Me
  </button>
</template>
```

### Floating Card

```vue
<template>
  <div class="game-card float-animation">
    <!-- Card content -->
  </div>
</template>
```

### Animated Title

```vue
<template>
  <h1 class="text-shimmer">NexusArcade</h1>
</template>
```

### Hero Section with Multiple Animations

```vue
<template>
  <section class="hero">
    <div class="gradient-orb float-large"></div>
    <h1 class="text-shimmer slide-in">Welcome</h1>
    <button class="btn glow-animation">Get Started</button>
  </section>
</template>
```

## Custom Animation Combinations

### Glow on Hover

```css
.interactive-element {
  transition: all 0.3s ease;
}

.interactive-element:hover {
  animation: glow 1s ease-in-out infinite;
}
```

### Staggered Float Animation

```css
.float-item:nth-child(1) {
  animation: float 3s ease-in-out infinite;
}

.float-item:nth-child(2) {
  animation: float 3s ease-in-out infinite 0.5s;
}

.float-item:nth-child(3) {
  animation: float 3s ease-in-out infinite 1s;
}
```

### Text Shimmer with Delay

```css
.animated-title {
  animation: text-shimmer 3s linear infinite;
  animation-delay: 0.5s;
}
```

## Performance Tips

1. **Use `transform` and `opacity`** - These properties are GPU-accelerated
2. **Avoid animating `width`, `height`, `top`, `left`** - These cause layout reflow
3. **Use `will-change` sparingly** - Only for elements that will animate
4. **Limit concurrent animations** - Too many animations can impact performance

## Browser Support

All animations use standard CSS properties and are supported in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Animation Timing

- **Fast**: 0.3s - 0.6s (transitions, hover effects)
- **Medium**: 1s - 2s (floating, pulsing)
- **Slow**: 3s+ (background animations, text effects)

