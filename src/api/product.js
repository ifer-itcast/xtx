import request from '@/utils/request'

/**
 * 根据 ID 获取商品详情
 * @param {String} id 商品 ID
 * @returns Promise
 */
export const findGoods = id => {
  return request('/goods', 'get', { id })
}
