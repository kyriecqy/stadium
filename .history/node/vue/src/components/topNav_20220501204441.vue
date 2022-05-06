<template>
  <div class="topNav">
    <el-row>
      <el-col :span="6">
        <link rel="shortcut icon" href="../assets/img/logo.ico" />
        <span class="title">Kyrie C 球馆管理系统</span>
      </el-col>
    </el-row>
    
  </div>
</template>
 
<script>
export default ({
  setup() {
    
  },
})
</script>

<style scoped>
.topNav {
  width: 100%;
  height: 60px;
  padding: 5px;
  background: #89cff5;
  color: #fff;
  border-bottom: 1px solid #63c0e8;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
