<template>
  <footer class="relative overflow-hidden bg-brand-dark pt-20 text-sm text-white/70">
    <div class="blueprint absolute inset-0 opacity-40"></div>
    <div class="container-x relative grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1.1fr_1.3fr]">
      <div>
        <Logo class="text-white" />
        <p class="mt-6 max-w-xs leading-relaxed">Engineering and technical solutions for critical industrial operations across Africa.</p>
        <NuxtLink to="/contact" class="btn btn-red mt-6">Request a Quote</NuxtLink>
      </div>
      <div>
        <h4 class="mb-5 font-display text-lg font-bold uppercase tracking-wider text-white">Company</h4>
        <ul class="space-y-2.5"><li v-for="n in nav" :key="n.to"><NuxtLink :to="n.to" class="transition hover:text-white">{{ n.label }}</NuxtLink></li></ul>
      </div>
      <div>
        <h4 class="mb-5 font-display text-lg font-bold uppercase tracking-wider text-white">Services</h4>
        <ul class="space-y-2.5"><li v-for="s in services" :key="s.slug"><NuxtLink :to="`/services/${s.slug}`" class="transition hover:text-white">{{ s.name.split(' (')[0] }}</NuxtLink></li></ul>
      </div>
      <div>
        <h4 class="mb-5 font-display text-lg font-bold uppercase tracking-wider text-white">Offices</h4>
        <p><strong class="text-white">Nigeria</strong><br />{{ contact.ng.address }}<br /><a :href="`tel:${contact.ng.phone.replace(/\s/g,'')}`" class="hover:text-white">{{ contact.ng.phone }}</a></p>
        <p class="mt-4"><strong class="text-white">Namibia</strong><br />{{ contact.na.address }}<br /><a :href="`tel:${contact.na.phone.replace(/\s/g,'')}`" class="hover:text-white">{{ contact.na.phone }}</a></p>
        <a :href="`mailto:${contact.email}`" class="mt-4 inline-block font-semibold text-white">{{ contact.email }}</a>
      </div>
    </div>
    <div class="relative border-t border-white/10 py-5 text-center text-xs">© {{ new Date().getFullYear() }} T Triangle Limited. All rights reserved. · <NuxtLink to="/privacy" class="underline hover:text-white">Privacy Policy</NuxtLink></div>
  </footer>
</template>
