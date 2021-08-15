<script>
import { h } from 'vue'
export default {
  name: 'XtxBread',
  render() {
    // 标签名、属性对象、子节点
    // 1. 创建 xtx-bread 父容器
    // 2. 获取默认插槽内容
    // 3. 去除 xtx-break-item 组件的 i 标签，因为由 render 函数来组织
    // 4. 遍历插槽中的 item，得到一个动态创建的节点，最后一个 item 不加 i 标签
    // 5. 把动态创建的节点渲染到 xtx-bread 容器中
    const items = this.$slots.default()
    const dymanicItems = []
    items.forEach((item, i) => {
      dymanicItems.push(item)
      if (i < items.length - 1) {
        dymanicItems.push(
          h('i', {
            class: 'iconfont icon-angle-right'
          })
        )
      }
    })
    return h(
      'div',
      {
        class: 'xtx-bread'
      },
      dymanicItems
    )
  }
}
</script>

<style lang="less">
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
