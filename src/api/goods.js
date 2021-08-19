import request from '@/utils/request'

/**
 * 获取热榜商品
 * @param {String} id 商品 ID
 * @param {Integer} type 类型
 * @param {Integer} limit 数量
 */
export const findHotGoods = ({ id, type, limit = 3 }) => {
  return request('/goods/hot', 'get', { id, type, limit })
}
