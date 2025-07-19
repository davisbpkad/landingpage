<template>
  <div class="min-h-screen flex">
    <!-- Left Panel - Login Form -->
    <div class="flex-1 flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <!-- FAQ Link -->
        <div class="text-left">
          <RouterLink to="/faq" 
          class="back-to-login-btn inline-flex items-center px-8 py-10 bg-white text-black text-sm font-bold hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] focus:outline-none transition-all duration-200 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] !text-black"
          style="color: black !important;">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          FAQ
          </RouterLink>
        </div>

        <!-- Login Form -->
        <div class="text-start">
          <!-- Branding Logo - Mobile Only -->
          <div class="flex items-center justify-center mb-6 lg:hidden">
            <div class="flex items-center space-x-3">
              <div class="flex space-x-1">
                <div class="w-2 h-8 bg-blue-600 rounded-sm"></div>
                <div class="w-2 h-12 bg-blue-600 rounded-sm"></div>
                <div class="w-2 h-16 bg-blue-600 rounded-sm"></div>
              </div>
              <div class="text-left">
                <h1 class="text-2xl font-bold text-gray-900">IKP-APBD</h1>
              </div>
            </div>
          </div>
          <h2 class="mt-6 text-3xl font-bold text-gray-900">Sign in</h2>
          <p class="mt-2 text-sm text-gray-600">
            Silakan masukkan email dan password Anda untuk melanjutkan
          </p>
        </div>

      

        <!-- Login Form -->
        <LoginForm @submit="handleLogin" />
      </div>
    </div>

    <!-- Right Panel - Branding -->
    <BrandingPanel />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue'
import BrandingPanel from '@/components/BrandingPanel.vue'
import { authStore } from '@/store/auth.js'
import { alertStore } from '@/store/alert.js'

export default {
  name: 'LoginView',
  components: {
    LoginForm,
    BrandingPanel
  },
  setup() {
    const router = useRouter()

    const handleLogin = (formData) => {
      const result = authStore.login(formData.email, formData.password)
      if (result.success) {
        router.push('/dashboard')
      }
    }

    const testAlert = () => {
      alertStore.success('Test Alert!', 'Ini adalah test alert untuk memastikan sistem berfungsi.')
    }

    return {
      handleLogin,
      testAlert
    }
  }
}
</script>

<style scoped>
/* Custom styles if needed */
</style> 