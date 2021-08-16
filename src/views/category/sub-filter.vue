<template>
  <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          :class="{ active: filterData.selectedBrand === brand.id }"
          href="javasript:;"
          v-for="brand in filterData.brands"
          :key="brand.id"
          @click="filterData.selectedBrand = brand.id"
          >{{ brand.name }}</a
        >
      </div>
    </div>
    <div class="item" v-for="p in filterData.saleProperties" :key="p.id">
      <div class="head">{{ p.name }}：</div>
      <div class="body">
        <a
          :class="{ active: p.selectedProp === item.id }"
          href="javasript:;"
          v-for="item in p.properties"
          :key="item.id"
          @click="p.selectedProp = item.id"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
  <div v-else class="sub-filter">
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
  </div>
</template>
<script>
import { findSubCategoryFilter } from '@/api/category'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
export default {
  name: 'SubFilter',
  setup() {
    const route = useRoute()
    const filterData = ref(null)
    const filterLoading = ref(false)
    watch(
      () => route.params.id,
      newVal => {
        if (newVal && route.path === '/category/sub/' + newVal) {
          filterLoading.value = true
          newVal &&
            findSubCategoryFilter(route.params.id).then(({ result }) => {
              // 品牌
              result.selectedBrand = null
              result.brands.unshift({ id: null, name: '全部' })
              // 销售属性
              result.saleProperties.forEach(item => {
                item.selectedProp = null
                item.properties.unshift({ id: null, name: '全部' })
              })
              filterData.value = result
              filterLoading.value = false
            })
        }
      },
      { immediate: true }
    )
    return { filterData, filterLoading }
  }
}
</script>
<style scoped lang="less">
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
  .xtx-skeleton {
    padding: 10px 0;
  }
}
</style>
