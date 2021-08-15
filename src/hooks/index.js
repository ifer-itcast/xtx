import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
/**
 * 数据懒加载
 * @param {Object} target - 观测的目标元素
 * @param {Function} apiFn - API 函数
 */
export const useLazyData = (target, apiFn) => {
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        // 停止观察
        stop()
        // 调用 API
        apiFn().then(data => {
          result.value = data.result
        })
      }
    }
  )
  return result
}
