<script setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'TopNav' })

const router = useRouter()
console.log(router.currentRoute.value)

const routerList = [
  {
    path: '/dashboard',
    name: '首页',
    icon: 'HomeFilled'
  },
  {
    path: '/audit',
    name: '审计',
    icon: 'Document'
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'Setting'
  }
]
</script>

<template>
  <nav>
    <div
      v-for="item in routerList"
      :class="{ active: router.currentRoute.value.path.includes(item.path) }"
      class="top-menu-item"
      @click="router.push(item.path)"
    >
      {{ item.name }}
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 20px;
  line-height: 60px;
  font-size: 20px;

  .top-menu-item {
    cursor: pointer;

    &:hover {
      color: var(--el-color-primary);
    }
  }

  .active {
    color: var(--el-color-primary);
  }
}
</style>
