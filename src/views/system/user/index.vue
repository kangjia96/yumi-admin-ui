<script setup>
import TableTools from '@/components/TableTools/index.vue'
import Pagination from '@/components/Pagination/index.vue'

const queryForm = ref({
  username: '',
  status: null,
  createTime: [],
  pageNum: 1,
  pageSize: 10
})
const userListAll = ref([])
const userList = ref([])
onMounted(() => {
  for (let i = 0; i < 37; i++) {
    userListAll.value.push({
      id: i + 1,
      username: 'admin',
      nickname: '管理员',
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      gender: 1,
      email: 'admin@qq.com',
      phone: '13888888888',
      remark: '管理员aaa',
      status: 0,
      createTime: '2023-01-01'
    })
  }
  getUserList()
})
const getUserList = () => {
  const start = (queryForm.value.pageNum - 1) * queryForm.value.pageSize
  userList.value = userListAll.value.slice(start, queryForm.value.pageSize + start)
}
</script>

<template>
  <div>
    <el-form :model="queryForm" label-width="80px" inline label-position="left">
      <el-form-item label="用户名">
        <el-input style="width: 200px" v-model="queryForm.username" />
      </el-form-item>
      <el-form-item label="状态">
        <el-select style="width: 100px" v-model="queryForm.status" placeholder="请选择">
          <el-option label="正常" :value="0" />
          <el-option label="禁用" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="queryForm.createTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="Search">查询</el-button>
        <el-button icon="RefreshRight">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 中间搜索区域 -->
    <div style="margin-bottom: 10px">
      <el-button plain type="primary" icon="Plus">添加</el-button>
      <el-button plain type="danger" icon="Delete">删除</el-button>
      <TableTools />
    </div>

    <el-table
      :data="userList"
      border
      stripe
      width="100%"
      max-height="calc(100vh - 60px - 40px - 20px - 220px)"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column prop="id" label="ID" min-width="80" />
      <el-table-column prop="username" label="用户名" min-width="120" />
      <el-table-column prop="nickname" label="昵称" min-width="120" />
      <el-table-column prop="status" label="状态" min-width="80">
        <template #default="scope">
          <el-tag v-if="scope.row.status === 0" type="success">正常</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" min-width="120" />
      <el-table-column label="操作" width="280" fixed="right">
        <template #default="scope">
          <el-button icon="Search" link type="info" size="small">查看</el-button>
          <el-button icon="Edit" link type="primary" size="small">编辑</el-button>
          <el-button icon="RefreshRight" link type="warning" size="small">重置密码</el-button>
          <el-button icon="Delete" link type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination
      v-if="userListAll.length > 0"
      :total="userListAll.length"
      v-model:page-size="queryForm.pageSize"
      v-model:current-page="queryForm.pageNum"
      @refresh="getUserList"
    />
  </div>
</template>

<style scoped></style>
