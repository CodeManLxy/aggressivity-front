import { createRouter, createWebHistory } from "vue-router";
import routes from "./admin";

//自动化引入组件
// const hooksModule = import.meta.glob("./hooks/clickLogin.js", { eager: true });

const router = createRouter({
  history: createWebHistory("/#"),
  routes,
});

// for (let key in hooksModule) {
//   let fn = hooksModule[key].default;
//   //全局前置守卫
//   router.beforeEach(fn());
// }

export default router;
