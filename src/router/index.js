
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultTemp from '../views/DefaultTemp.vue';



const userRoutes = [
  {
    path: 'dashboard',
    component: ()=> import ("../views/user/Dashboard.vue")
  }
]




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
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: ()=> import ("../views/login/ForgotPassword.vue")
    },
    {
      path: '/user',
      name: 'Profile Information',
      component: DefaultTemp,
      redirect:'/user/dashboard',
      children:[...userRoutes]
    }
  ]
})





export default router
