<template>
  <div id="result">
    <van-button round type="info" @click="handleclick" style="margin:5px;font-weight:bold;">铁柱帮你算</van-button>
      <van-cell title="放弃资金存管的金额" title-style='text-align:left' value-class='value' :value="this.$store.state.result?this.$store.state.result+'元':'点击按钮计算'" :label="this.$store.state.tongji" />

  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Button } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
export default {
  name: 'Result',
  methods: {
    handleclick: function () {
      this.$store.commit('setstateresult')
    }
  }
}
</script>

<style>
.value{
  color:red;
  font-size: 20px
}
</style>
