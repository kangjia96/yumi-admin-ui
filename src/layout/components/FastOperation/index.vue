<script setup>
import { FullScreen, Monitor, Moon, Search, Setting, Sunny, User } from '@element-plus/icons-vue'

defineOptions({ name: 'FastOperation' })
</script>

<template>
  <div class="fast-menu">
    <div class="fast-menu-item">
      <el-icon size="20" color="var(--text-color)">
        <Search />
      </el-icon>
    </div>

    <el-dropdown>
      <template #default>
        <div class="fast-menu-item" style="font-size: 18px">简</div>
      </template>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>关于</el-dropdown-item>
          <el-dropdown-item>帮助</el-dropdown-item>
          <el-dropdown-item divided>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 颜色主题 -->
    <el-dropdown>
      <el-icon class="fast-menu-item" size="20" color="var(--text-color)">
        <Sunny />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon size="20"><Monitor /></el-icon>
            跟随系统
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon size="20"><Moon /></el-icon>
            暗色模式
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon size="20"><Sunny /></el-icon>
            浅色模式
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <div class="fast-menu-item">
      <el-icon size="20">
        <FullScreen />
      </el-icon>
    </div>

    <el-dropdown>
      <el-icon size="20" color="var(--text-color)" class="fast-menu-item">
        <User />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>关于</el-dropdown-item>
          <el-dropdown-item>帮助</el-dropdown-item>
          <el-dropdown-item divided>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <div class="fast-menu-item">
      <el-icon size="20" color="var(--text-color)">
        <Setting />
      </el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fast-menu {
  display: flex;

  .fast-menu-item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);

    &:hover {
      background-color: #2b2b2b;
      cursor: pointer;
    }
  }

  // 去除 dropdown 黑框
  :deep(.el-tooltip__trigger:focus-visible) {
    outline: none;
  }
}
</style>
