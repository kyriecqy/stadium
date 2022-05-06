<template>
  
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
