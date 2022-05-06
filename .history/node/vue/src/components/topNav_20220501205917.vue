<template>
  <div class="topNav">
    <el-row>
      <el-col :span="6" class="logo">
        <img src="../assets/img/logo.png" alt="">
        <span class="title">Kyrie C 球馆管理系统</span>
      </el-col>
      <el-col :span="6" class="user">
        <div class="userinfo">
          <img src="" alt="">
          <div class="welcome">
            <p class="hy">欢迎</p>
            <p class="name">cqy</p>
          </div>
        </div>
        <span>下拉箭头</span>
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
.logo img {
  height: 50px;
}
</style>
