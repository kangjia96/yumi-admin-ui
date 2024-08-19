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
          meta: {
            title: '首页'
          },
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
          meta: {
            title: '操作日志'
          },
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
          meta: {
            title: '用户管理'
          },
          component: () => import('../views/system/user/index.vue')
        },
        {
          path: '/system/role',
          name: 'Role',
          meta: {
            title: '角色管理'
          },
          component: () => import('../views/system/role/index.vue')
        },
        {
          path: '/system/menu',
          name: 'Menu',
          meta: {
            title: '菜单管理'
          },
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
