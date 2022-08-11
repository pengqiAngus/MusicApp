import { createRouter, createWebHashHistory } from "vue-router";
import Recommand from "../views/recommand.vue";
import Search from "../views/search.vue";
import Singer from "../views/singer.vue";
import TopList from "../views/top-list.vue";
const routes = [
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    component: Recommand,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/singer",
    component: Singer,
  },
  {
    path: "/top-list",
    component: TopList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
