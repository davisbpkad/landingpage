<template>
  <div class="min-h-screen bg-gray-50 pt-16 flex flex-col items-center">
    <main class="w-full max-w-2xl px-4 sm:px-6 py-8">
      <!-- Back to Login Button -->
      <div class="text-left mb-6">
        <RouterLink 
          to="/" 
          class="back-to-login-btn inline-flex items-center px-8 py-10 bg-white text-black text-sm font-bold border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] focus:outline-none transition-all duration-200 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] !text-black"
          style="color: black !important;"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Kembali ke Login
        </RouterLink>
      </div>
      
      <h1 class="text-3xl font-bold text-gray-800 mt-16 mb-8 text-center">Frequently Asked Questions</h1>
      <div class="w-full">
        <div v-for="(item, idx) in faqs" :key="idx" class="mb-4">
          <button
            @click="toggle(idx)"
            class="w-full flex justify-between items-center bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-4 font-semibold text-lg text-left transition-all duration-200 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] focus:outline-none"
          >
            <span>{{ item.question }}</span>
            <span class="ml-4 text-2xl">{{ openIndex === idx ? '−' : '+' }}</span>
          </button>
          <div
            v-show="openIndex === idx"
            class="bg-yellow-50 border-x-2 border-b-2 border-black rounded-b-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-4 text-gray-800 animate-fade-in"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'FaqView',
  components: {
    RouterLink
  },
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: 'Apa itu IKP-APBD?',
          answer: 'IKP-APBD adalah sistem Informasi Kinerja Anggaran Pendapatan dan Belanja Daerah yang digunakan untuk mengelola dan memantau kinerja anggaran daerah secara transparan dan akuntabel.'
        },
        {
          question: 'Bagaimana cara mengakses sistem IKP-APBD?',
          answer: 'Untuk mengakses sistem, Anda perlu melakukan login dengan username dan password yang telah diberikan oleh administrator. Jika belum memiliki akun, silakan hubungi admin sistem.'
        },
        {
          question: 'Fitur apa saja yang tersedia di IKP-APBD?',
          answer: 'Sistem ini menyediakan berbagai fitur seperti input data anggaran, monitoring realisasi, laporan kinerja, dashboard analisis, dan export data dalam berbagai format.'
        },
        {
          question: 'Apakah data di IKP-APBD aman?',
          answer: 'Ya, sistem IKP-APBD dilengkapi dengan sistem keamanan yang ketat termasuk enkripsi data, backup otomatis, dan kontrol akses berdasarkan role pengguna.'
        },
        {
          question: 'Bagaimana jika saya lupa password?',
          answer: 'Jika Anda lupa password, silakan hubungi administrator sistem untuk reset password. Pastikan untuk selalu menjaga kerahasiaan akun Anda.'
        }
      ]
    }
  },
  methods: {
    toggle(idx) {
      this.openIndex = this.openIndex === idx ? null : idx
    }
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.2s ease;
}
</style>