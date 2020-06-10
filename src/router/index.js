import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../views/PageHome.vue";
import PageDetail from "../views/PageDetail.vue";
import PageCreate from "../views/PageCreate.vue";
import PageLogin from "../views/PageLogin.vue";
import PageRegister from "../views/PageRegister.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/add",
    name: "create",
    component: PageCreate,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: PageDetail,
  },
  {
    path: "/login",
    name: "login",
    component: PageLogin,
  },
  {
    path: "/register",
    name: "register",
    component: PageRegister,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
