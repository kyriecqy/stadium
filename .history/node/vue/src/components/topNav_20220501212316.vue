<template>
  <div class="topNav">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="">
      <div class="title">Kyrie C 球馆管理系统</div>
    </div>
    <div class="user">
      <div class="userinfo">
        <img src="../assets/img/avatar.jpg" alt="">
        <div class="welcome">
          <p class="hy">欢迎</p>
          <p class="name">cqy</p>
        </div>
      </div>
      <div>下拉箭头</div>
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
  align-items: center;
}
.logo {
  display: flex;
}
.logo img {
  height: 60px;
}
.title {
  font-size: 18px;
  margin-top: 17px;
}
.user {
  display: flex;
}
.userinfo {
  display: flex;
  padding: 0 2px;
}
.userinfo img {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  padding: 0 2px;
}
.welcome {
  font-size: 12px;
}
</style>
