import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserMainView.vue'
import admin from './adminRouter'
import user from './userRouter'
import product from './productRouter'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name:'user',
    component: UserView,
    children: [...user, ...product ],
  }
  ,
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" , webpackPrefetch: true */ '../views/AdminMainView'),
    children: [...admin ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
