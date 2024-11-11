import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import Valorant_Api from './assets/Valorant_Api.vue'

App.components('Valorantapi',Valorant_Api)
createApp(App).mount('#app')
