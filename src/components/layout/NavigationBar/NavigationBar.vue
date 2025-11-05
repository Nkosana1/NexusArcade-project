<template>
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">
        <span class="logo-text">NEXUS</span>
        <span class="logo-accent">ARCADE</span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/games" class="nav-link">Games</router-link></li>
        <li><router-link to="/community" class="nav-link">Community</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
      </ul>
      <button class="btn btn-primary">Sign In</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navigation component
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(185, 103, 255, 0.2);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-primary);
  font-size: 1.8rem;
  font-weight: 900;
  display: flex;
  gap: 0.5rem;
}

.logo-text {
  color: var(--neon-blue);
  text-shadow: var(--text-glow);
}

.logo-accent {
  color: var(--neon-pink);
  text-shadow: var(--text-glow);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: var(--stellar-white);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-button);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--neon-purple);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
</style>

