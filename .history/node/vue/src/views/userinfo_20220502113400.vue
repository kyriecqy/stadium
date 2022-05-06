<template>
  <div class="userinfo">
    <el-row justify="center" align="middle" class="body">
      <el-col :span="8">
        <div class="user">
          <img :src="imgItem" alt="">
        </div>
      </el-col>
      <el-col :span="16" class="elcol">
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
      imgItem,
      user
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
.userinfo {
  width: 100%;
}
.elcol {
  display: flex;
  flex-direction: column;
}
.user_item {
  display: flex;
}
.myicon {
  font-size: 20px;
}
</style>
