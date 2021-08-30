import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Vuetify from '@/pages/Vuetify'
import Vue3 from '@/pages/Vue3'
import Scss from '@/pages/Scss'
import Firebase from '@/pages/Firebase'
import SignIn from '@/pages/authentication/SignIn'
import SignUp from '@/pages/authentication/SignUp'
import ProductList from '@/pages/page/ProductList'
import DefaultLayout from '@/layouts/default/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'
import PageLayout from '@/layouts/page/Index'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/vuetify-alpha3',
        name: 'Vuetify Alpha3',
        component: Vuetify
      },
      {
        path: '/vue3',
        name: 'Vue3',
        component: Vue3
      },
      {
        path: '/scss',
        name: 'Scss',
        component: Scss
      },
      {
        path: '/firebase',
        name: 'Firebase',
        component: Firebase
      }
    ]
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: '/product-list',
        name: 'ProductList',
        component: ProductList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
