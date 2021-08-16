<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <sub-bread />
      <!-- 筛选区 -->
      <sub-filter />
      <!-- 测试复选框 -->
      <xtx-checkbox v-model="isAllChecked">全选</xtx-checkbox>
      {{ isAllChecked }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './sub-filter.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter
  },
  setup() {
    const isAllChecked = ref(true)
    return {
      isAllChecked
    }
  }
}
</script>

<style lang="less" scoped></style>
