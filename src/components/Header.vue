<template>
  <header class="bg-white border-b border-gray-200 px-4 py-3 lg:px-6">
    <div class="flex items-center justify-between">
      <!-- Left: Hamburger Menu & Search -->
      <div class="flex items-center space-x-4">
        <!-- Hamburger Menu -->
        <button 
          @click="toggleSidebar"
          class="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Search Bar -->
        <div class="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md">
          <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Search or type command..." 
            class="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
          >
        </div>
      </div>

      <!-- Right: User Profile -->
      <div class="flex items-center space-x-3">
        <div class="relative">
          <button 
            @click="toggleUserMenu"
            class="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {{ userInitials }}
            </div>
            <span class="hidden sm:block">{{ authStore.user?.name }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <!-- User Dropdown Menu -->
          <div 
            v-if="showUserMenu"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
          >
            <div class="py-1">
              <button 
                @click="logout"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { authStore } from '@/store/auth.js'

export default {
  name: 'Header',
  emits: ['toggle-sidebar'],
  setup(props, { emit }) {
    const router = useRouter()
    const showUserMenu = ref(false)

    const userInitials = computed(() => {
      if (!authStore.user?.name) return 'U'
      return authStore.user.name.split(' ').map(n => n[0]).join('').toUpperCase()
    })

    const toggleSidebar = () => {
      emit('toggle-sidebar')
    }

    const toggleUserMenu = () => {
      showUserMenu.value = !showUserMenu.value
    }

    const logout = () => {
      authStore.logout()
      router.push('/')
      showUserMenu.value = false
    }

    // Close user menu when clicking outside
    const closeUserMenu = (e) => {
      if (!e.target.closest('.relative')) {
        showUserMenu.value = false
      }
    }

    // Add event listener
    document.addEventListener('click', closeUserMenu)

    return {
      authStore,
      userInitials,
      showUserMenu,
      toggleSidebar,
      toggleUserMenu,
      logout
    }
  }
}
</script> 