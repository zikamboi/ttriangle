import { _ as __nuxt_component_0 } from "./nuxt-link-GS68twfD.js";
import { _ as __nuxt_component_3 } from "./CtaBand-CXelDDpu.js";
import { i as insights, b as insightCategories } from "./site-DWXvFva0.js";
import { defineComponent, ref, computed, resolveDirective, unref, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { u as useHead } from "./v3-w9sd3xiW.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "./HeroArt-Chj0iCKI.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Insights & Field Notes | T Triangle Limited" });
    const activeCategory = ref("All");
    const searchQuery = ref("");
    const featuredInsight = insights[0];
    const showFeatured = computed(() => activeCategory.value === "All" && !searchQuery.value.trim());
    const matchingInsights = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      return insights.filter((insight) => {
        const matchesCategory = activeCategory.value === "All" || insight.cat === activeCategory.value;
        const matchesSearch = !query || `${insight.title} ${insight.excerpt} ${insight.cat}`.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      });
    });
    const listedInsights = computed(() => showFeatured.value ? matchingInsights.value.filter((insight) => insight.slug !== featuredInsight.slug) : matchingInsights.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-28"><div class="blueprint absolute inset-0 opacity-40"></div><div class="container-x relative"><p class="eyebrow !text-brand-red">Insights / Field notes</p><div class="grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div class="max-w-4xl"><h1 class="text-5xl !text-white sm:text-7xl">Ideas for better <span class="text-brand-red">operations.</span></h1><p class="mt-6 max-w-2xl text-lg leading-8 text-white/70"> Straightforward guides to equipment, maintenance and the decisions that keep industrial work moving. </p></div><p class="font-display text-xl uppercase tracking-widest text-white/50">Read what matters to you</p></div></div></section><section class="section"><div class="container-x"><div class="grid gap-8 border-b border-slate-200 pb-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p class="eyebrow">Find your next read</p><h2 class="text-2xl !text-brand sm:text-3xl">Choose a topic or search a question</h2></div><label class="relative block w-full lg:w-96"><span class="sr-only">Search insights</span><input${ssrRenderAttr("value", unref(searchQuery))} type="search" class="input pr-12" placeholder="Search valves, maintenance, pigging..."><span aria-hidden="true" class="absolute right-4 top-1/2 -translate-y-1/2 text-brand">⌕</span></label></div><div class="mt-6 flex flex-wrap gap-2" aria-label="Filter by topic"><!--[-->`);
      ssrRenderList(["All", ..."insightCategories" in _ctx ? _ctx.insightCategories : unref(insightCategories)], (category) => {
        _push(`<button type="button"${ssrRenderAttr("aria-pressed", unref(activeCategory) === category)} class="${ssrRenderClass([
          "border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          unref(activeCategory) === category ? "border-brand bg-brand text-white" : "border-slate-300 text-slate-600 hover:border-brand hover:text-brand"
        ])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(showFeatured)) {
        _push(`<div class="mt-12"><p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Editor’s pick</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/insights/${unref(featuredInsight).slug}`,
          class: "group grid overflow-hidden bg-brand-mist lg:grid-cols-[1.05fr_.95fr]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", unref(featuredInsight).image)}${ssrRenderAttr("alt", unref(featuredInsight).imageAlt)} class="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"${_scopeId}></div><div class="flex flex-col justify-center p-7 sm:p-10 lg:p-14"${_scopeId}><div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-red"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(featuredInsight).cat)}</span><span aria-hidden="true"${_scopeId}>·</span><span${_scopeId}>${ssrInterpolate(unref(featuredInsight).readingTime)}</span></div><h2 class="mt-4 font-display text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl"${_scopeId}>${ssrInterpolate(unref(featuredInsight).title)}</h2><p class="mt-5 leading-7 text-slate-600"${_scopeId}>${ssrInterpolate(unref(featuredInsight).excerpt)}</p><span class="mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand"${_scopeId}> Read the feature <span aria-hidden="true" class="transition group-hover:translate-x-1"${_scopeId}>→</span></span></div>`);
            } else {
              return [
                createVNode("div", { class: "overflow-hidden" }, [
                  createVNode("img", {
                    src: unref(featuredInsight).image,
                    alt: unref(featuredInsight).imageAlt,
                    class: "aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "flex flex-col justify-center p-7 sm:p-10 lg:p-14" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-red" }, [
                    createVNode("span", null, toDisplayString(unref(featuredInsight).cat), 1),
                    createVNode("span", { "aria-hidden": "true" }, "·"),
                    createVNode("span", null, toDisplayString(unref(featuredInsight).readingTime), 1)
                  ]),
                  createVNode("h2", { class: "mt-4 font-display text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl" }, toDisplayString(unref(featuredInsight).title), 1),
                  createVNode("p", { class: "mt-5 leading-7 text-slate-600" }, toDisplayString(unref(featuredInsight).excerpt), 1),
                  createVNode("span", { class: "mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand" }, [
                    createTextVNode(" Read the feature "),
                    createVNode("span", {
                      "aria-hidden": "true",
                      class: "transition group-hover:translate-x-1"
                    }, "→")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-5 mt-12 flex items-center justify-between gap-4"><h2 class="font-display text-2xl font-semibold uppercase text-brand">${ssrInterpolate(unref(showFeatured) ? "More to explore" : "Your results")}</h2><p class="text-sm text-slate-500">${ssrInterpolate(unref(matchingInsights).length)} ${ssrInterpolate(unref(matchingInsights).length === 1 ? "article" : "articles")}</p></div>`);
      if (unref(listedInsights).length) {
        _push(`<div${ssrRenderAttrs({
          name: "page",
          class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        })}>`);
        ssrRenderList(unref(listedInsights), (insight, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
            key: insight.slug,
            to: `/insights/${insight.slug}`,
            class: "group flex flex-col border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          }, ssrGetDirectiveProps(_ctx, _directive_reveal, i % 3 * 70)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="overflow-hidden bg-brand-dark"${_scopeId}><img${ssrRenderAttr("src", insight.image)}${ssrRenderAttr("alt", insight.imageAlt)} loading="lazy" class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}></div><div class="flex flex-1 flex-col p-6"${_scopeId}><div class="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-brand-red"${_scopeId}><span${_scopeId}>${ssrInterpolate(insight.cat)}</span><span class="shrink-0 text-slate-500"${_scopeId}>${ssrInterpolate(insight.readingTime)}</span></div><h3 class="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-brand"${_scopeId}>${ssrInterpolate(insight.title)}</h3><p class="mt-3 flex-1 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(insight.excerpt)}</p><span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"${_scopeId}> Read article <span aria-hidden="true" class="transition group-hover:translate-x-1"${_scopeId}>→</span></span></div>`);
              } else {
                return [
                  createVNode("div", { class: "overflow-hidden bg-brand-dark" }, [
                    createVNode("img", {
                      src: insight.image,
                      alt: insight.imageAlt,
                      loading: "lazy",
                      class: "aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
                    createVNode("div", { class: "flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-brand-red" }, [
                      createVNode("span", null, toDisplayString(insight.cat), 1),
                      createVNode("span", { class: "shrink-0 text-slate-500" }, toDisplayString(insight.readingTime), 1)
                    ]),
                    createVNode("h3", { class: "mt-4 font-display text-2xl font-semibold uppercase leading-tight text-brand" }, toDisplayString(insight.title), 1),
                    createVNode("p", { class: "mt-3 flex-1 text-sm leading-6 text-slate-600" }, toDisplayString(insight.excerpt), 1),
                    createVNode("span", { class: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand" }, [
                      createTextVNode(" Read article "),
                      createVNode("span", {
                        "aria-hidden": "true",
                        class: "transition group-hover:translate-x-1"
                      }, "→")
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`</div>`);
      } else {
        _push(`<div class="mt-8 border border-dashed border-slate-300 px-6 py-14 text-center"><h3 class="font-display text-2xl font-semibold uppercase text-brand">No reads found</h3><p class="mt-2 text-slate-600">Try another search or choose a different topic.</p><button type="button" class="mt-5 text-sm font-bold text-brand-red underline"> Clear filters </button></div>`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insights/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BTUVMutK.js.map
