import service from '@/utils/service.js'

/**
 * 获取所有路由
 */
export function reqRoutes() {
  return service({
    url: '/routes',
    method: 'GET'
  })
}
