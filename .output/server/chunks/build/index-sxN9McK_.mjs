import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-GS68twfD.mjs';
import { _ as __nuxt_component_3 } from './CtaBand-VI3BXDZY.mjs';
import { p as partners } from './site-CDf7AZN1.mjs';
import { defineComponent, resolveDirective, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Specialised OEM Services | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Specialised OEM Services",
        title: "Specialised technologies. Application-led technical support.",
        text: "Some industrial challenges need more than a general equipment solution. We work with OEMs and technology partners to connect clients with specialised products suited to their operating requirements."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList("partners" in _ctx ? _ctx.partners : unref(partners), (p, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          key: p.slug,
          to: `/oem/${p.slug}`,
          class: "group flex flex-col overflow-hidden border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i % 3 * 90)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid h-44 place-items-center bg-white p-6"${_scopeId}><img${ssrRenderAttr("src", p.image)}${ssrRenderAttr("alt", `${p.name} logo`)} loading="lazy" class="max-h-full max-w-full object-contain"${_scopeId}></div><div class="flex flex-1 flex-col border-t border-slate-200 p-7"${_scopeId}><h2 class="text-2xl text-brand"${_scopeId}>${ssrInterpolate(p.name)}</h2><p class="mt-3 flex-1 text-sm text-slate-600"${_scopeId}>${ssrInterpolate(p.short)}</p><span class="mt-5 text-sm font-semibold text-brand-red"${_scopeId}>Explore ${ssrInterpolate(p.name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "grid h-44 place-items-center bg-white p-6" }, [
                  createVNode("img", {
                    src: p.image,
                    alt: `${p.name} logo`,
                    loading: "lazy",
                    class: "max-h-full max-w-full object-contain"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "flex flex-1 flex-col border-t border-slate-200 p-7" }, [
                  createVNode("h2", { class: "text-2xl text-brand" }, toDisplayString(p.name), 1),
                  createVNode("p", { class: "mt-3 flex-1 text-sm text-slate-600" }, toDisplayString(p.short), 1),
                  createVNode("span", { class: "mt-5 text-sm font-semibold text-brand-red" }, "Explore " + toDisplayString(p.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/oem/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-sxN9McK_.mjs.map
