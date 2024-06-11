import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import { FaIcon } from './plugins/fontAwesome'
import { applyScrollReveal } from './config/srConfig'
// import scrollReveal from './plugins/scrollReveal'
import { scrollReveal } from './plugins/scrollReveal'



const app = createApp(App);
app
    .component('fa-icon', FaIcon)
    .directive('scroll-reveal', scrollReveal)
    // .mixin({
    //     mounted() {
    //         applyScrollReveal();
    //     }
    // })
    .mount('#app')
