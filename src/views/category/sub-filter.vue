<template>
  <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a :class="{ active: filterData.selectedBrand === brand.id }" href="javascript:;" v-for="brand in filterData.brands" :key="brand.id" @click="changeBrand(brand.id)">{{ brand.name }}</a>
      </div>
    </div>
    <div class="item" v-for="item in filterData.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}：</div>
      <div class="body">
        <a :class="{ active: item.selectedProp === prop.id }" href="javascript:;" v-for="prop in item.properties" :key="prop.id" @click="changeProp(item, prop.id)">{{ prop.name }}</a>
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
  setup(props, { emit }) {
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
    const getFilterParams = () => {
      const filterParams = {}
      // 品牌
      filterParams.brandId = filterData.value.selectedBrand
      // 属性
      const attrs = []
      filterData.value.saleProperties.forEach(item => {
        if (item.selectedProp) {
          const prop = item.properties.find(prop => prop.id === item.selectedProp)
          attrs.push({ groupName: item.name, propertyName: prop.name })
        }
      })
      if (attrs.length) filterParams.attrs = attrs
      // { brandId: '', attrs: [{ groupName: '', propertyName: '' }] }
      return filterParams
    }

    // 记录当前选择的品牌
    const changeBrand = brandId => {
      if (filterData.value.selectedBrand === brandId) return
      filterData.value.selectedBrand = brandId
      emit('filter-change', getFilterParams())
    }
    // 记录选择的销售属性
    const changeProp = (item, propId) => {
      if (item.selectedProp === propId) return
      item.selectedProp = propId
      emit('filter-change', getFilterParams())
    }
    return { filterData, filterLoading, changeBrand, changeProp }
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
