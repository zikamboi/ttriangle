import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-GS68twfD.js";
import { _ as __nuxt_component_3 } from "./CtaBand-BoCvMfmN.js";
import { p as partners } from "./site-TcafVfyZ.js";
import { defineComponent, resolveDirective, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "partners",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Our OEM & Technology Partners | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our OEM & Technology Partners",
        title: "Technology partners for specialised solutions.",
        text: "Explore the OEMs and technology partners we work with to connect clients with equipment and specialised solutions suited to their applications."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList("partners" in _ctx ? _ctx.partners : unref(partners), (p, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          key: p.slug,
          to: `/oem/${p.slug}`,
          class: "group flex flex-col border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 70)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid h-40 place-items-center p-5"${_scopeId}><img${ssrRenderAttr("src", p.image)}${ssrRenderAttr("alt", `${p.name} logo`)} loading="lazy" class="max-h-full max-w-full object-contain"${_scopeId}></div><div class="flex flex-1 flex-col border-t border-slate-200 p-6"${_scopeId}><h2 class="text-xl text-brand"${_scopeId}>${ssrInterpolate(p.name)}</h2><p class="mt-2 flex-1 text-sm text-slate-600"${_scopeId}>${ssrInterpolate(p.short)}</p><span class="mt-4 text-sm font-semibold text-brand-red"${_scopeId}>Learn more</span></div>`);
            } else {
              return [
                createVNode("div", { class: "grid h-40 place-items-center p-5" }, [
                  createVNode("img", {
                    src: p.image,
                    alt: `${p.name} logo`,
                    loading: "lazy",
                    class: "max-h-full max-w-full object-contain"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "flex flex-1 flex-col border-t border-slate-200 p-6" }, [
                  createVNode("h2", { class: "text-xl text-brand" }, toDisplayString(p.name), 1),
                  createVNode("p", { class: "mt-2 flex-1 text-sm text-slate-600" }, toDisplayString(p.short), 1),
                  createVNode("span", { class: "mt-4 text-sm font-semibold text-brand-red" }, "Learn more")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=partners-Duf8D3FD.js.map
