<script setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'Sidebar' })

const router = useRouter()
const sonRoutes = ref([])
watch(
  () => router.currentRoute.value,
  () => {
    const level1Path = '/' + router.currentRoute.value.path.split('/')[1]

    sonRoutes.value = router.currentRoute.value.matched.filter(
      (item) => item.path === level1Path
    )[0].children
  },
  { immediate: true }
)
</script>

<template>
  <aside>
    <nav class="nav">
      <el-menu :default-active="router.currentRoute.value.path">
        <el-menu-item
          v-for="item in sonRoutes"
          :key="item.path"
          :index="item.path"
          @click="router.push(item.path)"
        >
          {{ item.meta.title }}
        </el-menu-item>
      </el-menu>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
.nav {
  //height: 300px;
  padding: 10px;
  background-color: var(--color-background-soft);
  border-radius: 5px;

  .el-menu {
    border: none;
  }
}
</style>
