<template>
  <div class="app">
    <router-view />
  </div>
</template>


<script>
import store from '../store/index'
export default {
  name: 'App',
  setup() {
    console.log(store.state.user);
    console.log(store.state.isAuthenticated);
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
</style>
