<script setup>
import HeaderView from '@/layout/Header.vue'
import Sidebar from '@/layout/Sidebar.vue'
</script>

<template>
  <div class="app">
    <HeaderView class="header" />
    <div class="middle">
      <Sidebar class="aside" />
      <main class="main">
        <router-view />
      </main>
    </div>
    <footer>底部</footer>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: var(--color-background-soft);
}

.middle {
  flex: 1;
  padding: 10px;
  background-color: var(--color-background);

  display: flex;

  .aside {
    width: 200px;
    background-color: #01161e;
  }
  .main {
    flex: 1;
  }
}

footer {
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: var(--color-background-soft);
}
</style>
