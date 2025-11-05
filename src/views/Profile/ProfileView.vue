<template>
  <div class="profile-view">
    <div class="container">
      <h1>User Profile</h1>
      <p>Manage your gaming profile and preferences.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>

