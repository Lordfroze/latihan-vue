import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IncomeView from '../views/IncomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/income/:id',
      name: 'income',
      component: IncomeView
    },
  ]
})

export default router