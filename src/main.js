import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { authStore } from './store/auth.js'

const app = createApp(App)

// Initialize auth store
authStore.checkAuth()

app.use(router)

app.mount('#app')
