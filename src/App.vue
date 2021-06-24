<template>
  <div id="nav">
    <p>{{ $store.state.username }}</p>
    <p>{{ $store.getters.newName }}</p>
    <button @click="handleClick1">update username</button>
    <button @click="handleClick2">update username async</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    // 0
    const store = useStore()
    // 1
    console.log(store.state.username)
    // 2
    console.log(store.getters.newName)
    // 3
    const handleClick1 = () => {
      store.commit('updateName')
    }
    const handleClick2 = () => {
      store.dispatch('updateName')
    }
    return {
      handleClick1,
      handleClick2
    }
  }
}
</script>
