import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import BoostrapVue3 from "bootstrap-vue-3";


import "./assets/global.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);
app.use(BoostrapVue3);
app.use(router);
app.mount("#app");

// createApp(App).use(router).mount("#app");
