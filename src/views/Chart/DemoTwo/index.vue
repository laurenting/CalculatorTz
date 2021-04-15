<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import VChart from 'vue-echarts'
export default {
  name: 'DemoTwo',
  components: { VChart },
  data() {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 99, 10, 10, 20]
        }, {
          name: '折线销量',
          type: 'line',
          data: [5, 20, 99, 10, 10, 20]
        }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
