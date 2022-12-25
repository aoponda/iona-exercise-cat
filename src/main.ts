import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

// createApp(App).use(router).mount("#app");
