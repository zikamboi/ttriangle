<!-- Blueprint grid + brand triangle motif with a slow scan line -->
<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div class="blueprint absolute inset-0"></div>
    <div class="absolute inset-x-0 top-0 h-32 animate-scan bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
    <svg class="absolute -right-32 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 animate-float-slow" viewBox="0 0 200 180">
      <polygon points="100,8 192,170 8,170" fill="none" stroke="#ca3332" stroke-width="1.2" stroke-dasharray="700" class="animate-draw" />
      <polygon points="100,48 162,160 38,160" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width=".8" />
      <polygon points="100,88 132,150 68,150" fill="#ca3332" fill-opacity=".18" />
    </svg>
    <div class="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-brand/50 blur-3xl"></div>
  </div>
</template>
