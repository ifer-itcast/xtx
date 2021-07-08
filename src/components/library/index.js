import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'

export default {
  install(app) {
    // Vue3 在 app 上进行扩展，app 提供 component、directive 等函数
    // Vue3 中可以通过 app.config.globalProperties 把属性或方法挂载到 Vue 原型上（Vue.prototype）
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
