<template>
  <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
    <div class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email*
        </label>
        <input
          id="email"
          v-model="formData.email"
          name="email"
          type="email"
          required
          class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Masukkan Email"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password*
        </label>
        <div class="mt-1 relative">
          <input
            id="password"
            v-model="formData.password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            required
            class="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Masukkan Password"
          />
          <button
            type="button"
            @click="togglePassword"
            class="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg
              v-if="showPassword"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
              />
            </svg>
            <svg
              v-else
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          v-model="formData.rememberMe"
          name="remember-me"
          type="checkbox"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Ingat saya
        </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
          Lupa Password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="group relative w-full flex justify-center py-3 px-6 border-2 border-black text-sm font-bold rounded-lg text-white bg-blue-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] focus:outline-none transition-all duration-200 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px]"
      >
        Masuk
      </button>
    </div>

    <div class="text-center">
      <span class="text-sm text-gray-600">Belum punya akun?</span>
      <a href="#" class="ml-1 text-sm font-medium text-blue-600 hover:text-blue-500">
        Daftar
      </a>
    </div>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'LoginForm',
  emits: ['submit'],
  setup(props, { emit }) {
    const showPassword = ref(false)
    const formData = reactive({
      email: 'user@ikp-apbd.com',
      password: '',
      rememberMe: false
    })

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    const handleSubmit = () => {
      emit('submit', { ...formData })
    }

    return {
      formData,
      showPassword,
      togglePassword,
      handleSubmit
    }
  }
}
</script> 