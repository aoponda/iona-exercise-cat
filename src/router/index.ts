import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";
import Image from "@/views/Image.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/image/:id",
    name: "Image",
    component: Image,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
