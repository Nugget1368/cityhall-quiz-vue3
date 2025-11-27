import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ErrorView from "./views/ErrorView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", name: "home", component: HomeView},
        {path: "/:pathMatch(.*)*", name: "error", component: ErrorView},
    ],
});

export default router;