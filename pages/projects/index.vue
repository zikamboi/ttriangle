<script setup lang="ts">
useHead({ title: 'Projects | T Triangle Limited' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Projects"
      title="Selected project work"
      text="A selection of project examples from our technical support areas."
    />
    <section class="section">
      <div class="container-x space-y-20">
        <ProjectFeature v-for="(project, i) in projects.slice(0, 3)" :key="project.slug" :project="project" :index="i" />
        <div class="mt-16 flex flex-col gap-6 bg-brand-dark p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div class="max-w-2xl">
            <p class="eyebrow !text-white">Project portfolio</p>
            <h2 class="font-display text-3xl font-semibold uppercase !text-white sm:text-4xl">See more of our projects</h2>
            <p class="mt-3 text-white/70">Browse the full selection of project examples.</p>
          </div>
          <NuxtLink to="/projects/all" class="btn btn-red shrink-0">See More Projects</NuxtLink>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
