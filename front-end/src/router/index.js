import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import editShoes from '../views/editShoes.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/editShoes',
    name: 'editShoes',
    component: editShoes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
