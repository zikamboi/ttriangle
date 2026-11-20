import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as _sfc_main$2 } from './AppImage-C2ZouWCe.mjs';
import { _ as __nuxt_component_3 } from './CtaBand-CP7L_YEV.mjs';
import { i as insights, a as insightCategories } from './site-B1KL6Zn7.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-w9sd3xiW.mjs';
import './HeroArt-Chj0iCKI.mjs';
import './server.mjs';
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
import './nuxt-link-GS68twfD.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Insights | T Triangle Limited" });
    const active = ref("All");
    const list = computed(() => active.value === "All" ? insights : insights.filter((i) => i.cat === active.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppImage = _sfc_main$2;
      const _component_CtaBand = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Insights",
        title: "Technical knowledge. Industry intelligence. Better operational decisions."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x"><div class="mb-10 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(["All", ..."insightCategories" in _ctx ? _ctx.insightCategories : unref(insightCategories)], (c) => {
        _push(`<button class="${ssrRenderClass(["rounded-full border px-4 py-2 text-sm transition", unref(active) === c ? "border-brand bg-brand text-white" : "border-slate-300 hover:border-brand"])}">${ssrInterpolate(c)}</button>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs({
        name: "page",
        class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      })}>`);
      ssrRenderList(unref(list), (a) => {
        _push(`<article class="overflow-hidden border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl">`);
        _push(ssrRenderComponent(_component_AppImage, {
          class: "h-44",
          hint: "Article image"
        }, null, _parent));
        _push(`<div class="p-6"><p class="text-xs font-semibold uppercase text-brand-red">${ssrInterpolate(a.cat)}</p><h3 class="mt-2 font-bold">${ssrInterpolate(a.title)}</h3><span class="mt-4 inline-block text-sm font-semibold text-brand">Read More \u2192</span></div></article>`);
      });
      _push(`</div></div></section>`);
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

export { _sfc_main as default };
//# sourceMappingURL=index-BSw3J2kW.mjs.map
