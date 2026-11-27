<script setup lang="ts">
useHead({ title: 'Insights & Field Notes | T Triangle Limited' })

const activeCategory = ref('All')
const searchQuery = ref('')
const featuredInsight = insights[0]
const showFeatured = computed(() => activeCategory.value === 'All' && !searchQuery.value.trim())
const matchingInsights = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return insights.filter(insight => {
    const matchesCategory = activeCategory.value === 'All' || insight.cat === activeCategory.value
    const matchesSearch = !query || `${insight.title} ${insight.excerpt} ${insight.cat}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
})
const listedInsights = computed(() => showFeatured.value
  ? matchingInsights.value.filter(insight => insight.slug !== featuredInsight.slug)
  : matchingInsights.value)
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-28">
      <div class="blueprint absolute inset-0 opacity-40"></div>
      <div class="container-x relative">
        <p class="eyebrow !text-brand-red">Insights / Field notes</p>
        <div class="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div class="max-w-4xl">
            <h1 class="text-5xl !text-white sm:text-7xl">Ideas for better <span class="text-brand-red">operations.</span></h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Straightforward guides to equipment, maintenance and the decisions that keep industrial work moving.
            </p>
          </div>
          <p class="font-display text-xl uppercase tracking-widest text-white/50">Read what matters to you</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-x">
        <div class="grid gap-8 border-b border-slate-200 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p class="eyebrow">Find your next read</p>
            <h2 class="text-2xl !text-brand sm:text-3xl">Choose a topic or search a question</h2>
          </div>
          <label class="relative block w-full lg:w-96">
            <span class="sr-only">Search insights</span>
            <input v-model="searchQuery" type="search" class="input pr-12" placeholder="Search valves, maintenance, pigging..." />
            <span aria-hidden="true" class="absolute right-4 top-1/2 -translate-y-1/2 text-brand">⌕</span>
          </label>
        </div>

        <div class="mt-6 flex flex-wrap gap-2" aria-label="Filter by topic">
          <button
            v-for="category in ['All', ...insightCategories]"
            :key="category"
            type="button"
            :aria-pressed="activeCategory === category"
            :class="[
              'border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              activeCategory === category ? 'border-brand bg-brand text-white' : 'border-slate-300 text-slate-600 hover:border-brand hover:text-brand'
            ]"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div v-if="showFeatured" class="mt-12">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Editor’s pick</p>
          <NuxtLink :to="`/insights/${featuredInsight.slug}`" class="group grid overflow-hidden bg-brand-mist lg:grid-cols-[1.05fr_.95fr]">
            <div class="overflow-hidden">
              <img :src="featuredInsight.image" :alt="featuredInsight.imageAlt" class="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div class="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-red">
                <span>{{ featuredInsight.cat }}</span>
                <span aria-hidden="true">·</span>
                <span>{{ featuredInsight.readingTime }}</span>
              </div>
              <h2 class="mt-4 font-display text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">{{ featuredInsight.title }}</h2>
              <p class="mt-5 leading-7 text-slate-600">{{ featuredInsight.excerpt }}</p>
              <span class="mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand">
                Read the feature <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          </NuxtLink>
        </div>

        <div class="mb-5 mt-12 flex items-center justify-between gap-4">
          <h2 class="font-display text-2xl font-semibold uppercase text-brand">
            {{ showFeatured ? 'More to explore' : 'Your results' }}
          </h2>
          <p class="text-sm text-slate-500">{{ matchingInsights.length }} {{ matchingInsights.length === 1 ? 'article' : 'articles' }}</p>
        </div>

        <TransitionGroup v-if="listedInsights.length" name="page" tag="div" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="(insight, i) in listedInsights"
            :key="insight.slug"
            :to="`/insights/${insight.slug}`"
            v-reveal="(i % 3) * 70"
            class="group flex flex-col border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="overflow-hidden bg-brand-dark">
              <img :src="insight.image" :alt="insight.imageAlt" loading="lazy" class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <div class="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-brand-red">
                <span>{{ insight.cat }}</span>
                <span class="shrink-0 text-slate-500">{{ insight.readingTime }}</span>
              </div>
              <h3 class="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-brand">{{ insight.title }}</h3>
              <p class="mt-3 flex-1 text-sm leading-6 text-slate-600">{{ insight.excerpt }}</p>
              <span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Read article <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          </NuxtLink>
        </TransitionGroup>

        <div v-else class="mt-8 border border-dashed border-slate-300 px-6 py-14 text-center">
          <h3 class="font-display text-2xl font-semibold uppercase text-brand">No reads found</h3>
          <p class="mt-2 text-slate-600">Try another search or choose a different topic.</p>
          <button type="button" class="mt-5 text-sm font-bold text-brand-red underline" @click="activeCategory = 'All'; searchQuery = ''">
            Clear filters
          </button>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
