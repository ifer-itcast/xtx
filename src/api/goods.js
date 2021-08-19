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

/**
 * 获取商品的评价统计信息
 * @param {String} id 商品ID
 */
export const findCommentInfoByGoods = id => {
  // return request(`/goods/${id}/evaluate`)
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get')
}
// https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate
