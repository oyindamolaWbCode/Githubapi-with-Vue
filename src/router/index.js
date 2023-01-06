import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Repositories from "../components/Repositories.vue";
import ErrorBoundary from "../components/ErrorBoundary.vue";
import NotFound from "../components/NotFound.vue";
import Result from "../components/Result.vue";
import Navbar from "../components/Navbar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Repositories",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/ErrorBoundary",
    name: "ErrorBoundary",
    component: ErrorBoundary,
  },
    //catchall 404
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/Result",
    name: "Result",
    component: Result,
  },
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
