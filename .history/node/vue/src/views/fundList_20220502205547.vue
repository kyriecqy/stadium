<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Date" width="180">
      <template >
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{}}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="180">
      <template>
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{}}</div>
            <div>address: {{  }}</div>
          </template>
          <template >
            <el-tag>{{}}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template>
        <el-button size="small" 
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Timer } from '@element-plus/icons-vue'
export default ({
  setup() {
    
  },
})
</script>

<style scoped>

</style>
