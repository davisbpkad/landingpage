<template>
  <div class="p-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-2">Realisasi Anggaran Pendapatan Tahunan</h2>
        <h3 class="text-lg font-semibold mb-6 text-gray-600">31 Desember 2024</h3>
      </div>
      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-blue-800 mb-2">Total Anggaran</h4>
          <p class="text-3xl font-bold text-blue-600">Rp 0,00</p>
          <p class="text-sm text-blue-600 mt-1">Target pendapatan</p>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-green-800 mb-2">Realisasi Tahunan</h4>
          <p class="text-3xl font-bold text-green-600">Rp 0,00</p>
          <p class="text-sm text-green-600 mt-1">Pendapatan terealisasi tahunan</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-yellow-800 mb-2">Persentase</h4>
          <p class="text-3xl font-bold text-yellow-600">0%</p>
          <p class="text-sm text-yellow-600 mt-1">Capaian realisasi tahunan</p>
        </div>
      </div>
      <!-- Form Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Input Realisasi Pendapatan Tahunan</h3>
        </div>
        <div class="p-6">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Rekening
                </label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Pilih rekening pendapatan</option>
                  <option>Belum ada data anggaran</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Realisasi
                </label>
                <input
                  type="date"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Realisasi (Rp)
                </label>
                <input
                  type="number"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Keterangan
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Keterangan realisasi tahunan"
                />
              </div>
            </div>
            <div class="flex justify-end space-x-4">
              <button
                type="button"
                class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Simpan Realisasi Tahunan
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- Data Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Data Realisasi Pendapatan Tahunan</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rekening
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Anggaran
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Realisasi Tahunan
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Persentase
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td colspan="6" class="px-6 py-8 text-center text-gray-500">
                  Belum ada data realisasi pendapatan tahunan
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
  name: 'UserPendapatanRealisasiTahunan'
}
</script> 