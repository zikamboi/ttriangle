<script setup lang="ts">
definePageMeta({ layout: 'landing' })
useHead({ title: 'Request a Quote | T Triangle Limited', meta: [{ name: 'robots', content: 'noindex' }] })
</script>
<template>
  <section class="bg-gradient-to-br from-brand-dark to-brand py-14 text-white sm:py-20">
    <div class="container-x grid items-start gap-10 lg:grid-cols-2">
      <div>
        <p class="eyebrow !text-red-300">Request a Quote</p>
        <h1 class="text-4xl !text-white sm:text-6xl">Equipment and technical support for your operation</h1>
        <p class="mt-5 text-white/75">Tell us what you need to source, inspect, maintain, test or improve. Our team will review your enquiry and respond.</p>
        <ul class="mt-6 space-y-2 text-white/85"><li>▲ Eight core service areas</li><li>▲ Specialised OEM and technology partners</li><li>▲ Application-led technical support</li></ul>
      </div>
      <div class=" bg-white p-6 text-slate-700 shadow-2xl sm:p-8"><EnquiryForm /></div>
    </div>
  </section>
</template>
