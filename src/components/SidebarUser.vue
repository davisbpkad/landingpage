<template>
  <div>
    <!-- Overlay (Mobile Only) -->
    <transition name="fade">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        @click="$emit('close')"
      ></div>
    </transition>

    <!-- Sidebar -->
    <transition name="slide">
      <aside
        v-show="sidebarOpen || isDesktop"
        class="fixed md:static top-0 left-0 h-full bg-white border-r-4 border-black w-full max-w-xs md:w-64 flex flex-col z-50 md:z-10 transition-all duration-300"
        :class="{ '-translate-x-full': !sidebarOpen && !isDesktop, 'translate-x-0': sidebarOpen || isDesktop }"
        style="height: 100vh;"
      >
        <!-- Tombol close (mobile only) -->
        <button v-if="!isDesktop" class="md:hidden absolute top-4 right-4" @click="$emit('close')">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
        <div class="p-4 border-b-4 border-black flex flex-col items-center">
          <div class="font-extrabold text-2xl !text-black mb-1 text-center w-full">IKP-APBD</div>
          <div class="text-xs text-gray-500 text-center w-full">User Menu</div>
        </div>
        <nav class="flex-1 flex flex-col py-4 gap-2 px-2">
          <router-link
            to="/user"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-house-user"></i>
            <span>Home</span>
          </router-link>

          <div class="!text-black font-bold mt-4 mb-1 px-2">Pendapatan</div>
          <router-link
            to="/user/pendapatan/anggaran"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold hover:bg-gray-100 transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user/pendapatan/anggaran' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-money-bills"></i>
            <span>Pencantuman Anggaran</span>
          </router-link>
          <router-link
            to="/user/pendapatan/realisasi-triwulan"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold hover:bg-gray-100 transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user/pendapatan/realisasi-triwulan' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-calendar"></i>
            <span>Realisasi Triwulan</span>
          </router-link>
          <router-link
            to="/user/pendapatan/realisasi-tahunan"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold hover:bg-gray-100 transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user/pendapatan/realisasi-tahunan' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-calendar-day"></i>
            <span>Realisasi Tahunan</span>
          </router-link>

          <div class="!text-black font-bold mt-4 mb-1 px-2">Belanja</div>
          <router-link
            to="/user/belanja/perencanaan"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold hover:bg-gray-100 transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user/belanja/perencanaan' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-clipboard-list"></i>
            <span>Kualitas Perencanaan</span>
          </router-link>
          <router-link
            to="/user/belanja/pelaksanaan"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold hover:bg-gray-100 transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user/belanja/pelaksanaan' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-building-circle-check"></i>
            <span>Kualitas Pelaksanaan</span>
          </router-link>
          <router-link
            to="/user/belanja/output"
            class="!text-black flex items-center gap-3 pl-4 pr-3 py-3 rounded-lg w-full text-base font-bold hover:bg-gray-100 transition-all duration-150"
            :class="{ 'bg-gray-100': $route.path === '/user/belanja/output' }"
            @click.native="closeSidebarOnMobile"
          >
            <i class="fa-duotone fa-solid fa-clipboard-check"></i>
            <span>Kualitas Hasil</span>
          </router-link>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarUser',
  props: ['sidebarOpen'],
  data() {
    return {
      isDesktop: false,
    }
  },
  mounted() {
    this.checkDesktop();
    window.addEventListener('resize', this.checkDesktop);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDesktop);
  },
  methods: {
    checkDesktop() {
      this.isDesktop = window.innerWidth >= 768;
    },
    closeSidebarOnMobile() {
      if (!this.isDesktop) {
        this.$emit('close');
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
