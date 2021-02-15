import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "tailwindcss/tailwind.css";

//Load json
import notes from "@/seed.json";
store.commit("SET_NOTES", notes);

console.log(store)
//check auth process
store.dispatch("checkAuth");

createApp(App)
  .use(store)
  .mount("#app");
