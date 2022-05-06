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

</style>