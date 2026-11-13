import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "pointer-events-none absolute inset-0 overflow-hidden",
    "aria-hidden": "true"
  }, _attrs))}><div class="blueprint absolute inset-0"></div><div class="absolute inset-x-0 top-0 h-32 animate-scan bg-gradient-to-b from-transparent via-white/10 to-transparent"></div><svg class="absolute -right-32 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 animate-float-slow" viewBox="0 0 200 180"><polygon points="100,8 192,170 8,170" fill="none" stroke="#ca3332" stroke-width="1.2" stroke-dasharray="700" class="animate-draw"></polygon><polygon points="100,48 162,160 38,160" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width=".8"></polygon><polygon points="100,88 132,150 68,150" fill="#ca3332" fill-opacity=".18"></polygon></svg><div class="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-brand/50 blur-3xl"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroArt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=HeroArt-Chj0iCKI.js.map
