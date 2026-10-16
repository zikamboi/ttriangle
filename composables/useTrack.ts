// Ad & analytics helpers. Tags load ONLY after cookie consent.
let cfg: Record<string, any> = {}
let loaded = false
let first = true
const w = () => window as any

export function setTrackingConfig(c: Record<string, any>) { cfg = c }

export function loadTags() {
  if (loaded || !import.meta.client) return
  loaded = true
  const add = (src: string) => { const s = document.createElement('script'); s.async = true; s.src = src; document.head.appendChild(s) }
  const ids = [cfg.gaId, cfg.gadsId].filter(Boolean)
  if (ids.length) {
    w().dataLayer = w().dataLayer || []
    w().gtag = function () { w().dataLayer.push(arguments) }
    w().gtag('js', new Date())
    ids.forEach(id => w().gtag('config', id))
    add(`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`)
  }
  if (cfg.metaPixelId) {
    const n: any = (w().fbq = function (...a: any[]) { n.callMethod ? n.callMethod(...a) : n.queue.push(a) })
    n.queue = []; n.loaded = true; n.version = '2.0'
    add('https://connect.facebook.net/en_US/fbevents.js')
    w().fbq('init', cfg.metaPixelId); w().fbq('track', 'PageView')
  }
  if (cfg.linkedinPartnerId) {
    w()._linkedin_data_partner_ids = [cfg.linkedinPartnerId]
    w().lintrk = w().lintrk || function (a: any) { (w().lintrk.q = w().lintrk.q || []).push([a]) }
    add('https://snap.licdn.com/li.lms-analytics/insight.min.js')
  }
}

export function trackPageView(path: string) {
  if (!loaded) return
  if (first) { first = false; return } // first view is sent by the tag itself
  w().gtag?.('event', 'page_view', { page_path: path })
  w().fbq?.('track', 'PageView')
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (!import.meta.client || !loaded) return
  w().gtag?.('event', name, params)
  if (name === 'generate_lead') {
    if (cfg.gadsId && cfg.gadsLeadLabel) w().gtag?.('event', 'conversion', { send_to: `${cfg.gadsId}/${cfg.gadsLeadLabel}` })
    w().fbq?.('track', 'Lead')
    if (cfg.linkedinLeadConversionId) w().lintrk?.('track', { conversion_id: Number(cfg.linkedinLeadConversionId) })
  }
}

// Remember where the visitor came from (UTMs and ad click IDs) so each enquiry carries its source
const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'li_fat_id']
export function captureAttribution() {
  if (!import.meta.client) return
  const q = new URLSearchParams(location.search)
  if (!KEYS.some(k => q.has(k)) || sessionStorage.getItem('tt-attr')) return
  const a: Record<string, string> = { landing: location.pathname, referrer: document.referrer }
  KEYS.forEach(k => q.has(k) && (a[k] = q.get(k)!))
  sessionStorage.setItem('tt-attr', JSON.stringify(a))
}
export function getAttribution() {
  if (!import.meta.client) return {}
  try { return JSON.parse(sessionStorage.getItem('tt-attr') || '{}') } catch { return {} }
}
