import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from "../views/ProjectView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import TestView from "../views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/projectdetail",
      name: "projectdetail",
      component: ProjectDetailView,
    },
    {
      path: "/test",
      name: "test",
      component: TestView,
    },
  ],
});

export default router
