import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authStore from '../store/auth.js'
import FaqView from '../views/FaqView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/user',
      component: () => import('../views/UserLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'user-dashboard',
          component: () => import('../components/UserContent.vue'),
        },
        {
          path: 'pendapatan/anggaran',
          name: 'user-pendapatan-anggaran',
          component: () => import('../components/UserPendapatanAnggaran.vue'),
        },
        {
          path: 'pendapatan/realisasi-triwulan',
          name: 'user-pendapatan-realisasitriwulan',
          component: () => import('../components/UserPendapatanRealisasiTriwulan.vue'),
        },
        {
          path: 'pendapatan/realisasi-tahunan',
          name: 'user-pendapatan-realisasitahunan',
          component: () => import('../components/UserPendapatanRealisasiTahunan.vue'),
        },
        {
          path: 'belanja/perencanaan',
          name: 'user-belanja-perencanaan',
          component: () => import('../components/UserBelanjaPerencanaan.vue'),
        },
        {
          path: 'belanja/pelaksanaan',
          name: 'user-belanja-pelaksanaan',
          component: () => import('../components/UserBelanjaPelaksanaan.vue'),
        },
        {
          path: 'belanja/output',
          name: 'user-belanja-output',
          component: () => import('../components/UserBelanjaOutput.vue'),
        }
      ]
    },
  ],
})

// Navigation guard untuk proteksi routes
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.requireAuth()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router