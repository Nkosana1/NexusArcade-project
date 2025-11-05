<template>
  <div class="hover-effects-demo">
    <div class="demo-item glow-animation">
      <h3>Glow Animation</h3>
      <p>Pulsing neon glow effect</p>
    </div>
    
    <div class="demo-item float-animation">
      <h3>Float Animation</h3>
      <p>Smooth floating motion</p>
    </div>
    
    <div class="demo-item">
      <h3 class="text-shimmer">Text Shimmer</h3>
      <p>Animated gradient text</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Hover effects demonstration component
</script>

<style scoped>
.hover-effects-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.demo-item {
  background: var(--gradient-card);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(185, 103, 255, 0.2);
  text-align: center;
  transition: transform 0.3s ease;
}

.demo-item:hover {
  transform: translateY(-5px);
}

.demo-item h3 {
  color: var(--neon-blue);
  margin-bottom: 1rem;
}
</style>

