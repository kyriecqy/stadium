import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import register from '../views/Register.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
