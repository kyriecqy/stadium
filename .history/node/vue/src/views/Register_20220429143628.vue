<template>
  <div class="register">
    <div class="container">
      <div class="title">Kyire C 球馆管理系统</div>
      <div class="body">
        <el-form
        label-width="120px"
        class="demo-ruleForm"
        >
          <el-form-item label="Password" >
            <el-input  type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Confirm" >
            <el-input
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="Age" >
            <el-input />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >Submit</el-button>
            <el-button >Reset</el-button>
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