import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'
export default {
  namespaced: true,
  state() {
    return {
      // 默认数据，防止接口请求慢导致白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
