<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col w-full">
    <header class="flex-shrink-0 w-full">
      <Navbar />
    </header>
    
    <main class="flex-1 w-full">
      <RouterView />
    </main>
    
    <footer class="flex-shrink-0 w-full">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
</style>
