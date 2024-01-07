import { createRouter, createWebHistory } from 'vue-router'
import imports from '@/utils/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/components/shared/error.vue')
    },
    {
      path: `/dc/connection`,
      component: () => import('@/views/connection/dc.vue')
    },
    { path: '/:pathMatch(.*)', redirect: `/error/?locale=${localStorage.getItem('locale')}` }
  ]
})

router.beforeEach((to, from, next) => {
  const { locale } = imports()
  document.title = import.meta.env.VITE_PROJECT_TITLE

  if (!localStorage.getItem('locale') || !locale({ lng: to.query.locale as string }))
    return (window.location.href = '/?locale=en')
  localStorage.setItem('locale', to.query.locale as string)

  if (to.name) {
    // @ts-ignore
    document.title += ` | ${locale({ lng: to.query.locale as string })?.router[to.name as string]}`
  }

  next()
})

export default router
