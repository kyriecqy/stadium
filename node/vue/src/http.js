import axios from 'axios'
import router from './router/index'
import { ElLoading,ElMessage } from 'element-plus'
// 请求拦截
let loading;
let startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: '拼命加载中。。。',
    background: 'rgba(0,0,0,0.7)'
  })
}

let endLoading = () => {
  loading.close()
}
axios.interceptors.request.use(
  config => {
    //加载动画
    startLoading()
    //配置统一的请求头
    if(localStorage.login_token) {
      config.headers.Authorization = localStorage.login_token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    //结束动画
    endLoading()
    return response
  },
  error => {
    endLoading()
    //获取错误状态码
    const { status } = error.response
    // 401 表示token失效
    if(status == 401) {
      console.log('token失效,请重新登录');
      //清除token
      localStorage.removeItem('login_token')
      router.push('/login')
    }
    ElMessage.error(error.response.data)
    return Promise.reject(error)
  }
)

export default axios