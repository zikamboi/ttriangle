<script setup lang="ts">
const props = defineProps<{ preset?: string }>()
const route = useRoute()
const f = reactive({
  name: '', company: '', email: '', phone: '', country: '', location: '',
  service: props.preset || (route.query.service as string) || '', technology: '', type: '', details: '', date: '', consent: false, website: ''
})
const file = ref<File | null>(null)
const fileError = ref('')
const status = ref<'idle' | 'sending' | 'error'>('idle')
const types = ['Quotation', 'Technical consultation', 'Maintenance / service', 'Equipment rental', 'Product procurement', 'Project support', 'Other']

function onFile(e: Event) {
  const x = (e.target as HTMLInputElement).files?.[0] || null
  fileError.value = x && x.size > 5 * 1024 * 1024 ? 'File is larger than 5 MB.' : ''
  file.value = fileError.value ? null : x
}
async function submit() {
  status.value = 'sending'
  try {
    const fd = new FormData()
    Object.entries(f).forEach(([k, v]) => fd.append(k, String(v)))
    fd.append('attribution', JSON.stringify(getAttribution()))
    if (file.value) fd.append('file', file.value)
    await $fetch('/api/enquiry', { method: 'POST', body: fd })
    await navigateTo('/thank-you') // conversion is tracked on that page
  } catch { status.value = 'error' }
}
</script>
<template>
  <form @submit.prevent="submit" class="grid gap-4 sm:grid-cols-2">
    <input v-model="f.website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" name="website" />
    <input v-model="f.name" required class="input" placeholder="Full name *" />
    <input v-model="f.company" class="input" placeholder="Company / organisation" />
    <input v-model="f.email" required type="email" class="input" placeholder="Work email *" />
    <input v-model="f.phone" class="input" placeholder="Phone / WhatsApp" />
    <input v-model="f.country" class="input" placeholder="Country" />
    <input v-model="f.location" class="input" placeholder="Project / site location" />
    <select v-model="f.service" class="input">
      <option value="">Service required</option>
      <option v-for="s in services" :key="s.slug" :value="s.slug">{{ s.name }}</option>
      <option value="specialised-oem">Specialised OEM Solution</option>
      <option value="other">Other / Not sure</option>
    </select>
    <select v-model="f.type" class="input"><option value="">Enquiry type</option><option v-for="t in types" :key="t">{{ t }}</option></select>
    <select v-if="f.service === 'specialised-oem'" v-model="f.technology" class="input"><option value="">Technology of interest</option><option v-for="p in partners" :key="p">{{ p }}</option></select>
    <input v-model="f.date" type="date" class="input" aria-label="Required date" />
    <textarea v-model="f.details" rows="5" class="input sm:col-span-2" placeholder="Equipment / application / specification"></textarea>
    <div class="sm:col-span-2">
      <input type="file" class="input" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg,.zip" @change="onFile" aria-label="Upload RFQ, datasheet, drawing or photo" />
      <p class="mt-1 text-xs text-slate-500">Optional: RFQ, datasheet, drawing or photo (max 5 MB).</p>
      <p v-if="fileError" class="text-xs text-brand-red">{{ fileError }}</p>
    </div>
    <label class="flex items-start gap-3 text-xs text-slate-600 sm:col-span-2">
      <input v-model="f.consent" type="checkbox" required class="mt-0.5" /> I agree to T Triangle Limited processing my details to respond to this enquiry.
    </label>
    <button class="btn btn-red sm:col-span-2" :disabled="status === 'sending'">{{ status === 'sending' ? 'Sending…' : 'Send Enquiry →' }}</button>
    <p v-if="status === 'error'" class="text-sm text-brand-red sm:col-span-2">Something went wrong. Please try again or email {{ contact.email }}.</p>
  </form>
</template>
