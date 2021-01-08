<template>
  <div id="laurent">
    <van-nav-bar title="HelloWorld" />
    <van-grid clickable direction="horizontal" :column-num="1">
      <van-grid-item icon="music-o" text="吉他谱" to="/guitar" />
      <van-grid-item icon="star-o" text="前端学习" to="/webdesign" />
      <van-grid-item icon="balance-list-o" text="贝壳计算器" to="/tiezhu" />
      <van-grid-item icon="service-o" text="歌单分享" dot to="/playlist" />
    </van-grid>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, NavBar } from 'vant'

Vue.use(NavBar)
Vue.use(Grid)
Vue.use(GridItem)
export default {
  name: 'Laurent'
}
</script>

<style>
</style>
