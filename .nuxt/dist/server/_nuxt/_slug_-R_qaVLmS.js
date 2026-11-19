import { _ as __nuxt_component_0 } from "./HeroArt-Chj0iCKI.js";
import { _ as _sfc_main$1 } from "./EnquiryForm-3udCL0Y9.js";
import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import { s as services } from "./site-QdmtXxx9.js";
import { u as useRoute, c as createError } from "../server.mjs";
import { u as useHead } from "./v3-w9sd3xiW.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const s = services.find((x) => x.slug === useRoute().params.slug);
    if (!s) throw createError({ statusCode: 404, statusMessage: "Not found", fatal: true });
    useHead({ title: `${s.name} | T Triangle Limited`, meta: [{ name: "robots", content: "noindex" }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroArt = __nuxt_component_0;
      const _component_EnquiryForm = _sfc_main$1;
      if (unref(s)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-brand-dark py-14 text-white sm:py-20" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_HeroArt, null, null, _parent));
        _push(`<div class="container-x relative grid items-start gap-10 lg:grid-cols-2"><div><p class="eyebrow !text-white">${ssrInterpolate(unref(s).name)}</p><h1 class="text-4xl !text-white sm:text-6xl">${ssrInterpolate(unref(s).headline)}</h1><p class="mt-5 text-white/75">${ssrInterpolate(unref(s).intro)}</p><ul class="mt-6 space-y-2 text-white/85"><!--[-->`);
        ssrRenderList(unref(s).scope.slice(0, 4), (x) => {
          _push(`<li>▲ ${ssrInterpolate(x)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="bg-white p-6 text-slate-700 shadow-2xl sm:p-8">`);
        _push(ssrRenderComponent(_component_EnquiryForm, {
          preset: unref(s).slug
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lp/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-R_qaVLmS.js.map
