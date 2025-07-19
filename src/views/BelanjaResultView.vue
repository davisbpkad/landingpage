<template>
  <DashboardLayout>
    <div class="max-w-6xl mx-auto px-4 lg:px-0">
      <!-- Header -->
      <div class="mb-6 lg:mb-8">
        <h1 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Belanja Result</h1>
        <p class="text-gray-600 text-sm lg:text-base">Hasil evaluasi belanja IKP-APBD</p>
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
                  KATEGORI PENILAIAN
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  INDIKATOR
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  BOBOT
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  NILAI INDIKATOR
                </th>
                <th class="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b border-yellow-500">
                  NILAI
                </th>
              </tr>
            </thead>
            
            <!-- Table Body -->
            <tbody>
              <!-- Category 1: Kualitas perencanaan anggaran Belanja -->
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-sm font-bold text-gray-900 border-b border-gray-200" rowspan="2">
                  1. Kualitas perencanaan anggaran Belanja
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  1.1 Indikator Revisi DPA
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  87,50
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  8,75
                </td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  1.2 Indikator Deviasi Rencana Penarikan Dana
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  100,00
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10,00
                </td>
              </tr>

              <!-- Category 2: Kualitas pelaksanaan anggaran Belanja -->
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-sm font-bold text-gray-900 border-b border-gray-200" rowspan="5">
                  2. Kualitas pelaksanaan anggaran Belanja
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  2.1 Indikator Penyerapan Anggaran
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  20%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  53,38
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10,68
                </td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  2.2 Indikator Belanja Kontraktual
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  70,00
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  7,00
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  2.3 Indikator Penyelesaian Tagihan
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  55,32
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  5,53
                </td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  2.4 Indikator Pengelolaan Uang Persediaan dan Tambahan Uang Persediaan
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  10%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  87,05
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  8,71
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  2.5 Indikator Dispensasi Surat Perintah Membayar
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  5%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  85,00
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  4,25
                </td>
              </tr>

              <!-- Category 3: Kualitas hasil pelaksanaan anggaran -->
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-sm font-bold text-gray-900 border-b border-gray-200">
                  3. Kualitas hasil pelaksanaan anggaran
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  3.1 Indikator kinerja capaian Output
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  25%
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  97,31
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                  24,33
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Cards (visible on mobile and tablet) -->
        <div class="lg:hidden space-y-4 p-4">
          <!-- Category 1: Kualitas perencanaan anggaran Belanja -->
          <div class="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <h3 class="font-bold text-gray-900 mb-3 text-sm">1. Kualitas perencanaan anggaran Belanja</h3>
            
            <!-- Card 1.1 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">1.1 Indikator Revisi DPA</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">10%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">87,50</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">8,75</p>
                </div>
              </div>
            </div>

            <!-- Card 1.2 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">1.2 Indikator Deviasi Rencana Penarikan Dana</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">10%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">100,00</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">10,00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category 2: Kualitas pelaksanaan anggaran Belanja -->
          <div class="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <h3 class="font-bold text-gray-900 mb-3 text-sm">2. Kualitas pelaksanaan anggaran Belanja</h3>
            
            <!-- Card 2.1 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">2.1 Indikator Penyerapan Anggaran</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">20%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">53,38</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">10,68</p>
                </div>
              </div>
            </div>

            <!-- Card 2.2 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">2.2 Indikator Belanja Kontraktual</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">10%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">70,00</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">7,00</p>
                </div>
              </div>
            </div>

            <!-- Card 2.3 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">2.3 Indikator Penyelesaian Tagihan</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">10%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">55,32</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">5,53</p>
                </div>
              </div>
            </div>

            <!-- Card 2.4 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">2.4 Indikator Pengelolaan Uang Persediaan dan Tambahan Uang Persediaan</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">10%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">87,05</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">8,71</p>
                </div>
              </div>
            </div>

            <!-- Card 2.5 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">2.5 Indikator Dispensasi Surat Perintah Membayar</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">5%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">85,00</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">4,25</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category 3: Kualitas hasil pelaksanaan anggaran -->
          <div class="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <h3 class="font-bold text-gray-900 mb-3 text-sm">3. Kualitas hasil pelaksanaan anggaran</h3>
            
            <!-- Card 3.1 -->
            <div class="bg-white border border-gray-200 rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-gray-900 text-sm">3.1 Indikator kinerja capaian Output</h4>
                <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">25%</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium text-gray-700">Nilai Indikator:</span>
                  <p class="text-gray-900">97,31</p>
                </div>
                <div>
                  <span class="font-medium text-gray-700">Nilai:</span>
                  <p class="text-gray-900 font-bold">24,33</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="bg-green-50 rounded-lg border border-green-200 p-4 lg:p-6 mt-6">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="mb-4 lg:mb-0">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Nilai IKPA</h3>
            <div class="text-2xl lg:text-3xl font-bold text-gray-900">79,24</div>
          </div>
          <div class="text-left lg:text-right">
            <h4 class="text-lg font-bold text-gray-900 mb-2">Kategori Nilai IKPA</h4>
            <div class="text-lg lg:text-xl font-bold text-gray-900">Cukup</div>
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
              <p class="text-xs lg:text-sm text-gray-900">89 ≤ IKPA < 95</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-3 lg:p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1 text-sm lg:text-base">Cukup</h4>
              <p class="text-xs lg:text-sm text-gray-900">70 ≤ IKPA < 89</p>
            </div>
          </div>
          <div class="bg-yellow-400 p-3 lg:p-4 rounded-lg">
            <div class="text-center">
              <h4 class="font-bold text-gray-900 mb-1 text-sm lg:text-base">Kurang</h4>
              <p class="text-xs lg:text-sm text-gray-900">IKPA < 70</p>
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
  name: 'BelanjaResultView',
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