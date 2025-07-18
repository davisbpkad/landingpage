<template>
    <aside class="bg-white border-r-4 border-black min-h-screen w-64 flex flex-col shadow-[4px_0_0_0_rgba(0,0,0,1)]">
      <div class="p-6 border-b-4 border-black">
        <div class="font-extrabold text-2xl text-black mb-2">IKP-APBD</div>
        <div class="text-xs text-gray-500">User Menu</div>
      </div>
      <nav class="flex-1 flex flex-col py-4 space-y-2">
        <router-link 
            to="/user" 
            class="w-32 text-center !text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
          >
            Home
          </router-link>
        <router-link
          to="/user/resume"
          class="w-32 text-center !text-black px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
          active-class="bg-yellow-400"
        >
           Resume
        </router-link>
        <!-- menu input -->
        <div class="text-gray-400 font-bold px-6 mt-4 mb-2">Pendapatan</div>
        <router-link
          to="/user/pendapatan/anggaran"
          class="flex items-center gap-2 px-8 py-2 rounded-lg !text-black hover:bg-gray-100"
        >Pencantuman Anggaran
        </router-link>
        <router-link
          to="/user/pendapatan/realiasi"
          class="flex items-center gap-2 px-8 py-2 rounded-lg !text-black hover:bg-gray-100"
        >Realisasi Anggaran
        </router-link>
        <div class="text-gray-400 font-bold px-6 mt-4 mb-2">Belanja</div>
        <router-link
          to="/user/belanja/perencanaan"
          class="flex items-center gap-2 px-8 py-2 rounded-lg !text-black hover:bg-gray-100"
        > Kualitas Perencanaan
        </router-link>
        <router-link
          to="/user/belanja/pelaksanaan"
          class="flex items-center gap-2 px-8 py-2 rounded-lg !text-black hover:bg-gray-100"
        > Kualitas Pelaksanaan
        </router-link>
      </nav>
    </aside>
  </template>
