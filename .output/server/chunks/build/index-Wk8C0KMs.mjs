import { _ as _sfc_main$2 } from './PageHero-CkQcfTbS.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-GS68twfD.mjs';
import { _ as _sfc_main$3 } from './AppImage-CHurOmBK.mjs';
import { defineComponent, unref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_3 } from './CtaBand-BoCvMfmN.mjs';
import { s as services } from './site-TcafVfyZ.mjs';
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
      const _component_AppImage = _sfc_main$3;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/services/${__props.s.slug}`,
        class: "group relative flex min-w-0 flex-col overflow-hidden border border-slate-200 bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand/15"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppImage, {
              class: "aspect-[16/10] w-full",
              src: __props.s.image,
              alt: __props.s.name,
              hint: `Image: ${__props.s.name}`
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-1 flex-col p-4 sm:p-6"${_scopeId}><span class="font-display text-lg font-bold text-brand-red"${_scopeId}>0${ssrInterpolate(__props.i + 1)}</span><h3 class="mt-1 break-words text-base leading-snug sm:text-lg"${_scopeId}>${ssrInterpolate(__props.s.name)}</h3><p class="mt-2 flex-1 text-sm text-slate-600"${_scopeId}>${ssrInterpolate(__props.s.short)}</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"${_scopeId}>Explore Service <span class="transition group-hover:translate-x-1.5"${_scopeId}>\u2192</span></span></div><span class="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full"${_scopeId}></span>`);
          } else {
            return [
              createVNode(_component_AppImage, {
                class: "aspect-[16/10] w-full",
                src: __props.s.image,
                alt: __props.s.name,
                hint: `Image: ${__props.s.name}`
              }, null, 8, ["src", "alt", "hint"]),
              createVNode("div", { class: "flex flex-1 flex-col p-4 sm:p-6" }, [
                createVNode("span", { class: "font-display text-lg font-bold text-brand-red" }, "0" + toDisplayString(__props.i + 1), 1),
                createVNode("h3", { class: "mt-1 break-words text-base leading-snug sm:text-lg" }, toDisplayString(__props.s.name), 1),
                createVNode("p", { class: "mt-2 flex-1 text-sm text-slate-600" }, toDisplayString(__props.s.short), 1),
                createVNode("span", { class: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand" }, [
                  createTextVNode("Explore Service "),
                  createVNode("span", { class: "transition group-hover:translate-x-1.5" }, "\u2192")
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
      const _component_PageHero = _sfc_main$2;
      const _component_ServiceCard = _sfc_main$1;
      const _component_CtaBand = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our Services",
        title: "Nine core service areas for industrial operations",
        text: "Each service has its own page explaining scope, applications and how to enquire."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=index-Wk8C0KMs.mjs.map
