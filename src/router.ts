import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: defineAsyncComponent(() => import('./views/Home.vue')),
    },
    {
      path: '/profile',
      component: defineAsyncComponent(() => import('./views/ProfileView.vue'))
    },
    {
      path: '/auth',
      component: defineAsyncComponent(() => import('./views/AuthView.vue'))
    }
  ],
})