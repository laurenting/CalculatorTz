import Vue from 'vue'
import VueRouter from 'vue-router'
import Iron from '@/views/Iron'
import Laurent from '../views/Laurent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/laurent'
  },
  {
    path: '/Iron',
    name: 'Iron',
    component: Iron
  },
  {
    path: '/laurent',
    name: 'Laurent',
    component: Laurent
  }
]

const router = new VueRouter({
  routes
})

export default router
