import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:uno.css";
import { router } from "./router.ts";

createApp(App).use(router).mount("#app");
