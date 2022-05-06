<template>
  <div class="userinfo">
    <div class="userImg">
      <img :src="imgItem" alt="">
    </div>
    <div class="user">
      <div class="user_item">
        <svg class="icon myicon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
        <div class="name">{{user.name}}</div>
      </div>
      <div class="user_item">
        <svg class="icon myicon" aria-hidden="true">
          <use xlink:href="#icon-setting-role"></use>
        </svg>
        <div class="identity">{{user.identify}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
export default ({
  setup() { 
    //将用户信息动态渲染到页面
    let user = store.state.user
    //vite 新的引入方法
    let imgItem = new URL(user.avatar, import.meta.url).href
    
    return {
      imgItem,
      user
    }
  },
})
</script>

<style scoped>
.userinfo {
  width: 100%;
  /*height: 684px;*/
  background-color: rgb(138, 177, 196);
  display: flex;
  position: fixed;
	top: 60px;
	left: 0;
	/*让整个div跟屏幕大小一样，从而达到全屏效果。*/
	height: 100%;
}
.userImg {
  background-color: rgb(209, 236, 249);
  width: 45%;
  padding-top: 270px;
}
.userImg img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-left: 300px;
}
.user {
  width: 55%;
  padding-top: 300px;
}
.user_item {
  display: flex;
  padding-left: 50px;
  padding-bottom: 10px;
}
.myicon {
  font-size: 20px;
}
</style>
