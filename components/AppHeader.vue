<script setup lang="ts">
const scrolled = ref(false), open = ref(false), progress = ref(0)
const route = useRoute()
onMounted(() => {
  const on = () => {
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight
    scrolled.value = y > 40; progress.value = h > 0 ? (y / h) * 100 : 0
  }
  on(); window.addEventListener('scroll', on, { passive: true })
})
watch(() => route.fullPath, () => (open.value = false))
watch(open, v => import.meta.client && (document.body.style.overflow = v ? 'hidden' : ''))
const solid = computed(() => scrolled.value || open.value)
</script>
<template>
  <header :class="['fixed inset-x-0 top-0 z-50 transition duration-300', solid ? 'bg-white text-brand-dark shadow-lg' : 'text-white']">
    <!-- utility bar -->
    <div :class="['hidden overflow-hidden bg-brand-dark text-xs text-white/80 transition-all duration-300 lg:block', scrolled ? 'max-h-0' : 'max-h-10']">
      <div class="container-x flex h-10 items-center justify-between">
        <span>Lagos, Nigeria · Walvis Bay, Namibia</span>
        <span class="flex gap-6">
          <a :href="`tel:${contact.ng.phone.replace(/\s/g,'')}`" class="hover:text-white">{{ contact.ng.phone }}</a>
          <a :href="`mailto:${contact.email}`" class="hover:text-white">{{ contact.email }}</a>
        </span>
      </div>
    </div>
    <div class="container-x flex h-20 items-center justify-between">
      <NuxtLink to="/" aria-label="T Triangle Limited home"><Logo /></NuxtLink>
      <nav class="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wider xl:flex">
        <template v-for="n in nav" :key="n.to">
          <div v-if="n.children" class="group relative">
            <NuxtLink :to="n.to" class="block py-7 transition hover:text-brand-red">{{ n.label }} <span class="text-[9px]">▼</span></NuxtLink>
            <div class="invisible absolute -left-20 top-full w-[40rem] translate-y-2 border-t-4 border-brand-red bg-white p-4 normal-case tracking-normal text-brand-dark opacity-0 shadow-2xl transition duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="grid grid-cols-2 gap-1">
                <NuxtLink v-for="(s, i) in services" :key="s.slug" :to="`/services/${s.slug}`" class="flex gap-3 p-3 text-[13px] font-medium transition hover:bg-brand-mist hover:text-brand-red">
                  <span class="font-display text-lg font-bold text-brand-red">0{{ i + 1 }}</span>{{ s.name.split(' (')[0] }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <NuxtLink v-else :to="n.to" class="relative py-2 transition hover:text-brand-red" active-class="!text-brand-red">{{ n.label }}</NuxtLink>
        </template>
        <NuxtLink to="/contact" class="btn btn-red !py-3">Request a Quote</NuxtLink>
      </nav>
      <button class="xl:hidden" @click="open = !open" aria-label="Menu">
        <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path v-if="!open" d="M4 7h16M4 12h16M4 17h16" /><path v-else d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>
    <div class="absolute inset-x-0 bottom-0 h-[3px] bg-brand-red" :style="{ width: progress + '%' }"></div>

    <Transition name="page">
      <div v-if="open" class="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-brand-dark px-6 pb-10 pt-4 text-white xl:hidden">
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="block border-b border-white/10 py-4 font-display text-2xl uppercase">{{ n.label }}</NuxtLink>
        <div class="mt-4 grid grid-cols-1 gap-1 text-sm text-white/70"><NuxtLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`" class="py-1.5">▲ {{ s.name.split(' (')[0] }}</NuxtLink></div>
        <NuxtLink to="/contact" class="btn btn-red mt-8 w-full">Request a Quote</NuxtLink>
      </div>
    </Transition>
  </header>
</template>
