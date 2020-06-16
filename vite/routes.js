import PageHome from "./views/PageHome.vue";
import PageDetail from "./views/PageDetail.vue";
// import PageNewListing from "./views/PageNewListing.vue";
import PageLogin from "./views/PageLogin.vue";
import PageRegister from "./views/PageRegister.vue";
import PageCreate from "./views/PageCreate.vue";
import PageConfirm from "./views/PageConfirm.vue";
import PageSuccess from "./views/PageConfirm.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  // {
  //   path: "/new",
  //   component: PageNewListing,
  //   children: [
  //     {
  //       path: "+",
  //       name: "create",
  //       component: PageCreate,
  //     },
  //     {
  //       path: "confirm",
  //       name: "confirm",
  //       component: PageConfirm,
  //     },
  //     {
  //       path: "success",
  //       name: "success",
  //       component: PageSuccess,
  //     },
  //   ],
  // },
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
]
