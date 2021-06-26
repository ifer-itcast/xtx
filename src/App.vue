<template>
  <div id="nav">
    <p>App</p>
    <p>{{ $store.state.user.profile.account }}</p>
    <button @click="$store.commit('user/setUser', { account: 'xxx' })">
      click
    </button>
  </div>
</template>
<script>
export default {
  name: 'App',
  setup() {}
}
</script>
