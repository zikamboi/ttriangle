<script setup lang="ts">
const route = useRoute()
const partner = partners.find(p => p.slug === route.params.slug)
if (!partner) throw createError({ statusCode: 404, statusMessage: 'OEM partner not found', fatal: true })

const index = partners.findIndex(p => p.slug === partner.slug)
useHead({
  title: `${partner.name} | Specialised OEM Services | T Triangle Limited`,
  meta: [{ name: 'description', content: partner.short }]
})
</script>

<template>
  <div v-if="partner">
    <PageHero eyebrow="Specialised OEM Services" :title="partner.name" :text="partner.short">
      <NuxtLink :to="`/contact?service=specialised-oem&technology=${encodeURIComponent(partner.name)}`" class="btn btn-red mt-8">
        Enquire About {{ partner.name }}
      </NuxtLink>
    </PageHero>
    <section class="section">
      <div class="container-x grid items-center gap-12 lg:grid-cols-2">
        <div :class="index % 2 ? 'lg:order-2' : ''" v-reveal class="grid min-h-72 place-items-center bg-white p-8 shadow-lg">
          <img :src="partner.image" :alt="`${partner.name} logo`" class="max-h-64 max-w-full object-contain" />
        </div>
        <div :class="index % 2 ? 'lg:order-1' : ''" v-reveal="120">
          <p class="eyebrow">Technology partner</p>
          <h2 class="text-3xl !text-brand sm:text-4xl">{{ partner.name }}</h2>
          <p class="mt-5 leading-7 text-slate-600">{{ partner.detail }}</p>
          <h3 class="mt-8 text-xl">Discuss your application</h3>
          <p class="mt-3 leading-7 text-slate-600">
            Share your application, operating conditions and the outcome you need. We will help clarify the requirement and coordinate the next discussion around the partner's applicable products and confirmed scope.
          </p>
          <NuxtLink :to="`/contact?service=specialised-oem&technology=${encodeURIComponent(partner.name)}`" class="btn btn-outline mt-7">
            Send an enquiry
          </NuxtLink>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
