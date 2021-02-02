<template>
  <div class="calaulate">
    <el-form :model="ironForm" label-position="left" label-width="auto" size="mini">
      <el-form-item label="定金">
          <el-input v-model="ironForm.dj" type="number" placeholder="请输入定金"/>
          <pay-way-select></pay-way-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import PayWaySelect from '@/components/PayWaySelect'
export default {
  name: 'Iron',
  components: { PayWaySelect },
  data () {
    return {
      ironForm: {}
    }
  }
}
</script>

<style>

</style>
