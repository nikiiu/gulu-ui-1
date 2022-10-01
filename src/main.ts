import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Uu from "./components/Uu.vue";
import Uu2 from "./components/Uu2.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Uu },
    { path: "/xxx", component: Uu2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
