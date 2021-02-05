import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Profile from "@/components/User/Profile";
import Calendar from "@/components/Calendar";
import Signup from "@/components/Auth/Signup";
import Signin from "@/components/Auth/Signin";
import Map from "@/components/Map/Map";
// import AuthGuard from './auth-guard'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/map",
    name: "map",
    component: Map,
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router