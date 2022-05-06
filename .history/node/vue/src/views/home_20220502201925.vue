<template>
  <div class="home">
    <div class="title">
      More History
    </div>
  </div>
</template>

<script>
export default ({
  setup() {
    
  },
})
</script>

<style scoped>
.home {
  /* 背景图片 不平铺重复 */
	background: url(../assets/img/bg4.jpg) no-repeat;
	/*让整个div固定在屏幕的最上方和最左方 */
	position: fixed;
	top: 60px;
	left: 0;
	/*让整个div跟屏幕大小一样，从而达到全屏效果。*/
	width: 100%;
	height: 100%;
}
.title {
  position: fixed;
  right: 0;
  top: 60px;
}
</style>