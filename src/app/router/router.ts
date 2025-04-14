import { createRouter, createWebHistory } from 'vue-router'

import { DefaultLayout } from '~/app/layouts'
import { Convert } from '~/pages/convert'
import { Home } from '~/pages/home'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { component: Home, name: 'home', path: '' },
      { component: Convert, name: 'convert', path: 'convert' },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
