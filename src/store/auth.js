import { reactive } from 'vue'
import { alertStore } from './alert.js'

// Simulasi data user
const users = [
  {
    email: 'admin@ikp-apbd.com',
    password: 'admin123',
    name: 'Administrator',
    role: 'admin'
  },
  {
    email: 'user@ikp-apbd.com',
    password: 'user123',
    name: 'user-test',
    role: 'user'
  }
]

export const authStore = reactive({
  user: null,
  isAuthenticated: false,

  login(email, password) {
    console.log('Login attempt:', email, password)
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      console.log('Login successful for user:', user.name)
      this.user = user
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(user))
      console.log('Calling alertStore.success')
      alertStore.success('Login Berhasil!', `Selamat datang, ${user.name}!`)
      return { success: true, user }
    }
    console.log('Login failed - calling alertStore.error')
    alertStore.error('Login Gagal!', 'Email atau password salah')
    return { success: false, message: 'Email atau password salah' }
  },

  logout() {
    const userName = this.user?.name || 'User'
    console.log('Logout for user:', userName)
    this.user = null
    this.isAuthenticated = false
    localStorage.removeItem('user')
    console.log('Calling alertStore.success for logout')
    alertStore.success('Logout Berhasil!', `Sampai jumpa, ${userName}!`)
  },

  checkAuth() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      this.user = JSON.parse(savedUser)
      this.isAuthenticated = true
    }
  },

  requireAuth() {
    return this.isAuthenticated
  }
}) 