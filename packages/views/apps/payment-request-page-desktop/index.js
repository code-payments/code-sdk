import { createApp } from 'vue'

import App from './App.vue'
import CodeApp from '../../src/index'
import { routes } from '../../src/routes/pages/payment-request-page-desktop'

import './style.css'

const opt = {
  wsPath: process.env.WS_PATH,
  httpPath: process.env.HTTP_PATH,
  routes,
}

const app = createApp(App);
app.use(CodeApp, opt);
app.mount("#app");