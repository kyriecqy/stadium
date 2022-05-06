import axios from 'axios'
// 请求拦截
axios.interceptors.request.use(
  config => {
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
    return response
  },
  error => {
    //获取错误状态码
    const { status } = error.response
    // 401 表示token失效
    if(status == 401) {
      console.log('token失效,请重新登录');
      //清除token
      localStorage.removeItem('login_token')
    }
    return Promise.reject(error)
  }
)

export default axios