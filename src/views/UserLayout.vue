<!-- src/views/UserLayout.vue -->
<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <!-- Add padding-top to account for fixed navbar (navbar height ~80px) -->
      <div class="flex flex-1" style="padding-top: 5rem;">
        <SidebarUser />
        <main class="flex-1 bg-white min-h-[calc(100vh-5rem)]">
          <router-view />
        </main>
      </div>
    </div>
</template>
  
<script>
import Navbar from '../components/Navbar.vue'
import SidebarUser from '../components/SidebarUser.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'UserLayout',
  components: {
    Navbar,
    SidebarUser,
    Footer
  }
}
</script>