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
      <div class="arrow">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
 
<script>
import { ArrowDown } from '@element-plus/icons-vue'
export default ({
  components: {
    ArrowDown
  },
  setup() {
    
  },
})
</script>

<style scoped>
.topNav {
  width: 100%;
  height: 60px;
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
  justify-content: space-around;
  width: 150px;
}
.userinfo {
  display: flex;
  justify-content: space-around;
  width: 118px;
}
.userinfo img {
  height: 40px;
  width: 40px;
  border-radius: 50px;
}
.welcome {
  font-size: 12px;
  margin-top: 4px;
}
.arrow {
  margin-top: 8px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
