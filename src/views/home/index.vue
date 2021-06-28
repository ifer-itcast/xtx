<template>
  <div class="container">
    Home
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/mixins.less';
.container {
  height: 200px;
  .hoverShadow();
}
</style>
