<template>
  <div class="login">
    <div class="container">
      <div class="title">Kyire C 球馆管理系统</div>
      <div class="body">
        <el-form v-model="loginUser" :rules="rules" ref="loginForm" label-width="120px" class="loginForm">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password" />
          </el-form-item>
          <el-button type="primary" class="submit" @click="submitForm()">登录</el-button>
          <div class="zhuce">
            <p>还没有账号?现在<router-link to="/register">注册</router-link></p>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
import {mapActions} from 'vuex'
import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import jwt_decode from 'jwt-decode'
export default ({
  name: 'login',
  setup() {
    let loginUser = reactive({
      email: '',
      password: ''
    })
    //email验证
    const checkEmail = (rules, value, callback) => {
      value = loginUser.email
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
    //密码验证
    const validatePass = (rules, value, callback) => {
      value = loginUser.password
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (value.length < 6 || value.length > 20) {
          callback(new Error('密码太长或太短'))
        } else {
          callback()
        }
      }
    }
    let rules = reactive({
      email: [{ validator: checkEmail, trigger: 'blur' }],
      password: [{ validator: validatePass, trigger: 'blur' }]
    })
    
    // 登录函数
    const submitForm =  async () => {
      let user = {
        password: loginUser.password,
        email: loginUser.email
      }
      await axios.post('http://localhost:4000/api/login', user).then(res => {
        //console.log(res);
        //console.log(res.data.token);
        if(res.data.status === 0) {
          //得到服务器返回的token
          const token = res.data.token
          console.log(token);

          //将token存到localStorage
          localStorage.setItem('login_token', token)

          // 解析token
          const decode = jwt_decode(token)
          //console.log(decode);

          console.log('登陆成功');

          //路由跳转
          router.push({path: '/'})

          //将user存储到vuex
          store.dispatch('setUser',decode)
          console.log(store.state.user);
        }
        else console.log(res.data.msg);
      }).catch(err => {
        console.log('err');
        
      })
    }
    return {
      loginUser,
      rules,
      submitForm,
    }
  },
})
</script>

<style scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.body {
  position: relative;
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
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 20px 20px 0;
  border-radius: 5px;
  box-shadow: 0 5px 10px #cccc;
}
.submit {
  width: 100px;
}
.zhuce {
  font-size: 12px;
}
.zhuce a {
  color: skyblue;
}
</style>