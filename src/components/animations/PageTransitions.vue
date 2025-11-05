<template>
  <Transition :name="transitionName" mode="out-in">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  transitionName?: 'page-slide' | 'page-fade' | 'page-scale' | 'page-slide-up'
}

withDefaults(defineProps<Props>(), {
  transitionName: 'page-slide',
})
</script>

<style scoped>
/* Page Slide Transition */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: all 0.3s ease;
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Page Fade Transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Page Scale Transition */
.page-scale-enter-active,
.page-scale-leave-active {
  transition: all 0.3s ease;
}

.page-scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.page-scale-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

/* Page Slide Up Transition */
.page-slide-up-enter-active,
.page-slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.page-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

