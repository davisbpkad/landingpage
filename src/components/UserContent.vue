<template>
    <main class="flex-1 bg-white p-8">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-2">Dinas Penanaman Modal dan Perizinan Terpadu Satu Pintu</h2>
            <h3 class="text-lg font-semibold mb-6 text-gray-600">31 December 2024</h3>
          </div>

          <!-- Dashboard Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-blue-800 mb-2">Total Pendapatan</h4>
              <p class="text-3xl font-bold text-blue-600">Rp 0,00</p>
              <p class="text-sm text-blue-600 mt-1">Tidak memiliki pendapatan</p>
            </div>
            
            <div class="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-green-800 mb-2">Total Belanja</h4>
              <p class="text-3xl font-bold text-green-600">79,24%</p>
              <p class="text-sm text-green-600 mt-1">Kategori: Cukup</p>
            </div>
            
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-yellow-800 mb-2">Status Anggaran</h4>
              <p class="text-3xl font-bold text-yellow-600">Aktif</p>
              <p class="text-sm text-yellow-600 mt-1">Periode 2024</p>
            </div>
          </div>

          <!-- Data Table -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
              <h3 class="text-lg font-semibold text-gray-800">Ringkasan Data</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Klasifikasi
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nilai
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategori Nilai
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Pendapatan
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0,00
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        TIDAK MEMILIKI PENDAPATAN
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Belanja
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      79,24
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Cukup
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
</template>