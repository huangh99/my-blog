import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径
  timeout: 5 * 1000, // 超时时间
})

request.interceptors.request.use((config) => {
  return config // 返回配置对象
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 失败的回调，一般处理网络错误、
    // 定义一个变量存储网络错误信息
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '网络问题'
        break
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
)

export default request