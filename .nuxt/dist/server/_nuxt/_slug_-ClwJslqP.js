import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-GS68twfD.js";
import { _ as _sfc_main$2 } from "./AppImage-C2ZouWCe.js";
import { _ as __nuxt_component_3 } from "./CtaBand-CXelDDpu.js";
import { s as services, c as contact } from "./site-DWXvFva0.js";
import { defineComponent, resolveDirective, unref, withCtx, createTextVNode, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useRoute, c as createError } from "../server.mjs";
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
    const s = services.find((x) => x.slug === route.params.slug);
    if (!s) throw createError({ statusCode: 404, statusMessage: "Service not found", fatal: true });
    useHead({ title: `${s.name} | T Triangle Limited` });
    services.filter((x) => x.slug !== s.slug).slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppImage = _sfc_main$2;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      if (unref(s)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_PageHero, {
          eyebrow: "Our Services",
          title: unref(s).headline
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/contact?service=${unref(s).slug}`,
                class: "btn btn-red mt-8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Discuss This Solution`);
                  } else {
                    return [
                      createTextVNode("Discuss This Solution")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: `/contact?service=${unref(s).slug}`,
                  class: "btn btn-red mt-8"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Discuss This Solution")
                  ]),
                  _: 1
                }, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="section"><div class="container-x grid gap-12 lg:grid-cols-[1.2fr_.8fr]"><div><h2${ssrRenderAttrs(mergeProps({ class: "text-4xl" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>${ssrInterpolate(unref(s).name)}</h2><p${ssrRenderAttrs(mergeProps({ class: "mt-4 whitespace-pre-line text-slate-600" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>${ssrInterpolate(unref(s).intro)}</p>`);
        if (unref(s).pumpRange) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Our Centrifugal Pump Range</h3><div class="mt-5 space-y-4"><!--[-->`);
          ssrRenderList(unref(s).pumpRange, (pump) => {
            _push(`<div class="border-l-2 border-brand-red pl-4"><h4 class="font-bold">${ssrInterpolate(pump.title)}</h4><p class="mt-1 text-sm text-slate-600">${ssrInterpolate(pump.text)}</p></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).jointSelection) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Why joint specific selection matters</h3><p class="mt-3 text-slate-600">${ssrInterpolate(unref(s).jointSelection)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).flangeCondition) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Why flange condition matters</h3><p class="mt-3 text-slate-600">${ssrInterpolate(unref(s).flangeCondition)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).touchpointAccess) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">What is touchpoint access creation?</h3><p class="mt-3 text-slate-600">${ssrInterpolate(unref(s).touchpointAccess)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).touchpointBenefits) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Why operators choose this approach</h3><ul class="mt-4 space-y-3"><!--[-->`);
          ssrRenderList(unref(s).touchpointBenefits, (benefit, i) => {
            _push(`<li${ssrRenderAttrs(mergeProps({
              key: benefit,
              class: "flex gap-3"
            }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 60)))}><span class="mt-1 text-brand-red">▲</span><span>${ssrInterpolate(benefit)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).isolationCases) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">When is a specialist isolation solution needed?</h3><ul class="mt-4 space-y-3"><!--[-->`);
          ssrRenderList(unref(s).isolationCases, (isolationCase, i) => {
            _push(`<li${ssrRenderAttrs(mergeProps({
              key: isolationCase,
              class: "flex gap-3"
            }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 60)))}><span class="mt-1 text-brand-red">▲</span><span>${ssrInterpolate(isolationCase)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).isolationTechnologies) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Our safe isolation technologies</h3><div class="mt-5 space-y-5"><!--[-->`);
          ssrRenderList(unref(s).isolationTechnologies, (technology) => {
            _push(`<div class="border-l-2 border-brand-red pl-4"><h4 class="font-bold">${ssrInterpolate(technology.title)}</h4><p class="mt-2 text-sm text-slate-600">${ssrInterpolate(technology.text)}</p></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).testRequirements) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">When is pressure testing required?</h3><ul class="mt-4 space-y-3"><!--[-->`);
          ssrRenderList(unref(s).testRequirements, (requirement, i) => {
            _push(`<li${ssrRenderAttrs(mergeProps({
              key: requirement,
              class: "flex gap-3"
            }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 60)))}><span class="mt-1 text-brand-red">▲</span><span>${ssrInterpolate(requirement)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3${ssrRenderAttrs(mergeProps({ class: "mt-10 text-2xl" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Scope of support</h3><ul class="mt-4 space-y-3"><!--[-->`);
        ssrRenderList(unref(s).scope, (x, i) => {
          _push(`<li${ssrRenderAttrs(mergeProps({
            key: x,
            class: "flex gap-3"
          }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 60)))}><span class="mt-1 text-brand-red">▲</span><span>${ssrInterpolate(x)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
        if (unref(s).howWeWork) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">How we work</h3><p class="mt-3 whitespace-pre-line text-slate-600">${ssrInterpolate(unref(s).howWeWork)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 bg-brand-mist p-6" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="font-bold">What to include in your enquiry</h3>`);
        if (!unref(s).enquiryDetails) {
          _push(`<p class="mt-2 text-sm text-slate-600">${ssrInterpolate(unref(s).enquiry)}</p>`);
        } else {
          _push(`<ol class="mt-4 space-y-3 text-sm text-slate-600"><!--[-->`);
          ssrRenderList(unref(s).enquiryDetails, (detail, i) => {
            _push(`<li class="flex gap-3"><span class="font-bold text-brand">${ssrInterpolate(i + 1)}.</span><span>${ssrInterpolate(detail)}</span></li>`);
          });
          _push(`<!--]--></ol>`);
        }
        _push(`</div>`);
        if (unref(s).faqs) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Frequently asked questions</h3><div class="mt-5 space-y-5"><!--[-->`);
          ssrRenderList(unref(s).faqs, (faq) => {
            _push(`<div class="border-t border-slate-200 pt-5"><h4 class="font-bold">${ssrInterpolate(faq.question)}</h4><p class="mt-2 text-sm text-slate-600">${ssrInterpolate(faq.answer)}</p></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(s).slug === "compressed-air-solutions") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Request a quote</h3><p class="mt-3 text-slate-600"> Send your compressed air requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "valve-optimisation-solutions") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Request Valve Support</h3><p class="mt-3 text-slate-600"> Send your valve requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "fluid-transfer-solutions") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/contact?service=fluid-transfer-solutions",
            class: "btn btn-red"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Send Your Enquiry`);
              } else {
                return [
                  createTextVNode("Send Your Enquiry")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<p class="mt-5 text-slate-600"> Send your Fluid Transfer Solutions requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "bolting-torquing-solutions") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Request a Quote</h3><p class="mt-3 text-slate-600"> Send your Bolting and Torquing Solutions requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "flange-management-services") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/contact?service=flange-management-services",
            class: "btn btn-red"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Send an enquiry`);
              } else {
                return [
                  createTextVNode("Send an enquiry")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<h3 class="mt-8 text-2xl">Request a quotation</h3><p class="mt-3 text-slate-600"> Send your Flange Management Services requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "pressure-test-solutions") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Request a pressure test quotation</h3><p class="mt-3 text-slate-600"> Send your Pressure Test Solutions requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "touchpoint-engineering-access-creation") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
          if (unref(s).touchpointApplications) {
            _push(`<div class="mb-8"><h3 class="text-2xl">Where it applies</h3><p class="mt-3 text-slate-600">${ssrInterpolate(unref(s).touchpointApplications)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="text-slate-600"> All work is carried out within the approved scope, method statement and permit requirements of each project. </p><h3 class="mt-8 text-2xl">Request touchpoint support</h3><p class="mt-3 text-slate-600"> Send your Touchpoint Engineering and Access Creation requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else if (unref(s).slug === "safe-isolation-solutions") {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="text-2xl">Request safe isolation support</h3><p class="mt-3 text-slate-600"> Send your Safe Isolation Solutions requirement to <a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a> or call <a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="font-semibold text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a>. Our team will review it and respond with a suitable offer. </p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-5">`);
        _push(ssrRenderComponent(_component_AppImage, mergeProps({
          src: unref(s).detailImages[0],
          alt: unref(s).name,
          class: "aspect-[4/3]",
          hint: "Add first service image in utils/site.ts"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
        _push(ssrRenderComponent(_component_AppImage, mergeProps({
          src: unref(s).detailImages[1],
          alt: `${unref(s).name} supporting image`,
          class: "aspect-[4/3]",
          hint: "Add second service image in utils/site.ts"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)), null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-ClwJslqP.js.map
