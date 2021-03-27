import Vue from 'vue'
import VueRouter from 'vue-router'
import Iron from '@/views/Iron'
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
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/Chart',
    name: 'ChartTest',
    component: () => import('@/views/Chart/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
