import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Repositories from "../components/Repositories.vue"
import NotFound from "../components/NotFound.vue";
//import Result from "../components/Result.vue";
//import Navbar from "../components/Navbar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Repositories",
    name: "Repositories",
    component: Repositories
  },
    //catchall 404
    //path: '/:catchAll(.*)'
  // {
  //   path: "/Result",
  //   name: "Result",
  //   component: Result
  // },

   {
    path:'/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFound
  },
  // {
  //   path: "/Navbar",
  //   name: "Navbar",
  //   component: Navbar
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
