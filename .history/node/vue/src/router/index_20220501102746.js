import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import register from '../views/Register.vue'
import login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
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

export default router
