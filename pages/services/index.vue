<script setup lang="ts">
useHead({ title: 'Our Services | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero eyebrow="Our Services" title="Eight core service areas for industrial operations" text="Each service has its own page explaining scope, applications and how to enquire." />
    <section class="section">
      <div class="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard v-for="(s, i) in services" :key="s.slug" :s="s" :i="i" />
      </div>
    </section>
    <CtaBand />
  </div>
</template>
