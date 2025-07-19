<template>
  <DashboardLayout>
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Pendapatan Result</h1>
        <p class="text-gray-600">Hasil evaluasi pendapatan IKP-APBD</p>
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
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <!-- Table Head -->
            <thead class="bg-yellow-400">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  Aspek
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  No
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  Indikator
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  Bobot
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  Realisasi
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  Nilai
                </th>
              </tr>
            </thead>
            
            <!-- Table Body -->
            <tbody>
              <!-- Row 1: Kualitas Perencanaan -->
              <tr class="bg-green-50 hover:bg-green-100 transition-colors">
                <td class="px-6 py-4 text-sm font-medium text-gray-900 border-b border-green-200">
                  Kualitas Perencanaan
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  1
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  Pencantuman Anggaran Pendapatan sesuai Potensi
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  20%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  0,00
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  0,00
                </td>
              </tr>
              
              <!-- Row 2: Kualitas Pelaksanaan -->
              <tr class="bg-green-50 hover:bg-green-100 transition-colors">
                <td class="px-6 py-4 text-sm font-medium text-gray-900 border-b border-green-200">
                  Kualitas Pelaksanaan
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  2
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  Realisasi Anggaran Pendapatan Triwulanan
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  40%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  0,00
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  0,00
                </td>
              </tr>
              
              <!-- Row 3: Anggaran Pendapatan -->
              <tr class="bg-green-50 hover:bg-green-100 transition-colors">
                <td class="px-6 py-4 text-sm font-medium text-gray-900 border-b border-green-200">
                  Anggaran Pendapatan
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  3
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  Realisasi Anggaran Pendapatan 1 Jan s/d 31 Des
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  40%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  0,00
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-green-200">
                  0,00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="bg-green-50 rounded-lg border border-green-200 p-6 mt-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div class="mb-4 sm:mb-0">
            <h3 class="text-lg font-bold text-gray-900 mb-2">IKPA</h3>
            <div class="text-3xl font-bold text-gray-900">0</div>
          </div>
          <div class="text-right">
            <h4 class="text-lg font-bold text-gray-900 mb-2">Kategori Nilai</h4>
            <div class="text-xl font-bold text-gray-900">TIDAK MEMILIKI PENDAPATAN</div>
          </div>
        </div>
      </div>

      <!-- IKPA Score Legend -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Kategori IKPA</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-yellow-400 p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1">Sangat Baik</h4>
              <p class="text-sm text-gray-900">IKPA ≥95</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1">Baik</h4>
              <p class="text-sm text-gray-900">89≤ IKPA <95</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1">Cukup</h4>
              <p class="text-sm text-gray-900">70≤IKPA<89</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1">Kurang</h4>
              <p class="text-sm text-gray-900">IKPA<70</p>
            </div>
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
  name: 'PendapatanResultView',
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