<template>
  <el-table v-if="tableData.length != 0" :data="tableData">
    <el-table-column  prop="date" label="创建日期" width="180">
      <template #default="scope" >
        <div style="display: flex; align-items: center" >
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
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Timer } from '@element-plus/icons-vue'
import {ref, reactive,toRaw} from 'vue'
import store from '../store/index'
import axios from '../http.js'
export default ({
  setup() {
    let tableData = reactive([{
      date: "2022-5-2",
      describe: "门票",
      expend: "0",
      id: "cdavwasvdbve",
      income: "60",
      type: "门票",
    }])
    const handleEdit = (index, row) => {
      console.log(index, row)
      console.log(tableData);
    }
    const handleDelete = (index, row) => {
      console.log(index, row)
    }

    const getProfile = async () => {
      await axios.get('http://localhost:4000/profiles').then(res => {
        //console.log(res);
        tableData = res.data
        console.log(tableData);
        return tableData
      }).catch(err => {
        console.log(err);
      })
    }
    getProfile()
    //let RawtableData = toRaw(tableData)
    
    return {
      tableData,
      //RawtableData,
      handleEdit,
      handleDelete
    }
  },
})
</script>

<style scoped>

</style>
