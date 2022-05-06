<template>
  <div class="index">
    <topNav></topNav>
    <router-view></router-view>
  </div>
</template>

<script>
import topNav from '../components/topNav.vue'
export default ({
  name: 'index',
  components: {
    topNav
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