<template>
  <Transition name="scale" mode="out-in">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
// Scale transition component
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>

