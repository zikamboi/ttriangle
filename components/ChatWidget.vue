<script setup lang="ts">
type Msg = { role: 'user' | 'assistant'; content: string }
const open = ref(false), loading = ref(false), input = ref('')
const box = ref<HTMLElement>()
const msgs = ref<Msg[]>([{ role: 'assistant', content: 'Hello! I\'m the T Triangle assistant. Ask me about our services, specialised OEM solutions, or how to send an enquiry.' }])
const ideas = ['What services do you offer?', 'How do I request a quote?', 'What should I include in an enquiry?']
watch(open, v => v && trackEvent('chat_open'))
async function send(text = input.value) {
  text = text.trim()
  if (!text || loading.value) return
  msgs.value.push({ role: 'user', content: text }); input.value = ''; loading.value = true
  await scroll()
  try {
    const r = await $fetch<{ reply: string }>('/api/chat', { method: 'POST', body: { messages: msgs.value.slice(1) } })
    msgs.value.push({ role: 'assistant', content: r.reply })
  } catch {
    msgs.value.push({ role: 'assistant', content: 'Sorry, I can\'t respond right now. Please use our Contact page or email us directly.' })
  }
  loading.value = false; scroll()
}
async function scroll() { await nextTick(); box.value?.scrollTo({ top: box.value.scrollHeight, behavior: 'smooth' }) }
</script>
<template>
  <!-- Teleported to <body> with inline positioning so no parent or CSS can hide it -->
  <ClientOnly>
    <Teleport to="body">
      <div style="position:fixed;right:20px;bottom:20px;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;gap:14px">
        <Transition name="page">
          <div v-if="open" class="flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden bg-white shadow-2xl ring-1 ring-black/10">
            <div class="flex items-center justify-between bg-brand-dark px-5 py-4 text-white">
              <div><p class="font-display text-xl font-bold uppercase tracking-wide">T Triangle Assistant</p><p class="text-xs text-white/60">AI assistant · confirm details with our team</p></div>
              <button type="button" @click="open = false" aria-label="Close chat" class="text-2xl leading-none">×</button>
            </div>
            <div ref="box" class="flex-1 space-y-3 overflow-y-auto bg-brand-mist p-4 text-sm">
              <div v-for="(m, i) in msgs" :key="i" :class="m.role === 'user' ? 'text-right' : ''">
                <span :class="['inline-block max-w-[85%] whitespace-pre-wrap px-4 py-2.5 text-left', m.role === 'user' ? 'bg-brand text-white' : 'bg-white text-slate-700 shadow-sm']">{{ m.content }}</span>
              </div>
              <div v-if="loading" class="text-slate-400">Typing…</div>
              <div v-if="msgs.length === 1" class="flex flex-col gap-2 pt-2">
                <button v-for="q in ideas" :key="q" type="button" @click="send(q)" class="border border-brand/30 bg-white px-4 py-2 text-left text-xs text-brand transition hover:bg-brand hover:text-white">{{ q }}</button>
              </div>
            </div>
            <form class="flex gap-2 border-t p-3" @submit.prevent="send()">
              <input v-model="input" maxlength="800" class="input !py-2.5" placeholder="Type your question…" />
              <button class="btn btn-red !px-4 !py-2.5" :disabled="loading" aria-label="Send">➤</button>
            </form>
          </div>
        </Transition>
        <button type="button" @click="open = !open" aria-label="Chat with us"
          style="position:relative;width:60px;height:60px;border-radius:9999px;background:#ca3332;color:#fff;border:0;cursor:pointer;display:grid;place-items:center;box-shadow:0 10px 30px rgba(202,51,50,.45)">
          <span v-if="!open" class="absolute inset-0 animate-ping rounded-full bg-brand-red/40"></span>
          <svg v-if="!open" class="relative" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z" /></svg>
          <svg v-else class="relative" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
    </Teleport>
  </ClientOnly>
</template>
