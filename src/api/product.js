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

/**
 * 获取商品的评价统计信息
 * @param {String} id 商品ID
 */
export const findCommentInfoByGoods = id => {
  // return request(`/goods/${id}/evaluate`)
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get')
}

/**
 * 获取商品评价列表
 * @param {String} id 商品 ID
 * @param {Object} params 参数信息
 * @returns Promise
 */
export const findGoodsCommentList = (id, params) => {
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get', params)
}
