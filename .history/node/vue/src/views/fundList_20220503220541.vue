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
      <button class="btn_item" @click="show = true">添加</button>
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
    <div>
      <el-dialog v-model="show" title="资金信息" @close="clearProfile()">
        <el-form :model="profile">
          <el-form-item label="创建日期" >
            <el-input v-model="profile.date" autocomplete="off" />
          </el-form-item>
          <el-form-item label="类型" >
            <el-select v-model="profile.type" class="m-2" placeholder="Select" size="small">
            <el-option
              v-for="(item,i) in type_list" 
              :key="i"
              :label="item"
              :value="item"
            />
          </el-select>
          </el-form-item>
          <el-form-item label="收入" >
            <el-input v-model="profile.income" autocomplete="off" />
          </el-form-item>
          <el-form-item label="支出" >
            <el-input v-model="profile.expend" autocomplete="off" />
          </el-form-item>
          <el-form-item label="描述" >
            <el-input v-model="profile.describe" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="show = false">取消</el-button>
            <el-button type="primary" @click="onSubmit()"
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
    
  </div>
</template>

<script>
import store from '../store/index'
import axios from '../http.js'
import { ElMessage } from 'element-plus'
//随机生成id
import { nanoid } from 'nanoid'
export default ({
  components: {
  },
  data() {
    return {
      tableData: [{}],
      show: false,
      profile: {
        date: '',
        type: '',
        icome: '',
        expend: '',
        describe: '',
        id: nanoid()
      },
      type_list: [
        '门票',
        '包场',
        '食品',
        '租球'
      ]
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
    clearProfile() {
      this.profile = {
        date: '',
        type: '',
        icome: '',
        expend: '',
        describe: '',
        id: nanoid()
      }
    },
    onSubmit() {
      //console.log(this.profile);
      axios.post('http://localhost:4000/profiles/add', this.profile).then(res => {
        console.log(res);
        this.show = false
        ElMessage({
          type: 'success',
          message: '添加成功',
        })
      }).catch(err => {
        ElMessage({
          type: 'error',
          message: '添加失败',
        })
        console.log(err);
      })
    }
  },
  mounted() {
    this.getProfile()
  },
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
.el-dialog {
  z-index: 3;
}
</style>
