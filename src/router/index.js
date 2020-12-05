import Vue from 'vue'
import VueRouter from 'vue-router'
import TIEZHU from '../views/TIEZHU.vue'
import Laurent from '../views/Laurent.vue'
import Guitar from '../views/Guitar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Laurent',
    component: Laurent
  },
  {
    path: '/tiezhu',
    name: 'TIEZHU',
    component: TIEZHU
  },
  {
    path: '/laurent',
    name: 'Laurent',
    component: Laurent
  },
  {
    path: '/guitar',
    name: 'Guitar',
    component: Guitar
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
