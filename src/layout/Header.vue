<script setup>
import FastOperation from '@/layout/components/FastOperation/index.vue'
import TopNav from '@/layout/components/TopNav/index.vue'
import Logo from '@/layout/components/Logo/index.vue'
</script>

<template>
  <header class="header">
    <div class="header-left">
      <Logo />

      <!-- 一级菜单区域 -->
      <TopNav />
    </div>

    <!-- 快捷操作区域 -->
    <FastOperation />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  .header-left {
    display: flex;
    gap: 30px;
  }
}
</style>
