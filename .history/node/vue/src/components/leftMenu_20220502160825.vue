<template>
  <el-row class="tac">
    <el-col :span="5">
      <el-menu
        active-text-color="rgb(34, 170, 238)"
        background-color="#89cff5"
        class="el-menu-vertical-demo"
        text-color="#fff"
        router
      >
        <el-menu-item  index="/">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item  index="/userinfo">
          <el-icon><icon-menu /></el-icon>
          <span>个人信息</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>资金管理</span>
          </template>
          <el-menu-item >资金流水</el-menu-item>
          <el-menu-item >后勤支出</el-menu-item>
        </el-sub-menu>
        <el-menu-item  >
          <el-icon><icon-menu /></el-icon>
          <span>会员</span>
        </el-menu-item>
        <el-menu-item  >
          <el-icon><icon-menu /></el-icon>
          <span>预约</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
export default ({
  setup() {
    

    return {
    }
  },
})
</script>

<style scoped>
.tac {
  z-index: 2;
}
</style>