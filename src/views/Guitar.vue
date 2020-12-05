<template>
  <div id="guitar">
    <div id="nav">
      <van-nav-bar
  title="Guitar"
  left-text="返回"
  right-text=""
  left-arrow
  @click-left="onClickLeft"
/>
    </div>
    guitar
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  name: 'Guitar',
  methods: {
    onClickLeft: function () {
      this.$router.back()
    }
  }
}
</script>

<style lang='scss'>
   #nav {
  padding: 5px;
  background: lightcyan;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2ac4f3;
    }
  }}
</style>
