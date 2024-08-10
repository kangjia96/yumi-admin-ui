import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
