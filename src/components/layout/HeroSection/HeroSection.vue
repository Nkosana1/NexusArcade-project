<template>
  <section class="hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-text slide-in">
        <h1 class="hero-title">
          <span class="title-line">LEVEL UP</span>
          <span class="title-line">YOUR GAME</span>
        </h1>
        <p class="hero-subtitle">
          Experience the future of gaming with cutting-edge graphics, 
          immersive gameplay, and a community of elite players.
        </p>
        <div class="hero-buttons">
          <router-link to="/games" class="btn btn-primary">Explore Games</router-link>
          <router-link to="/about" class="btn btn-secondary">Learn More</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--neon-blue);
  top: -200px;
  left: -200px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--neon-purple);
  bottom: -150px;
  right: -150px;
  animation-delay: 2s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: var(--neon-pink);
  top: 50%;
  right: 20%;
  animation-delay: 4s;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--meteor-dust);
  margin-bottom: 3rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
</style>

