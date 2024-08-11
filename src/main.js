import './assets/styles/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores/index.js'
import './utils/permission.js'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
