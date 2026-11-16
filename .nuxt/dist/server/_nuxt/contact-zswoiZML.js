import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as _sfc_main$2 } from "./EnquiryForm-CRFN7Nri.js";
import { c as contact } from "./site-DeS5fg6X.js";
import { defineComponent, resolveDirective, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Contact Us | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_EnquiryForm = _sfc_main$2;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Contact Us",
        title: "Talk to our team",
        text: "Tell us what you need to source, inspect, maintain, test or improve. We will review your enquiry and direct it to the right contact."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><div><h3 class="font-bold">Nigeria</h3><p class="mt-2 text-slate-600">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.address)}<br>${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</p></div><div><h3 class="font-bold">Namibia</h3><p class="mt-2 text-slate-600">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).na.address)}<br>${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).na.phone)}</p></div><div><h3 class="font-bold">Email</h3><a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="mt-2 inline-block text-brand-red">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a></div></div><div${ssrRenderAttrs(mergeProps({ class: "border border-slate-200 p-6 shadow-sm sm:p-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 120)))}><h2 class="mb-6 text-4xl">Request a Quote or Service</h2>`);
      _push(ssrRenderComponent(_component_EnquiryForm, null, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-zswoiZML.js.map
