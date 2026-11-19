import { _ as _sfc_main$1 } from "./EnquiryForm-7BYOr5UE.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-w9sd3xiW.js";
import "./site-Cu4vU3Zh.js";
import "../server.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "quote",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Request a Quote | T Triangle Limited", meta: [{ name: "robots", content: "noindex" }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EnquiryForm = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-brand-dark to-brand py-14 text-white sm:py-20" }, _attrs))}><div class="container-x grid items-start gap-10 lg:grid-cols-2"><div><p class="eyebrow !text-red-300">Request a Quote</p><h1 class="text-4xl !text-white sm:text-6xl">Equipment and technical support for your operation</h1><p class="mt-5 text-white/75">Tell us what you need to source, inspect, maintain, test or improve. Our team will review your enquiry and respond.</p><ul class="mt-6 space-y-2 text-white/85"><li>▲ Eight core service areas</li><li>▲ Specialised OEM and technology partners</li><li>▲ Application-led technical support</li></ul></div><div class="bg-white p-6 text-slate-700 shadow-2xl sm:p-8">`);
      _push(ssrRenderComponent(_component_EnquiryForm, null, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lp/quote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=quote-Cj_-z0GX.js.map
