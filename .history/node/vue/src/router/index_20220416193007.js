import { createRouter, createWebHashHistory } from 'vue-router'
import foo from '../components/foo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: foo
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
