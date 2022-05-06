<template>
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
    //getProfile = async () => {
    //  await axios.get('http://localhost:4000/profiles').then(res => {
    //    //console.log(res);
    //    this.tableData = res.data
    //    console.log(this.tableData);
    //  }).catch(err => {
    //    console.log(err);
    //  })
    //}
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
  //  const test = () => {
  //    console.log(tableData)
  //  }
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
  //  //let RawtableData = toRaw(tableData)
  //  
  //  return {
  //    tableData,
  //    test
  //  }
  //},
})
</script>

<style scoped>

</style>
