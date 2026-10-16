<!-- Minimal layout for ad landing pages: no menu, so visitors focus on the enquiry -->
<template>
  <div class="min-h-screen bg-white">
    <div class="border-b"><div class="container-x flex h-16 items-center justify-between">
      <Logo class="text-brand-dark" />
      <a :href="`tel:${contact.ng.phone.replace(/\s/g,'')}`" class="text-sm font-semibold text-brand">{{ contact.ng.phone }}</a>
    </div></div>
    <slot />
    <p class="py-8 text-center text-xs text-slate-500">© {{ new Date().getFullYear() }} T Triangle Limited · <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink></p>
  </div>
</template>
