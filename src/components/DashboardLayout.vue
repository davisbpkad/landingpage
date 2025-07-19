<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <Sidebar :is-open="sidebarOpen" @close-sidebar="closeSidebar" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col lg:ml-0">
      <!-- Header -->
      <Header @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto">
        <div class="p-4 lg:p-6">
          <slot />
        </div>
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'

export default {
  name: 'DashboardLayout',
  components: {
    Header,
    Sidebar,
    Footer
  },
  setup() {
    const sidebarOpen = ref(false)

    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value
    }

    const closeSidebar = () => {
      sidebarOpen.value = false
    }

    return {
      sidebarOpen,
      toggleSidebar,
      closeSidebar
    }
  }
}
</script> 