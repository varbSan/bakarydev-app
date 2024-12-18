import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './lib/i18n'
import { router } from './router'
import './assets/index.css'

createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app')
