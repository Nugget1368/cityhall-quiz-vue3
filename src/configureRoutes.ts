import { createRouter, createWebHistory } from "vue-router";
import QuizView from "./views/QuizView.vue";
import HomeView from "./views/HomeView.vue";
import ErrorView from "./views/ErrorView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", name: "home", component: HomeView },
        { path: "/quiz", name: "quiz", component:  QuizView},
        { path: "/:pathMatch(.*)*", name: "error", component: ErrorView },
    ],
});

export default router;