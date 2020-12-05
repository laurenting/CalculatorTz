<template>
  <div id="laurent">

    <van-grid clickable :column-num="2">
      <van-grid-item icon="music-o" text="吉他分享🎸" to="/guitar" />
      <van-grid-item icon="star-o" text="前端学习" to="/webdesign" />
      <van-grid-item icon="balance-list-o" text="贝壳计算器" to="/tiezhu" />
      <van-grid-item icon="service-o" text="歌单分享" to="/easynet" />
    </van-grid>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem } from 'vant'

Vue.use(Grid)
Vue.use(GridItem)
export default {
  name: 'Laurent'
}
</script>

<style>

</style>
