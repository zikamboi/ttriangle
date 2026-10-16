<script setup lang="ts">
useHead({ title: 'Specialised OEM Services | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero eyebrow="Specialised OEM Services" title="Specialised technologies. Application-led technical support." text="Some industrial challenges need more than a general equipment solution. We work with OEMs and technology partners to connect clients with specialised products suited to their operating requirements." />
    <section class="section">
      <div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in partners" :key="p" v-reveal="(i % 3) * 90" class="flex flex-col  border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-xl">
          <h3 class="text-2xl text-brand">{{ p }}</h3>
          <p class="mt-3 flex-1 text-sm text-slate-600">What it is, the problem it addresses, typical applications and T Triangle's confirmed role. Add only after technical validation.</p>
          <NuxtLink :to="`/contact?service=specialised-oem`" class="mt-5 text-sm font-semibold text-brand-red">Enquire About This Solution →</NuxtLink>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
