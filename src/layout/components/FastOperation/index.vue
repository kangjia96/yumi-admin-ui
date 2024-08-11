<script setup>
import { Aim, FullScreen, Search, Setting, User } from '@element-plus/icons-vue'
import { useSettingStore } from '@/stores/modules/setting.js'
import { THEME_SCHEMA_LIST } from '@/utils/setting/theme.js'
import Layer from '@/utils/index.js'
import Ball from '@/components/Ball/index.vue'
import { useFullscreen } from '@vueuse/core'

defineOptions({ name: 'FastOperation' })

const { changeTheme, theme } = useSettingStore()
const currentTheme = ref(theme)
const setTheme = (command, e) => {
  changeTheme(command, e)
  currentTheme.value = command
}

const { toggle, isFullscreen } = useFullscreen()

const handleUserOperation = (command) => {
  console.log(command)
  switch (command) {
    case 'about':
      Layer.comingSoon()
      break
    case 'help':
      Layer.comingSoon()
      break
    case 'password':
      Layer.comingSoon()
      break
    case 'logout':
      Layer.comingSoon()
      break
  }
}
</script>

<template>
  <div class="fast-menu">
    <!-- 快速搜索 -->
    <el-tooltip content="快速搜索">
      <div class="fast-menu-item" @click="Layer.comingSoon()">
        <el-icon size="20" color="var(--text-color)">
          <Search />
        </el-icon>
      </div>
    </el-tooltip>

    <!-- 国际化 -->
    <el-dropdown @command="Layer.comingSoon()">
      <template #default>
        <div class="fast-menu-item" style="font-size: 18px">简</div>
      </template>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>简体中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 主题模式 -->
    <el-dropdown @command="setTheme">
      <el-icon class="fast-menu-item" size="20">
        <Component :is="THEME_SCHEMA_LIST[currentTheme].icon" />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(value, key) in THEME_SCHEMA_LIST" :command="key">
            <el-icon size="20"><Component :is="value.icon" /> </el-icon>
            {{ value.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 全屏 -->
    <el-tooltip :content="isFullscreen ? '退出全屏' : '全屏'">
      <div class="fast-menu-item" @click="toggle">
        <el-icon size="20">
          <FullScreen v-if="!isFullscreen" />
          <Aim v-else />
        </el-icon>
      </div>
    </el-tooltip>

    <!-- 用户操作 -->
    <el-dropdown @command="handleUserOperation">
      <el-icon size="20" color="var(--text-color)" class="fast-menu-item">
        <User />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item disabled>
            登录用户：<Ball type="success" text="admin" size="small" />
          </el-dropdown-item>
          <el-dropdown-item command="about" divided>关于</el-dropdown-item>
          <el-dropdown-item command="help">帮助</el-dropdown-item>
          <el-dropdown-item command="password" divided>修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 设置 -->
    <el-tooltip content="设置">
      <div class="fast-menu-item" @click="Layer.comingSoon()">
        <el-icon size="20" color="var(--text-color)"><Setting /> </el-icon>
      </div>
    </el-tooltip>
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

    &:hover {
      background-color: var(--color-background-mute);
      cursor: pointer;
      border-radius: 4px;
    }
  }

  // 去除 dropdown 黑框
  :deep(.el-tooltip__trigger:focus-visible) {
    outline: none;
  }
}
</style>
