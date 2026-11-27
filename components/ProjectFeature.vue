<script setup lang="ts">
defineProps<{
  project: {
    slug: string
    category: string
    title: string
    image: string
    imageAlt: string
    summary: string
  }
  index: number
}>()
</script>

<template>
  <article v-reveal="(index % 3) * 90" class="group grid items-center lg:grid-cols-12">
    <div
      :class="index % 2 ? 'lg:col-start-6 lg:col-span-7' : 'lg:col-start-1 lg:col-span-7'"
      class="relative overflow-hidden bg-brand-dark lg:row-start-1"
    >
      <img :src="project.image" :alt="project.imageAlt" loading="lazy" class="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent"></div>
      <span class="absolute bottom-3 left-5 font-display text-7xl font-bold leading-none text-white/80 sm:bottom-5 sm:left-7 sm:text-8xl">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>
    <div
      :class="index % 2 ? 'lg:col-start-1 lg:col-span-6 lg:-mr-16' : 'lg:col-start-7 lg:col-span-6 lg:-ml-16'"
      class="relative z-10 -mt-8 bg-brand-mist p-7 shadow-xl sm:p-10 lg:row-start-1 lg:mt-0 lg:p-12"
    >
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{{ project.category }}</p>
      <h3 class="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-brand sm:text-4xl">{{ project.title }}</h3>
      <p class="mt-5 max-w-xl leading-7 text-slate-600">{{ project.summary }}</p>
    </div>
  </article>
</template>
