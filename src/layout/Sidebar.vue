<script setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'Sidebar' })

const router = useRouter()

console.log(router.getRoutes())
</script>

<template>
  <aside>
    <nav class="nav"></nav>
  </aside>
</template>

<style scoped>
.nav {
  height: 300px;
  background-color: var(--color-background-soft);
  border-radius: 5px;
}
</style>
