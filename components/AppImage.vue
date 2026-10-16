<script setup lang="ts">
defineProps<{ src?: string; alt?: string; hint?: string }>()
</script>
<template>
  <div class="group relative overflow-hidden bg-brand-dark">
    <img v-if="src" :src="src" :alt="alt || ''" loading="lazy"
         class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    <div v-else class="placeholder-img grid h-full w-full place-items-center p-4 text-center text-xs text-white/50">
      {{ hint || 'Add image: /public/images/...' }}
    </div>
  </div>
</template>
