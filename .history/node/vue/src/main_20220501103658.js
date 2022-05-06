import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.$router = router

createApp(App).use(store).use(router).mount('#app')
