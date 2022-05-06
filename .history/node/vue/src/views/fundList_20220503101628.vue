<template>
  <div class="table" >
    <div class="row" v-for="(item, i) in tableData" :key="i">
      <div class="table_item">{{item.date}}</div>
      <div class="table_item">{{item.type}}</div>
      <div class="table_item">{{item.income}}</div>
      <div class="table_item">{{item.expend}}</div>
      <div class="table_item">{{item.describe}}</div>
    </div>
    <button @click="test"></button>
  </div>
</template>

<script>
import { Timer } from '@element-plus/icons-vue'
import {ref, reactive,toRaw} from 'vue'
import store from '../store/index'
import axios from '../http.js'
export default ({
  setup() {
    let tableData = reactive([{
      
    }])
    const test = () => {
      console.log(tableData)
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
      test
    }
  },
})
</script>

<style scoped>

</style>
