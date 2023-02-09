import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/Layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: '/about',
        component: () => import('@/views/About/index.vue'),
      },
      {
        path: '/user',
        component: () => import('@/views/User/index.vue'),
      },
    ],
  },
  {
    // path: '/:w+',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
