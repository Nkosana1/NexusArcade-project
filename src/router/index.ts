import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/utils/constants'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'Home',
      component: () => import('@/views/Home/HomeView.vue'),
    },
    {
      path: ROUTES.GAMES,
      name: 'Games',
      component: () => import('@/views/Games/GamesView.vue'),
    },
    {
      path: ROUTES.COMMUNITY,
      name: 'Community',
      component: () => import('@/views/Community/CommunityView.vue'),
    },
    {
      path: ROUTES.PROFILE,
      name: 'Profile',
      component: () => import('@/views/Profile/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: ROUTES.ABOUT,
      name: 'About',
      component: () => import('@/views/About/AboutView.vue'),
    },
  ],
})

export default router

