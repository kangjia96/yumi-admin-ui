<script setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'TopNav' })

const router = useRouter()
console.log(router.currentRoute.value)
</script>

<template>
  <nav>
    <div class="top-menu-item">首页</div>
    <div class="top-menu-item">审计</div>
    <div class="top-menu-item">系统管理</div>
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
}
</style>
