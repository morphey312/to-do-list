import  './bootstrap.js'
import {createApp} from 'vue'
import App from "./components/App.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(ElementPlus)
    .mount("#app")
