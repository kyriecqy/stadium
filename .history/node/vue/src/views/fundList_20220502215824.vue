<template>
<!--
  <el-table v-if="tableData.length != 0" :data="tableData">
    <el-table-column  prop="date" label="创建日期" width="180">
     
    </el-table-column>
    <el-table-column prop="type" label="类型" width="180">
     
    </el-table-column>
    <el-table-column prop="describe" label="描述" width="180">
     
    </el-table-column>
    <el-table-column prop="income" label="收入" width="180">
     
    </el-table-column>
    <el-table-column prop="expend" label="支出" width="180">
     
    </el-table-column>
  </el-table>
  -->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="type" label="type" width="120" />
    <el-table-column prop="describe" label="describe" width="120" />
    <el-table-column prop="income" label="income" width="120" />
    <el-table-column prop="expend" label="expend" width="600" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" 
          >Detail</el-button
        >
        <el-button type="text" size="small">Edit</el-button>
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
    let tableData = reactive({})

    const getProfile = async () => {
      await axios.get('http://localhost:4000/profiles').then(res => {
        console.log(res);
        tableData = res.data
        //console.log(tableData);
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
