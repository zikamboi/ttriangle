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
      <div class="container-x">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div v-for="(p, i) in partners" :key="p.name" v-reveal="i * 70" class="grid h-36 place-items-center border border-slate-200 p-4">
            <img :src="p.image" :alt="p.name" loading="lazy" class="max-h-full max-w-full object-contain" />
          </div>
          <div v-reveal="partners.length * 70" class="grid h-36 place-items-center border border-slate-200 bg-brand-mist p-4 text-center">
            <div>
              <p class="text-lg font-bold text-brand-dark">And many more</p>
              <p class="mt-1 text-xs leading-5 text-brand-dark">Additional OEMs and specialist technology partners available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
