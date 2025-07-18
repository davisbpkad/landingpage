<template>
  <div class="p-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-2">Kualitas Pelaksanaan Belanja</h2>
        <h3 class="text-lg font-semibold mb-6 text-gray-600">31 December 2024</h3>
      </div>

      <!-- Quality Indicator -->
      <div class="bg-gradient-to-r from-green-50 to-yellow-50 border border-green-200 rounded-lg p-6 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Skor Kualitas Pelaksanaan</h3>
            <p class="text-gray-600">Evaluasi kualitas pelaksanaan anggaran belanja</p>
          </div>
          <div class="text-right">
            <p class="text-4xl font-bold text-orange-600">72</p>
            <p class="text-sm text-orange-600 font-medium">Cukup</p>
          </div>
        </div>
      </div>

      <!-- Criteria Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Ketepatan Waktu</h4>
          <p class="text-3xl font-bold text-blue-600">75</p>
          <p class="text-sm text-gray-600 mt-1">Cukup</p>
        </div>
        
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Efisiensi Biaya</h4>
          <p class="text-3xl font-bold text-green-600">80</p>
          <p class="text-sm text-gray-600 mt-1">Baik</p>
        </div>
        
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Kualitas Output</h4>
          <p class="text-3xl font-bold text-yellow-600">68</p>
          <p class="text-sm text-gray-600 mt-1">Cukup</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Kepatuhan Prosedur</h4>
          <p class="text-3xl font-bold text-purple-600">65</p>
          <p class="text-sm text-gray-600 mt-1">Cukup</p>
        </div>
      </div>

      <!-- Assessment Form -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Penilaian Kualitas Pelaksanaan</h3>
        </div>
        <div class="p-6">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Program/Kegiatan
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama program/kegiatan"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Periode Pelaksanaan
                </label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Pilih periode</option>
                  <option>Januari 2024</option>
                  <option>Februari 2024</option>
                  <option>Maret 2024</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Ketepatan Waktu (1-100)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Efisiensi Biaya (1-100)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Kualitas Output (1-100)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Kepatuhan Prosedur (1-100)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Anggaran Terpakai (Rp)
                </label>
                <input
                  type="number"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Persentase Realisasi (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Catatan/Keterangan Pelaksanaan
              </label>
              <textarea
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Catatan evaluasi kualitas pelaksanaan"
              ></textarea>
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
                Simpan Penilaian
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Riwayat Penilaian Pelaksanaan</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Periode
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program/Kegiatan
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skor Total
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Realisasi (%)
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td colspan="6" class="px-6 py-8 text-center text-gray-500">
                  Belum ada data penilaian kualitas pelaksanaan
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
  name: 'UserBelanjaPelaksanaan'
}
</script>
