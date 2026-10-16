<template>
  <section class="relative overflow-hidden bg-brand py-24 text-white">
    <HeroArt />
    <div class="container-x relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div v-reveal>
        <p class="eyebrow !text-white">Start an enquiry</p>
        <h2 class="text-4xl !text-white sm:text-6xl">Have an equipment, maintenance or project requirement?</h2>
        <p class="mt-5 max-w-xl text-white/80">Tell us what you need to source, inspect, maintain, test or improve. Share the application, site location, specifications and timeline so our team can review your enquiry.</p>
      </div>
      <div v-reveal="150" class="flex flex-wrap gap-4 lg:justify-end">
        <NuxtLink to="/contact" class="btn btn-red">Send an Enquiry →</NuxtLink>
        <a :href="`tel:${contact.ng.phone.replace(/\s/g,'')}`" class="btn btn-ghost">{{ contact.ng.phone }}</a>
      </div>
    </div>
  </section>
</template>
