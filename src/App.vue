<template>
  <div id="nav">
    <p>{{ $store.state.moduleA.username }}</p>
    <!-- 无需模块名，可以直接访问 getters 中的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <button @click="$store.commit('updateName')">click</button>
    <button @click="$store.dispatch('updateNameAsync')">click async</button>
    <hr />
    <p>{{ $store.state.moduleB.username }}</p>
    <p>{{ $store.getters['moduleB/newName'] }}</p>
    <button @click="$store.commit('moduleB/updateName')">click</button>
    <button @click="$store.dispatch('moduleB/updateNameAsync')">
      click async
    </button>
  </div>
</template>
<script>
export default {
  name: 'App',
  setup() {}
}
</script>
