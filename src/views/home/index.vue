<template>
  <!-- 首页入口（分类+广告） -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
      <button @click="show = true">显示</button>
      <button @click="show = false">隐藏</button>
      <transition>
        <div
          v-show="show"
          style="width: 100px; height: 100px; background: red;"
        ></div>
      </transition>
      <transition name="h">
        <div v-show="show" class="box"></div>
      </transition>
    </div>
  </div>
  <!-- 新鲜好物 -->
  <home-new />
  <!-- 人气推荐 -->
  <home-hot />
</template>

<script>
import { ref } from 'vue'
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  },
  setup() {
    const show = ref(true)
    return {
      show
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background: green;
}
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 2s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: all 2s;
}
.v-leave-to {
  opacity: 0;
}
// 高度
.h-enter-from {
  height: 0;
}
.h-enter-active {
  transition: all 2s;
}
.h-enter-to {
  height: 100px;
}
.h-leave-from {
  height: 100px;
}
.h-leave-active {
  transition: all 2s;
}
.h-leave-to {
  height: 0;
}
</style>
