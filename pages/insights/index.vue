<script setup lang="ts">
useHead({ title: 'Insights | T Triangle Limited' })
const active = ref('All')
const list = computed(() => active.value === 'All' ? insights : insights.filter(i => i.cat === active.value))
</script>
<template>
  <div>
    <PageHero eyebrow="Insights" title="Technical knowledge. Industry intelligence. Better operational decisions." />
    <section class="section">
      <div class="container-x">
        <div class="mb-10 flex flex-wrap gap-2">
          <button v-for="c in ['All', ...insightCategories]" :key="c" @click="active = c"
            :class="['rounded-full border px-4 py-2 text-sm transition', active === c ? 'border-brand bg-brand text-white' : 'border-slate-300 hover:border-brand']">{{ c }}</button>
        </div>
        <TransitionGroup name="page" tag="div" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="a in list" :key="a.title" class="overflow-hidden  border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <AppImage class="h-44" hint="Article image" />
            <div class="p-6"><p class="text-xs font-semibold uppercase text-brand-red">{{ a.cat }}</p><h3 class="mt-2 font-bold">{{ a.title }}</h3><span class="mt-4 inline-block text-sm font-semibold text-brand">Read More →</span></div>
          </article>
        </TransitionGroup>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
