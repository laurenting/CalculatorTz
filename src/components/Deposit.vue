<template>
  <div id="deposit">
    <van-field
      :value="this.$store.state.deposit.money"
      @input="handleInput"
      type="number"
      required
      name="定金"
      label="定金（元）"
      placeholder="请填写定金"
      clearable
      input-align='right'
      :rules="[{ required: true, message: '请填定金' }]"
    />
    <van-field
      readonly
      clickable
      required
      label="支付方式"
      :value="this.$store.state.deposit.way"
      input-align='right'
      placeholder="请选择支付方式"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round :style="{ height: '35%',width:'70%' }">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        default-index=2
      />
    {{this.$store.state.deposit.money}}
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Picker, Field, Popup } from 'vant'

Vue.use(Picker)
Vue.use(Field)
Vue.use(Popup)
export default {
  name: 'Deposit',
  methods: {
    handleInput: function (value) {
      this.$store.commit('setstatemoney', { name: this.$el.id, money: value })
    },
    onConfirm (value) {
      this.value = value
      console.log(this.$el.id, this.value, this.$store.state.deposit)
      this.$store.commit('setstateway', { name: this.$el.id, way: value })
      this.showPicker = false
    }
  },
  data () {
    return {
      showPicker: false,
      columns: ['自行支付', '银行资金存管', '理财通资金存管']
    }
  }
}
</script>

<style>
</style>
