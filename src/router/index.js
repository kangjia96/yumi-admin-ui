import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/dashboard/index.vue')
        }
      ]
    },
    {
      path: '/audit',
      name: 'Audit',
      redirect: '/audit/op-log',
      component: Layout,
      children: [
        {
          path: '/audit/op-log',
          name: 'OpLog',
          component: () => import('../views/audit/op-log/index.vue')
        }
      ]
    },
    {
      path: '/system',
      name: 'System',
      redirect: '/system/user',
      component: Layout,
      children: [
        {
          path: '/system/user',
          name: 'User',
          component: () => import('../views/system/user/index.vue')
        },
        {
          path: '/system/role',
          name: 'Role',
          component: () => import('../views/system/role/index.vue')
        },
        {
          path: '/system/menu',
          name: 'Menu',
          component: () => import('../views/system/menu/index.vue')
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
