<script setup>
import HeaderView from '@/layout/Header.vue'
import Sidebar from '@/layout/Sidebar.vue'
import Main from '@/layout/Main.vue'
import Footer from '@/layout/Footer.vue'
</script>

<template>
  <div class="app">
    <HeaderView class="header" />
    <div class="middle">
      <Sidebar class="aside" />

      <Main class="main" />
    </div>
    <Footer class="footer" />
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
  gap: 10px;
  background-color: var(--color-background);

  display: flex;

  .aside {
    width: 200px;
    min-width: 200px;
    //background-color: var(--color-background-soft);
  }
  .main {
    flex: 1;
    width: calc(100vw - 230px);
    min-width: calc(100vw - 230px);
    height: calc(100vh - 60px - 40px - 20px);
    min-height: calc(100vh - 60px - 40px - 20px);
  }
}

.footer {
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: var(--color-background-soft);
}
</style>
