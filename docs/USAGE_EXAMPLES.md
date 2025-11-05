# Vue 3 Composition API - Usage Examples

## useGames Composable

### Basic Usage

```vue
<template>
  <div>
    <div v-if="loading">Loading games...</div>
    <div v-if="error">{{ error }}</div>
    
    <div v-for="game in games" :key="game.id">
      <h3>{{ game.title }}</h3>
      <p>{{ game.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGames } from '@/composables/useGames'

const { games, loading, error, fetchGames } = useGames()

onMounted(async () => {
  await fetchGames()
})
</script>
```

### With Filters

```vue
<template>
  <div>
    <input 
      v-model="searchQuery" 
      @input="handleSearch"
      placeholder="Search games..."
    />
    
    <select v-model="selectedCategory" @change="handleCategoryChange">
      <option value="all">All Categories</option>
      <option value="action">Action</option>
      <option value="rpg">RPG</option>
      <option value="racing">Racing</option>
    </select>
    
    <div v-for="game in filteredGames" :key="game.id">
      {{ game.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useGames } from '@/composables/useGames'
import type { GameFilters } from '@/types/Game'

const { 
  games, 
  loading, 
  filteredGames,
  selectedCategory,
  searchQuery,
  fetchGames,
  setCategory,
  setSearchQuery 
} = useGames()

const handleSearch = async () => {
  const filters: GameFilters = {
    search: searchQuery.value,
    category: selectedCategory.value !== 'all' ? selectedCategory.value : undefined,
    sortBy: 'rating',
    sortOrder: 'desc'
  }
  await fetchGames(filters)
}

const handleCategoryChange = async () => {
  const filters: GameFilters = {
    category: selectedCategory.value !== 'all' ? selectedCategory.value : undefined,
    search: searchQuery.value || undefined
  }
  await fetchGames(filters)
}

// Initial load
fetchGames()
</script>
```

### Advanced Filtering

```typescript
import { useGames } from '@/composables/useGames'
import type { GameFilters } from '@/types/Game'

const { fetchGames, games, loading } = useGames()

// Fetch games with multiple filters
const loadFilteredGames = async () => {
  const filters: GameFilters = {
    category: 'action',
    minRating: 4.0,
    maxRating: 5.0,
    sortBy: 'rating',
    sortOrder: 'desc',
    limit: 20,
    offset: 0
  }
  
  await fetchGames(filters)
}

// Fetch only featured games
const loadFeaturedGames = async () => {
  await fetchGames({ featured: true })
}

// Fetch games with search
const searchGames = async (query: string) => {
  await fetchGames({
    search: query,
    sortBy: 'title',
    sortOrder: 'asc'
  })
}
```

### Fetch Single Game

```typescript
import { useGames } from '@/composables/useGames'

const { fetchGameById, getGameById, loading } = useGames()

// Fetch from API
const game = await fetchGameById(123)

// Get from current list (no API call)
const existingGame = getGameById(123)
```

### Using Computed Properties

```vue
<template>
  <div>
    <h2>Featured Games</h2>
    <div v-for="game in featuredGames" :key="game.id">
      {{ game.title }}
    </div>
    
    <h2>All Games</h2>
    <div v-for="game in filteredGames" :key="game.id">
      {{ game.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGames } from '@/composables/useGames'

const { 
  featuredGames,  // Computed: games.filter(g => g.featured)
  filteredGames,  // Computed: games with category and search filters
  fetchGames 
} = useGames()

fetchGames()
</script>
```

### Error Handling

```typescript
import { useGames } from '@/composables/useGames'

const { games, loading, error, fetchGames } = useGames()

const loadGames = async () => {
  try {
    await fetchGames()
    if (error.value) {
      console.error('Error:', error.value)
      // Show user-friendly error message
    }
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}
```

### Refresh Games

```typescript
import { useGames } from '@/composables/useGames'

const { refreshGames, clearFilters } = useGames()

// Refresh with current filters
await refreshGames()

// Clear all filters and refresh
clearFilters()
await refreshGames()
```

