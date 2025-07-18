<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex flex-1">
      <SidebarUser />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import SidebarUser from '../components/SidebarUser.vue'
import { RouterView } from 'vue-router'
</script>
