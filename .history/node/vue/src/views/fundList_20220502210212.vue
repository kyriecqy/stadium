<template>
  
</template>

<script>
import { Timer } from '@element-plus/icons-vue'
import {ref, reactive} from 'vue'
import store from '../store/index'
import axios from 'axios'
export default ({
  setup() {
    let tabelData = reactive({})

    const getProfile = async () => {
      //await axios.get('http://localhost:4000/profiles')
    }
    getProfile()

    return {
      tabelData
    }
  },
})
</script>

<style scoped>

</style>
