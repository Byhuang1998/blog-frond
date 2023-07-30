import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: '首页',
        path: '/',
        component: () => import('../views/Index.vue')
    },
    {
        name: '关于',
        path: '/about',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router

