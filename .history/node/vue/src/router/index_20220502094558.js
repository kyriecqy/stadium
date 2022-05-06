import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import register from '../views/Register.vue'
import login from '../views/login.vue'
import store from '../store/index'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '',
        component: home
      },
      {
        path: 'home',
        component: home
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//前置导航守卫，当没有完成登录时只可以访问注册和登录页面
router.beforeEach((to, from, next) => {
  const isLogin = store.state.isAuthenticated ? true : false
  if(to.path == '/register' || to.path == '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
