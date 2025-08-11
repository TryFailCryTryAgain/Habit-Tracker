import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Footer from '@/views/Footer.vue'
import NotHeader from '@/views/NotHeader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestingView.vue'),
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/layout/Layout.vue'),
      children: [
        {
          path: '',
          components: {
            headslot: NotHeader,
            footer: Footer,
          },
          name: 'home'
        }
      ]

    },
  ],
})

export default router
