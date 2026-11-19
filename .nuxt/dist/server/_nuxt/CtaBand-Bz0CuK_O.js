import { _ as __nuxt_component_0 } from "./HeroArt-Chj0iCKI.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-GS68twfD.js";
import { c as contact } from "./site-C7NdVPzo.js";
import { resolveDirective, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroArt = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-brand py-24 text-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeroArt, null, null, _parent));
  _push(`<div class="container-x relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal))}><p class="eyebrow !text-white">Start an enquiry</p><h2 class="text-4xl !text-white sm:text-6xl">Have an equipment, maintenance or project requirement?</h2><p class="mt-5 max-w-xl text-white/80">Tell us what you need to source, inspect, maintain, test or improve. Share the application, site location, specifications and timeline so our team can review your enquiry.</p></div><div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-4 lg:justify-end" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 150)))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "btn btn-red"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Send an Enquiry →`);
      } else {
        return [
          createTextVNode("Send an Enquiry →")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="btn btn-ghost">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaBand.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_5 as _
};
//# sourceMappingURL=CtaBand-Bz0CuK_O.js.map
