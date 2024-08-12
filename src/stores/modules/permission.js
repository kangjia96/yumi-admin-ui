import { defineStore } from 'pinia'
import { reqRoutes } from '@/api/system/menu.js'

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref([])

  async function obtainRoutes() {
    const res = await reqRoutes()
    routes.value = res
    console.log(res)
  }

  return {
    routes,
    obtainRoutes
  }
})
