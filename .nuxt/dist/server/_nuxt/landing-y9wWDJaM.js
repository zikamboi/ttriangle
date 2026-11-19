import { _ as __nuxt_component_0 } from "./Logo-IEGt2MI1.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-GS68twfD.js";
import { c as contact } from "./site-QdmtXxx9.js";
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}><div class="border-b"><div class="container-x flex h-16 items-center justify-between">`);
  _push(ssrRenderComponent(_component_Logo, { class: "text-brand-dark" }, null, _parent));
  _push(`<a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="text-sm font-semibold text-brand">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<p class="py-8 text-center text-xs text-slate-500">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} T Triangle Limited · `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  landing as default
};
//# sourceMappingURL=landing-y9wWDJaM.js.map
