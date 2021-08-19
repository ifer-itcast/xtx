import request from '@/utils/request'

/**
 * 根据 ID 获取商品详情
 * @param {String} id 商品 ID
 * @returns Promise
 */
export const findGoods = id => {
  return request('/goods', 'get', { id })
}

/**
 * 推荐商品/猜你喜欢
 * @param {String} id 商品 ID
 * @param {Interger} limit 数量
 * @returns Promise
 */
export const findRelevantGoods = ({ id, limit = 16 }) => {
  return request('/goods/relevant', 'get', { id, limit })
}
