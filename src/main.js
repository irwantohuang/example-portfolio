import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import { FaIcon } from './plugins/fontAwesome'



const app = createApp(App);
app
    .component('fa-icon', FaIcon)
    .mount('#app')
