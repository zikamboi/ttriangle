import { _ as _sfc_main$3 } from "./PageHero-CkQcfTbS.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-GS68twfD.js";
import { _ as _sfc_main$2 } from "./AppImage-C2ZouWCe.js";
import { defineComponent, resolveDirective, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, unref } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_3 } from "./CtaBand-B0EuHt1r.js";
import { s as services } from "./site-Cu4vU3Zh.js";
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
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    s: {},
    i: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppImage = _sfc_main$2;
      const _directive_reveal = resolveDirective("reveal");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/services/${__props.s.slug}`,
        class: "group relative flex flex-col overflow-hidden border border-slate-200 bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand/15"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_reveal, __props.i % 4 * 90)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppImage, {
              class: "h-44",
              hint: `Image: ${__props.s.name}`
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-1 flex-col p-6"${_scopeId}><span class="font-display text-lg font-bold text-brand-red"${_scopeId}>0${ssrInterpolate(__props.i + 1)}</span><h3 class="mt-1 text-lg leading-snug"${_scopeId}>${ssrInterpolate(__props.s.name)}</h3><p class="mt-2 flex-1 text-sm text-slate-600"${_scopeId}>${ssrInterpolate(__props.s.short)}</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"${_scopeId}>Explore Service <span class="transition group-hover:translate-x-1.5"${_scopeId}>→</span></span></div><span class="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full"${_scopeId}></span>`);
          } else {
            return [
              createVNode(_component_AppImage, {
                class: "h-44",
                hint: `Image: ${__props.s.name}`
              }, null, 8, ["hint"]),
              createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
                createVNode("span", { class: "font-display text-lg font-bold text-brand-red" }, "0" + toDisplayString(__props.i + 1), 1),
                createVNode("h3", { class: "mt-1 text-lg leading-snug" }, toDisplayString(__props.s.name), 1),
                createVNode("p", { class: "mt-2 flex-1 text-sm text-slate-600" }, toDisplayString(__props.s.short), 1),
                createVNode("span", { class: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand" }, [
                  createTextVNode("Explore Service "),
                  createVNode("span", { class: "transition group-hover:translate-x-1.5" }, "→")
                ])
              ]),
              createVNode("span", { class: "absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Our Services | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$3;
      const _component_ServiceCard = _sfc_main$1;
      const _component_CtaBand = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our Services",
        title: "Eight core service areas for industrial operations",
        text: "Each service has its own page explaining scope, applications and how to enquire."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s, i) => {
        _push(ssrRenderComponent(_component_ServiceCard, {
          key: s.slug,
          s,
          i
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-De6jOjFz.js.map
