import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/profile',
      component: defineAsyncComponent(() => import('./views/ProfileView.vue'))
    }
  ]
})