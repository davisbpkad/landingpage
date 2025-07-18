<!-- src/views/AdminDashboard.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex flex-1">
        <SidebarUser />
        <main class="flex-1 bg-white p-8">
          <h2 class="text-2xl font-bold mb-4">Dinas Penanaman Modal dan Perizinan Terpadu Satu Pintu</h2>
          <h3 class="text-lg font-semibold mb-6">31 December 2024</h3>
          <div class="overflow-x-auto">
            <table class="min-w-[500px] border-collapse">
              <thead>
                <tr>
                  <th class="bg-yellow-300 border-2 border-black px-4 py-2 text-lg font-bold">Klasifikasi</th>
                  <th class="bg-yellow-300 border-2 border-black px-4 py-2 text-lg font-bold">Nilai</th>
                  <th class="bg-yellow-300 border-2 border-black px-4 py-2 text-lg font-bold">Kategori Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border-2 border-black px-4 py-2 font-semibold">Pendapatan</td>
                  <td class="border-2 border-black px-4 py-2">0,00</td>
                  <td class="border-2 border-black px-4 py-2 bg-green-50">TIDAK MEMILIKI PENDAPATAN</td>
                </tr>
                <tr>
                  <td class="border-2 border-black px-4 py-2 font-semibold">Belanja</td>
                  <td class="border-2 border-black px-4 py-2">79,24</td>
                  <td class="border-2 border-black px-4 py-2 bg-green-100">Cukup</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue'
  import SidebarAdmin from './SidebarUser.vue'
  import Footer from '../components/Footer.vue'
  </script>