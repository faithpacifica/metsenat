import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css"; 
import router from "./router/routes";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTheMask from 'vue-the-mask'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
app.use(VueTheMask)