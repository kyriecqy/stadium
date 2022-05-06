<template>
  <div class="topNav">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="">
      <span class="title">Kyrie C 球馆管理系统</span>
    </div>
    <div class="user">
      <div class="userinfo">
        <img src="" alt="">
        <div class="welcome">
          <p class="hy">欢迎</p>
          <p class="name">cqy</p>
        </div>
      </div>
      <span>下拉箭头</span>
    </div>
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
  display: flex;
  justify-content: space-between;
}
.logo img {
  height: 60px;
}
.title {
  font-size: 16px;
}
</style>
