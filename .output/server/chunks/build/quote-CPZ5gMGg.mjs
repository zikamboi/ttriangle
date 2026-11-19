import { _ as _sfc_main$1 } from './EnquiryForm-3udCL0Y9.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './v3-w9sd3xiW.mjs';
import './site-QdmtXxx9.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "quote",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Request a Quote | T Triangle Limited", meta: [{ name: "robots", content: "noindex" }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EnquiryForm = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-brand-dark to-brand py-14 text-white sm:py-20" }, _attrs))}><div class="container-x grid items-start gap-10 lg:grid-cols-2"><div><p class="eyebrow !text-red-300">Request a Quote</p><h1 class="text-4xl !text-white sm:text-6xl">Equipment and technical support for your operation</h1><p class="mt-5 text-white/75">Tell us what you need to source, inspect, maintain, test or improve. Our team will review your enquiry and respond.</p><ul class="mt-6 space-y-2 text-white/85"><li>\u25B2 Eight core service areas</li><li>\u25B2 Specialised OEM and technology partners</li><li>\u25B2 Application-led technical support</li></ul></div><div class="bg-white p-6 text-slate-700 shadow-2xl sm:p-8">`);
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

export { _sfc_main as default };
//# sourceMappingURL=quote-CPZ5gMGg.mjs.map
