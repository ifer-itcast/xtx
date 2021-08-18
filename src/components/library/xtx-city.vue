<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="toggleDialog" :class="{ visible }">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span class="ellipsis" v-for="item in currList" :key="item.code">{{ item.name }}</span>
      </template>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
const getCityData = () => {
  return new Promise((resolve, reject) => {
    if (window.cityData) {
      // 有缓存
      resolve(window.cityData)
    } else {
      // 无缓存
      const url = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
      axios.get(url).then(res => {
        window.cityData = res.data
        resolve(window.cityData)
      })
    }
  })
}
export default {
  name: 'XtxCity',
  setup() {
    // 控制展开收起
    const visible = ref(false)
    const loading = ref(false)
    // 城市数据
    const cityData = ref([])
    const openDialog = () => {
      visible.value = true
      loading.value = true // 加载中
      getCityData().then(data => {
        cityData.value = data
        loading.value = false // 加载完
      })
    }
    const closeDialog = () => {
      visible.value = false
    }
    // 切换展开收起
    const toggleDialog = () => {
      visible.value ? closeDialog() : openDialog()
    }
    // 点击其他位置隐藏
    const target = ref(null)
    onClickOutside(target, () => {
      closeDialog()
    })

    const currList = computed(() => {
      // 省
      const currList = cityData.value
      return currList
    })
    return { visible, toggleDialog, target, currList, loading }
  }
}
</script>
<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
    .loading {
      height: 290px;
      width: 100%;
      background: url(../../assets/images/loading.gif) no-repeat center;
    }
  }
}
</style>
