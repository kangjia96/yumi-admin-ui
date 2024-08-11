<script setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'Sidebar' })

const router = useRouter()

console.log(router.getRoutes())
</script>

<template>
  <aside>
    <nav></nav>
  </aside>
</template>

<style scoped></style>
