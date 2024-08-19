<script setup>
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/stores/modules/permission.js'

defineOptions({ name: 'TopNav' })

const router = useRouter()
// console.log(router.currentRoute.value)
const permissionStore = usePermissionStore()
const routerList = ref(permissionStore.topMenu)
</script>

<template>
  <nav>
    <div
      v-for="item in routerList"
      :key="item.path"
      :class="{ active: router.currentRoute.value.path.includes(item.path) }"
      class="top-menu-item"
      @click="router.push(item.path)"
    >
      {{ item.meta.title }}
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
