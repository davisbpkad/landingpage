<template>
  <DashboardLayout>
    <div class="max-w-4xl mx-auto px-4 lg:px-0">
      <!-- Header -->
      <div class="mb-6 lg:mb-8">
        <h1 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Pendapatan Result</h1>
        <p class="text-gray-600 text-sm lg:text-base">Hasil evaluasi pendapatan IKP-APBD</p>
      </div>

      <!-- User Info and Date -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6 mb-6">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="mb-4 lg:mb-0">
            <h2 class="text-lg font-semibold text-gray-900 mb-1">Nama User</h2>
            <p class="text-gray-600">{{ authStore.user?.name || 'User Test' }}</p>
          </div>
          <div class="text-left lg:text-right">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Tanggal Pengisian</h3>
            <p class="text-gray-600">{{ currentDate }}</p>
          </div>
        </div>
      </div>

      <!-- Financial Report Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <!-- Desktop Table (hidden on mobile) -->
        <div class="hidden lg:block overflow-x-auto">
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

        <!-- Mobile Cards (visible on mobile and tablet) -->
        <div class="lg:hidden space-y-4 p-4">
          <!-- Card 1: Kualitas Perencanaan -->
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-gray-900">Kualitas Perencanaan</h3>
              <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">No. 1</span>
            </div>
            <div class="space-y-2 text-sm">
              <div>
                <span class="font-medium text-gray-700">Indikator:</span>
                <p class="text-gray-900 mt-1">Pencantuman Anggaran Pendapatan sesuai Potensi</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="font-medium text-gray-700">Bobot:</span>
                  <p class="text-gray-900">20%</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Realisasi:</span>
                  <p class="text-gray-900">0,00</p>
                </div>
              </div>
              <div class="border-t pt-2">
                <span class="font-bold text-gray-900">Nilai: 0,00</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Kualitas Pelaksanaan -->
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-gray-900">Kualitas Pelaksanaan</h3>
              <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">No. 2</span>
            </div>
            <div class="space-y-2 text-sm">
              <div>
                <span class="font-medium text-gray-700">Indikator:</span>
                <p class="text-gray-900 mt-1">Realisasi Anggaran Pendapatan Triwulanan</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="font-medium text-gray-700">Bobot:</span>
                  <p class="text-gray-900">40%</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Realisasi:</span>
                  <p class="text-gray-900">0,00</p>
                </div>
              </div>
              <div class="border-t pt-2">
                <span class="font-bold text-gray-900">Nilai: 0,00</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Anggaran Pendapatan -->
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-gray-900">Anggaran Pendapatan</h3>
              <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">No. 3</span>
            </div>
            <div class="space-y-2 text-sm">
              <div>
                <span class="font-medium text-gray-700">Indikator:</span>
                <p class="text-gray-900 mt-1">Realisasi Anggaran Pendapatan 1 Jan s/d 31 Des</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="font-medium text-gray-700">Bobot:</span>
                  <p class="text-gray-900">40%</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Realisasi:</span>
                  <p class="text-gray-900">0,00</p>
                </div>
              </div>
              <div class="border-t pt-2">
                <span class="font-bold text-gray-900">Nilai: 0,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="bg-green-50 rounded-lg border border-green-200 p-4 lg:p-6 mt-6">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="mb-4 lg:mb-0">
            <h3 class="text-lg font-bold text-gray-900 mb-2">IKPA</h3>
            <div class="text-2xl lg:text-3xl font-bold text-gray-900">0</div>
          </div>
          <div class="text-left lg:text-right">
            <h4 class="text-lg font-bold text-gray-900 mb-2">Kategori Nilai</h4>
            <div class="text-lg lg:text-xl font-bold text-gray-900">TIDAK MEMILIKI PENDAPATAN</div>
          </div>
        </div>
      </div>

      <!-- IKPA Score Legend -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Kategori IKPA</h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <div class="bg-yellow-400 p-3 lg:p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1 text-sm lg:text-base">Sangat Baik</h4>
              <p class="text-xs lg:text-sm text-gray-900">IKPA ≥95</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-3 lg:p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1 text-sm lg:text-base">Baik</h4>
              <p class="text-xs lg:text-sm text-gray-900">89≤ IKPA <95</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-3 lg:p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1 text-sm lg:text-base">Cukup</h4>
              <p class="text-xs lg:text-sm text-gray-900">70≤IKPA<89</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-3 lg:p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1 text-sm lg:text-base">Kurang</h4>
              <p class="text-xs lg:text-sm text-gray-900">IKPA<70</p>
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