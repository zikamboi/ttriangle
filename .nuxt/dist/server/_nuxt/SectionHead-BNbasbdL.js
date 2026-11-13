import { defineComponent, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionHead",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    text: {},
    center: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mb-14 max-w-3xl", __props.center && "mx-auto text-center"]
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      if (__props.eyebrow) {
        _push(`<p class="eyebrow">${ssrInterpolate(__props.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-4xl sm:text-6xl">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.text) {
        _push(`<p class="mt-5 text-lg text-slate-600">${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SectionHead-BNbasbdL.js.map
