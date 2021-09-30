import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Compunent from '@/views/Compunent'
import Xiangce from '@/views/Xiangce'

Vue.use(VueRouter)

const routes = [
  {
    path: '/xiangce',
    component: Xiangce
  },
  {
    path: '/',
    component: Compunent
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
