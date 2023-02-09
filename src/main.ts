import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import router from '@/router'
import './style.css'
import SvgIcon from '@/components/SvgIcon.vue'
import App from './App.vue'

createApp(App)
  .use(createPinia())
  .use(router)
  .component('svg-icon', SvgIcon)
  .mount('#app')
