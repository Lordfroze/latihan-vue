import { createRouter, createWebHistory } from 'vue-router'; // mengimport createRouter dan createWebHistory dari vue-router

const router = createRouter({ // membuat router
    history: createWebHistory(import.meta.env.BASE_URL), // membuat history router menggunakan createWebHistory
    routes: [
        { 
            path: "/", // path untuk halaman home
            name: "home",
            component: () => import("../views/Home.vue"), // mengimport component Home.vue
        }, 
        { 
            path: "/home", // path untuk halaman home
            redirect: "/", // redirect ke halaman home
            component: () => import("../views/Home.vue"), // mengimport component Home.vue
        }, 

        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue"),
        },
        {
            path: "/list",
            name: "list",
            component: () => import("../views/List.vue")
        },
        {
            path: "/items/:id",
            name: "items",
            component: () => import("../views/Item.vue"),
            children: [
                {
                    path: "/items/:id/owner",
                    name: "owner",
                    component: () => import("../views/Owner.vue")
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*", // path untuk halaman 404
            name: "not-found", // name untuk halaman 404
            component: () => import("../views/errors/404.vue"), // mengimport component 404.vue
        },
    ]
});

export default router; // export router