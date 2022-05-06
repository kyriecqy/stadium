<template>
  <div>
    <el-dialog v-model="show" title="资金信息" append-to-body="false">
      
    </el-dialog>
  </div>
</template>

<script>
export default ({
  props: {
    dialog: Object
  },
  setup() {
    console.log(dialog);
    let show = true

    return {
      show
    }
  },
})
</script>

<style scoped>

</style>