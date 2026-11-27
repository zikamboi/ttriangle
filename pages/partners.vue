<script setup lang="ts">
useHead({ title: 'Our OEM & Technology Partners | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero
      eyebrow="Our OEM & Technology Partners"
      title="Technology partners for specialised solutions."
      text="Explore the OEMs and technology partners we work with to connect clients with equipment and specialised solutions suited to their applications."
    />
    <section class="section">
      <div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="(p, i) in partners" :key="p.slug" :to="`/oem/${p.slug}`" v-reveal="i * 70" class="group flex flex-col border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
          <div class="grid h-40 place-items-center p-5">
            <img :src="p.image" :alt="`${p.name} logo`" loading="lazy" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="flex flex-1 flex-col border-t border-slate-200 p-6">
            <h2 class="text-xl text-brand">{{ p.name }}</h2>
            <p class="mt-2 flex-1 text-sm text-slate-600">{{ p.short }}</p>
            <span class="mt-4 text-sm font-semibold text-brand-red">Learn more</span>
          </div>
        </NuxtLink>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
