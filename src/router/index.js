import Vue from "vue";
import VueRouter from "vue-router";
import mainLayout from "../views/Main_Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main_Layout",
    component: mainLayout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
