<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <sub-bread />
      <!-- 筛选区 -->
      <sub-filter />
      <!-- 商品面板（排序+列表） -->
      <div class="goods-list">
        <sub-sort />
        <!-- 列表 -->
        <ul>
          <li v-for="i in 20" :key="i">
            <goods-item :goods="{}" />
          </li>
        </ul>
        <!-- 加载 -->
        <XtxInfiniteLoading :loading="loading" :finished="finished" @infinite="getData" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './sub-filter.vue'
import SubSort from './components/sub-sort.vue'
import GoodsItem from './components/goods-item.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    SubSort,
    GoodsItem
  },
  setup() {
    const loading = ref(false)
    const finished = ref(false)
    const getData = () => {
      console.log('加载数据')
    }
    return { loading, finished, getData }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
