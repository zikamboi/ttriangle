import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-GS68twfD.mjs';
import { _ as __nuxt_component_3 } from './CtaBand-CXelDDpu.mjs';
import { defineComponent, computed, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useRoute, c as createError } from './server.mjs';
import { i as insights } from './site-DWXvFva0.mjs';
import { u as useHead } from './v3-w9sd3xiW.mjs';
import './HeroArt-Chj0iCKI.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const insight = insights.find((item) => item.slug === String(route.params.slug));
    if (!insight) throw createError({ statusCode: 404, statusMessage: "Insight not found", fatal: true });
    const relatedInsights = computed(() => {
      const sameTopic = insights.filter((item) => item.cat === insight.cat && item.slug !== insight.slug);
      return [...sameTopic, ...insights.filter((item) => item.slug !== insight.slug && item.cat !== insight.cat)].slice(0, 3);
    });
    useHead({
      title: `${insight.title} | T Triangle Insights`,
      meta: [{ name: "description", content: insight.excerpt }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CtaBand = __nuxt_component_3;
      if (unref(insight)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_PageHero, {
          eyebrow: "Insights / Field notes",
          title: unref(insight).title,
          text: unref(insight).excerpt
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-red"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(insight).cat)}</span><span aria-hidden="true"${_scopeId}>\xB7</span><span${_scopeId}>${ssrInterpolate(unref(insight).readingTime)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-red" }, [
                  createVNode("span", null, toDisplayString(unref(insight).cat), 1),
                  createVNode("span", { "aria-hidden": "true" }, "\xB7"),
                  createVNode("span", null, toDisplayString(unref(insight).readingTime), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="-mt-8 pb-12"><div class="container-x"><img${ssrRenderAttr("src", unref(insight).image)}${ssrRenderAttr("alt", unref(insight).imageAlt)} class="aspect-[16/7] w-full bg-brand-dark object-cover"></div></section><section class="section pt-8"><div class="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start"><article class="space-y-9"><!--[-->`);
        ssrRenderList(unref(insight).sections, (section) => {
          _push(`<section><h2 class="font-display text-3xl font-semibold uppercase leading-tight text-brand">${ssrInterpolate(section.heading)}</h2><!--[-->`);
          ssrRenderList(section.paragraphs, (paragraph) => {
            _push(`<p class="mt-4 leading-8 text-slate-700">${ssrInterpolate(paragraph)}</p>`);
          });
          _push(`<!--]--></section>`);
        });
        _push(`<!--]--></article><aside class="bg-brand-mist p-6 lg:sticky lg:top-28"><p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Quick takeaways</p><h2 class="mt-3 font-display text-2xl font-semibold uppercase text-brand">Keep in mind</h2><ul class="mt-5 space-y-4"><!--[-->`);
        ssrRenderList(unref(insight).takeaways, (takeaway) => {
          _push(`<li class="flex gap-3 text-sm leading-6 text-slate-700"><span aria-hidden="true" class="font-bold text-brand-red">+</span><span>${ssrInterpolate(takeaway)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/insights",
          class: "mt-7 inline-flex text-sm font-bold text-brand underline underline-offset-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse all insights `);
            } else {
              return [
                createTextVNode(" Browse all insights ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</aside></div></section><section class="section bg-brand-mist"><div class="container-x"><div class="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p class="eyebrow">Keep exploring</p><h2 class="text-3xl !text-brand">More reads for you</h2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/insights",
          class: "text-sm font-bold text-brand-red underline underline-offset-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`All insights`);
            } else {
              return [
                createTextVNode("All insights")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid gap-5 md:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(relatedInsights), (related) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: related.slug,
            to: `/insights/${related.slug}`,
            class: "group bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="text-xs font-bold uppercase tracking-widest text-brand-red"${_scopeId}>${ssrInterpolate(related.cat)} <span class="ml-2 text-slate-500"${_scopeId}>${ssrInterpolate(related.readingTime)}</span></p><h3 class="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-brand"${_scopeId}>${ssrInterpolate(related.title)}</h3><span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"${_scopeId}> Read next <span aria-hidden="true" class="transition group-hover:translate-x-1"${_scopeId}>\u2192</span></span>`);
              } else {
                return [
                  createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-brand-red" }, [
                    createTextVNode(toDisplayString(related.cat) + " ", 1),
                    createVNode("span", { class: "ml-2 text-slate-500" }, toDisplayString(related.readingTime), 1)
                  ]),
                  createVNode("h3", { class: "mt-4 font-display text-2xl font-semibold uppercase leading-tight text-brand" }, toDisplayString(related.title), 1),
                  createVNode("span", { class: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand" }, [
                    createTextVNode(" Read next "),
                    createVNode("span", {
                      "aria-hidden": "true",
                      class: "transition group-hover:translate-x-1"
                    }, "\u2192")
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
        _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insights/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-KgpWFBqm.mjs.map
