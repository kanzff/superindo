import './assets/main.css'
import '../node_modules/flowbite-vue/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome, OiPackage, BiListCheck } from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'

addIcons(FaHome, OiPackage, BiListCheck);


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);
app.mount('#app')
