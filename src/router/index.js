import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import FaqView from '@/views/FaqView.vue'
import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import PendapatanResultView from '@/views/PendapatanResultView.vue'
import FormElementsView from '@/views/FormElementsView.vue'
import { authStore } from '@/store/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/forms/elements',
      name: 'form-elements',
      component: FormElementsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/pendapatan/pencantuman',
      name: 'pendapatan-pencantuman',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/pendapatan/triwulan',
      name: 'pendapatan-triwulan',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/pendapatan/tahunan',
      name: 'pendapatan-tahunan',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/pendapatan/pendapatanresult',
      name: 'pendapatan-result',
      component: PendapatanResultView,
      meta: { requiresAuth: true }
    },
    {
      path: '/belanja/perencanaan',
      name: 'belanja-perencanaan',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/belanja/pelaksanaan',
      name: 'belanja-pelaksanaan',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/belanja/hasil',
      name: 'belanja-hasil',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/belanja/belanjaresult',
      name: 'belanja-result',
      component: DashboardView,
      meta: { requiresAuth: true }
    }
  ],
})

// Navigation guard untuk proteksi routes
router.beforeEach((to, from, next) => {
  // Check auth status on app start
  authStore.checkAuth()
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.requireAuth()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    // Redirect to dashboard if already logged in and trying to access login page
    if (to.path === '/' && authStore.requireAuth()) {
      next('/dashboard')
    } else {
      next()
    }
  }
})

export default router