<script setup>
defineOptions({ name: 'Pagination' })
defineProps({
  layout: { type: String, default: 'total, sizes, prev, pager, next' },
  total: { type: Number, default: 0 }
})

const pageNum = defineModel('pageNum', { type: Number, default: 1 })
const pageSize = defineModel('pageSize', { type: Number, default: 10 })

const emit = defineEmits(['refresh'])
const handleSizeChange = (val) => {
  pageSize.value = val
  emit('refresh')
}
const handleCurrentChange = (val) => {
  pageNum.value = val
  emit('refresh')
}
</script>

<template>
  <el-pagination
    class="pagination"
    v-model:current-page="pageNum"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    :layout="layout"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style scoped>
.pagination {
  float: right;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
