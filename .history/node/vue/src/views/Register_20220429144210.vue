<template>
  <div class="register">
    <div class="container">
      <div class="title">Kyire C 球馆管理系统</div>
      <div class="body">
        <el-form v-model="registerUser" :rules="rules" ref="registerForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="用户名" >
            <el-input autocomplete="off" placeholder="请输入用户名"/>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'register',
  setup() {
    
  },
})
</script>

<style scoped>
.register {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.container {
  width: 300px;
  height: 400px;
  background-color: skyblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(70%,-50%);
  text-align: center;
}
</style>