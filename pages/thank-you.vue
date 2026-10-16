<script setup lang="ts">
useHead({ title: 'Thank you | T Triangle Limited', meta: [{ name: 'robots', content: 'noindex' }] })
// Ad conversion fires here, once per visitor session (not on refresh)
onMounted(() => {
  if (sessionStorage.getItem('tt-lead-fired')) return
  sessionStorage.setItem('tt-lead-fired', '1')
  trackEvent('generate_lead')
  setTimeout(() => sessionStorage.removeItem('tt-lead-fired'), 5000) // allow a later, separate enquiry
})
</script>
<template>
  <div>
    <PageHero eyebrow="Enquiry received" title="Thank you for contacting T Triangle Limited" text="Your enquiry has been submitted. Our team will review the details and contact you using the information provided." />
    <section class="section"><div class="container-x text-center">
      <NuxtLink to="/services" class="btn btn-outline">Explore Our Services</NuxtLink>
    </div></section>
  </div>
</template>
