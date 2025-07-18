<template>
  <div class="p-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-2">Resume - Dinas Penanaman Modal dan Perizinan Terpadu Satu Pintu</h2>
        <h3 class="text-lg font-semibold mb-6 text-gray-600">31 December 2024</h3>
      </div>

      <!-- Resume Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          <h4 class="text-lg font-semibold text-yellow-800 mb-2">Kualitas Perencanaan</h4>
          <p class="text-3xl font-bold text-yellow-600">85%</p>
          <p class="text-sm text-yellow-600 mt-1">Baik</p>
        </div>

        <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-purple-800 mb-2">Kualitas Pelaksanaan</h4>
          <p class="text-3xl font-bold text-purple-600">72%</p>
          <p class="text-sm text-purple-600 mt-1">Cukup</p>
        </div>
      </div>

      <!-- Summary Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Resume Kinerja Anggaran</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nilai
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Persentase
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Pendapatan
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Rp 0,00
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0%
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Tidak Ada
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Belanja
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  79,24%
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
  </div>
</template>

<script>
export default {
  name: 'UserResume'
}
</script>
