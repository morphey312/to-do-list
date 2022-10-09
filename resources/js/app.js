import  './bootstrap.js'
import {createApp} from 'vue'
import {createPinia} from "pinia";
import router from "./router/index.js";
import App from "./components/App.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount("#app")
