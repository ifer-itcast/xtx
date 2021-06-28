<template>
  <!-- 顶部通栏 -->
  <app-navbar />
  <!-- 头部 -->
  <app-header />
  <!-- 吸顶 -->
  <app-header-sticky />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
  <!-- 底部 -->
  <app-footer />
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
