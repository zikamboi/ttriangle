<script setup lang="ts">
useHead({ title: 'T Triangle Limited | Engineering & Technical Solutions' })
const heroImage = '' // e.g. '/images/hero.jpg' (place the file in /public/images)
const active = ref(0)
const loop = [...services, ...services]
const steps = [
  ['Share your requirement', 'Tell us the application, site, specifications and timeline.'],
  ['We review and clarify', 'Our team reviews the scope and may ask follow-up questions.'],
  ['We coordinate options', 'Suitable equipment and specialist support are identified.'],
  ['You receive a response', 'We come back to you using the details you provided.']
]
</script>
<template>
  <div>
    <!-- HERO -->
    <section class="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-dark text-white">
      <div v-if="heroImage" class="absolute inset-0"><img :src="heroImage" alt="" class="h-full w-full object-cover" /><div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/40"></div></div>
      <HeroArt />
      <div class="container-x relative flex flex-1 items-center pb-10 pt-44">
        <div class="max-w-4xl">
          <p class="eyebrow animate-fade-up !text-white">Lagos · Walvis Bay</p>
          <h1 class="animate-fade-up text-5xl !text-white sm:text-7xl lg:text-[6.5rem]" style="animation-delay:.1s">
            Engineering and technical solutions for <span class="text-brand-red">critical operations</span>
          </h1>
          <p class="mt-7 max-w-xl animate-fade-up text-lg text-white/75" style="animation-delay:.25s">
            We support industrial operators with specialised equipment, engineering services and technical solutions designed around operational requirements.
          </p>
          <div class="mt-10 flex animate-fade-up flex-wrap gap-4" style="animation-delay:.4s">
            <NuxtLink to="/contact" class="btn btn-red">Discuss Your Requirement</NuxtLink>
            <NuxtLink to="/services" class="btn btn-ghost">Explore Our Services</NuxtLink>
          </div>
        </div>
      </div>
      <div class="container-x relative mb-8 grid animate-fade-up border-t border-white/15 sm:grid-cols-3" style="animation-delay:.6s">
        <NuxtLink to="/contact" class="group border-white/15 py-5 sm:border-r sm:pr-6"><span class="text-xs uppercase tracking-widest text-white/50">Quotations</span><span class="mt-1 flex items-center justify-between font-display text-2xl uppercase">Request a Quote <span class="transition group-hover:translate-x-2">→</span></span></NuxtLink>
        <NuxtLink to="/oem" class="group border-white/15 py-5 sm:border-r sm:px-6"><span class="text-xs uppercase tracking-widest text-white/50">Technologies</span><span class="mt-1 flex items-center justify-between font-display text-2xl uppercase">Specialised OEM <span class="transition group-hover:translate-x-2">→</span></span></NuxtLink>
        <a :href="`tel:${contact.ng.phone.replace(/\s/g,'')}`" class="group py-5 sm:pl-6"><span class="text-xs uppercase tracking-widest text-white/50">Speak to our team</span><span class="mt-1 flex items-center justify-between font-display text-2xl uppercase">{{ contact.ng.phone }} <span class="transition group-hover:translate-x-2">→</span></span></a>
      </div>
    </section>

    <!-- TICKER -->
    <div class="overflow-hidden bg-brand-red py-3.5 text-white">
      <div class="flex w-max animate-marquee whitespace-nowrap font-display text-xl font-semibold uppercase tracking-wider">
        <span v-for="(s, i) in loop" :key="i" class="pr-10">▲ {{ s.name.split(' (')[0] }}</span>
      </div>
    </div>

    <!-- INTRO -->
    <section class="section">
      <div class="container-x grid items-center gap-16 lg:grid-cols-2">
        <div v-reveal class="relative">
          <AppImage class="aspect-[4/5] sm:aspect-[5/4]" hint="Workshop / site image" />
          <div class="absolute -bottom-6 -right-6 hidden h-32 w-32 bg-brand-red sm:block" style="clip-path:polygon(100% 0,100% 100%,0 100%)"></div>
        </div>
        <div v-reveal="150">
          <p class="eyebrow">Who we are</p>
          <h2 class="text-4xl sm:text-6xl">The right technical support makes the difference</h2>
          <p class="mt-6 text-lg">When equipment performance, safe operations and project schedules matter, T Triangle Limited works with clients to understand their applications, clarify requirements and coordinate suitable equipment and specialist services for the operating environment.</p>
          <NuxtLink to="/about" class="btn btn-outline mt-8">About Us →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- SERVICES: hover list + preview -->
    <section id="services" class="section bg-brand-mist">
      <div class="container-x">
        <SectionHead eyebrow="Our Core Services" title="Eight service areas. One dependable partner." />
        <div class="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <ul class="border-t border-slate-300">
            <li v-for="(s, i) in services" :key="s.slug" v-reveal="i * 40" class="border-b border-slate-300">
              <NuxtLink :to="`/services/${s.slug}`" @mouseenter="active = i" @focus="active = i" class="group flex items-center gap-5 py-5">
                <span :class="['font-display text-3xl font-bold transition', active === i ? 'text-brand-red' : 'text-slate-300']">0{{ i + 1 }}</span>
                <span :class="['flex-1 font-display text-2xl font-semibold uppercase transition sm:text-3xl', active === i ? 'translate-x-2 text-brand-dark' : 'text-slate-500']">{{ s.name.split(' (')[0] }}</span>
                <span :class="['transition', active === i ? 'translate-x-0 text-brand-red opacity-100' : '-translate-x-3 opacity-0']">→</span>
              </NuxtLink>
            </li>
          </ul>
          <div class="hidden lg:block">
            <div class="sticky top-28">
              <Transition name="page" mode="out-in">
                <div :key="active" class="overflow-hidden bg-white shadow-xl">
                  <AppImage class="aspect-[16/10]" :hint="`Image: ${services[active].name}`" />
                  <div class="p-8">
                    <p class="font-display text-lg font-bold text-brand-red">0{{ active + 1 }}</p>
                    <h3 class="mt-1 text-2xl">{{ services[active].name }}</h3>
                    <p class="mt-3">{{ services[active].short }}</p>
                    <NuxtLink :to="`/services/${services[active].slug}`" class="btn btn-red mt-6">Explore Service →</NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="relative overflow-hidden bg-brand-dark py-24 text-white sm:py-28">
      <div class="blueprint absolute inset-0 opacity-60"></div>
      <div class="container-x relative">
        <div v-reveal class="mb-14 max-w-3xl"><p class="eyebrow !text-white">Why work with us</p><h2 class="text-4xl !text-white sm:text-6xl">Why work with T Triangle</h2></div>
        <div class="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
          <div v-for="(w, i) in why" :key="w[0]" v-reveal="i * 90" class="group bg-brand-dark p-7 transition hover:bg-brand">
            <span class="font-display text-5xl font-bold text-brand-red">0{{ i + 1 }}</span>
            <h3 class="mt-4 text-lg !text-white">{{ w[0] }}</h3>
            <p class="mt-3 text-sm text-white/65">{{ w[1] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MARKETS -->
    <section class="section">
      <div class="container-x">
        <SectionHead eyebrow="Our Market Focus" title="Industries we serve" text="Industrial environments where equipment reliability, safe work practices and dependable technical support matter." />
        <div class="flex flex-col gap-3 lg:h-[28rem] lg:flex-row">
          <NuxtLink v-for="(m, i) in markets" :key="m" to="/about#market-focus" class="group relative h-52 overflow-hidden lg:h-auto lg:flex-1 lg:transition-all lg:duration-700 lg:hover:flex-[2.4]">
            <div class="absolute inset-0"><AppImage class="h-full w-full" :hint="`Image: ${m}`" /></div>
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
            <div class="absolute bottom-0 p-6 text-white">
              <span class="font-display text-lg font-bold text-brand-red">0{{ i + 1 }}</span>
              <h3 class="font-display text-3xl font-semibold uppercase leading-none !text-white">{{ m }}</h3>
              <span class="mt-3 block translate-y-2 text-sm opacity-100 transition duration-500 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">Explore →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section bg-brand-mist">
      <div class="container-x">
        <SectionHead eyebrow="How it works" title="From enquiry to response" />
        <div class="grid gap-8 md:grid-cols-4">
          <div v-for="(st, i) in steps" :key="st[0]" v-reveal="i * 100" class="relative border-t-4 border-brand pt-6">
            <span class="font-display text-6xl font-bold text-brand/15">0{{ i + 1 }}</span>
            <h3 class="mt-2 text-lg">{{ st[0] }}</h3><p class="mt-2 text-sm">{{ st[1] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="section">
      <div class="container-x">
        <SectionHead center eyebrow="Our OEM & Technology Partners" title="Connecting you with the right technology" text="We work with relevant OEMs and technology partners to connect clients with equipment and specialised solutions suited to their applications." />
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <NuxtLink v-for="(p, i) in partners" :key="p" to="/oem" v-reveal="i * 70" class="grid h-28 place-items-center border border-slate-200 font-display text-2xl font-bold uppercase tracking-wide text-slate-400 transition hover:border-brand-red hover:text-brand-dark hover:shadow-lg">
            <!-- replace with <img :src="`/logos/${p.toLowerCase()}.png`"> once approved logos are added -->{{ p }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section bg-brand-mist">
      <div class="container-x">
        <div class="mb-14 flex flex-wrap items-end justify-between gap-4"><SectionHead class="!mb-0" eyebrow="Projects" title="Real work. Verified results." /><NuxtLink to="/projects" class="btn btn-outline">All Projects →</NuxtLink></div>
        <div class="grid gap-6 md:grid-cols-3">
          <NuxtLink v-for="n in 3" :key="n" to="/projects" v-reveal="n * 90" class="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <AppImage class="h-56" hint="Approved project photo" />
            <div class="p-6"><p class="text-xs font-semibold uppercase tracking-widest text-brand-red">Industry / application</p><h3 class="mt-2 text-lg">Project title (pending approval)</h3></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- INSIGHTS -->
    <section class="section">
      <div class="container-x">
        <div class="mb-14 flex flex-wrap items-end justify-between gap-4"><SectionHead class="!mb-0" eyebrow="Insights" title="Technical knowledge for better decisions" /><NuxtLink to="/insights" class="btn btn-outline">All Insights →</NuxtLink></div>
        <div class="grid gap-6 md:grid-cols-3">
          <NuxtLink v-for="(a, i) in insights.slice(0, 3)" :key="a.title" to="/insights" v-reveal="i * 90" class="group border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
            <p class="text-xs font-semibold uppercase tracking-widest text-brand-red">{{ a.cat }}</p>
            <h3 class="mt-4 font-display text-3xl font-semibold uppercase leading-none transition group-hover:text-brand">{{ a.title }}</h3>
            <span class="mt-6 inline-block text-sm font-semibold text-brand">Read More →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>
