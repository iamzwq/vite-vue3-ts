import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      auth: false,
    },
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/components/Layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: 'Home',
          auth: false,
        },
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: '/about',
        meta: {
          title: 'About',
          auth: false,
        },
        component: () => import('@/views/About/index.vue'),
      },
      {
        path: '/user',
        meta: {
          title: 'User',
          auth: true,
        },
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

router.beforeEach((to, from, next) => {
  NProgress.start()

  document.title = `${
    to.meta.title ? to.meta.title + ' -' : ''
  } Vue3 Admin Template`

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
