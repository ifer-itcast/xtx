<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img :class="{ selected: val.selected }" @click="changeSku(item, val)" v-if="val.picture" :src="val.picture" :title="val.name" />
          <span :class="{ selected: val.selected }" @click="changeSku(item, val)" v-else>{{ val.name }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>
<script>
import getPowerSet from '@/vender/power-set'
const spliter = '★'
// 根据 skus 数据得到路径字典对象
const getPathMap = skus => {
  const pathMap = {}
  skus.forEach(sku => {
    // 1. 过滤出有库存有效的 sku
    if (sku.inventory) {
      // 2. 得到 sku 属性值数组
      const specs = sku.specs.map(spec => spec.valueName)
      // 3. 得到 sku 属性值数组的子集
      const powerSet = getPowerSet(specs)
      // 4. 设置给路径字典对象
      powerSet.forEach(set => {
        const key = set.join(spliter)
        if (pathMap[key]) {
          // 已经有 key 往数组追加
          pathMap[key].push(sku.id)
        } else {
          // 没有 key 设置一个数组
          pathMap[key] = [sku.id]
        }
      })
    }
  })
  return pathMap
}
export default {
  name: 'GoodsSku',
  props: {
    goods: {
      type: Object,
      default: () => ({ specs: [], skus: [] })
    }
  },
  setup(props) {
    const changeSku = (item, val) => {
      // 1. 选中与取消选中逻辑
      if (val.selected) {
        val.selected = false
      } else {
        item.values.forEach(bv => {
          bv.selected = false
        })
        val.selected = true
      }
    }
    const pathMap = getPathMap(props.goods.skus)
    console.log(pathMap)
    return { changeSku }
  }
}
</script>
<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
