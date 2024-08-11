import { Monitor, Moon, Sunny } from '@element-plus/icons-vue'

/**
 * 当前主题色是否是暗色
 */
export function isDark() {
  return document.documentElement.classList.contains('dark')
}

export const THEME_SCHEMA_LIST = {
  OS: { text: '跟随系统', icon: Monitor },
  DARK: { text: '暗色模式', icon: Moon },
  LIGHT: { text: '浅色模式', icon: Sunny }
}

/**
 * 获取默认主题色
 * @returns OS | Dark | Light
 */
export function getDefaultTheme() {
  const localTheme = localStorage.getItem('theme') ?? ''
  // 如果本地保存的主题值不合法，则使用默认的 `跟随系统` 主题
  return Object.keys(THEME_SCHEMA_LIST).includes(localTheme) ? localTheme : 'OS'
}

/**
 * 切换主题色，html标签切换dark类
 */
export function toggleDark() {
  document.documentElement.classList.toggle('dark')
}

/**
 * 切换主题色，扩散渐变动画
 * @param event 点击事件
 * @param init
 */
export function toggleTheme(event, init = false) {
  // 如果当前页面是暗色，则切换为亮色；如果当前页面是亮色，则切换为暗色
  const willDark = !isDark()

  // 如果是初始化主题，并且是暗色模式则不需要动画
  if (init && willDark) {
    toggleDark()
    return
  }

  // 浏览器新特性不支持 或者 开启了动画减弱
  // 检测用户的系统是否被开启了动画减弱功能
  if (
    !document.startViewTransition ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
  ) {
    toggleDark()
    return
  }

  // 开始加载 ViewTransition 扩散动画
  const transition = document.startViewTransition(() => {
    toggleDark()
  })

  // 传入点击事件，从点击处开始扩散。否则，从右上角开始扩散
  const x = event?.clientX ?? window.innerWidth
  const y = event?.clientY ?? 0

  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  void transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: willDark ? clipPath : [...clipPath].reverse()
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: willDark ? '::view-transition-new(root)' : '::view-transition-old(root)'
      }
    )
  })
}
export const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

/**
 * 当前系统的主题色是否是暗色/深色/夜间
 */
export function systemIsDark() {
  return mediaQueryList.matches
}

/**
 * 监听系统主题色的改变
 */
export function listenSystemTheme() {
  if (mediaQueryList.addListener) {
    // 兼容旧版浏览器，将来会被废弃
    mediaQueryList.addListener(toggleTheme)
  } else {
    // 新版浏览器
    mediaQueryList.addEventListener('change', toggleTheme)
  }
}

/**
 * 取消监听系统主题色的改变
 */
export function unListenSystemTheme() {
  if (mediaQueryList.removeListener) {
    // 兼容旧版浏览器，将来会被废弃
    mediaQueryList.removeListener(toggleTheme)
  } else {
    // 新版浏览器
    mediaQueryList.removeEventListener('change', toggleTheme)
  }
}
