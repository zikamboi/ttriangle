<script setup lang="ts">
useHead({ title: 'About Us | T Triangle Limited' })
const values = ['Safety', 'Integrity', 'Reliability', 'Customer focus', 'Continuous improvement']
</script>
<template>
  <div>
    <PageHero eyebrow="About Us" title="Engineering and technical solutions that start with understanding the requirement" />
    <section class="section">
      <div class="container-x grid gap-12 lg:grid-cols-2">
        <div v-reveal class="space-y-5 text-slate-600">
          <p>T Triangle Limited is an engineering and technical solutions company supporting industrial operations through equipment sourcing, procurement support and specialised technical services. We work with clients to understand operational requirements and coordinate solutions that fit the application, site conditions and project objectives.</p>
          <p>Our work addresses practical challenges involving equipment performance, maintenance, process safety, operational continuity and project execution.</p>
          <p>Dependable service begins with understanding the requirement: clarifying the scope, communicating openly, respecting site and safety requirements, and following through on agreed commitments.</p>
        </div>
        <AppImage v-reveal="150" class="aspect-[4/3] " hint="Team / workshop image" />
      </div>
    </section>
    <section class="section bg-brand-mist">
      <div class="container-x grid gap-6 md:grid-cols-3">
        <div v-reveal class=" bg-white p-8"><h3 class="font-bold text-brand-red">Mission</h3><p class="mt-3 text-slate-600">To provide responsive engineering, equipment and specialist technical solutions that help clients meet their operational requirements.</p></div>
        <div v-reveal="100" class=" bg-white p-8"><h3 class="font-bold text-brand-red">Vision</h3><p class="mt-3 text-slate-600">To be a trusted technical solutions partner for industrial organisations across Africa.</p></div>
        <div v-reveal="200" class=" bg-white p-8"><h3 class="font-bold text-brand-red">Values</h3><ul class="mt-3 space-y-1 text-slate-600"><li v-for="v in values" :key="v">• {{ v }}</li></ul></div>
      </div>
    </section>
    <section id="market-focus" class="section">
      <div class="container-x">
        <SectionHead eyebrow="Our Market Focus" title="Industrial environments where reliability matters" text="For each confirmed industry, explain typical requirements, relevant services and project proof. List only industries management confirms." />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(m, i) in markets" :key="m" v-reveal="i * 80" class=" border border-slate-200 p-7 transition hover:border-brand hover:shadow-lg"><h3 class="text-lg font-bold">{{ m }}</h3><p class="mt-2 text-sm text-slate-600">Sector description, relevant services and project proof go here.</p></div>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
