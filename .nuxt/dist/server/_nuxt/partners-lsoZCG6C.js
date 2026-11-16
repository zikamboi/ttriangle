import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as __nuxt_component_5 } from "./CtaBand-D-F5GDeV.js";
import { p as partners } from "./site-DeS5fg6X.js";
import { defineComponent, resolveDirective, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "partners",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Our OEM & Technology Partners | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_CtaBand = __nuxt_component_5;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our OEM & Technology Partners",
        title: "Technology partners for specialised solutions.",
        text: "Explore the OEMs and technology partners we work with to connect clients with equipment and specialised solutions suited to their applications."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x"><div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"><!--[-->`);
      ssrRenderList("partners" in _ctx ? _ctx.partners : unref(partners), (p, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.name,
          class: "grid h-36 place-items-center border border-slate-200 p-4"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 70)))}><img${ssrRenderAttr("src", p.image)}${ssrRenderAttr("alt", p.name)} loading="lazy" class="max-h-full max-w-full object-contain"></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=partners-lsoZCG6C.js.map
