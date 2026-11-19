import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as _sfc_main$2 } from "./AppImage-C2ZouWCe.js";
import { _ as __nuxt_component_5 } from "./CtaBand-6_4sxov_.js";
import { defineComponent, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
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
import "./site-QdmtXxx9.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Projects | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppImage = _sfc_main$2;
      const _component_CtaBand = __nuxt_component_5;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Projects",
        title: "Genuine project experience",
        text: "Approved project profiles showing scope, approach and verified outcomes."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(6, (n) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          key: n,
          class: "overflow-hidden border border-slate-200 transition hover:shadow-xl"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, n % 3 * 90)))}>`);
        _push(ssrRenderComponent(_component_AppImage, {
          class: "h-52",
          hint: "Approved project photo"
        }, null, _parent));
        _push(`<div class="p-6"><p class="text-xs font-semibold uppercase text-brand-red">Industry / application</p><h3 class="mt-2 font-bold">Project title (pending approval)</h3><p class="mt-2 text-sm text-slate-600">Challenge, T Triangle&#39;s scope, approach and verified outcome.</p></div></article>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-DSBgBxu2.js.map
