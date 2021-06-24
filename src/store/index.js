import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'ifer'
  },
  mutations: {
    updateName(state) {
      state.username = 'elser'
    }
  },
  actions: {
    updateName(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {},
  getters: {
    newName(state) {
      return state.username + '~~'
    }
  }
})
