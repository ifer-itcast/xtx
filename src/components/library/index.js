import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import defaultImg from '@/assets/images/200.png'

/**
 * 图片懒加载
 * @param {Object} app Vue
 */
const defineDirective = app => {
  app.directive('lazy', {
    mounted(el, binding) {
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 停止观测
            observe.unobserve(el)
            // 进入可视区，将数据给图片的 src
            el.onerror = () => {
              el.src = defaultImg
            }
            el.src = binding.value
          }
        },
        {
          threshold: 0
        }
      )
      // 开始观测
      observe.observe(el)
    }
  })
}

export default {
  install(app) {
    // Vue3 在 app 上进行扩展，app 提供 component、directive 等函数
    // Vue3 中可以通过 app.config.globalProperties 把属性或方法挂载到 Vue 原型上（Vue.prototype）
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)

    // 定义指令
    defineDirective(app)
  }
}
