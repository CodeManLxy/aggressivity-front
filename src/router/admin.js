//自动化引入子路由
const childRoutesModule = import.meta.glob("./routers/*.js", { eager: true });
const adminChildren = Object.keys(childRoutesModule).reduce((children, key) => {
  return children.concat(childRoutesModule[key].default);
}, []);

export default [
  // {
  //   path: "/",
  //   redirect: "/admin",
  // },
  {
    path: "/",
    name: "admin",
    component: () => import("@/views/admin/index.vue"),
    children: adminChildren,
  },
  {
    path: "/:pathMatch(.*)",
    name: "nomatch",
    component: () => import("@/views/nomatch/index.vue"),
    meta: {
      login: false,
    },
  },
];
