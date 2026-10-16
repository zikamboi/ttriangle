// v-reveal="delayMs" -> fades/slides element in when scrolled into view
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect() }
      }, { threshold: 0.12 })
      io.observe(el)
    },
    getSSRProps() { return { 'data-reveal': '' } }
  })
})
