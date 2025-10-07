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
            path: "/products/:id", // path untuk halaman product dengan parameter id
            name: "products", // name untuk halaman product dengan parameter id
            component: () => import("../views/Product.vue"), // mengimport component Product.vue
        },

        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue"),
        }
    ]
});

export default router; // export router