import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Vuetify from '@/pages/Vuetify.vue'
import Vue3 from '@/pages/Vue3.vue'
import Scss from '@/pages/Scss.vue'
import Firebase from '@/pages/Firebase.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
