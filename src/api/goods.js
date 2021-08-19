import request from '@/utils/request'

/**
 * 获取热榜商品
 */
export const findHotGoods = ({ id, type, limit = 3 }) => {
  return request('/goods/hot', 'get', { id, type, limit })
}
