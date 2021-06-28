<template>
  <!-- 顶部通栏 -->
  <nav>nav</nav>
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
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped></style>
