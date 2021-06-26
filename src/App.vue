<template>
  <div id="nav">
    <p>App</p>
    <button @click="handleClick">click</button>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup() {
    const handleClick = () => {
      request('/member/profile', 'get', {
        a: 10
      })
      /* request('/member/profile', 'post', {
        a: 10
      }) */
      // 输入以下地址，然后点击按钮，测试响应拦截器
      // http://localhost:8080/#/abc?age=888
    }
    return { handleClick }
  }
}
</script>
