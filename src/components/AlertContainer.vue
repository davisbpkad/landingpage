<template>
  <div class="fixed top-4 right-4 z-50 space-y-4">
    <TransitionGroup
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
      tag="div"
      class="space-y-4"
    >
      <Alert
        v-for="alert in alerts"
        :key="alert.id"
        :type="alert.type"
        :title="alert.title"
        :message="alert.message"
        :duration="alert.duration"
        :auto-close="alert.autoClose"
        @close="alertStore.removeAlert(alert.id)"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import { computed } from 'vue'
import { alertStore } from '@/store/alert.js'
import Alert from './Alert.vue'

export default {
  name: 'AlertContainer',
  components: {
    Alert
  },
  setup() {
    console.log('AlertContainer: setup called, alerts:', alertStore.alerts.value)
    
    const alerts = computed(() => alertStore.alerts.value)
    
    return {
      alertStore,
      alerts
    }
  }
}
</script> 