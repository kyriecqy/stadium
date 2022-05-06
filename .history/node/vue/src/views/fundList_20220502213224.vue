<template>
<el-table v-if="tableData.length != 0" style="width: 100%">
    <el-table-column label="创建日期" width="180">
     
    </el-table-column>
    <el-table-column label="类型" width="180">
     
    </el-table-column>
    <el-table-column label="描述" width="180">
     
    </el-table-column>
    <el-table-column label="收入" width="180">
     
    </el-table-column>
    <el-table-column label="支出" width="180">
     
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
