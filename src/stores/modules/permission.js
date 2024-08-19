import { defineStore } from 'pinia'
import { reqRoutes } from '@/api/system/menu.js'

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref([]) // 所有路由
  const topMenu = ref([]) // 顶部菜单

  async function obtainRoutes() {
    const res = await reqRoutes()
    routes.value = res
    topMenu.value = res.filter((item) => item.visible)
    console.log('all-routes', res)
  }

  return {
    routes,
    topMenu,
    obtainRoutes
  }
})
