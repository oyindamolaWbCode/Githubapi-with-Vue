import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Repositories",
    name: "Repositories",
    component: () => import("../components/Repositories.vue"),
  },
  {
    path: "/ErrorBoundary",
    name: "ErrorBoundary",
    component: () => import("../components/ErrorBoundary.vue"),
  },
  {
    path: "/NotFound",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
  {
    path: "/Result",
    name: "Result",
    component: () => import("../components/Result.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
