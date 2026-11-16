import { _ as __nuxt_component_0 } from './HeroArt-Chj0iCKI.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroArt = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative overflow-hidden bg-brand-dark pb-28 pt-44 text-white",
        style: { "clip-path": "polygon(0 0,100% 0,100% 90%,0 100%)" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HeroArt, null, null, _parent));
      _push(`<div class="container-x relative">`);
      if (__props.eyebrow) {
        _push(`<p class="eyebrow animate-fade-up !text-white">${ssrInterpolate(__props.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="max-w-4xl animate-fade-up text-4xl !text-white sm:text-6xl" style="${ssrRenderStyle({ "animation-delay": ".1s" })}">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.text) {
        _push(`<p class="mt-6 max-w-2xl animate-fade-up text-lg text-white/75" style="${ssrRenderStyle({ "animation-delay": ".2s" })}">${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageHero-CkQcfTbS.mjs.map
