<script setup>
defineOptions({ name: 'TableTools' })
</script>

<template>
  <div class="tools-container">
    <el-tooltip content="刷新">
      <el-button circle icon="Refresh"></el-button>
    </el-tooltip>

    <el-tooltip content="数据导出">
      <el-button circle icon="Download"></el-button>
    </el-tooltip>

    <el-tooltip content="显隐列">
      <el-button circle icon="Operation"></el-button>
    </el-tooltip>
  </div>
</template>

<style scoped>
.tools-container {
  float: right;
  display: flex;
  justify-content: flex-end;
}
</style>
