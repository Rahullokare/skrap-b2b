import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import MainHome from "../components/MainHome.vue";
import Contact from "../components/Contact.vue";
import Aboutus from "../components/Aboutus.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainHome
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/about",
    component: Aboutus
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
