<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm" 
      @click="$emit('close')"
    ></div>
    
    <!-- Dialog Content -->
    <div class="relative bg-white rounded-lg shadow-2xl border-4 border-black transform transition-all duration-200 ease-out w-full max-w-md mx-4">
      <!-- Dialog Header -->
      <div class="flex items-center justify-between p-6 border-b-4 border-black">
        <div>
          <h2 class="text-2xl font-bold text-black">Login</h2>
          <p class="text-gray-600 mt-1">Masuk ke sistem IKP-APBD</p>
        </div>
        <button 
          @click="$emit('close')"
          class="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
        >
          ✕
        </button>
      </div>
      
      <!-- Dialog Body -->
      <div class="p-6">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="space-y-2">
            <label for="username" class="text-sm font-semibold text-black block">
              Username
            </label>
            <input
              v-model="username"
              id="username"
              type="text"
              required
              class="w-full px-4 py-3 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-200 focus:outline-none"
              placeholder="Masukkan username"
            />
          </div>
          
          <div class="space-y-2">
            <label for="password" class="text-sm font-semibold text-black block">
              Password
            </label>
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="w-full px-4 py-3 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-200 focus:outline-none"
              placeholder="Masukkan password"
            />
          </div>
          
          <!-- Dialog Footer -->
          <div class="flex gap-3 pt-4">
            <button
              type="button"
              @click="$emit('close')"
              class="flex-1 px-4 py-3 bg-gray-200 text-black font-semibold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              Batal
            </button>
            <button
              type="submit"
              class="flex-1 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              Login
            </button>
          </div>
        </form>
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