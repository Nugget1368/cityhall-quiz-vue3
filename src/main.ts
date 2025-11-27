import { createApp } from 'vue'
import configureRoutes from './configureRoutes.ts'
import './style.css'
import App from './App.vue'

createApp(App).use(configureRoutes).mount('#app')
