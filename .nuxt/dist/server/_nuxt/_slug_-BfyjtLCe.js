import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-GS68twfD.js";
import { _ as __nuxt_component_3 } from "./CtaBand-CXelDDpu.js";
import { defineComponent, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { u as useRoute, c as createError } from "../server.mjs";
import { p as partners } from "./site-DWXvFva0.js";
import { u as useHead } from "./v3-w9sd3xiW.js";
import "./HeroArt-Chj0iCKI.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const partner = partners.find((p) => p.slug === route.params.slug);
    if (!partner) throw createError({ statusCode: 404, statusMessage: "OEM partner not found", fatal: true });
    const index = partners.findIndex((p) => p.slug === partner.slug);
    useHead({
      title: `${partner.name} | Specialised OEM Services | T Triangle Limited`,
      meta: [{ name: "description", content: partner.short }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      if (unref(partner)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_PageHero, {
          eyebrow: "Specialised OEM Services",
          title: unref(partner).name,
          text: unref(partner).short
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/contact?service=specialised-oem&technology=${encodeURIComponent(unref(partner).name)}`,
                class: "btn btn-red mt-8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Enquire About ${ssrInterpolate(unref(partner).name)}`);
                  } else {
                    return [
                      createTextVNode(" Enquire About " + toDisplayString(unref(partner).name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: `/contact?service=specialised-oem&technology=${encodeURIComponent(unref(partner).name)}`,
                  class: "btn btn-red mt-8"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Enquire About " + toDisplayString(unref(partner).name), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="section"><div class="container-x grid items-center gap-12 lg:grid-cols-2"><div${ssrRenderAttrs(mergeProps({
          class: [unref(index) % 2 ? "lg:order-2" : "", "grid min-h-72 place-items-center bg-white p-8 shadow-lg"]
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><img${ssrRenderAttr("src", unref(partner).image)}${ssrRenderAttr("alt", `${unref(partner).name} logo`)} class="max-h-64 max-w-full object-contain"></div><div${ssrRenderAttrs(mergeProps({
          class: unref(index) % 2 ? "lg:order-1" : ""
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, 120)))}><p class="eyebrow">Technology partner</p><h2 class="text-3xl !text-brand sm:text-4xl">${ssrInterpolate(unref(partner).name)}</h2><p class="mt-5 leading-7 text-slate-600">${ssrInterpolate(unref(partner).detail)}</p><h3 class="mt-8 text-xl">Discuss your application</h3><p class="mt-3 leading-7 text-slate-600"> Share your application, operating conditions and the outcome you need. We will help clarify the requirement and coordinate the next discussion around the partner&#39;s applicable products and confirmed scope. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/contact?service=specialised-oem&technology=${encodeURIComponent(unref(partner).name)}`,
          class: "btn btn-outline mt-7"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Send an enquiry `);
            } else {
              return [
                createTextVNode(" Send an enquiry ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/oem/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BfyjtLCe.js.map
