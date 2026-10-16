<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; text?: string }>()
</script>
<template>
  <section class="relative overflow-hidden bg-brand-dark pb-28 pt-44 text-white" style="clip-path:polygon(0 0,100% 0,100% 90%,0 100%)">
    <HeroArt />
    <div class="container-x relative">
      <p v-if="eyebrow" class="eyebrow animate-fade-up !text-white">{{ eyebrow }}</p>
      <h1 class="max-w-4xl animate-fade-up text-4xl !text-white sm:text-6xl" style="animation-delay:.1s">{{ title }}</h1>
      <p v-if="text" class="mt-6 max-w-2xl animate-fade-up text-lg text-white/75" style="animation-delay:.2s">{{ text }}</p>
      <slot />
    </div>
  </section>
</template>
