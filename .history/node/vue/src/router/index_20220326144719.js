import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mlist from '../views/Mlist.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mlist',
    name: 'mlist',
    component: Mlist
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mine',
    name: 'mine',
    beforeEnter(to, from, next) {
      console.log(store.state.user);
      if(store.state.user.isLogin){
        next()
      }else {
        next('/login')
      }
      
    },
    component: Mine
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
