<template>
  <div id="registerSecurity">
    <van-field
      :value="this.$store.state.registerSecurity.money"
      @input="handleInput"
      type="number"
      required
      name="户口保证金"
      label="户口保证金(¥)"
      placeholder="请填写户口保证金"
      clearable
      input-align='right'
      :rules="[{ required: true, message: '请填写户口保证金金额' }]"
    />
    <van-field
      readonly
      clickable
      requiredyarn
      required
      label="支付方式"
      :value="this.$store.state.registerSecurity.way"
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
    {{this.$store.state.registerSecurity.money}}
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
  name: 'Register',
  methods: {
    handleInput: function (value) {
      this.$store.commit('setstatemoney', { name: this.$el.id, money: value })
    },
    onConfirm (value) {
      this.value = value
      console.log(this.$el.id, this.value, this.$store.state.registerSecurity)
      this.$store.commit('setstateway', { name: this.$el.id, way: value })
      this.showPicker = false
    }
  },
  data () {
    return {
      showPicker: false,
      columns: ['自行支付', '银行资金存管', '理房通资金存管']
    }
  }
}
</script>

<style>
</style>
