<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; text?: string; center?: boolean }>()
</script>
<template>
  <div v-reveal :class="['mb-14 max-w-3xl', center && 'mx-auto text-center']">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="text-4xl sm:text-6xl">{{ title }}</h2>
    <p v-if="text" class="mt-5 text-lg text-slate-600">{{ text }}</p>
  </div>
</template>
