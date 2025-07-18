<template>
  <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md space-y-4">
    <div>
      <label for="username" class="block mb-1 font-semibold">Username</label>
      <input v-model="username" id="username" type="text" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div>
      <label for="password" class="block mb-1 font-semibold">Password</label>
      <input v-model="password" id="password" type="password" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // Placeholder: emit event or handle login logic
      this.$emit('login', { username: this.username, password: this.password });
    }
  }
}
</script> 