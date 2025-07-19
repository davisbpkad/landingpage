<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      v-if="isVisible"
      :class="[
        'max-w-sm w-full rounded-lg border p-4 shadow-lg',
        typeClasses[type]
      ]"
    >
      <div class="flex items-start">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <div
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center',
              iconClasses[type]
            ]"
          >
            <!-- Success Icon -->
            <svg
              v-if="type === 'success'"
              class="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- Error Icon -->
            <svg
              v-else-if="type === 'error'"
              class="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="ml-3 flex-1">
          <p :class="['text-sm font-bold', typeTextClasses[type]]">
            {{ title }}
          </p>
          <p v-if="message" :class="['text-sm mt-1', typeMessageClasses[type]]">
            {{ message }}
          </p>
        </div>

        <!-- Close Button -->
        <div class="ml-4 flex-shrink-0 flex">
          <button
            @click="close"
            class="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (value) => ['success', 'error'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 4000 // 4 seconds
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const isVisible = ref(true)
    let timeoutId = null

    const typeClasses = {
      success: 'bg-green-50 border-green-400',
      error: 'bg-red-50 border-red-400'
    }

    const iconClasses = {
      success: 'bg-green-500',
      error: 'bg-red-500'
    }

    const typeTextClasses = {
      success: 'text-gray-900',
      error: 'text-gray-900'
    }

    const typeMessageClasses = {
      success: 'text-gray-700',
      error: 'text-gray-700'
    }

    const close = () => {
      isVisible.value = false
      emit('close')
    }

    onMounted(() => {
      if (props.autoClose && props.duration > 0) {
        timeoutId = setTimeout(() => {
          close()
        }, props.duration)
      }
    })

    onUnmounted(() => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    })

    return {
      isVisible,
      typeClasses,
      iconClasses,
      typeTextClasses,
      typeMessageClasses,
      close
    }
  }
}
</script> 