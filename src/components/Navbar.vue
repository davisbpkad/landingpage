<template>
  <nav class="fixed top-0 left-0 right-0 bg-white border-b-4 border-black px-4 py-5 z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Brand/Logo with Badge Style -->
      <div class="flex items-center">
        <router-link 
          to="/" 
          class="text-2xl text-center bg-white !text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
        >
          IKP-APBD
        </router-link>
      </div>
      
      <!-- Desktop Menubar -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- FAQ Link -->
        <router-link 
          to="/faq" 
          class="w-32 text-center bg-white !text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
        >
          FAQ
        </router-link>
        
        <!-- Login Button -->
        <button 
          @click="showLoginForm = true"
          class="w-32 text-center bg-green-500 text-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-semibold"
        >
          Login
        </button>
      </div>
      
      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button 
          @click="showMobileMenu = !showMobileMenu"
          class="bg-white text-black px-3 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="showMobileMenu" class="md:hidden bg-white border-t-2 border-black mt-4">
      <div class="p-4 space-y-3">
        <router-link 
          to="/faq" 
          @click="showMobileMenu = false"
          class="block w-full bg-white text-black px-4 py-2 transition-all duration-200 font-semibold text-center"
        >
          FAQ
        </router-link>
        
        <button 
          @click="showLoginForm = true; showMobileMenu = false"
          class="w-full bg-green-500 text-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-semibold"
        >
          Login
        </button>
      </div>
    </div>
    
    <!-- Login Dialog -->
    <LoginDialog 
      :is-open="showLoginForm" 
      @close="showLoginForm = false"
      @login="handleLogin"
    />
  </nav>
</template>

<script>
import LoginDialog from './LoginDialog.vue'

export default {
  name: 'Navbar',
  components: {
    LoginDialog
  },
  data() {
    return {
      showLoginForm: false,
      showMobileMenu: false
    }
  },
  methods: {
    handleLogin(credentials) {
      // Handle login logic here
      console.log('Login attempt:', credentials)
      this.showLoginForm = false
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape' && this.showLoginForm) {
        this.showLoginForm = false
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
  }
}
</script> 