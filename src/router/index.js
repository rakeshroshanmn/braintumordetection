import Vue from "vue";
import VueRouter from "vue-router";
import Uploadpage from "../views/Uploadpage.vue";
import Knowmore from "../views/Knowmore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Uploadpage",
    name: "Uploadpage",
    component: Uploadpage,
  },
  {
    path: "/",
    name: "Knowmore",
    component: Knowmore,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
