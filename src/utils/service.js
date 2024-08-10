import axios from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },

  paramsSerializer: (params) => {
    return qs.stringify(params)
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token')
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 检查配置的响应类型是否为二进制类型（'blob' 或 'arraybuffer'）, 如果是，直接返回响应对象
    if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer') {
      return response
    }

    const { code, data, msg } = response.data
    if (code === 0) {
      return data
    }

    ElMessage.error(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  (error) => {
    // 异常处理
    if (error.response.data) {
      ElMessage.error('系统出错')
      return Promise.reject(error.message)
    }
  }
)

// 导出 axios 实例
export default service
