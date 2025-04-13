import { createRouter, createWebHistory } from 'vue-router'

import { About } from '~/pages/about'
import { Home } from '~/pages/home'

const routes = [
  { component: Home, name: 'home', path: '/' },
  { component: About, name: 'about', path: '/about' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
