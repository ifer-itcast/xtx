import { createVNode, render } from 'vue'
import XtxMessage from './xtx-message.vue'

// 准备 DOM 容器
const oDiv = document.createElement('div')
oDiv.setAttribute('class', 'xtx-message-container')
document.body.appendChild(oDiv)
// 定时器标识
let timer = null

export default ({ type, text }) => {
  // 1. 导入组件
  // 2. 根据组件创建虚拟节点
  const vnode = createVNode(XtxMessage, { type, text })
  // 3. 准备一个 DOM 容器
  // 4. 把虚拟节点渲染到 DOM 容器中
  render(vnode, oDiv)
  // 5. 开启定时，移除 DOM 容器中的内容
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, oDiv)
  }, 3000)
}
