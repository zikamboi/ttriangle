<script setup lang="ts">
useHead({ title: 'More Projects | T Triangle Limited' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Project Portfolio"
      title="More project examples"
      text="Explore the full selection of application-focused project examples."
    />
    <section class="section">
      <div class="container-x space-y-20">
        <ProjectFeature v-for="(project, i) in projects" :key="project.slug" :project="project" :index="i" />
      </div>
    </section>
    <CtaBand />
  </div>
</template>
