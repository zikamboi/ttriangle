<script setup lang="ts">
defineProps<{ s: { slug: string; name: string; short: string }; i: number }>()
</script>
<template>
  <NuxtLink :to="`/services/${s.slug}`" v-reveal="(i % 4) * 90"
    class="group relative flex flex-col overflow-hidden border border-slate-200 bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand/15">
    <AppImage class="h-44" :hint="`Image: ${s.name}`" />
    <div class="flex flex-1 flex-col p-6">
      <span class="font-display text-lg font-bold text-brand-red">0{{ i + 1 }}</span>
      <h3 class="mt-1 text-lg leading-snug">{{ s.name }}</h3>
      <p class="mt-2 flex-1 text-sm text-slate-600">{{ s.short }}</p>
      <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Explore Service <span class="transition group-hover:translate-x-1.5">→</span></span>
    </div>
    <span class="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full"></span>
  </NuxtLink>
</template>
