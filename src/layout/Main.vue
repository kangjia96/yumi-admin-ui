<script setup>
defineOptions({ name: 'Main' })
</script>

<template>
  <main class="main">
    <el-scrollbar height="calc(100vh - 60px - 40px - 20px)">
      <router-view />
    </el-scrollbar>
  </main>
</template>

<style scoped>
.main {
  background: var(--color-background-soft);
  padding: 10px;
}
</style>
