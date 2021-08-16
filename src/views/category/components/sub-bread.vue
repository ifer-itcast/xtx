<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem v-if="category.top" :to="`/category/${category.top.id}`">{{
      category.top.name
    }}</XtxBreadItem>
    <Transition name="fade-right">
      <XtxBreadItem v-if="category.sub" :key="category.sub.id">{{
        category.sub.name
      }}</XtxBreadItem>
    </Transition>
  </XtxBread>
</template>
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'SubBread',
  setup() {
    // 1. 获取二级分类的 ID，在地址在路由中
    const route = useRoute()
    // 2. 获取 vuex 中的类目数据
    const store = useStore()
    // 3. 通过计算属性得到，二级类目的名称和 ID，一级类目的名称和 ID
    const category = computed(() => {
      const cate = {}
      store.state.category.list.forEach(top => {
        if (top.children) {
          top.children.forEach(sub => {
            if (sub.id === route.params.id) {
              // 设置二级类目
              cate.sub = { id: sub.id, name: sub.name }
              // 设置一级类目
              cate.top = { id: top.id, name: top.name }
            }
          })
        }
      })
      return cate
    })
    // 模版需要使用的东西需要setup返回
    return { category }
  }
}
</script>
<style scoped lang="less"></style>
