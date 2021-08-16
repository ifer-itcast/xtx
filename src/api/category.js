// 分类相关的 API 接口
import request from '@/utils/request'

/**
 * 获取所有分类（顶级、二级、对应的商品推荐数据）
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * 获取单个顶级分类信息
 * @param {String} id - 顶级分类ID
 */
export const findTopCategory = id => {
  return request('/category', 'get', { id })
}

/**
 * 根据二级分类 ID 获取数据
 * @param {String} id 二级分类 ID
 * @returns Promise
 */
export const findSubCategoryFilter = id => {
  return request('/category/sub/filter', 'get', { id })
}

/**
 * 获取分类下的商品
 * @param {Object} params 参考文档
 * @returns Promise
 */
export const findSubCategoryGoods = params => {
  return request('/category/goods/temporary', 'post', params)
}
