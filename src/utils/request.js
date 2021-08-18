// #1. 实例
// #2. 请求拦截器
// #3. 响应拦截器（去除无效数据、处理 TOKEN 失效）
// #4. 导出一个函数，返回当前 axios 实例调用的结果
import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// export const baseURL = 'https://apipc-xiaotuxian-front.itheima.net'

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

instance.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    if (err.response && err.response.status === 401) {
      // 1. 清空无效用户信息
      store.commit('user/setUser', {})
      // 2. 跳转到登录页并携带当前路由地址
      // 组件 => $route.fullPath
      // JS => router.currentRoute.fullPath => 是 ref 包装的响应式数据
      // vue3 => router.currentRoute.value.fullPath
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      router.push(`/login?redirectUrl=${fullPath}`)
    }
    return Promise.reject(err)
  }
)

export default (url, method, submitData) => {
  // 请求地址、请求方式、提交数据
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
