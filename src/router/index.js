import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonPage from '@/views/PersonPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import IndexPage from '@/views/IndexPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage
  },
  {
    path: '/home',
    name: 'PersonPage',
    component: PersonPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router