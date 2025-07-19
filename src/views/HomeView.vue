<template>
  <DashboardLayout>
    <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Dashboard Home</h1>
      <p class="text-gray-600">Selamat datang di sistem IKP-APBD</p>
    </div>

    <!-- User Info and Date -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div class="mb-4 sm:mb-0">
          <h2 class="text-lg font-semibold text-gray-900 mb-1">Nama User</h2>
          <p class="text-gray-600">{{ authStore.user?.name || 'User Test' }}</p>
        </div>
        <div class="text-right">
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Tanggal Pengisian</h3>
          <p class="text-gray-600">{{ currentDate }}</p>
        </div>
      </div>
    </div>

    <!-- Financial Report Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <!-- Table Header -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <!-- Table Head -->
          <thead class="bg-yellow-400">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                Klasifikasi
              </th>
              <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                Nilai
              </th>
              <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                Kategori Nilai
              </th>
            </tr>
          </thead>
          
          <!-- Table Body -->
          <tbody>
            <!-- Pendapatan Row -->
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-6 py-4 text-sm font-medium text-gray-900 border-b border-green-200">
                Pendapatan
              </td>
              <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                0,00
              </td>
              <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                TIDAK MEMILIKI PENDAPATAN
              </td>
            </tr>
            
            <!-- Belanja Row -->
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-6 py-4 text-sm font-medium text-gray-900 border-b border-green-200">
                Belanja
              </td>
              <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                79,24
              </td>
              <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                Cukup
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <!-- Pendapatan Summary -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900">Pendapatan</h3>
          <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-600 mb-2">0,00</div>
          <p class="text-sm text-gray-600">TIDAK MEMILIKI PENDAPATAN</p>
        </div>
      </div>

      <!-- Belanja Summary -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900">Belanja</h3>
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">79,24</div>
          <p class="text-sm text-gray-600">Cukup</p>
        </div>
      </div>
    </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { computed } from 'vue'
import { authStore } from '@/store/auth.js'
import DashboardLayout from '@/components/DashboardLayout.vue'

export default {
  name: 'HomeView',
  components: {
    DashboardLayout
  },
  setup() {
    const currentDate = computed(() => {
      const now = new Date()
      return now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })

    return {
      authStore,
      currentDate
    }
  }
}
</script> 