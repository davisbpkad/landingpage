<template>
  <aside 
    :class="[
      'bg-white border-r border-gray-200 w-64 fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <div class="flex flex-col h-full">
      <!-- Branding -->
      <div class="flex items-center space-x-3 px-6 py-4 border-b border-gray-200">
        <div class="flex space-x-1">
          <div class="w-2 h-8 bg-blue-600 rounded-sm"></div>
          <div class="w-2 h-12 bg-blue-600 rounded-sm"></div>
          <div class="w-2 h-16 bg-blue-600 rounded-sm"></div>
        </div>
        <span class="text-xl font-bold text-black">IKP-APBD</span>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-4 overflow-y-auto">

        <!-- Menu Items -->
        <div class="space-y-4">
          <div v-for="item in menuItems" :key="item.path">
            <!-- Parent Menu Item -->
            <RouterLink 
              v-if="!item.children"
              :to="item.path"
              :class="[
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                $route.path === item.path 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              ]"
            >
              <!-- Home Icon -->
              <svg v-if="item.name === 'Home'" class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span>{{ item.name }}</span>
            </RouterLink>

            <!-- Parent Menu Item with Children -->
            <div v-else>
              <div class="mb-2 pb-2 border-b border-gray-100">
                <span class="text-sm font-bold text-gray-800 px-3">{{ item.name }}</span>
              </div>
              
              <!-- Submenu Items -->
              <div class="ml-4 space-y-1">
                <RouterLink 
                  v-for="child in item.children"
                  :key="child.path"
                  :to="child.path"
                  :class="[
                    'flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200',
                    $route.path === child.path 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  ]"
                >
                  <!-- Document Icon for Pencantuman -->
                  <svg v-if="child.name.includes('Pencantuman')" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <!-- Calendar Icon for Realisasi -->
                  <svg v-else-if="child.name.includes('Realisasi')" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <!-- Clipboard Icon for Perencanaan -->
                  <svg v-else-if="child.name.includes('Perencanaan')" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                  <!-- Building Icon for Pelaksanaan -->
                  <svg v-else-if="child.name.includes('Pelaksanaan')" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <!-- Check Icon for Hasil -->
                  <svg v-else-if="child.name.includes('Hasil')" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <!-- Chart Icon for Result -->
                  <svg v-else-if="child.name.includes('Result')" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  {{ child.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  </aside>

  <!-- Mobile Overlay -->
  <div 
    v-if="isOpen"
    @click="closeSidebar"
    class="mobile-overlay fixed inset-0 z-30 lg:hidden"
  ></div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close-sidebar'],
  setup(props, { emit }) {
    const route = useRoute()
    const openSubmenus = ref(new Set())

    const menuItems = [
      {
        name: 'Home',
        path: '/dashboard',
        icon: 'HomeIcon',
        children: null
      },
      {
        name: 'Pendapatan',
        path: '/pendapatan',
        icon: 'RevenueIcon',
        children: [
        { name: ' Pendapatan Result', path: '/pendapatan/pendapatanresult' },
          { name: 'Pencantuman Anggaran', path: '/pendapatan/pencantuman' },
          { name: 'Realisasi Triwulan', path: '/pendapatan/triwulan' },
          { name: 'Realisasi Tahunan', path: '/pendapatan/tahunan' }
        ]
      },
      {
        name: 'Belanja',
        path: '/belanja',
        icon: 'ExpenseIcon',
        children: [
        { name: 'Belanja Result', path: '/belanja/belanjaresult' },
          { name: 'Kualitas Perencanaan', path: '/belanja/perencanaan' },
          { name: 'Kualitas Pelaksanaan', path: '/belanja/pelaksanaan' },
          { name: 'Kualitas Hasil', path: '/belanja/hasil' }
        ]
      }
    ]

    const closeSidebar = () => {
      emit('close-sidebar')
    }



    return {
      menuItems,
      closeSidebar
    }
  }
}
</script>

<style scoped>
.mobile-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style> 