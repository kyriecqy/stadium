<template>
  <el-table v-if="tableData.length != 0" :data="tableData">
    <el-table-column  prop="date" label="创建日期" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center" @click="console.log(scope.row.date)">
          <span style="margin-left: 10px" >{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型" width="180">
     <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.type }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="describe" label="描述" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.describe }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="income" label="收入" width="180">
      <template #default="scope">
       <div style="display: flex; align-items: center">
         <span style="margin-left: 10px">{{ scope.row.income }}</span>
       </div>
      </template>
    </el-table-column>
    <el-table-column prop="expend" label="支出" width="180">
     <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.expend }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Timer } from '@element-plus/icons-vue'
import {ref, reactive} from 'vue'
import store from '../store/index'
import axios from '../http.js'
export default ({
  setup() {
    let tableData = [{}]

    const getProfile = async () => {
      await axios.get('http://localhost:4000/profiles').then(res => {
        console.log(res);
        tableData = res.data
        console.log(tableData);
      }).catch(err => {
        console.log(err);
      })
    }
    getProfile()

    return {
      tableData
    }
  },
})
</script>

<style scoped>

</style>
