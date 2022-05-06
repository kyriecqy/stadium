<template>
  <div class="container" v-if="isShow">
    
  </div>
</template>

<script>
export default ({
  props: ['show'],
  data() {
    return {
      isShow: this.show
    }
  },
  methods: {
    
  }
})
</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>