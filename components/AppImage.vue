<script setup lang="ts">
const props = defineProps<{ src?: string; alt?: string; hint?: string }>()
const imageFailed = ref(false)

watch(() => props.src, () => { imageFailed.value = false })
</script>
<template>
  <div class="group relative overflow-hidden bg-brand-dark">
    <img v-if="src && !imageFailed" :src="src" :alt="alt || ''" loading="lazy" decoding="async" @error="imageFailed = true"
         class="block h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    <div v-else class="placeholder-img grid h-full w-full place-items-center p-4 text-center text-xs text-white/70" role="img" :aria-label="alt || hint">
      {{ hint || alt || 'Image unavailable' }}
    </div>
  </div>
</template>
