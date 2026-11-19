<script setup lang="ts">
const route = useRoute()
const s = services.find(x => x.slug === route.params.slug)
if (!s) throw createError({ statusCode: 404, statusMessage: 'Service not found', fatal: true })
useHead({ title: `${s.name} | T Triangle Limited` })
const related = services.filter(x => x.slug !== s.slug).slice(0, 3)
</script>
<template>
  <div v-if="s">
    <PageHero eyebrow="Our Services" :title="s.headline">
      <NuxtLink :to="`/contact?service=${s.slug}`" class="btn btn-red mt-8">Discuss This Solution</NuxtLink>
    </PageHero>
    <section class="section">
      <div class="container-x grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <h2 v-reveal class="text-4xl">{{ s.name }}</h2>
          <p v-reveal class="mt-4 text-slate-600">{{ s.intro }}</p>
          <h3 v-reveal class="mt-10 text-2xl">Scope of support</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="(x, i) in s.scope" :key="x" v-reveal="i * 60" class="flex gap-3"><span class="mt-1 text-brand-red">▲</span><span>{{ x }}</span></li>
          </ul>
          <div v-reveal class="mt-10  bg-brand-mist p-6">
            <h3 class="font-bold">What to include in your enquiry</h3><p class="mt-2 text-sm text-slate-600">{{ s.enquiry }}</p>
          </div>
        </div>
        <div class="space-y-5">
          <AppImage v-reveal :src="s.detailImages[0]" :alt="s.name" class="aspect-[4/3] " hint="Add first service image in utils/site.ts" />
          <AppImage v-reveal="100" :src="s.detailImages[1]" :alt="`${s.name} supporting image`" class="aspect-[4/3] " hint="Add second service image in utils/site.ts" />
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
