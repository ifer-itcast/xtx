// 首页相关 API 接口
import request from '@/utils/request'

/**
 * @param {Integer} limit - 品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告区轮播图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 新鲜好物
 * @returns Promise
 */
export const findNew = () => {
  return request('home/new', 'get')
}
