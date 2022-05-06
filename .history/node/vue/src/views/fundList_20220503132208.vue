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
  <div>
    <div class="btn">
      <button class="btn_item" @click="add">添加</button>
    </div>
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
          <el-button size="small" type="warning" @click="handleEdit(scope.$index, scope.row)"
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
    <teleport to="body">
      <dialog></dialog>
    </teleport>
  </div>
</template>

<script>
import { Timer } from '@element-plus/icons-vue'
import store from '../store/index'
import axios from '../http.js'
import Dialog from '../components/dialog.vue'
export default ({
  components: {
    Dialog
  },
  data() {
    return {
      tableData: [{}],
      dialog: {
        show: false
      }
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
    },
    add() {
      this.dialog.show = true
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
.btn {
  position: relative;
  right: 0;
}
.btn_item {
  width: 50px;
  background-color: rgb(85, 179, 242);
  border: 1px solid rgb(85, 179, 242);
  border-radius: 3px;
  margin-left: 980px;
  margin-top: 15px;
}
</style>
