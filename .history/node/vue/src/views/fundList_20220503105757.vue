<template>
<!--
  <div class="table" >
    <div class="row" v-for="(item, i) in tableData" :key="i">
      <div class="table_item">{{item.date}}</div>
      <div class="table_item">{{item.type}}</div>
      <div class="table_item">{{item.income}}</div>
      <div class="table_item">{{item.expend}}</div>
      <div class="table_item">{{item.describe}}</div>
    </div>
    <button ></button>
  </div>
  -->
  <el-table :data="tableData" style="width: 100%; highlight-current-row; margin-left:10px">
    <el-table-column label="创建时间" width="180" style="">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="类型" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="">{{ scope.row.type }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="收入" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="color: #00d053">{{ scope.row.income }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="支出" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 5px; color: #f56767">{{ scope.row.expend }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="描述" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="">{{ scope.row.describe }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column >
      <template #default="scope">
        <el-button size="small" type="warner" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
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
  data() {
    return {
      tableData: [{}]
    }
  },
  methods: {
     async getProfile(){
      await axios.get('http://localhost:4000/profiles').then(res => {
        //console.log(res);
        this.tableData = res.data
        console.log(this.tableData);
      }).catch(err => {
        console.log(err);
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  },
  mounted() {
    this.getProfile()
  }
  //setup() {
  //  let tableData = reactive([{
  //    date: "2022-5-3",
  //    describe: "门票",
  //    expend: "0",
  //    id: "bdsbafb",
  //    income: "30",
  //    type: "门票",
  //  }])
  //  let tableData = reactive([{
  //  }])
  //  const getProfile = async () => {
  //    await axios.get('http://localhost:4000/profiles').then(res => {
  //      //console.log(res);
  //      tableData = res.data
  //      console.log(tableData);
  //      return tableData
  //    }).catch(err => {
  //      console.log(err);
  //    })
  //  }
  //  getProfile()
  //  
  //  return {
  //    tableData,
  //  }
  //},
})
</script>

<style scoped>
</style>
