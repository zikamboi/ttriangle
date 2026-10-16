export default defineNuxtPlugin((nuxtApp) => {
  setTrackingConfig(useRuntimeConfig().public)
  captureAttribution()
  if (localStorage.getItem('tt-consent') === 'granted') loadTags()
  nuxtApp.hook('page:finish', () => trackPageView(location.pathname))
})
