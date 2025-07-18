<template>
    <aside class="bg-white border-r-4 border-black min-h-screen w-64 flex flex-col shadow-[4px_0_0_0_rgba(0,0,0,1)]">
      <div class="p-6 border-b-4 border-black">
        <div class="font-extrabold text-2xl text-black mb-2">IKP-APBD</div>
        <div class="text-xs text-gray-500">Admin Menu</div>
      </div>
      <nav class="flex-1 flex flex-col py-4 space-y-2">
        <router-link
          to="/admin/resume"
          class="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-black bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all"
          active-class="bg-yellow-400"
        >
          <span class="material-icons">home</span> Resume
        </router-link>
        <div class="text-gray-400 font-bold px-6 mt-4 mb-2">Pendapatan</div>
        <router-link
          to="/admin/pendapatan/anggaran"
          class="flex items-center gap-2 px-8 py-2 rounded-lg text-black hover:bg-gray-100"
        >
          <span class="material-icons text-base">play_arrow</span> Pencantuman Anggaran
        </router-link>
        <router-link
          to="/admin/pendapatan/realiasi"
          class="flex items-center gap-2 px-8 py-2 rounded-lg text-black hover:bg-gray-100"
        >
          <span class="material-icons text-base">play_arrow</span> Realisasi Anggaran
        </router-link>
        <div class="text-gray-400 font-bold px-6 mt-4 mb-2">Belanja</div>
        <router-link
          to="/admin/belanja/perencanaan"
          class="flex items-center gap-2 px-8 py-2 rounded-lg text-black hover:bg-gray-100"
        >
          <span class="material-icons text-base">shopping_cart</span> Kualitas Perencanaan
        </router-link>
        <router-link
          to="/admin/belanja/pelaksanaan"
          class="flex items-center gap-2 px-8 py-2 rounded-lg text-black hover:bg-gray-100"
        >
          <span class="material-icons text-base">shopping_cart</span> Kualitas Pelaksanaan
        </router-link>
      </nav>
    </aside>
  </template>
