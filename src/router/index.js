import Vue from "vue";
import VueRouter from "vue-router";
import Uploadpage from "../views/Uploadpage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Uploadpage",
    component: Uploadpage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
