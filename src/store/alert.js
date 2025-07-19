import { ref } from 'vue'

// Create a reactive alert store
export const alertStore = {
  alerts: ref([]),
  
  // Add a new alert
  addAlert(alert) {
    const id = Date.now() + Math.random()
    const newAlert = {
      id,
      type: alert.type || 'success',
      title: alert.title,
      message: alert.message,
      duration: alert.duration || 4000,
      autoClose: alert.autoClose !== false
    }
    
    this.alerts.value.push(newAlert)
    
    // Auto remove after duration
    if (newAlert.autoClose && newAlert.duration > 0) {
      setTimeout(() => {
        this.removeAlert(id)
      }, newAlert.duration)
    }
    
    return id
  },
  
  // Remove alert by id
  removeAlert(id) {
    const index = this.alerts.value.findIndex(alert => alert.id === id)
    if (index > -1) {
      this.alerts.value.splice(index, 1)
    }
  },
  
  // Clear all alerts
  clearAlerts() {
    this.alerts.value = []
  },
  
  // Success alert
  success(title, message = '', duration = 4000) {
    return this.addAlert({
      type: 'success',
      title,
      message,
      duration
    })
  },
  
  // Error alert
  error(title, message = '', duration = 4000) {
    return this.addAlert({
      type: 'error',
      title,
      message,
      duration
    })
  }
} 