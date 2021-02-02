<template>
  <div class="pay-way-select">
    <el-select v-if="lessOption" v-model="payway" placeholder="请选择支付方式">
      <el-option
        v-for="item in lessOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-else v-model="payway" placeholder="请选择支付方式">
      <el-option
        v-for="item in moreOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'PayWaySelect',
  prop: {
    lessOption: {
      type: Boolean,
      default: true
    },
    payWay: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      lessOptions: [{
        value: '银行资金存管', label: '银行资金存管'
      }, {
        value: '理房通资金存管', label: '理房通资金存管'
      }, {
        value: '自行支付', label: '自行支付'
      }],
      moreOptions: [{
        value: '银行资金存管', label: '银行资金存管'
      }, {
        value: '理房通资金存管', label: '理房通资金存管'
      }, {
        value: '房管局监管', label: '房管局监管'
      }, {
        value: '自行支付', label: '自行支付'
      }, {
        value: '第三方担保支付', label: '第三方担保支付'
      }],
      payway: ''
    }
  }
}
</script>

<style>

</style>
