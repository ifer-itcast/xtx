<template>
  <!-- 首页入口（分类+广告） -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <template #right>
      <xtx-more path="/" />
    </template>
    <div>
      默认内容
    </div>
  </home-panel>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomePanel from './components/home-panel.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomePanel
  }
}
</script>

<style lang="less" scoped></style>
