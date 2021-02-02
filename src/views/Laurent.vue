<template>
  <div id="laurent">
    <el-row :gutter="24">
      <el-col :span="24">
      <el-card shadow="hover">
        <i class="el-icon-s-custom"></i> Laurent
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="24">
      <el-col :span="24">
      <el-card shadow="hover">
        <div @click="toIron">
          <i class="el-icon-mobile">IRON</i>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>

export default {
  name: 'Laurent',
  methods: {
    toIron () {
      this.$router.push('/Iron')
    }
  }
}
</script>

<style scoped>
  .el-card {
    margin: 10px ;
  }
  #laurent {
    padding: 20px;
  }
</style>
