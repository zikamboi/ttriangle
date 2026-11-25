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
          <p v-reveal class="mt-4 whitespace-pre-line text-slate-600">{{ s.intro }}</p>
          <div v-if="s.pumpRange" v-reveal class="mt-10">
            <h3 class="text-2xl">Our Centrifugal Pump Range</h3>
            <div class="mt-5 space-y-4">
              <div v-for="pump in s.pumpRange" :key="pump.title" class="border-l-2 border-brand-red pl-4">
                <h4 class="font-bold">{{ pump.title }}</h4>
                <p class="mt-1 text-sm text-slate-600">{{ pump.text }}</p>
              </div>
            </div>
          </div>
          <div v-if="s.jointSelection" v-reveal class="mt-10">
            <h3 class="text-2xl">Why joint specific selection matters</h3>
            <p class="mt-3 text-slate-600">{{ s.jointSelection }}</p>
          </div>
          <div v-if="s.flangeCondition" v-reveal class="mt-10">
            <h3 class="text-2xl">Why flange condition matters</h3>
            <p class="mt-3 text-slate-600">{{ s.flangeCondition }}</p>
          </div>
          <div v-if="s.touchpointAccess" v-reveal class="mt-10">
            <h3 class="text-2xl">What is touchpoint access creation?</h3>
            <p class="mt-3 text-slate-600">{{ s.touchpointAccess }}</p>
          </div>
          <div v-if="s.touchpointBenefits" v-reveal class="mt-10">
            <h3 class="text-2xl">Why operators choose this approach</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="(benefit, i) in s.touchpointBenefits" :key="benefit" v-reveal="i * 60" class="flex gap-3">
                <span class="mt-1 text-brand-red">▲</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
          <div v-if="s.isolationCases" v-reveal class="mt-10">
            <h3 class="text-2xl">When is a specialist isolation solution needed?</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="(isolationCase, i) in s.isolationCases" :key="isolationCase" v-reveal="i * 60" class="flex gap-3">
                <span class="mt-1 text-brand-red">▲</span>
                <span>{{ isolationCase }}</span>
              </li>
            </ul>
          </div>
          <div v-if="s.isolationTechnologies" v-reveal class="mt-10">
            <h3 class="text-2xl">Our safe isolation technologies</h3>
            <div class="mt-5 space-y-5">
              <div v-for="technology in s.isolationTechnologies" :key="technology.title" class="border-l-2 border-brand-red pl-4">
                <h4 class="font-bold">{{ technology.title }}</h4>
                <p class="mt-2 text-sm text-slate-600">{{ technology.text }}</p>
              </div>
            </div>
          </div>
          <div v-if="s.testRequirements" v-reveal class="mt-10">
            <h3 class="text-2xl">When is pressure testing required?</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="(requirement, i) in s.testRequirements" :key="requirement" v-reveal="i * 60" class="flex gap-3">
                <span class="mt-1 text-brand-red">▲</span>
                <span>{{ requirement }}</span>
              </li>
            </ul>
          </div>
          <h3 v-reveal class="mt-10 text-2xl">Scope of support</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="(x, i) in s.scope" :key="x" v-reveal="i * 60" class="flex gap-3"><span class="mt-1 text-brand-red">▲</span><span>{{ x }}</span></li>
          </ul>
          <div v-if="s.howWeWork" v-reveal class="mt-10">
            <h3 class="text-2xl">How we work</h3>
            <p class="mt-3 whitespace-pre-line text-slate-600">{{ s.howWeWork }}</p>
          </div>
          <div v-reveal class="mt-10 bg-brand-mist p-6">
            <h3 class="font-bold">What to include in your enquiry</h3>
            <p v-if="!s.enquiryDetails" class="mt-2 text-sm text-slate-600">{{ s.enquiry }}</p>
            <ol v-else class="mt-4 space-y-3 text-sm text-slate-600">
              <li v-for="(detail, i) in s.enquiryDetails" :key="detail" class="flex gap-3">
                <span class="font-bold text-brand">{{ i + 1 }}.</span>
                <span>{{ detail }}</span>
              </li>
            </ol>
          </div>
          <div v-if="s.faqs" v-reveal class="mt-10">
            <h3 class="text-2xl">Frequently asked questions</h3>
            <div class="mt-5 space-y-5">
              <div v-for="faq in s.faqs" :key="faq.question" class="border-t border-slate-200 pt-5">
                <h4 class="font-bold">{{ faq.question }}</h4>
                <p class="mt-2 text-sm text-slate-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
          <div v-if="s.slug === 'compressed-air-solutions'" v-reveal class="mt-10">
            <h3 class="text-2xl">Request a quote</h3>
            <p class="mt-3 text-slate-600">
              Send your compressed air requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'valve-optimisation-solutions'" v-reveal class="mt-10">
            <h3 class="text-2xl">Request Valve Support</h3>
            <p class="mt-3 text-slate-600">
              Send your valve requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'fluid-transfer-solutions'" v-reveal class="mt-10">
            <NuxtLink to="/contact?service=fluid-transfer-solutions" class="btn btn-red">Send Your Enquiry</NuxtLink>
            <p class="mt-5 text-slate-600">
              Send your Fluid Transfer Solutions requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'bolting-torquing-solutions'" v-reveal class="mt-10">
            <h3 class="text-2xl">Request a Quote</h3>
            <p class="mt-3 text-slate-600">
              Send your Bolting and Torquing Solutions requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'flange-management-services'" v-reveal class="mt-10">
            <NuxtLink to="/contact?service=flange-management-services" class="btn btn-red">Send an enquiry</NuxtLink>
            <h3 class="mt-8 text-2xl">Request a quotation</h3>
            <p class="mt-3 text-slate-600">
              Send your Flange Management Services requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'pressure-test-solutions'" v-reveal class="mt-10">
            <h3 class="text-2xl">Request a pressure test quotation</h3>
            <p class="mt-3 text-slate-600">
              Send your Pressure Test Solutions requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'touchpoint-engineering-access-creation'" v-reveal class="mt-10">
            <div v-if="s.touchpointApplications" class="mb-8">
              <h3 class="text-2xl">Where it applies</h3>
              <p class="mt-3 text-slate-600">{{ s.touchpointApplications }}</p>
            </div>
            <p class="text-slate-600">
              All work is carried out within the approved scope, method statement and permit requirements of each project.
            </p>
            <h3 class="mt-8 text-2xl">Request touchpoint support</h3>
            <p class="mt-3 text-slate-600">
              Send your Touchpoint Engineering and Access Creation requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
          </div>
          <div v-else-if="s.slug === 'safe-isolation-solutions'" v-reveal class="mt-10">
            <h3 class="text-2xl">Request safe isolation support</h3>
            <p class="mt-3 text-slate-600">
              Send your Safe Isolation Solutions requirement to
              <a :href="`mailto:${contact.email}`" class="font-semibold text-brand-red">{{ contact.email }}</a>
              or call
              <a :href="`tel:${contact.ng.phone.replace(/\s/g, '')}`" class="font-semibold text-brand-red">{{ contact.ng.phone }}</a>.
              Our team will review it and respond with a suitable offer.
            </p>
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
