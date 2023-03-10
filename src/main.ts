import { createApp } from 'vue'
import router from '@/router'
import pinia from './stores'
import 'virtual:svg-icons-register'
// import "@/styles/index.scss"
import App from './App.vue'
import SvgIcon from '@/components/SvgIcon.vue'

createApp(App)
  .use(router)
  .use(pinia)
  .component('svg-icon', SvgIcon)
  .mount('#app')
