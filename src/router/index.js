import Vue from "vue";
import VueRouter from "vue-router";
import HomeXl from "@/components/HomeXl.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeXl,
  },
  {
    path: "/home",
    name: "Home2",
    component: HomeXl,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutXl.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import(/* webpackChunkName: "about" */ "../views/NewsXl.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import(/* webpackChunkName: "about" */ "../views/ProductXl.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import(/* webpackChunkName: "about" */ "../views/SuccessXl.vue"),
  },
  {
    path: "/104",
    name: "104",
    component: () => import(/* webpackChunkName: "about" */ "../views/104Xl.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
