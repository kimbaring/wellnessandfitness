import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import ("../views/login/LoginVue.vue")
    },
    {
      path: '/register',
      name: 'Register',
      component: ()=> import ("../views/login/RegisterVue.vue")
    }
  ]
})

export default router
