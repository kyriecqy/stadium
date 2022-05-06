<template>
  <div class="index">
    <topNav></topNav>
    <left-menu></left-menu>
    <router-view></router-view>
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
</style>