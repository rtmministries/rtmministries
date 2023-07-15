import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Soh from "../views/Soh.vue";
import Support from "../views/Support.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/soh",
        name: "soh",
        component: Soh,
    },
    {
        path: "/team",
        name: "team",
        component: Team,
    },
    {
        path: "/support",
        name: "support",
        component: Support,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from) => {
    window.scrollTo(0, 0);
});

export default router;
