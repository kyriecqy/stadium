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
          <el-form-item label="确认密码" prop="rePassword">
            <el-input type="password" v-model="registerUser.rePassword" placeholder="请再次输入密码"/>
          </el-form-item>
          <el-form-item label="身份" prop="identity">
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

<script lang="ts">
import {ref,reactive} from 'vue'
import type { FormInstance } from 'element-plus'
import axios from 'axios'
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
    const ruleFormRef = ref<FormInstance>()
    //用户名验证
    const checkName = (rules, value, callback) => {
      value = registerUser.name
      if (!value) {
        console.log(value);
        return callback(new Error('请输入用户名'))
        
      } else {
        if (value.length < 2 || value.length > 10) {
          callback(new Error('用户名不合法'))
        } else {
          callback()
        }
      }
          
    }
    //email验证
    const checkEmail = (rules, value, callback) => {
      value = registerUser.email
      if (!value) {
        return callback(new Error('请输入邮箱'))
      } else {
        if (!value.includes('@')) {
          return callback(new Error('邮箱不合法'))
        } else {
          callback()
        }
        
      }
    }
    ////密码验证
    //const validatePass = (rules, value, callback) => {
    //  value = registerUser.password
    //  if (value === '') {
    //    callback(new Error('请输入密码'))
    //  } else {
    //    if (value.length < 6 || value.length > 20) {
    //      callback(new Error('密码太长或太短'))
    //    } else {
    //      callback()
    //    }
    //  }
    //}
    ////确认密码验证
    //const validatePass2 = (rules, value, callback) => {
    //  value = registerUser.rePassword
    //  console.log(value);
    //  console.log(registerUser.password);
    //  if (value === '') {
    //    callback(new Error('请输入密码'))
    //  } else {
    //    if (value !== registerUser.password) {
    //      callback(new Error("两次输入的密码不一致"))
    //    } else {
    //      callback()
    //    }
    //  }
    //}
    const validatePass = (rules: any, value: any, callback: any) => {
      value = registerUser.password
      if (!value) {
        callback(new Error('Please input the password'))
      } else {
        if (registerUser.rePassword !== '') {
          if (!ruleFormRef.value) return
          ruleFormRef.value.validateField('rePassword', () => null)
        }
        callback()
      }
    }
    const validatePass2 = (rules: any, value: any, callback: any) => {
      value = registerUser.rePassword
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== registerUser.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }

    let rules = reactive({
      name: [{ validator: checkName, trigger: 'blur' }],
      email: [{ validator: checkEmail, trigger: 'blur' }],
      password: [{ validator: validatePass, trigger: 'blur' }],
      rePassword: [{ validator: validatePass2, trigger: 'blur' }],
    })

    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    
    return {
      registerUser,
      rules,
      submitForm
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
  padding: 20px 20px 20px 0;
  border-radius: 5px;
  box-shadow: 0 5px 10px #cccc;
}
.submit {
  width: 100px;
}
</style>