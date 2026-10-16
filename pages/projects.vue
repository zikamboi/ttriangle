<script setup lang="ts">
useHead({ title: 'Projects | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero eyebrow="Projects" title="Genuine project experience" text="Approved project profiles showing scope, approach and verified outcomes." />
    <section class="section">
      <div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="n in 6" :key="n" v-reveal="(n % 3) * 90" class="overflow-hidden  border border-slate-200 transition hover:shadow-xl">
          <AppImage class="h-52" hint="Approved project photo" />
          <div class="p-6"><p class="text-xs font-semibold uppercase text-brand-red">Industry / application</p><h3 class="mt-2 font-bold">Project title (pending approval)</h3><p class="mt-2 text-sm text-slate-600">Challenge, T Triangle's scope, approach and verified outcome.</p></div>
        </article>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
