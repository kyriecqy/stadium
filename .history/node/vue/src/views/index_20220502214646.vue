<template>
  <div class="index">
    <topNav></topNav>
    <left-menu></left-menu>
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import topNav from '../components/topNav.vue'
import leftMenu from '../components/leftMenu.vue'
export default ({
  name: 'index',
  components: {
    topNav,
    leftMenu
  },
  setup() {
    
  },
})
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  position: fixed;
  top: 60px;
  left: 200px;
}
</style>