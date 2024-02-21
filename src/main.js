import { createApp } from "vue";
import App from "./App.vue";
// 引入pinia库
import { createPinia } from "pinia";
// 路由
import router from "./router";
// element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
const pinia = createPinia();

//引入elementplus中文版
app.use(pinia);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
