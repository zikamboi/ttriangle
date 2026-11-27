<script setup lang="ts">
useHead({ title: 'Our Services | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero eyebrow="Our Services" title="Nine core service areas for industrial operations" text="Each service has its own page explaining scope, applications and how to enquire." />
    <section class="section">
      <div class="container-x grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ServiceCard v-for="(s, i) in services" :key="s.slug" :s="s" :i="i" />
      </div>
    </section>
    <CtaBand />
  </div>
</template>
