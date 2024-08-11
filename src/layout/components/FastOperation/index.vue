<script setup>
import { FullScreen, Search, Setting, User } from '@element-plus/icons-vue'
import { useSettingStore } from '@/stores/modules/setting.js'
import { THEME_SCHEMA_LIST } from '@/utils/setting/theme.js'

defineOptions({ name: 'FastOperation' })

const { changeTheme, theme } = useSettingStore()
const currentTheme = ref(theme)
const setTheme = (command, e) => {
  changeTheme(command, e)
  currentTheme.value = command
}
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
