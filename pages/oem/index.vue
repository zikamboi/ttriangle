<script setup lang="ts">
useHead({ title: 'Specialised OEM Services | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero
      eyebrow="Specialised OEM Services"
      title="Specialised technologies. Application-led technical support."
      text="Some industrial challenges need more than a general equipment solution. We work with OEMs and technology partners to connect clients with specialised products suited to their operating requirements."
    />
    <section class="section">
      <div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(p, i) in partners"
          :key="p.slug"
          :to="`/oem/${p.slug}`"
          v-reveal="(i % 3) * 90"
          class="group flex flex-col overflow-hidden border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="grid h-44 place-items-center bg-white p-6">
            <img :src="p.image" :alt="`${p.name} logo`" loading="lazy" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="flex flex-1 flex-col border-t border-slate-200 p-7">
            <h2 class="text-2xl text-brand">{{ p.name }}</h2>
            <p class="mt-3 flex-1 text-sm text-slate-600">{{ p.short }}</p>
            <span class="mt-5 text-sm font-semibold text-brand-red">Explore {{ p.name }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
