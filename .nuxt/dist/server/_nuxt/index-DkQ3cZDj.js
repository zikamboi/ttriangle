import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as _sfc_main$2 } from "./AppImage-C2ZouWCe.js";
import { _ as __nuxt_component_3 } from "./CtaBand-VI3BXDZY.js";
import { i as insights, a as insightCategories } from "./site-CDf7AZN1.js";
import { defineComponent, ref, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "./v3-w9sd3xiW.js";
import "./HeroArt-Chj0iCKI.js";
import "../server.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "./nuxt-link-GS68twfD.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
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
        _push(`<div class="p-6"><p class="text-xs font-semibold uppercase text-brand-red">${ssrInterpolate(a.cat)}</p><h3 class="mt-2 font-bold">${ssrInterpolate(a.title)}</h3><span class="mt-4 inline-block text-sm font-semibold text-brand">Read More →</span></div></article>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DkQ3cZDj.js.map
