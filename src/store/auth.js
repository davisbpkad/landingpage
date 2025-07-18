import { reactive } from 'vue'

// Simple authentication store with Vue 3 reactivity
const authStore = reactive({
  isAuthenticated: false,
  user: null,
  token: null,
  
  // Check if user is already logged in (from localStorage)
  checkAuth() {
    const token = localStorage.getItem('auth_token')
    const user = localStorage.getItem('auth_user')
    
    if (token && user) {
      this.isAuthenticated = true
      this.token = token
      this.user = JSON.parse(user)
    }
  },

  login(credentials) {
    // Dalam implementasi nyata, ini akan memanggil API
    // Untuk demo, kita gunakan kredensial sederhana
    if (credentials.username === 'user' && credentials.password === 'user123') {
      const user = {
        id: 1,
        username: credentials.username,
        role: 'user'
      }
      const token = 'demo-token-' + Date.now()
      
      this.isAuthenticated = true
      this.user = user
      this.token = token
      
      // Simpan ke localStorage
      localStorage.setItem('auth_token', token)
      localStorage.setItem('auth_user', JSON.stringify(user))
      
      return { success: true, user, token }
    } else {
      return { success: false, message: 'Username atau password salah' }
    }
  },

  logout() {
    this.isAuthenticated = false
    this.user = null
    this.token = null
    
    // Hapus dari localStorage
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
  },

  requireAuth() {
    return this.isAuthenticated
  }
})

// Initialize authentication check
authStore.checkAuth()

export default authStore
