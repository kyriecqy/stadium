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
      <el-form label="按照时间筛选:" class="time_picker">
        <el-time-picker
          v-model="value2"
          is-range
          arrow-control
          range-separator="To"
          start-placeholder="Start time"
          end-placeholder="End time"
        />
      </el-form>
      <button class="btn_item_search" @click="search">筛选</button>
      <button class="btn_item_add" @click="add">添加</button>
    </div>
    <div class="table">
      <el-table :data="page_tableData" style="width: 100%; highlight-current-row; margin-left:10px">
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
    </div>
    <div class="fenye">
      <el-pagination
        :page-sizes="[5,10]"
        :currentPage="paginations.page_index"
        :page-size="paginations.page_size"
        :small="true"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="paginations.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <!-- 编辑和删除功能 -->
    <div>
      <el-dialog v-model="dialog.show" :title="dialog.title" @close="clearProfile()">
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
            <el-button @click="dialog.show = false">取消</el-button>
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
      //数据库中的全部具体信息
      tableData: [{}],
      //分页操作之后每一页的数据
      page_tableData: [{}],
      //添加、编辑等弹框的数据
      dialog: {
        show: false,
        title: '',
        option: ''
      },
      //目前进行操作的数据
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
      ],
      paginations: {
        page_index: 1, //当前处于那一页
        total: 0,
        page_size: 5, //每页显示的条目数
      }
    }
  },
  methods: {
    //从数据库去具体数据
     async getProfile(){
      await axios.get('http://localhost:4000/profiles').then(res => {
        //console.log(res);
        this.tableData = res.data
        console.log(this.tableData);
        this.setPaginations()
      }).catch(err => {
        console.log(err);
      })
    },
    //分页数据
    setPaginations() {
      this.paginations.total = this.tableData.length
      this.page_tableData = this.tableData.filter((item,index) => {
        return index < this.paginations.page_size
      })
    },
    //添加数据
    add() {
      this.dialog = {
        show: true,
        title: "添加资金信息",
        option: 'add'
      }
    },
    //修改数据
    handleEdit(index, row) {
      console.log(index, row)
      this.dialog = {
        show: true,
        title: "修改资金信息",
        option: 'update'
      }
      this.profile = {
        date: row.date,
        type: row.type,
        income: row.income,
        expend: row.expend,
        describe: row.describe,
        id: row.id
      }
    },
    //删除数据
    handleDelete(index, row) {
      const id = {
        id: row.id
      }
      //console.log(id);
      axios.post('http://localhost:4000/profiles/delete', id).then(res => {
        //console.log(res);
        if(res.data.status === 0) {
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
          this.getProfile()
        } else {
          ElMessage({
            type: 'error',
            message: '删除失败',
          })
        }
      }).catch(err => {
        ElMessage({
          type: 'error',
          message: '删除失败',
        })
        console.log(err);
      })
    },
    //关闭弹窗是清空弹窗中输入的内容
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
    //确定按钮
    onSubmit() {
      //console.log(this.profile.id);
      const url = this.dialog.option == 'add' ? 'add' : `update`
      axios.post(`http://localhost:4000/profiles/${url}`, this.profile).then(res => {
        console.log(res);
        this.dialog.show = false
        if(this.dialog.option == 'add') {
          ElMessage({
            type: 'success',
            message: '添加成功',
          })
        } else {
          ElMessage({
            type: 'success',
            message: '修改成功',
          })
        }
        this.getProfile()
      }).catch(err => {
        if(this.dialog.option == 'add') {
          ElMessage({
            type: 'error',
            message: '添加失败',
          })
        } else {
          ElMessage({
            type: 'error',
            message: '修改失败',
          })
        }
        console.log(err);
      })
    },
    handleSizeChange(page_size) {
      this.paginations.page_index = 1
      this.paginations.page_size = page_size
      this.page_tableData = this.tableData.filter((item,index) => {
        return index < page_size
      })
    },
    handleCurrentChange(page) {
      // 这一页起始数据在所有数据中的索引
      let index = this.paginations.page_size * (page - 1)
      // 数据的总数，也表示这一页最后一个数据的索引(最后一页不一定排满)
      let nums = this.paginations.page_size * page
      //定义一个空的容器
      let table = []

      for(let i = index; i < nums; i++) {
        if(this.tableData[i]) { 
          table.push(this.tableData[i])
        }
      }
      this.page_tableData = table
      this.paginations.page_index = page
    } 
  },
  mounted() {
    this.getProfile()
  },
})
</script>

<style scoped>
.btn {
  position: relative;
  right: 0;
  height: 80px;
}
.btn_item_add {
  width: 50px;
  background-color: rgb(85, 179, 242);
  border: 1px solid rgb(85, 179, 242);
  color: #fff;
  border-radius: 3px;
  position: relative;
  top: 5px;
  left: 980px;
}
.btn_item_search {
  width: 50px;
  background-color: rgb(85, 179, 242);
  border: 1px solid rgb(85, 179, 242);
  color: #fff;
  border-radius: 3px;
  position: relative;
  top: 7px;
  left: 400px;
}
.time_picker {
  position: relative;
  top: 35px;
  left: 20px;
}
.el-dialog {
  z-index: 3;
}
.fenye {
  margin-top: 10px;
  margin-left: 655px;
}
.table {
  height: 250px;
  overflow: hidden;
}
.el-table {
  height: 267px;
  overflow: scroll;
}
</style>
