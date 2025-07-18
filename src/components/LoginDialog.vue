<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm" 
      @click="$emit('close')"
    ></div>
    
    <!-- Card Dialog Content -->
    <div class="relative w-full max-w-sm mx-4 bg-white rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
      <!-- Card Header -->
      <div class="border-b-4 border-black p-6">
        <h2 class="text-2xl font-bold text-black mb-1">Login ke Akun Anda</h2>
        <p class="text-gray-600 text-sm">Masukkan email dan password untuk login ke sistem</p>
      </div>
      <!-- Card Content -->
      <div class="p-6 flex-1">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <div class="grid gap-2">
            <label for="email" class="text-sm font-semibold text-black">Email</label>
            <input
              v-model="username"
              id="email"
              type="email"
              required
              class="w-full px-4 py-3 border-2 border-black rounded-lg bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[1px] focus:translate-y-[1px] transition-all duration-200 focus:outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <label for="password" class="text-sm font-semibold text-black">Password</label>
              <a href="#" class="ml-auto inline-block text-xs underline underline-offset-4 hover:text-blue-600">Lupa password?</a>
            </div>
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="w-full px-4 py-3 border-2 border-black rounded-lg bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[1px] focus:translate-y-[1px] transition-all duration-200 focus:outline-none"
              placeholder="Masukkan password"
            />
          </div>
          <div class="flex flex-col gap-2 mt-2">
            <button
              type="submit"
              class="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200"
            >
              Login
            </button>
            <button
              type="button"
              @click="$emit('close')"
              class="w-full px-4 py-3 bg-gray-200 text-black font-semibold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200"
            >
              Batal
            </button>
          </div>
        </form>
        <div class="mt-4 text-center text-xs text-gray-600">
          Belum punya akun? <a href="#" class="underline underline-offset-4">Daftar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginDialog',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('login', {
        username: this.username,
        password: this.password
      })
      this.username = ''
      this.password = ''
    }
  }
}
</script> 