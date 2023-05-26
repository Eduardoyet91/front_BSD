import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import { createPinia } from "pinia";

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.mount("#app");
