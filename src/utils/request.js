// #1. 实例
// #2. 请求拦截器
// #3. 响应拦截器（去除无效数据、处理 TOKEN 失效）
// #4. 导出一个函数，返回当前 axios 实例调用的结果
import axios from 'axios'
import store from '@/store'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})
instance.interceptors.request.use(
  config => {
    const { profile } = store.state.user
    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
