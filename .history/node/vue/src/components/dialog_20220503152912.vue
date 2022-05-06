<template>
<!--
  <div class="container" v-if="isShow">
    <div class="item">
      <p>创建日期: </p>
      <input type="text" v-model="profile.date">
    </div>
    <div class="item">
      <p>类型: </p>
      <input type="text" v-model="profile.type">
    </div>
    <div class="item">
      <p>收入: </p>
      <input type="text" v-model="profile.income">
    </div>
    <div class="item">
      <p>支出: </p>
      <input type="text" v-model="profile.expend">
    </div>
    <div class="item">
      <p>描述: </p>
      <input type="text" v-model="profile.describe">
    </div>
    <div class="bottom">
      <button class="success" @click="success">确认</button>
      <button class="fail" @click="fail">取消</button>
    </div>
  </div>
  -->
  <div>
    <el-dialog model-value="isShow" title="Shipping address">
    
    </el-dialog>
  </div>
</template>

<script>
export default ({
  name: 'Dialog',
  
  data() {
    return {
      isShow: this.show,
      profile: {
        date: '',
        type: '',
        icome: '',
        expend: '',
        describe: ''
      }
    }
  },
  methods: {
    success() {
      
    },
    fail() {
      this.isShow = false
    }
  },
  mounted() {
    console.log(this.isShow);
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
  transform: translate(-50%,-50%);
}
.item {
  display: flex;
  margin: 20px 20px 10px 20px;
}
.item input {
  margin-left: 10px;
}
.bottom {
  width: 100%;
  margin-top: 30px;
}
.success {
  margin-left: 55px;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: skyblue;
  color: #fff;
  font-size: 17px;
}
.fail {
  margin-left: 40px;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: rgb(243, 55, 55);
  color: #fff;
  font-size: 17px;
}
</style>