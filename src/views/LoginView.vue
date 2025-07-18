<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col items-center w-full">
      <div class="mb-8 flex flex-col items-center">
        <img src="/favicon.ico" alt="Logo" class="w-16 h-16 mb-2" />
        <h1 class="text-3xl font-bold text-gray-800 mb-1">Selamat Datang</h1>
        <p class="text-gray-600 text-center">Silakan login untuk melanjutkan</p>
      </div>
      <div class="w-full max-w-sm">
        <LoginForm @login="onLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  },
  methods: {
    onLogin({ username, password }) {
      // Handle login logic here
      console.log('Login attempt:', { username, password })
      this.$emit('close')
    }
  }
}
</script> 