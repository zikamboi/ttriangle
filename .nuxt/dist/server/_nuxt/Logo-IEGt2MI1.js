import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = publicAssetsURL("/images/TTlogo.jpeg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center gap-2.5" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="T Triangle Limited Logo" class="h-16 w-14 object-contain"><span class="font-display leading-none"><span class="block text-lg font-extrabold tracking-tight"> T TRIANGLE </span><span class="block text-[9px] font-semibold uppercase tracking-[.35em] opacity-70"> Limited </span></span></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Logo-IEGt2MI1.js.map
