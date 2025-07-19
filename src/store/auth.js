import { reactive } from 'vue'

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
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      this.user = user
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(user))
      return { success: true, user }
    }
    return { success: false, message: 'Email atau password salah' }
  },

  logout() {
    this.user = null
    this.isAuthenticated = false
    localStorage.removeItem('user')
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