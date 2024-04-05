import { createApp } from 'vue'

import App from './App.vue'
import CodeApp from '../../src/index'
import { routes } from '../../src/routes/buttons/login-request-button'

import './style.css'

const opt = {
  httpPath: process.env.HTTP_PATH,
  routes,
}

const app = createApp(App);
app.use(CodeApp, opt);
app.mount("#app");