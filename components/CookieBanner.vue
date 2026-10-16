<script setup lang="ts">
const show = ref(false)
onMounted(() => { show.value = !localStorage.getItem('tt-consent') })
function choose(v: 'granted' | 'denied') {
  localStorage.setItem('tt-consent', v); show.value = false
  if (v === 'granted') loadTags()
}
</script>
<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="page">
        <div v-if="show" class="fixed bottom-4 left-4 right-24 z-[9998] max-w-md bg-brand-dark p-5 text-sm text-white shadow-2xl sm:right-auto">
          <p>We use cookies for analytics and to measure our advertising. See our <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink>.</p>
          <div class="mt-4 flex gap-3">
            <button class="btn btn-red !px-5 !py-2.5" @click="choose('granted')">Accept</button>
            <button class="btn btn-ghost !px-5 !py-2.5" @click="choose('denied')">Decline</button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
