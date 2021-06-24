import { createStore } from 'vuex'

// A Module
const moduleA = {
  state: {
    username: 'moduleA'
  },
  mutations: {
    updateName(state) {
      state.username = 'moduleA HelloA'
    }
  },
  actions: {
    updateNameAsync(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  getters: {
    newName(state) {
      return state.username + '~~~'
    }
  }
}
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  mutations: {
    updateName(state) {
      state.username = 'moduleB HelloB'
    }
  },
  actions: {
    updateNameAsync(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  getters: {
    newName(state) {
      return state.username + '~~~'
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
