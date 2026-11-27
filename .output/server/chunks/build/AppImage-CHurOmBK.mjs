import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppImage",
  __ssrInlineRender: true,
  props: {
    src: {},
    alt: {},
    hint: {}
  },
  setup(__props) {
    const props = __props;
    const imageFailed = ref(false);
    watch(() => props.src, () => {
      imageFailed.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative overflow-hidden bg-brand-dark" }, _attrs))}>`);
      if (__props.src && !unref(imageFailed)) {
        _push(`<img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.alt || "")} loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-700 group-hover:scale-105">`);
      } else {
        _push(`<div class="placeholder-img grid h-full w-full place-items-center p-4 text-center text-xs text-white/70" role="img"${ssrRenderAttr("aria-label", __props.alt || __props.hint)}>${ssrInterpolate(__props.hint || __props.alt || "Image unavailable")}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppImage-CHurOmBK.mjs.map
