<script setup lang="ts">
const route = useRoute()
const insight = insights.find(item => item.slug === String(route.params.slug))
if (!insight) throw createError({ statusCode: 404, statusMessage: 'Insight not found', fatal: true })

const relatedInsights = computed(() => {
  const sameTopic = insights.filter(item => item.cat === insight.cat && item.slug !== insight.slug)
  return [...sameTopic, ...insights.filter(item => item.slug !== insight.slug && item.cat !== insight.cat)].slice(0, 3)
})

useHead({
  title: `${insight.title} | T Triangle Insights`,
  meta: [{ name: 'description', content: insight.excerpt }]
})
</script>

<template>
  <div v-if="insight">
    <PageHero eyebrow="Insights / Field notes" :title="insight.title" :text="insight.excerpt">
      <div class="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-red">
        <span>{{ insight.cat }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ insight.readingTime }}</span>
      </div>
    </PageHero>

    <section class="-mt-8 pb-12">
      <div class="container-x">
        <img :src="insight.image" :alt="insight.imageAlt" class="aspect-[16/7] w-full bg-brand-dark object-cover" />
      </div>
    </section>

    <section class="section pt-8">
      <div class="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <article class="space-y-9">
          <section v-for="section in insight.sections" :key="section.heading">
            <h2 class="font-display text-3xl font-semibold uppercase leading-tight text-brand">{{ section.heading }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph" class="mt-4 leading-8 text-slate-700">{{ paragraph }}</p>
          </section>
        </article>

        <aside class="bg-brand-mist p-6 lg:sticky lg:top-28">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Quick takeaways</p>
          <h2 class="mt-3 font-display text-2xl font-semibold uppercase text-brand">Keep in mind</h2>
          <ul class="mt-5 space-y-4">
            <li v-for="takeaway in insight.takeaways" :key="takeaway" class="flex gap-3 text-sm leading-6 text-slate-700">
              <span aria-hidden="true" class="font-bold text-brand-red">+</span>
              <span>{{ takeaway }}</span>
            </li>
          </ul>
          <NuxtLink to="/insights" class="mt-7 inline-flex text-sm font-bold text-brand underline underline-offset-4">
            Browse all insights
          </NuxtLink>
        </aside>
      </div>
    </section>

    <section class="section bg-brand-mist">
      <div class="container-x">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="eyebrow">Keep exploring</p>
            <h2 class="text-3xl !text-brand">More reads for you</h2>
          </div>
          <NuxtLink to="/insights" class="text-sm font-bold text-brand-red underline underline-offset-4">All insights</NuxtLink>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <NuxtLink v-for="related in relatedInsights" :key="related.slug" :to="`/insights/${related.slug}`" class="group bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <p class="text-xs font-bold uppercase tracking-widest text-brand-red">{{ related.cat }} <span class="ml-2 text-slate-500">{{ related.readingTime }}</span></p>
            <h3 class="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-brand">{{ related.title }}</h3>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Read next <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
