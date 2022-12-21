import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Breed from "../views/Breed.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/breed",
      name: "Breed",
      component: Breed,
      // add beforeEnter things to validate breed
    },
    {
      path: "/:catchAll(.*)",
      name: "PageNotFound",
      component: PageNotFound,
    }
  ],
});

export default router;
