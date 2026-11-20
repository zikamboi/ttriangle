<script setup lang="ts">
useHead({ title: 'About Us | T Triangle Limited' })
const coreValues = [
  {
    number: '01',
    title: 'Customization',
    text: 'Bespoke solutions for every client, tailored to meet specific requirements and objectives. No two shutdowns are the same, so no two of our method statements are either.'
  },
  {
    number: '02',
    title: 'Responsibility',
    text: 'Safety is paramount in everything we do, ensuring protection for all stakeholders. Every job is planned and executed with safety as a core value, not a checkbox.'
  },
  {
    number: '03',
    title: 'Excellence',
    text: 'Flawless execution and seamless service delivery in every project we undertake, measured against international codes and our clients\' own specifications.'
  },
  {
    number: '04',
    title: 'Performance',
    text: 'Industry-leading results, ethical conduct and responsible operations that drive success for our clients, our people and the communities where we work.'
  }
]
</script>
<template>
  <div>
    <PageHero eyebrow="About Us" title="Engineering and technical solutions that start with understanding the requirement" />
    <section class="section">
      <div class="container-x grid gap-12 lg:grid-cols-2">
        <div v-reveal class="space-y-5 text-slate-600">
          <p class="eyebrow">Our Purpose</p>
          <h2 class="max-w-xl text-4xl !text-brand sm:text-5xl">We keep critical energy infrastructure safe, compliant and producing.</h2>
          <div class="space-y-5 pt-2">
            <p>T Triangle Limited is an engineering and technical solutions company supporting industrial operations through equipment sourcing, procurement support and specialised technical services. We work with clients to understand operational requirements and coordinate solutions that fit the application, site conditions and project objectives.</p>
            <p>Our work addresses practical challenges involving equipment performance, maintenance, process safety, operational continuity and project execution.</p>
            <p>Dependable service begins with understanding the requirement: clarifying the scope, communicating openly, respecting site and safety requirements, and following through on agreed commitments.</p>
          </div>
        </div>
        <AppImage v-reveal="150" class="aspect-[4/3] " hint="Team / workshop image" />
      </div>
    </section>
    <section class="section bg-brand text-white">
      <div class="container-x">
        <div class="grid gap-6 md:grid-cols-2">
          <div v-reveal class="border border-white/25 bg-white/10 p-7 shadow-sm sm:p-8">
            <h3 class="font-display text-2xl text-brand-red">Vision</h3>
            <p class="mt-4 max-w-xl text-base leading-7 text-white/85">To be Africa's foremost provider of sustainable, innovative engineering and energy solutions, consistently exceeding industry benchmarks.</p>
          </div>
          <div v-reveal="100" class="border border-white/25 bg-white/10 p-7 shadow-sm sm:p-8">
            <h3 class="font-display text-2xl text-brand-red">Mission</h3>
            <p class="mt-4 max-w-xl text-base leading-7 text-white/85">To serve as your single source partner, delivering complete value chains and cost-optimized solutions with a substantial inventory, expert repair and continuous innovation.</p>
          </div>
        </div>
        <div class="mt-14">
          <p class="eyebrow !text-brand-red">Our Core Values</p>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div v-for="(value, i) in coreValues" :key="value.title" v-reveal="i * 80" class="border border-white/20 bg-white/10 p-7 transition duration-300 hover:bg-white/15 sm:p-8">
              <h3 class="text-xl !text-white"><span class="mr-3 font-display text-2xl font-bold text-brand-red">{{ value.number }}</span>{{ value.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-white/85">{{ value.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="market-focus" class="section">
      <div class="container-x">
        <SectionHead eyebrow="Our Market Focus" title="Industrial environments where reliability matters" text="For each confirmed industry, explain typical requirements, relevant services and project proof. List only industries management confirms." />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(m, i) in markets" :key="m" v-reveal="i * 80" class=" border border-slate-200 p-7 transition hover:border-brand hover:shadow-lg"><h3 class="text-lg font-bold">{{ m }}</h3><p class="mt-2 text-sm text-slate-600">Sector description, relevant services and project proof go here.</p></div>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
