<template>
  <div id="nav">App {{ $store.state.username }}</div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    console.log(store.state.username)
  }
}
</script>
