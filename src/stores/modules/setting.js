import { defineStore } from 'pinia'
import {
  getDefaultTheme,
  isDark,
  listenSystemTheme,
  systemIsDark,
  toggleTheme,
  unListenSystemTheme
} from '@/utils/setting/theme.js'

export const useSettingStore = defineStore('setting', () => {
  // 当前页面的主题设置，未初始化前为默认主题 OS
  const theme = ref(undefined)
  changeTheme(null, null, true)

  /**
   * 设置主题模式
   * @param willTheme 要设置的主题
   * @param event 用户点击切换主题按钮的点击事件
   * @param init 是否为初始化调用
   */
  function changeTheme(willTheme, event, init = false) {
    // 如果未初始化，则设置默认主题
    if (init) {
      willTheme = getDefaultTheme()
    }

    // 如果当前页面的主题设置和要设置的主题一致，则不执行
    if (theme.value === willTheme) return
    // 当前页面主题是否是暗色
    const currentDark = isDark()
    switch (willTheme) {
      case 'OS':
        // 设置主题色跟随系统
        // 当前系统主题是否是暗色
        const systemDark = systemIsDark()
        // 当前主题色与系统主题色不一致时，切换主题
        if (currentDark !== systemDark) {
          toggleTheme(event, init)
        }
        // 从不是 `跟随系统` 的设置，改变为 `跟随系统`，添加监听方法
        listenSystemTheme()
        break
      case 'DARK':
        // 设置主题色为暗色模式
        // 当前页面主题色不是暗色的话，则切换主题
        if (!currentDark) {
          toggleTheme(event, init)
        }
        // 从 `跟随系统` 的设置，改变为暗色主题，取消掉之前的监听方法
        if (theme.value === 'OS') {
          unListenSystemTheme()
        }
        break
      case 'LIGHT':
        // 亮色模式
        // 当前页面主题色是暗色的话，则切换主题
        if (currentDark) {
          toggleTheme(event, init)
        }
        // 从 `跟随系统` 的设置，改变为亮色主题，取消掉之前的监听方法
        if (theme.value === 'OS') {
          unListenSystemTheme()
        }
        break
    }
    // 永久化保存设置
    localStorage.setItem('theme', willTheme)
    // 标记当前页面的主题设置
    theme.value = willTheme
  }

  return { theme, changeTheme }
})
