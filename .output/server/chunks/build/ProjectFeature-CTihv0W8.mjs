import { defineComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectFeature",
  __ssrInlineRender: true,
  props: {
    project: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group grid items-center lg:grid-cols-12" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_reveal, __props.index % 3 * 90)))}><div class="${ssrRenderClass([__props.index % 2 ? "lg:col-start-6 lg:col-span-7" : "lg:col-start-1 lg:col-span-7", "relative overflow-hidden bg-brand-dark lg:row-start-1"])}"><img${ssrRenderAttr("src", __props.project.image)}${ssrRenderAttr("alt", __props.project.imageAlt)} loading="lazy" class="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent"></div><span class="absolute bottom-3 left-5 font-display text-7xl font-bold leading-none text-white/80 sm:bottom-5 sm:left-7 sm:text-8xl">${ssrInterpolate(String(__props.index + 1).padStart(2, "0"))}</span></div><div class="${ssrRenderClass([__props.index % 2 ? "lg:col-start-1 lg:col-span-6 lg:-mr-16" : "lg:col-start-7 lg:col-span-6 lg:-ml-16", "relative z-10 -mt-8 bg-brand-mist p-7 shadow-xl sm:p-10 lg:row-start-1 lg:mt-0 lg:p-12"])}"><p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">${ssrInterpolate(__props.project.category)}</p><h3 class="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-brand sm:text-4xl">${ssrInterpolate(__props.project.title)}</h3><p class="mt-5 max-w-xl leading-7 text-slate-600">${ssrInterpolate(__props.project.summary)}</p></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectFeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProjectFeature-CTihv0W8.mjs.map
