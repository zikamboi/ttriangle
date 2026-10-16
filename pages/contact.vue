<script setup lang="ts">
useHead({ title: 'Contact Us | T Triangle Limited' })
</script>
<template>
  <div>
    <PageHero eyebrow="Contact Us" title="Talk to our team" text="Tell us what you need to source, inspect, maintain, test or improve. We will review your enquiry and direct it to the right contact." />
    <section class="section">
      <div class="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div v-reveal class="space-y-8">
          <div><h3 class="font-bold">Nigeria</h3><p class="mt-2 text-slate-600">{{ contact.ng.address }}<br />{{ contact.ng.phone }}</p></div>
          <div><h3 class="font-bold">Namibia</h3><p class="mt-2 text-slate-600">{{ contact.na.address }}<br />{{ contact.na.phone }}</p></div>
          <div><h3 class="font-bold">Email</h3><a :href="`mailto:${contact.email}`" class="mt-2 inline-block text-brand-red">{{ contact.email }}</a></div>
        </div>
        <div v-reveal="120" class=" border border-slate-200 p-6 shadow-sm sm:p-8">
          <h2 class="mb-6 text-4xl">Request a Quote or Service</h2>
          <EnquiryForm />
        </div>
      </div>
    </section>
  </div>
</template>
