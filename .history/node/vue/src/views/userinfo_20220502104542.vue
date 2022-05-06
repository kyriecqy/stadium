<template>
  <div class="userinfo">
    <el-row justify="center">
      <el-col :span="8">
        <div class="user">
          <img :src="imgItem" alt="">
        </div>
      </el-col>
      <el-col :span="16">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
      </el-col>
    </el-row>
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
      imgItem
    }
  },
})
</script>

<style scoped>
.user img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
</style>
