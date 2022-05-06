<template>
  <div class="register">
    <div class="container">
      <div class="title">Kyire C 球馆管理系统</div>
      <div class="body">
        <el-form v-model="registerUser" :rules="rules" ref="registerForm" label-width="120px" class="registerForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入用户名"/>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入邮箱"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input type="password" v-model="registerUser.rePassword" placeholder="请再次输入密码"/>
          </el-form-item>
          <el-form-item label="身份" prop="">
            <el-select v-model="registerUser.identity" placeholder="请选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
            </el-select>
          </el-form-item>

          <el-button type="primary" class="submit" @click="submitForm()">注册</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default ({
  name: 'register',
  setup() {
    let registerUser = reactive({
      name: '',
      email: '',
      password: '',
      rePassword: '',
      identity: ''
    })
    //用户名验证
    const checkName = (rules, value, callback) => {
      if (!value) {
        console.log(registerUser.name);
        return callback(new Error('请输入用户名'))
        
      } else {
        if (value < 2 || value > 15) {
          callback(new Error('用户名要求在2~15个字符之间'))
        } else {
          callback()
        }
      }
          
    }
    ////email验证
    //const checkEmail = (rules, value, callback) => {
    //  if (!value) {
    //    return callback(new Error('请输入邮箱'))
    //  } else {
    //    callback()
    //  }
    //}
    ////密码验证
    //const validatePass = (rules, value, callback) => {
    //  if (value === '') {
    //    callback(new Error('请输入密码'))
    //  } else {
    //    if (value < 6 || value > 20) {
    //      callback(new Error('密码要求在6~20个字符之间'))
    //    } else {
    //      callback()
    //    }
    //  }
    //}
    ////确认密码验证
    //const validatePass2 = (rules, value, callback) => {
    //  if (value === '') {
    //    callback(new Error('请输入密码'))
    //  } else if (value !== registerUser.password) {
    //    callback(new Error("两次输入的密码不一致"))
    //  } else {
    //    callback()
    //  }
    //}
    let rules = {
      name: [{ validator: checkName, trigger: 'blur' }],
      //email: [{ validator: checkEmail, trigger: 'blur' }],
      //password: [{ validator: validatePass, trigger: 'blur' }],
      //rePassword: [{ validator: validatePass2, trigger: 'blur' }],
    }
    return {
      registerUser,
      rules
    }
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
.title {
  color: rgba(249, 240, 240, 0.8);
  font-weight: 900;
  font-size: 18px;
}
.container {
  width: 300px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(70%,-50%);
  text-align: center;
}
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px #cccc;
}
.submit {
  width: 100%;
}
</style>