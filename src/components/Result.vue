<template>
  <div id="result">
    <van-button round type="info" @click="handleclick">铁柱帮你算</van-button>
      <van-cell title="自行支付合计" title-style='text-align:left' :value="this.$store.state.result" :label="this.$store.state.tongji" />

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

<style scoped>
</style>
