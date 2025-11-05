<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo">
            <span class="logo-text">NEXUS</span>
            <span class="logo-accent">ARCADE</span>
          </div>
          <p>Elevating gaming to the next dimension</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/games">Games</router-link></li>
            <li><router-link to="/community">Community</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 NexusArcade. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer {
  background: var(--space-black);
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(185, 103, 255, 0.2);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  color: var(--neon-blue);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-shadow: var(--text-glow);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section a {
  color: var(--meteor-dust);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--neon-purple);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(185, 103, 255, 0.1);
  color: var(--nebula-gray);
}

.logo {
  font-family: var(--font-primary);
  font-size: 1.8rem;
  font-weight: 900;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.logo-text {
  color: var(--neon-blue);
  text-shadow: var(--text-glow);
}

.logo-accent {
  color: var(--neon-pink);
  text-shadow: var(--text-glow);
}
</style>

