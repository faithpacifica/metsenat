import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/routes";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'



const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')