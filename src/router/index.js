import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/team",
        name: "team",
        component: Team,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
