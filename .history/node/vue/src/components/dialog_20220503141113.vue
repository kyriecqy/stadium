<template>
  <div class="container">
    <div class="item">
      <p>创建日期: </p>
      <input type="text">
    </div>
    <div class="item">
      <p>类型: </p>
      <input type="text">
    </div>
    <div class="item">
      <p>收入: </p>
      <input type="text">
    </div>
    <div class="item">
      <p>支出: </p>
      <input type="text">
    </div>
    <div class="item">
      <p>描述: </p>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
    }
  },
  methods: {
    
  }
})
</script>

<style scoped>
.container {
  height: 300px;
  width: 300px;
  background-color: #fff;
  border: 1px solid red;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
}
.item {
  display: flex;
  margin: 20px 20px 10px 20px;
}
.item input {
  margin-left: 10px;
}
</style>