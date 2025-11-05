<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container nav-container">
        <div class="logo">
          <span class="logo-text">NEXUS</span>
          <span class="logo-accent">ARCADE</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#games" class="nav-link">Games</a></li>
          <li><a href="#features" class="nav-link">Features</a></li>
          <li><a href="#community" class="nav-link">Community</a></li>
        </ul>
        <button class="btn btn-primary">Sign In</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
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
            <a href="#games" class="btn btn-primary">Explore Games</a>
            <a href="#features" class="btn btn-secondary">Learn More</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">{{ totalGames }}+</div>
              <div class="stat-label">Games</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ activePlayers }}+</div>
              <div class="stat-label">Players</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ tournaments }}+</div>
              <div class="stat-label">Tournaments</div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Featured Games Section -->
    <section id="games" class="games-section">
      <div class="container">
        <h2 class="section-title">
          <span class="title-glow">FEATURED GAMES</span>
        </h2>
        <div class="games-grid">
          <GameCard 
            v-for="game in featuredGames" 
            :key="game.id"
            :game="game"
          />
        </div>

        <h2 class="section-title" style="margin-top: 5rem;">
          <span class="title-glow">ALL GAMES</span>
        </h2>
        <div class="category-filters">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn"
            :class="{ active: selectedCategory === category.id }"
            @click="selectedCategory = category.id"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span>{{ category.name }}</span>
          </button>
        </div>
        <div class="games-grid">
          <GameCard 
            v-for="game in filteredGames" 
            :key="game.id"
            :game="game"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">
      <div class="container">
        <h2 class="section-title">
          <span class="title-glow">PLATFORM FEATURES</span>
        </h2>
        <div class="features-grid">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Section -->
    <section id="community" class="community-section">
      <div class="container">
        <h2 class="section-title">
          <span class="title-glow">JOIN THE COMMUNITY</span>
        </h2>
        <div class="community-content">
          <div class="community-text">
            <h3>Connect with Gamers Worldwide</h3>
            <p>
              Join millions of players in epic battles, tournaments, and 
              exclusive events. Share your achievements, form teams, and 
              compete at the highest level.
            </p>
            <div class="community-stats">
              <div class="community-stat">
                <div class="stat-value">{{ activePlayers }}+</div>
                <div class="stat-desc">Active Players</div>
              </div>
              <div class="community-stat">
                <div class="stat-value">{{ tournaments }}+</div>
                <div class="stat-desc">Monthly Tournaments</div>
              </div>
            </div>
            <button class="btn btn-primary">Join Now</button>
          </div>
          <div class="community-visual">
            <div class="pulse-ring"></div>
            <div class="pulse-ring"></div>
            <div class="pulse-ring"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
              <li><a href="#home">Home</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="#" class="social-link">Discord</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">YouTube</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 NexusArcade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import GameCard from './components/GameCard.vue'
import type { Game, GameCategory } from './types'

// Stats
const totalGames = ref(150)
const activePlayers = ref(2500000)
const tournaments = ref(50)

// Games Data
const games = ref<Game[]>([
  {
    id: 1,
    title: 'Cyber Legends',
    genre: 'Action',
    description: 'Fight through neon-lit streets in this fast-paced action adventure.',
    image: '',
    rating: 4.9,
    players: '1M+',
    releaseDate: '2024',
    featured: true
  },
  {
    id: 2,
    title: 'Stellar Conquest',
    genre: 'Strategy',
    description: 'Build your empire across galaxies and dominate the cosmos.',
    image: '',
    rating: 4.8,
    players: '850K+',
    releaseDate: '2024',
    featured: true
  },
  {
    id: 3,
    title: 'Velocity Drift',
    genre: 'Racing',
    description: 'Experience hyper-realistic racing with cutting-edge physics.',
    image: '',
    rating: 4.7,
    players: '1.2M+',
    releaseDate: '2023',
    featured: true
  },
  {
    id: 4,
    title: 'Shadow Realm',
    genre: 'RPG',
    description: 'Embark on an epic journey through mystical lands and dark dungeons.',
    image: '',
    rating: 4.9,
    players: '2M+',
    releaseDate: '2024',
    featured: false
  },
  {
    id: 5,
    title: 'Apex Arena',
    genre: 'FPS',
    description: 'Battle royale in the ultimate competitive shooter experience.',
    image: '',
    rating: 4.8,
    players: '3.5M+',
    releaseDate: '2023',
    featured: false
  },
  {
    id: 6,
    title: 'Neon Runner',
    genre: 'Adventure',
    description: 'Parkour through cyberpunk cityscapes in this thrilling adventure.',
    image: '',
    rating: 4.6,
    players: '750K+',
    releaseDate: '2024',
    featured: false
  }
])

const featuredGames = computed(() => games.value.filter(game => game.featured))
const selectedCategory = ref<string>('all')

const categories: GameCategory[] = [
  { id: 'all', name: 'All Games', icon: '🎮' },
  { id: 'action', name: 'Action', icon: '⚔️' },
  { id: 'rpg', name: 'RPG', icon: '🗡️' },
  { id: 'racing', name: 'Racing', icon: '🏎️' },
  { id: 'strategy', name: 'Strategy', icon: '🎯' },
  { id: 'fps', name: 'FPS', icon: '🔫' }
]

const filteredGames = computed(() => {
  if (selectedCategory.value === 'all') {
    return games.value.filter(game => !game.featured)
  }
  return games.value.filter(
    game => !game.featured && game.genre.toLowerCase() === selectedCategory.value
  )
})

const features = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Ultra-low latency gaming with our global network infrastructure.'
  },
  {
    icon: '🎨',
    title: 'Stunning Graphics',
    description: 'Experience games in 4K with ray tracing and advanced visual effects.'
  },
  {
    icon: '🏆',
    title: 'Competitive',
    description: 'Join tournaments and climb leaderboards to prove your skills.'
  },
  {
    icon: '👥',
    title: 'Social Gaming',
    description: 'Connect with friends, form teams, and play together seamlessly.'
  },
  {
    icon: '💎',
    title: 'Premium Rewards',
    description: 'Earn exclusive rewards, skins, and achievements as you play.'
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Your data and progress are protected with enterprise-grade security.'
  }
]
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--space-black);
}

/* ============================================
   NAVIGATION
   ============================================ */

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
.nav-link.active {
  color: var(--neon-purple);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* ============================================
   HERO SECTION
   ============================================ */

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
  animation-delay: 0s;
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

.hero-text {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.title-line {
  display: block;
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
  margin-bottom: 4rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: var(--font-primary);
  font-size: 3rem;
  font-weight: 900;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-family: var(--font-accent);
  color: var(--nebula-gray);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--neon-blue);
  border-radius: 20px;
  position: relative;
}

.mouse::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--neon-blue);
  border-radius: 2px;
  animation: scroll-down 2s infinite;
}

@keyframes scroll-down {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

/* ============================================
   GAMES SECTION
   ============================================ */

.games-section {
  padding: 6rem 0;
  background: var(--cosmic-purple);
  position: relative;
}

.section-title {
  margin-bottom: 4rem;
}

.title-glow {
  position: relative;
  display: inline-block;
}

.title-glow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, var(--neon-blue) 0%, transparent 70%);
  opacity: 0.3;
  filter: blur(20px);
  z-index: -1;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.category-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.category-btn {
  background: var(--void-blue);
  border: 2px solid var(--nebula-gray);
  color: var(--stellar-white);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-family: var(--font-accent);
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.category-btn:hover,
.category-btn.active {
  border-color: var(--neon-purple);
  background: rgba(185, 103, 255, 0.1);
  color: var(--neon-purple);
  box-shadow: 0 0 20px rgba(185, 103, 255, 0.3);
}

.category-icon {
  font-size: 1.2rem;
}

/* ============================================
   FEATURES SECTION
   ============================================ */

.features-section {
  padding: 6rem 0;
  background: var(--void-blue);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--gradient-card);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(185, 103, 255, 0.2);
  text-align: center;
  transition: all 0.4s ease;
  animation: slide-in 0.6s ease-out both;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--neon-purple);
  box-shadow: 0 20px 60px rgba(185, 103, 255, 0.4);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 20px currentColor);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--neon-blue);
  text-shadow: var(--text-glow);
}

.feature-card p {
  color: var(--meteor-dust);
  line-height: 1.8;
}

/* ============================================
   COMMUNITY SECTION
   ============================================ */

.community-section {
  padding: 6rem 0;
  background: var(--cosmic-purple);
}

.community-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.community-text h3 {
  font-size: 2.5rem;
  color: var(--neon-blue);
  margin-bottom: 1.5rem;
  text-shadow: var(--text-glow);
}

.community-text p {
  font-size: 1.2rem;
  color: var(--meteor-dust);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.community-stats {
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
}

.community-stat {
  text-align: center;
}

.stat-value {
  font-family: var(--font-primary);
  font-size: 2.5rem;
  font-weight: 900;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-desc {
  font-family: var(--font-accent);
  color: var(--nebula-gray);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.community-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-ring {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 3px solid var(--neon-blue);
  border-radius: 50%;
  animation: pulse-ring-animation 2s ease-out infinite;
}

.pulse-ring:nth-child(2) {
  animation-delay: 0.5s;
}

.pulse-ring:nth-child(3) {
  animation-delay: 1s;
}

@keyframes pulse-ring-animation {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* ============================================
   FOOTER
   ============================================ */

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

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  color: var(--neon-blue) !important;
  font-weight: 600;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(185, 103, 255, 0.1);
  color: var(--nebula-gray);
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .games-grid {
    grid-template-columns: 1fr;
  }

  .community-content {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

