<template>
  <form @submit.prevent="handleLogin" class="w-full space-y-4">
    <div class="mb-4">
      <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
        Username
      </label>
      <input
        v-model="form.username"
        type="text"
        id="username"
        name="username"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Masukkan username"
      />
    </div>

    <div class="mb-6">
      <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        v-model="form.password"
        type="password"
        id="password"
        name="password"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Masukkan password"
      />
    </div>

    <div v-if="error" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <span v-if="isLoading">Loading...</span>
      <span v-else>Login</span>
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      error: '',
      isLoading: false
    }
  },
  methods: {
    async handleLogin() {
      this.error = ''
      this.isLoading = true

      try {
        // Simulasi login - dalam implementasi nyata, ini akan memanggil API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Kredensial sederhana untuk demo
        if (this.form.username === 'admin' && this.form.password === 'admin123') {
          this.$emit('login', {
            username: this.form.username,
            password: this.form.password,
            success: true
          })
        } else {
          this.error = 'Username atau password salah'
        }
      } catch (error) {
        this.error = 'Terjadi kesalahan saat login'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
