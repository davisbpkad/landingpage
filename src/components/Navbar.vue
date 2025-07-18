<template>
  <nav class="fixed top-0 left-0 right-0 bg-white border-b-4 border-black px-4 py-5 z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Brand/Logo with Badge Style - Hidden when authenticated -->
      <div v-if="!isAuthenticated" class="flex items-center">
        <router-link 
          to="/" 
          class="text-2xl text-center bg-white !text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
        >
          IKP-APBD
        </router-link>
      </div>
      
      <!-- User Title when authenticated + Hamburger (mobile only) -->
      <div v-if="isAuthenticated" class="flex items-center">
        <!-- Hamburger (mobile only) -->
        <button class="md:hidden mr-2" @click="$emit('toggle-sidebar')" aria-label="Open sidebar">
          <i class="fa-solid fa-bars text-2xl"></i>
        </button>
        <h1 class="text-2xl text-center text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide">
          User-Dashboard
        </h1>
      </div>
      
      <!-- Desktop Menubar -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- FAQ Link - Hidden when authenticated -->
        <router-link 
          v-if="!isAuthenticated"
          to="/faq" 
          class="w-32 text-center bg-white !text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
        >
          FAQ
        </router-link>
        
        <!-- Login/Logout Button -->
        <div v-if="isAuthenticated" class="flex items-center space-x-4">
          <h2 class="text-2xl text-center text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide">
            Hi, {{ user?.username }}
          </h2>
          <button 
            @click="handleLogout"
            class="w-32 text-center bg-red-500 text-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-semibold"
          >
            Logout
          </button>
        </div>
        <button 
          v-else
          @click="showLoginForm = true"
          class="w-32 text-center bg-green-500 text-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-semibold"
        >
          Login
        </button>
      </div>
      
      <!-- Mobile User Dropdown (authenticated only) -->
      <div v-if="isAuthenticated" class="relative md:hidden">
        <button @click="dropdownOpen = !dropdownOpen" class="flex items-center gap-2 focus:outline-none">
          <span class="font-bold text-black">{{ user?.username }}</span>
          <img v-if="user?.avatar" :src="user.avatar" class="h-8 w-8 rounded-full border-2 border-black" alt="User" />
          <i v-else class="fa-solid fa-user-circle text-2xl text-black"></i>
        </button>
        <transition name="fade">
          <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 border border-black">
            <div class="px-4 py-3 border-b border-gray-200 font-semibold text-black">Hi, {{ user?.username }}</div>
            <button 
              @click="handleLogout; dropdownOpen = false"
              class="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 border-t border-gray-100"
            >
              Logout
            </button>
          </div>
        </transition>
      </div>
      
      <!-- Mobile Menu Button (guest only) -->
      <div v-if="!isAuthenticated" class="md:hidden">
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
    
    <!-- Mobile Menu (guest only) -->
    <div v-if="showMobileMenu && !isAuthenticated" class="md:hidden bg-white border-t-2 border-black mt-4">
      <div class="p-4 space-y-3">
        <!-- FAQ Link - Hidden when authenticated -->
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
import authStore from '../store/auth.js'

export default {
  name: 'Navbar',
  components: {
    LoginDialog
  },
  data() {
    return {
      showLoginForm: false,
      showMobileMenu: false,
      dropdownOpen: false
    }
  },
  computed: {
    isAuthenticated() {
      return authStore.isAuthenticated
    },
    user() {
      return authStore.user
    }
  },
  methods: {
    handleLogin(credentials) {
      if (credentials.success) {
        const result = authStore.login(credentials)
        
        if (result.success) {
          this.showLoginForm = false
          this.$router.push('/user')
        } else {
          console.error('Login failed:', result.message)
        }
      }
    },
    handleLogout() {
      authStore.logout()
      this.$router.push('/')
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape' && this.showLoginForm) {
        this.showLoginForm = false
      }
      if (event.key === 'Escape' && this.dropdownOpen) {
        this.dropdownOpen = false
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