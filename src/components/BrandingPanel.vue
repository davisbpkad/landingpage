<template>
  <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center bg-blue-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-800 opacity-20 rounded-full -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 opacity-20 rounded-full -ml-32 -mb-32"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center">
      <div class="flex items-center justify-center mb-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="flex space-x-1">
            <div class="w-2 h-8 bg-white rounded-sm"></div>
            <div class="w-2 h-12 bg-white rounded-sm"></div>
            <div class="w-2 h-16 bg-white rounded-sm"></div>
          </div>
          <span class="text-white text-2xl font-bold">{{ brandName }}</span>
        </div>
      </div>
      <p class="text-blue-200 text-lg">{{ tagline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandingPanel',
  props: {
    brandName: {
      type: String,
      default: 'IKP-APBD'
    },
    tagline: {
      type: String,
      default: 'Sistem Informasi IKP-APBD'
    }
  }
}
</script> 