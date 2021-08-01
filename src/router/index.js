import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
  },
  {
    path: '/roles',
    name: 'Roles',
    component: () => import('../views/Roles.vue'),
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: () => import('../views/Certifications.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/404.vue'),
  }
]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (from.name === null && to.name !== "Home") next({ name: "Home" })
  else next()
})
export default router
