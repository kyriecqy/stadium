<template>
  <div class="app">
    <router-view />
  </div>
</template>


<script>
import store from './store/index'
import jwt_decode from 'jwt-decode'
import {onBeforeUnmount} from 'vue'
export default {
  name: 'App', 
  setup() {
    //判断decode是否为空
    const isEmpty = value => {
      if(value == '' || value == undefined || value == null) return true
      return false
    }

    if(localStorage.login_token) {
      const decode = jwt_decode(localStorage.login_token)

      store.dispatch('setUser',decode)
      console.log(store.state.user);

      store.dispatch('setAuthenticated', !isEmpty(decode))
      console.log(store.state.isAuthenticated);
    }

  }
}
</script>


<style>
html,
body,
.app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
p {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
