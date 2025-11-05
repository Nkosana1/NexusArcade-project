<template>
  <Transition name="glow" mode="out-in">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
// Glow transition component with neon effects
</script>

<style scoped>
.glow-enter-active,
.glow-leave-active {
  transition: all 0.4s ease;
}

.glow-enter-from {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(10px);
  box-shadow: 0 0 0 rgba(0, 243, 255, 0);
}

.glow-enter-to {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
  box-shadow: 0 0 30px rgba(0, 243, 255, 0.5);
}

.glow-leave-from {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
  box-shadow: 0 0 30px rgba(185, 103, 255, 0.5);
}

.glow-leave-to {
  opacity: 0;
  transform: scale(1.05);
  filter: blur(10px);
  box-shadow: 0 0 0 rgba(185, 103, 255, 0);
}
</style>

