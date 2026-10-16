<script setup lang="ts">
// Service-specific ad landing page: /lp/valve-optimisation-solutions?utm_source=google...
definePageMeta({ layout: 'landing' })
const s = services.find(x => x.slug === useRoute().params.slug)
if (!s) throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
useHead({ title: `${s.name} | T Triangle Limited`, meta: [{ name: 'robots', content: 'noindex' }] })
</script>
<template>
  <section v-if="s" class="relative overflow-hidden bg-brand-dark py-14 text-white sm:py-20">
    <HeroArt />
    <div class="container-x relative grid items-start gap-10 lg:grid-cols-2">
      <div>
        <p class="eyebrow !text-white">{{ s.name }}</p>
        <h1 class="text-4xl !text-white sm:text-6xl">{{ s.headline }}</h1>
        <p class="mt-5 text-white/75">{{ s.intro }}</p>
        <ul class="mt-6 space-y-2 text-white/85"><li v-for="x in s.scope.slice(0, 4)" :key="x">▲ {{ x }}</li></ul>
      </div>
      <div class="bg-white p-6 text-slate-700 shadow-2xl sm:p-8"><EnquiryForm :preset="s.slug" /></div>
    </div>
  </section>
</template>
