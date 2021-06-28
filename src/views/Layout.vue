<template>
  <!-- 顶部通栏 -->
  <app-navbar />
  <!-- 头部 -->
  <header>header</header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
  <!-- 底部 -->
  <footer>footer</footer>
</template>

<script>
import AppNavbar from '@/components/app-navbar'
export default {
  name: 'Layout',
  components: {
    AppNavbar
  }
}
</script>

<style lang="less" scoped></style>
