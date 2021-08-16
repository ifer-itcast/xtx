<template>
  <div class="sub-category">
    <div class="container">
      <sub-bread/>
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread
  }
}
</script>

<style lang="less" scoped></style>
